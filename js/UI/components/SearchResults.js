var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({
	render: function(){
		return (
			<div className="table-responsive">
				<table className="table table-striped">
					<tbody>
							<tr>
								<th className="col-sm-1">#</th>
								<th>Name</th>
								<th>Class</th>
								<th>State</th>
								<th>Location</th>
								<th>Elevation</th>
								<th>Map Name</th>
								<th>Description</th>
								<th>History</th>
							</tr>
					{this.props.results.map(function(result, index){
						return <SearchResult result={result} key={index} index={index + 1}/>
					})}
					</tbody>
				</table>
			</div>
			)
	}
});

module.exports = SearchResults;