import MdlBase from './mdl-base';

export default MdlBase.extend({
   value: '',
   keyUp: function (e) {
     var $target = this.$(e.target);

     if($target.is(this.$('#modalSignature')) || $target.is(this.$('#modalInitial'))) {
       var $signatureValue = this.$('#modalSignature').val(),
           $intialValue = this.$('#modalInitial').val();

       $('.preview-name').text($signatureValue);
       $('.preview-initials').text($intialValue);
       $('#hiddenInput').val($signatureValue);
     }
   }
});
