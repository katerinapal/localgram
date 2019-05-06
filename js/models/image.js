;
var Backbone = require('backbone'),
    instagramFetch = require('helpers/index').fetch;

var bindingVariable = Backbone.Model.extend({
  urlRoot: '/media',

  fetch: instagramFetch,

  parse: function(attrs) {
    return (attrs.data ? attrs.data : attrs);
  }
});

export default bindingVariable;