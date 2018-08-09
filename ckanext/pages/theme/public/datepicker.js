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
        language: $('html').attr('lang'),
        format: 'dd-mm-yyyy',
        endDate: new Date(),
        weekStart: 1,
        autoclose: true,
        format: {
            toDisplay: function (date, format, language) {
                return moment(date).format('DD-MM-YYYY');
            },
            toValue: function (date, format, language) {
                return moment((new Date(date)).toISOString()).format('DD-MM-YYYY');
            }
        }
      });
      if ( $(this.el).attr('datepicker-show-direction') ) {
        editor.datepicker('option', 'showOptions', {"direction": $(this.el).attr('datepicker-show-direction') })
      }
    }
  }
});
