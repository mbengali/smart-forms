import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    subtitle: DS.attr('string'),
    isDynamic: DS.attr('boolean'),
    form: DS.belongsTo('form', { inverse : 'sections' }),
    fields: DS.hasMany('field', { inverse : 'section' })
});
