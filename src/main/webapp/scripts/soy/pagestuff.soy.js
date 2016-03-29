// This file was automatically generated from pagestuff.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace se.hagfro.
 * @public
 */

if (typeof se == 'undefined') { var se = {}; }
if (typeof se.hagfro == 'undefined') { se.hagfro = {}; }


se.hagfro.renderSite = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="page">' + se.hagfro.renderLogo(null) + se.hagfro.renderHeader(opt_data) + ((opt_data.renderWelcomeImage) ? se.hagfro.renderImage(null) : '') + ((opt_data.renderTrademark) ? se.hagfro.renderWelcome(null) : '') + '<div class="page-content">' + ((opt_data.title != null) ? '<div class="page-title">' + soy.$$escapeHtml(opt_data.title) + '</div><div class="short-line"></div>' : '') + '</div><div class="clearer" style="padding-bottom:50px;"></div><div class="bottom-sapce"></div><div class="footer"><span class="footer-text">\u00A9 HagFro AB 2015</span></div></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderSite.soyTemplateName = 'se.hagfro.renderSite';
}


se.hagfro.renderHeader = function(opt_data, opt_ignored) {
  var output = '<div class="menu"><ul>';
  var pageList33 = opt_data.pages;
  var pageListLen33 = pageList33.length;
  for (var pageIndex33 = 0; pageIndex33 < pageListLen33; pageIndex33++) {
    var pageData33 = pageList33[pageIndex33];
    output += (pageData33.selected) ? '<li class="tab-selected"><span class="fake-a">' + soy.$$escapeHtml(pageData33.title) + '</span></li>' : '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(pageData33.url)) + '">' + soy.$$escapeHtml(pageData33.title) + '</a></li>';
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


se.hagfro.renderImage = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="image-container"><img class="image-pic kid1" src="img/kids2.jpg"/><img class="image-pic kid2" src="img/kids.jpg"/></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderImage.soyTemplateName = 'se.hagfro.renderImage';
}


se.hagfro.renderWelcome = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="welcome-dialog"><div class="welcome-dialog-welcome">V\u00E4lkommen till</div><div class="welcome-dialog-welcome welcome-dialog-hagfro">HagFro AB</div><div class="welcome-dialog-desc">Kunskap f\u00F6r integration</div></div><div class="clearer" style="padding-bottom:0px;"></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderWelcome.soyTemplateName = 'se.hagfro.renderWelcome';
}


se.hagfro.overlay = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="overlay"></div>');
};
if (goog.DEBUG) {
  se.hagfro.overlay.soyTemplateName = 'se.hagfro.overlay';
}


se.hagfro.renderDialog = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="dialog"><span class="dialog-text">' + soy.$$escapeHtml(opt_data.text) + '</span><button class="dialog-button">' + soy.$$escapeHtml(opt_data.buttonText) + '</button></div>');
};
if (goog.DEBUG) {
  se.hagfro.renderDialog.soyTemplateName = 'se.hagfro.renderDialog';
}
