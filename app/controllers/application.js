import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addFields: function() {
      this.store.pushPayload({
        fields: [{
          section: 2,
          id: '2_fullName_'  + Date.now(),
          label: 'Full name'
        }, {
          section: 2,
          id: '2_phoneNumber_' + Date.now(),
          label: 'Phone number'
        }, {
          section: 2,
          id: '2_relationship_' + Date.now(),
          label: 'Relationship'
        }]
      });
    },
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
