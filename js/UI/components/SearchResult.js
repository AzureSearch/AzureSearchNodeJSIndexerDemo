var React = require('react');

var SearchResult = React.createClass({
	render: function(){
		return(
			<tr key={this.props.key}><td className="col-sm-1">{this.props.index}</td><td>{JSON.stringify(this.props.result)}</td></tr>   
			)
	}
});

module.exports = SearchResult;