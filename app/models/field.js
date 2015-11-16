import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr('string'),
    section: DS.belongsTo('section', { inverse : 'fields' }),
    multiline: DS.attr('boolean'),
    rows: DS.attr('number')
});
