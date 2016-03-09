// This file was automatically generated from pagestuff.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace se.hagfro.
 * @public
 */

if (typeof se == 'undefined') { var se = {}; }
if (typeof se.hagfro == 'undefined') { se.hagfro = {}; }


se.hagfro.test = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div>CRAP! ' + soy.$$escapeHtml(opt_data.TEST) + '</div>');
};
if (goog.DEBUG) {
  se.hagfro.test.soyTemplateName = 'se.hagfro.test';
}
