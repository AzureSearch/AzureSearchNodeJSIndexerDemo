var config = require('../../config');
var payloads = {};

payloads.dataSourcePayload = { 
    "name" : config.dataSourceName,
    "description" : "USGS Dataset",
    "type" : config.dataSourceType,
    "credentials" : { "connectionString" : config.connectionString },
    "container" : { "name" : config.tableName }
};

payloads.indexerPayload = {
    "name" : config.indexerName,
    "description" : "USGS data indexer",
    "dataSourceName" : config.dataSourceName,
    "targetIndexName" : config.indexName,
    "parameters" : { "maxFailedItems" : config.maxFailedItems, "maxFailedItemsPerBatch" : config.maxFailedItemsPerBatch, "base64EncodeKeys": config.base64EncodeKeys }
};

payloads.indexPayload = 
{
    "name": config.indexName,
    "fields": [
        {
            "name": "FEATURE_ID",
            "type": "Edm.String",
            "searchable": false,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": true,
            "analyzer": null
        },
        {
            "name": "FEATURE_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FEATURE_CLASS",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "STATE_ALPHA",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "COUNTY_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "LOCATION",
            "type": "Edm.GeographyPoint",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "ELEV_IN_M",
            "type": "Edm.Int32",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "ELEV_IN_FT",
            "type": "Edm.Int32",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "MAP_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "DATE_CREATED",
            "type": "Edm.DateTimeOffset",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "DATE_EDITED",
            "type": "Edm.DateTimeOffset",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "DESCRIPTION",
            "type": "Edm.String",
            "searchable": true,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "HISTORY",
            "type": "Edm.String",
            "searchable": true,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": false,
            "analyzer": null
        }
    ],
    "scoringProfiles": [],
    "defaultScoringProfile": null,
    "corsOptions": 
    {
    	"allowedOrigins":["*"],
    	"maxAgeInSeconds":300
    },
    "suggesters": []
};

module.exports = payloads;
