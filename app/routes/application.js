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
				name: 'info',
				isDynamic: true,
				dynamicText: 'Add another field'
			}, {
				form: 1,
				id: 2,
				title: 'Rental History',
				subtitle: 'Current residence',
				isDynamic: true,
				name: 'rental',
				dynamicText: 'Add previous residence'
			}, {
				form: 1,
				id: 3,
				title: 'Employment history',
				subtitle: 'Current employer',
				isDynamic: true,
				name: 'employment',
				dynamicText: 'Add previous employer'
			}, {
				form: 1,
				id: 4,
				title: 'Credit history',
				isDynamic: true,
				name: 'credit',
				dynamicText: 'Add another credit reference'
			},
			 {
				form: 1,
				id: 6,
				title: 'References',
				isDynamic: true,
				name: 'references',
				dynamicText: 'Add another field'
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
			},	{
				section: 2,
				id: '1_address',
				label: 'Address'
			}, {
				section: 2,
				id: '1_1city',
				label: 'City'
			}, {
				section: 2,
				id: '1_state',
				label: 'State'
			}, {
				section: 2,
				id: '1_zip',
				label: 'ZIP'
			}, {
				section: 2,
				id: '1_rent',
				label: 'Monthly rent'
			}, {
				section: 2,
				id: '1_dates',
				label: 'Dates of residency (From/To)'
			}, {
				section: 2,
				id: '1_reasons',
				label: 'Reason for moving'
			}, {
				section: 2,
				id: '1_manager',
				label: 'Owner/Manager’s name'
			}, {
				section: 2,
				id: '1_dnumber',
				label: 'Phone Number'
			}, {
				section: 2,
				id: '1_reasonMoving' + Date.now(),
				label: 'Why are you moving from the current residence?',
				rows: 3,
				multiline: true
			},
			{
				section: 3,
				id: '1_cname',
				label: 'Company Name'
			}, {
				section: 3,
				id: '1_cphone',
				label: 'Employers phone'
			}, {
				section: 3,
				id: '1_ccrent',
				label: 'Monthly rent'
			}, {
				section: 3,
				id: '1_coccup',
				label: 'Occupation'
			}, {
				section: 3,
				id: '1_cemploy',
				label: 'Date of employment'
			}, {
				section: 3,
				id: '1_ccaddress',
				label: 'Employers address'
			}, {
				section: 3,
				id: '1_cnamesuper',
				label: 'Name of the supervisor'
			},
			{
				section: 4,
				id: '2_checking',
				label: 'Account type'
			}, {
				section: 4,
				id: '2_bank name',
				label: 'Bank/Institution name'
			}, {
				section: 4,
				id: '1_ddrow',
				label: 'Balance on deposit or balance owed'
			},
			{
				section: 6,
				id: '2_fullName_1',
				label: 'Full name'
			}, {
				section: 6,
				id: '2_phoneNumber_1',
				label: 'Phone number'
			}, {
				section: 6,
				id: '2_relationship_1',
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
