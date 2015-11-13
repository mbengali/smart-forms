import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'v1'
});

export default ApplicationAdapter;