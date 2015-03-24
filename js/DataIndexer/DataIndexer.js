var request = require('request');
var config = require('../../config');
var Payloads = require('./Payloads');
var Q = require('q');

var deleteIndex = function(){
    var deferred = Q.defer();
    var url = config.serviceURL +
        "/indexes/" + 
        config.indexName +
        "?api-version=" + config.apiVersion;

    var headers = {
    	'api-key': config.apiKey,
    	'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };
        
    request.del(options, function(error, response, body){
    	console.info("delete index result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

var deleteDataSource = function(){
    // cleanup after previous runs
    var deferred = Q.defer();
    var url = config.serviceURL +
        "/datasources/" + 
        config.dataSourceName +
        "?api-version=" + config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };
        
    request.del(options, function(error, response, body){
    	console.info("delete datasource result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;

};

var deleteIndexer = function(){
    // cleanup after previous runs
    var deferred = Q.defer();
    var url = config.serviceURL +
        "/indexers/" + 
        config.indexerName +
        "?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };
        
    request.del(options, function(error, response, body){
    	console.info("delete indexer result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;

};

var createIndex = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexes/" + 
        config.indexName +
        "?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        body: JSON.stringify(Payloads.indexPayload),
        withCredentials: false
    };
        
    request.put(options, function(error, response, body){
    	console.info("create index result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
}

var createDataSource = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/datasources/" + 
        config.dataSourceName +
        "?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        body: JSON.stringify(Payloads.dataSourcePayload),
        withCredentials: false
    };
        
    request.put(options, function(error, response, body){
    	console.info("create datasource result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

var createIndexer = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexers/" + 
        config.indexerName +
        "?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        body: JSON.stringify(Payloads.indexerPayload),
        withCredentials: false
    };
        
    request.put(options, function(error, response, body){
    	console.info("create indexer result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

var runIndexer = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexers/" + 
        config.indexerName +
        "/run?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };
        
    request.post(options, function(error, response, body){
    	console.info("run indexer result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

var indexerStatus = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexers/" + 
        config.indexerName +
        "/status?api-version=" + 
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };
        
    
    var indexerStatus = setInterval(function(){
        request.get(options, function(error, response, body){
            var result = JSON.parse(body);

            var processed = result.lastResult ? result.lastResult.itemsProcessed: 0;
            var status = result.lastResult ? result.lastResult.status: "inProgress";

            console.info(status + ", items processed: " + processed);
			
            if(status !== "inProgress"){
                clearInterval(indexerStatus);
                deferred.resolve(indexerStatus);
            }
        });
    }, 1000);
    return deferred.promise;
}

deleteIndexer()
    .then(deleteDataSource)
    .then(deleteIndex)
    .then(createIndex)
    .then(createDataSource)
    .then(createIndexer)
    .then(runIndexer)
    .then(indexerStatus);
