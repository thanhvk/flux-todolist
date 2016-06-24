var React = require('react');
var AddJob = require('./AddJob');
var JobsList = require('./JobsList');
var todoAction = require('../actions/todoAction');
var todoStore = require('../stores/todoStore');

var JobsContainer = React.createClass({
	getInitialState: function() {
		return {
			jobs: todoStore.getList()
		};
	},
	componentDidMount: function() {
		todoStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		todoStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState({
			jobs: todoStore.getList()
		});
	},
	addJob: function(newItem) {
		todoAction.addItem(newItem);
	},
	removeJob: function(index) {
		todoAction.removeItem(index);
	},
	render: function() {
		return (
			<div className="jobs-container">
				<h1 className="text-center">Todo List</h1>
				<AddJob addItem={this.addJob} />
				<JobsList items={this.state.jobs} removeItem={this.removeJob} />
			</div>
		);
	}
});

module.exports = JobsContainer;