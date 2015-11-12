import Ember from 'ember';

var documentData = {
		"title": "Rental Application: Cover Sheet",
		"sections": [
			{
				"title": "",
 			  "sub-title": "",
 			  "description": "",
				"data": "Thank you for downloading the Zillow Rental Application. Before you save or print this" +
								"application:" +
								"• The cover sheet is for landlord use and can be removed when sent to renters." +
								"• Have each adult applicant (18 or older) fill out a separate application." +
								"• This application can be emailed and completed on the computer." +
								"• Need to add more questions? Edit the “Additional questions” section on page two to" +
								"personalize the application. Make sure you save any changes before sending." +
								"For more tools and checklists, be sure to visit the resources center."
			},
		  {
			 "title": "Rental Application",
			 "sub-title": "Applicant information",
			 "description": "",
			"fields": [
			  {
			    id: 'firstName',
			    label: 'First Name'
			  }, {
			    id: 'middleName',
			    label: 'Middle Name'
			  }, {
			    id: 'lastName',
			    label: 'Last Name'
			  }, {
			    id: 'birthDate',
			    label: 'Birth Date'
			  }, {
			    id: 'socialNumber',
			    label: 'Social security #'
			  }, {
			    id: 'primaryEmailAddress',
			    label: 'Email Address'
			  }, {
			    id: 'homePhone',
			    label: 'Home Phone'
			  }, {
			    id: 'cellPhone',
			    label: 'Cell Phone'
			  }, {
			    id: 'driversLicense',
			    label: 'Drivers License'
			  }
			]
		}
	]
};

export default Ember.Route.extend({
  // Set the models for the route
  model: function() {
    return documentData;
  },
  // Set the model property on the controller
  // this can then be used by its corresponding template
  setupController: function(controller, documentData) {
    controller.set('model', documentData);
  }
});
