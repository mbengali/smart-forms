import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    adoptSignature: function() {
      //var gg = this.get('hasBeenSigned');
      //console.log(gg);
      // Not sure what to do here
      var hiddenInputVal = $('#hiddenInput').val();
      $('.signature').addClass('signed');
      setTimeout(function() {
        $('.signature-name').text(hiddenInputVal);
      }, 200);
    }
  }
});
