import DS from 'ember-data';

export default DS.Model.extend({
    fieldName: DS.attr('string'),
    placeHolder: DS.attr('string')
});
