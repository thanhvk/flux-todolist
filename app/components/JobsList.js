var React = require('react');

var JobsLists = React.createClass({
	render: function() {
		var itemsList = this.props.items.map(function(item, index) {
			return (
				<div key={index} className="job-item">
					<span className="btn-remove glyphicon glyphicon-trash" onClick={this.props.removeItem.bind(null, index)}></span>
					{item}
				</div>
			);
		}, this);

		return (
			<div>
				{itemsList}
			</div>
		);
	}
});

module.exports = JobsLists;