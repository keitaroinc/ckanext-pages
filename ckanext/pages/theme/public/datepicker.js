this.ckan.module('datepicker', function (jQuery, _) {
  return {
    initialize: function () {
      jQuery.proxyAll(this, /_on/);
      this.el.ready(this._onReady);
    },

    _onReady: function() {
      var date = new Date();
      var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
      var editor = $(this.el).datepicker({
        onRender: function(date) {
          // Don't allow future dates to be selected from the datepicker component on the front-end.
          return date.valueOf() > now ? 'disabled' : '';
        }
      });
    }
  }
});
