var React = require('react');
var ReactDOM = require('react-dom');

var AddJob = React.createClass({
	addNew: function(event) {
		if (event.keyCode === 13) {
			var newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
			ReactDOM.findDOMNode(this.refs.newItem).value = '';
			this.props.addItem(newItem);
		}
	},
	render: function() {
		return (
			<div className="add-job">
				<input ref="newItem" onKeyDown={this.addNew} className="form-control" type="text" placeholder="New Job" />
			</div>
		);
	}
});

module.exports = AddJob;