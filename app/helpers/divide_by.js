import Ember from "ember";

export default Ember.Handlebars.helper('divide_by', function(context, options) {
  if (context == options.hash.compare && !options.hash.divideBy){
      return options.fn(this);
  }

  if(options.hash.divideBy && (context % options.hash.divideBy)) {
    return options.fn(this);
  }

  return options.inverse(this);
});
