/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("dataset",function(){var e=n("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)})});