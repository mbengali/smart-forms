import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addFields: function(section) {
      var fieldData = [];

      if(+section.get('id') === 1) {
        fieldData = [{
  				section: 1,
  				id: '1_firstName' + Date.now(),
  				label: 'First Name'
  			}, {
  				section: 1,
  				id: '1_middleName' + Date.now(),
  				label: 'Middle Name'
  			}, {
  				section: 1,
  				id: '1_lastName' + Date.now(),
  				label: 'Last Name'
  			}, {
  				section: 1,
  				id: '1_birthDate' + Date.now(),
  				label: 'Birth Date'
  			}, {
  				section: 1,
  				id: '1_socialNumber' + Date.now(),
  				label: 'Social security #'
  			}, {
  				section: 1,
  				id: '1_primaryEmailAddress' + Date.now(),
  				label: 'Email Address'
  			}, {
  				section: 1,
  				id: '1_homePhone + Date.now()',
  				label: 'Home Phone'
  			}, {
  				section: 1,
  				id: '1_cellPhone' + Date.now(),
  				label: 'Cell Phone'
  			}, {
  				section: 1,
  				id: '1_driversLicense' + Date.now(),
  				label: 'Drivers License'
  			}];
      } else if(+section.get('id') === 2) {
        fieldData = [{
  				section: 2,
  				id: '1_address' + Date.now(),
  				label: 'Address'
  			}, {
  				section: 2,
  				id: '1_1city'+ Date.now(),
  				label: 'City'
  			}, {
  				section: 2,
  				id: '1_state' + Date.now(),
  				label: 'State'
  			}, {
  				section: 2,
  				id: '1_zip' + Date.now(),
  				label: 'ZIP'
  			}, {
  				section: 2,
  				id: '1_rent' + Date.now(),
  				label: 'Monthly rent'
  			}, {
  				section: 2,
  				id: '1_dates' + Date.now(),
  				label: 'Dates of residency (From/To)'
  			}, {
  				section: 2,
  				id: '1_reasons' + Date.now(),
  				label: 'Reason for moving'
  			}, {
  				section: 2,
  				id: '1_manager' + Date.now(),
  				label: 'Owner/Manager’s name'
  			}, {
  				section: 2,
  				id: '1_dnumber' + Date.now(),
  				label: 'Phone Number'
  			},  {
          section: 2,
          id: '1_reasonMoving' + Date.now(),
          label: 'Why are you moving from the current residence?',
          rows: 3,
          multiline: true
        }];
      } else if(+section.get('id') === 3) {
        fieldData = [{
  				section: 3,
  				id: '1_cname'  + Date.now(),
  				label: 'Company Name'
  			}, {
  				section: 3,
  				id: '1_cphone'  + Date.now(),
  				label: 'Employers phone'
  			}, {
  				section: 3,
  				id: '1_ccrent'  + Date.now(),
  				label: 'Monthly rent'
  			}, {
  				section: 3,
  				id: '1_coccup'  + Date.now(),
  				label: 'Occupation'
  			}, {
  				section: 3,
  				id: '1_cemploy'  + Date.now(),
  				label: 'Date of employment'
  			}, {
  				section: 3,
  				id: '1_ccaddress'  + Date.now(),
  				label: 'Employers address'
  			}, {
  				section: 3,
  				id: '1_cnamesuper'  + Date.now(),
  				label: 'Name of the supervisor'
  			}];
      } else if (+section.get('id') === 4) {
        fieldData = [{
  				section: 4,
  				id: '2_checking'  + Date.now(),
  				label: 'Account type'
  			}, {
  				section: 4,
  				id: '2_bank name' + Date.now(),
  				label: 'Bank/Institution name'
  			}, {
  				section: 4,
  				id: '1_ddrow' + Date.now(),
  				label: 'Balance on deposit or balance owed'
  			}];
      }
        else if(+section.get('id') === 6) {
        fieldData = [{
            section: 6,
            id: '2_fullName_'  + Date.now(),
            label: 'Full name'
          }, {
            section: 6,
            id: '2_phoneNumber_' + Date.now(),
            label: 'Phone number'
          }, {
            section: 6,
            id: '2_relationship_' + Date.now(),
            label: 'Relationship'
          }];
      }


      this.store.pushPayload({
        fields: fieldData
      });
    },
    adoptSignature: function() {
      // Not sure what to do here
      var hiddenInputVal = Ember.$('#hiddenInput').val();
      Ember.$('.signature').addClass('signed');
      Ember.$('.signature-name').text(hiddenInputVal);
    }
  }
});
