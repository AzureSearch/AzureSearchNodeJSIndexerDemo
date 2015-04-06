var React = require('react');

var SearchResult = React.createClass({

	render: function(){
		return(
			<tr>
				<td className="col-sm-1">{this.props.index}</td>
				<td>{this.props.result.FEATURE_NAME}</td>
				<td>{this.props.result.FEATURE_CLASS}</td>
				<td>{this.props.result.STATE_ALPHA}</td>
				<td>{JSON.stringify(this.props.result.LOCATION)}</td>
				<td>{this.props.result.ELEV_IN_FT}ft / {this.props.result.ELEV_IN_M}m</td>
				<td>{this.props.result.MAP_NAME}</td>
				<td>{this.props.result.DESCRIPTION}</td>
				<td>{this.props.result.HISTORY}</td>
			</tr>   
			)
	}
});

module.exports = SearchResult;