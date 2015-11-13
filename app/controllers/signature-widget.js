import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    adoptSignature: function() {
      var gg = this.get('hasBeenSigned');
    }
  }
});
