;
var _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    template = Handlebars.compile(require('text!templates/image.hbs'));

var bindingVariable = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.html( template(this.model.toJSON()) );
    $('#main').html(this.el);
  }
});

export default bindingVariable;