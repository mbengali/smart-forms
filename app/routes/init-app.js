import Ember from 'ember';

var fields = [
  {
    fieldName: 'firstName',
    placeHolder: 'First Name'
  }, {
    fieldName: 'middleName',
    placeHolder: 'Middle Name'
  }, {
    fieldName: 'lastName',
    placeHolder: 'Last Name'
  }, {
    fieldName: 'birthDate',
    placeHolder: 'Birth Date'
  }, {
    fieldName: 'socialNumber',
    placeHolder: 'Social security #'
  }, {
    fieldName: 'primaryEmailAddress',
    placeHolder: 'Email Address'
  }, {
    fieldName: 'homePhone',
    placeHolder: 'Home Phone'
  }, {
    fieldName: 'cellPhone',
    placeHolder: 'Cell Phone'
  }, {
    fieldName: 'driversLicense',
    placeHolder: 'Drivers License'
  }
];

export default Ember.Route.extend({
  model: function() {
    return fields;
  }
});
