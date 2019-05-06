// Ensure the previous top level view is disposed of completely

;
var _ = require('underscore'),
    before = require('helpers/before');

var bindingVariable = before(function(){
  if (this.currentView) {
    this.currentView.remove();

    if (this.currentView.children) {
      _(this.currentView.children).invoke('remove');
    }

    delete this.currentView;
  }
});

export default bindingVariable;