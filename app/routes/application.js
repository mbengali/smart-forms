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
				subtitle: 'Basic information'
			}, {
				form: 1,
				id: 2,
				title: 'References',
				isDynamic: true
			}],
			fields: [{
				section: 1,
				id: '1_firstName',
				label: 'First Name'
			}, {
				section: 1,
				id: '1_middleName',
				label: 'Middle Name'
			}, {
				section: 1,
				id: '1_lastName',
				label: 'Last Name'
			}, {
				section: 1,
				id: '1_birthDate',
				label: 'Birth Date'
			}, {
				section: 1,
				id: '1_socialNumber',
				label: 'Social security #'
			}, {
				section: 1,
				id: '1_primaryEmailAddress',
				label: 'Email Address'
			}, {
				section: 1,
				id: '1_homePhone',
				label: 'Home Phone'
			}, {
				section: 1,
				id: '1_cellPhone',
				label: 'Cell Phone'
			}, {
				section: 1,
				id: '1_driversLicense',
				label: 'Drivers License'
			}, {
				section: 2,
				id: '2_fullName_1',
				label: 'Full name'
			}, {
				section: 2,
				id: '2_phoneNumber_1',
				label: 'Phone number'
			}, {
				section: 2,
				id: '2_relationship_1',
				label: 'Relationship'
			}, {
				section: 2,
				id: '2_fullName_2',
				label: 'Full name'
			}, {
				section: 2,
				id: '2_phoneNumber_2',
				label: 'Phone number'
			}, {
				section: 2,
				id: '2_relationship_2',
				label: 'Relationship'
			}, {
				section: 2,
				id: '2_fullName_3',
				label: 'Full name'
			}, {
				section: 2,
				id: '2_phoneNumber_3',
				label: 'Phone number'
			}, {
				section: 2,
				id: '2_relationship_3',
				label: 'Relationship'
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
