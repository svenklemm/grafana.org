/*!
{
  "name": "Document Fragment",
  "property": "documentfragment",
  "notes": [{
    "name": "W3C DOM Level 1 Reference",
    "href": "http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
  }, {
    "name": "SitePoint Reference",
    "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
  }, {
    "name": "QuirksMode Compatibility Tables",
    "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
  "tags": []
}
!*/
define(["Modernizr","docElement"],function(e,n){e.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in n})});