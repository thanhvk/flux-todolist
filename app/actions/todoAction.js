var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {
	addItem: function(newItem) {
		appDispatcher.handleAction({
			actionType: appConstants.ADD_ITEM,
			data: newItem
		});
	},
	removeItem: function(index) {
		appDispatcher.handleAction({
			actionType: appConstants.REMOVE_ITEM,
			data: index
		});
	}
}

module.exports = todoActions;