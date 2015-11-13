import Ember from 'ember';

var data = {
	form: {
		id: 1,
		title: 'Rental Application',
	},
	sections: [{
		form_id: 1,
		id: 1,
		title: 'Applicant Information',
		subtitle: 'Basic information',
	}],
	fields: [{
		section_id: 1,
		id: 'firstName',
		label: 'First Name'
	}, {
		section_id: 1,
		id: 'middleName',
		label: 'Middle Name'
	}, {
		section_id: 1,
		id: 'lastName',
		label: 'Last Name'
	}, {
		section_id: 1,
		id: 'birthDate',
		label: 'Birth Date'
	}, {
		section_id: 1,
		id: 'socialNumber',
		label: 'Social security #'
	}, {
		section_id: 1,
		id: 'primaryEmailAddress',
		label: 'Email Address'
	}, {
		section_id: 1,
		id: 'homePhone',
		label: 'Home Phone'
	}, {
		section_id: 1,
		id: 'cellPhone',
		label: 'Cell Phone'
	}, {
		section_id: 1,
		id: 'driversLicense',
		label: 'Drivers License'
	}]
};

export default Ember.Route.extend({
	beforeModel: function() {
		this.store.pushPayload('form', data);
	},
  	model: function() {
    	return this.store.find('form');
  	}
});
