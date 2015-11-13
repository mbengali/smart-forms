import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		this.store.pushPayload({
			form: {
				id: 1,
				title: 'Rental Application'
			},
			sections: [{
				form: 1,
				id: 1,
				title: 'Applicant Information',
				subtitle: 'Basic information',
			}],
			fields: [{
				section: 1,
				id: 'firstName',
				label: 'First Name'
			}, {
				section: 1,
				id: 'middleName',
				label: 'Middle Name'
			}, {
				section: 1,
				id: 'lastName',
				label: 'Last Name'
			}, {
				section: 1,
				id: 'birthDate',
				label: 'Birth Date'
			}, {
				section: 1,
				id: 'socialNumber',
				label: 'Social security #'
			}, {
				section: 1,
				id: 'primaryEmailAddress',
				label: 'Email Address'
			}, {
				section: 1,
				id: 'homePhone',
				label: 'Home Phone'
			}, {
				section: 1,
				id: 'cellPhone',
				label: 'Cell Phone'
			}, {
				section: 1,
				id: 'driversLicense',
				label: 'Drivers License'
			}]
		});
	},
  	model: function() {
  		return Ember.RSVP.hash({
	      form: this.store.peekRecord('form', 1),
	      sections: this.store.peekAll('section'),
	      fields: this.store.peekAll('field')
	    });
  	}
});
