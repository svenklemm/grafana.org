/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "http://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "http://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("bgrepeatround",t("backgroundRepeat","round")),e.addTest("bgrepeatspace",t("backgroundRepeat","space"))});