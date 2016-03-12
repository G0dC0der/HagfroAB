// This file was automatically generated from pagestuff.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace se.hagfro.
 * @public
 */

if (typeof se == 'undefined') { var se = {}; }
if (typeof se.hagfro == 'undefined') { se.hagfro = {}; }


se.hagfro.renderSite = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="page">' + ((opt_data.renderTrademark) ? se.hagfro.renderLogo(null) : '') + se.hagfro.renderHeader(opt_data) + ((opt_data.renderTrademark) ? se.hagfro.renderWelcome(null) : '') + '<div class="page-content"><div class="page-title">' + soy.$$escapeHtml(opt_data.title) + '</div><div class="short-line"></div></div><div class="clearer" style="padding-bottom:50px;"></div><div class="bottom-sapce"></div><div class="footer"><span class="footer-text">\u00A9 HagFro AB 2015</span></div></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderSite.soyTemplateName = 'se.hagfro.renderSite';
}


se.hagfro.renderHeader = function(opt_data, opt_ignored) {
  var output = '<div class="menu"><ul>';
  var pageList28 = opt_data.pages;
  var pageListLen28 = pageList28.length;
  for (var pageIndex28 = 0; pageIndex28 < pageListLen28; pageIndex28++) {
    var pageData28 = pageList28[pageIndex28];
    output += (pageData28.selected) ? '<li class="tab-selected"><span class="fake-a">' + soy.$$escapeHtml(pageData28.title) + '</span></li>' : '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(pageData28.url)) + '">' + soy.$$escapeHtml(pageData28.title) + '</a></li>';
  }
  output += '</ul></div><hr class="separator"/>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  se.hagfro.renderHeader.soyTemplateName = 'se.hagfro.renderHeader';
}


se.hagfro.renderLogo = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="hagfro-logo"><img src="img/logo.png"/></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderLogo.soyTemplateName = 'se.hagfro.renderLogo';
}


se.hagfro.renderWelcome = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="welcome-dialog"><div class="welcome-dialog-welcome">V\u00E4lkommen till</div><div class="welcome-dialog-welcome welcome-dialog-hagfro">HagFro AB</div><div class="welcome-dialog-desc">Kunskap f\u00F6r integration</div></div><div class="clearer" style="padding-bottom:0px;"></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderWelcome.soyTemplateName = 'se.hagfro.renderWelcome';
}
