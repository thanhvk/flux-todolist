var React = require('react');
var ReactDOM = require('react-dom');
var JobsContainer = require('./components/JobsContainer');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<JobsContainer />
			</div>
		);		
	}
});

ReactDOM.render(<App />, document.getElementById('app'));