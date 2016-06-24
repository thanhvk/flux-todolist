var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var store = {
	list: []
};

var addItem = function(newItem) {
	store.list.push(newItem);
}

var removeItem = function(index) {
	store.list.splice(index, 1);
}

var todoStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},
	getList: function() {
		return store.list;
	}
});

appDispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case appConstants.ADD_ITEM: 
			addItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		case appConstants.REMOVE_ITEM:
			removeItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = todoStore;