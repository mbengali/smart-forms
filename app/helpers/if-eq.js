import Ember from "ember";

export default Ember.Handlebars.helper('if-eq', function(context, options) {
    if (context === options.hash.compare){
        return options.fn(this);
    }

    return options.inverse(this);
});
