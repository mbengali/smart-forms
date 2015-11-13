import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    adoptSignature: function() {
      // Not sure what to do here
      var hiddenInputVal = Ember.$('#hiddenInput').val();
      Ember.$('.signature').addClass('signed');
      setTimeout(function() {
        Ember.$('.signature-name').text(hiddenInputVal);
      }, 200);
    }
  }
});
