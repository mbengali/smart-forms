import MdlBase from './mdl-base';

export default MdlBase.extend({
  'hasBeenSigned': false,
  'btnClass' : function() {
    var className = 'signature';
    return this.get('hasBeenSigned') ? className + ' signed' : className;
  }.property('hasBeenSigned'),
  'label': function() {
    return this.get('hasBeenSigned') ? 'Betty the renter' : 'Sign now';
  }.property('hasBeenSigned'),
  'signTime': function() {
    return this.get('hasBeenSigned') ? Date.now() : '';
  }.property('hasBeenSigned'),
  click: function() {
    this.set('hasBeenSigned', true);
  }
});
