import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr('string'),
    section: DS.belongsTo('section', { inverse : 'fields' })
});
