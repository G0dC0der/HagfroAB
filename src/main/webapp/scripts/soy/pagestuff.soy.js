// This file was automatically generated from pagestuff.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace se.hagfro.
 * @public
 */

if (typeof se == 'undefined') { var se = {}; }
if (typeof se.hagfro == 'undefined') { se.hagfro = {}; }


se.hagfro.renderSite = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="page">' + se.hagfro.renderHeader(opt_data) + ((opt_data.renderTrademark) ? se.hagfro.trademarks(null) : '') + '<div class="page-content"><div class="page-title">' + soy.$$escapeHtml(opt_data.title) + '</div><div class="short-line"></div></div><div class="clearer" style="padding-bottom:50px;"></div><div class="bottom-sapce"></div><div class="footer"><span class="footer-text">\u00A9 HagFro AB 2015</span></div></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderSite.soyTemplateName = 'se.hagfro.renderSite';
}


se.hagfro.renderHeader = function(opt_data, opt_ignored) {
  var output = '<div class="menu"><ul>';
  var pageList25 = opt_data.pages;
  var pageListLen25 = pageList25.length;
  for (var pageIndex25 = 0; pageIndex25 < pageListLen25; pageIndex25++) {
    var pageData25 = pageList25[pageIndex25];
    output += (pageData25.selected) ? '<li class="tab-selected"><span class="fake-a">' + soy.$$escapeHtml(pageData25.title) + '</span></li>' : '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(pageData25.url)) + '">' + soy.$$escapeHtml(pageData25.title) + '</a></li>';
  }
  output += '</ul></div><hr class="separator"/>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  se.hagfro.renderHeader.soyTemplateName = 'se.hagfro.renderHeader';
}


se.hagfro.trademarks = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="welcome-dialog"><div class="welcome-dialog-welcome">V\u00E4lkommen till</div><div class="welcome-dialog-welcome welcome-dialog-hagfro">HagFro AB</div><div class="welcome-dialog-desc">Kunskap f\u00F6r integration</div></div><div class="trademark"><div class="trademark-left">HF</div><div class="trademark-middle"></div><div class="trademark-right">HagFro AB</div></div><div class="clearer" style="padding-bottom:50px;"></div>');
};
if (goog.DEBUG) {
  se.hagfro.trademarks.soyTemplateName = 'se.hagfro.trademarks';
}
