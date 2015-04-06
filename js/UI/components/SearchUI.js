var React = require('react');
var SearchResults = require('./SearchResults');
var request = require('request');
var Q = require('q');

var SearchUI = React.createClass({
    getInitialState: function(){
        return {
            results: []
        }
    },
    search: function(){

        var url = this.props.url +
            "/indexes/" + 
            this.props.index +
            "/docs?search=" +
            encodeURIComponent(this.refs.searchText.getDOMNode().value) + 
            "&api-version=2015-02-28" +
            "&searchMode=all";

        var headers = {'api-key': this.props.apikey};

        var options = {
            url: url,
            headers: headers,
            withCredentials: false
        };
        
        request.get(options, this.processResults);
    },
    handleKeyDown: function(evt) {
        if (evt.keyCode == 13 ) {
            return this.search();
        }
    },
    processResults: function(error, response, body){
        var data = JSON.parse(body).value
        this.setState({results: data});
    },
    render: function() {
        var self = this;
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" ref="searchText" onKeyDown={this.handleKeyDown}/>  
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.search}>Search</button>
                        </span>
                    </div>
                    <SearchResults results={this.state.results}/>
                </div>
            </div>
            )
    }
});

module.exports = SearchUI;