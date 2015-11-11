import Ember from "ember";

export default Ember.Handlebars.helper('input-text', function(attrs, options) {
    var data = attrs.hash;
    return new Ember.Handlebars.SafeString('<div class="col-md-3">' +
                                              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                                                '<input class="mdl-textfield__input" type="text" id="' + data.fieldName + '">' +
                                                '<label class="mdl-textfield__label" for="' + data.fieldName + '">' + data.placeHolder + '</label>' +
                                              '</div>' +
                                            '</div>'
                                          );
});
