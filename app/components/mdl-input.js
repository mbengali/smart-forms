import Ember from 'ember';
import MdlBase from './mdl-base';

export default MdlBase.extend({
   value: '',
   keyUp: function (e) {
     var $target = this.$(e.target);

     if($target.is(this.$('#modalSignature')) || $target.is(this.$('#modalInitial'))) {
       var $signatureValue = this.$('#modalSignature').val(),
           $intialValue = this.$('#modalInitial').val();

       Ember.$('.preview-name').text($signatureValue);
       Ember.$('.preview-initials').text($intialValue);
       Ember.$('#hiddenInput').val($signatureValue);
     }
   }
});
