import Ember from 'ember';
import MdlBase from './mdl-base';

export default MdlBase.extend({
  hasBeenSigned: false,
  btnClass : function() {
    var className = 'signature';
    return this.get('hasBeenSigned') ? className + ' signed' : className;
  }.property('hasBeenSigned'),
  label: function() {
    return this.get('hasBeenSigned') ? 'Betty the renter' : 'Sign now';
  }.property('hasBeenSigned'),
  signTime: function() {
    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1, //January is 0!
        yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }.property('hasBeenSigned'),
  click : function() {
    /*this.set('hasBeenSigned', true);
    this.set('signTime', this.get('hasBeenSigned') ? Date.now() : ''); */
    Ember.$('#myModal').modal();
  }
});
