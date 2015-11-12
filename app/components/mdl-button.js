import MdlBase from './mdl-base';

export default MdlBase.extend({
  'buttonType': 'default',
  'btnClass' : function() {
    return this.get('buttonType') === 'signature' ? 'signature' : 'default';
  }.property('buttonType')
});
