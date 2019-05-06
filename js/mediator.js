// A global singleton object for publishing events
// This is a good way to communicate between objects without a direct reference

;
var _ = require('underscore'),
    Backbone = require('backbone');

var bindingVariable = _.clone(Backbone.Events, {});
export default bindingVariable;