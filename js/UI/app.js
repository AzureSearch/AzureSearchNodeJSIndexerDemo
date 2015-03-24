var React = require('react');
var SearchUI = require('./components/SearchUI');
var Config = require('../../config');

React.render(
	<SearchUI url={Config.serviceURL} apikey={Config.queryKey} index={Config.indexName}/>,
	 document.body
); 