/*!
{
  "name": "getUserMedia",
  "property": "getusermedia",
  "caniuse": "stream",
  "tags": ["webrtc"],
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "W3C Media Capture and Streams spec",
    "href": "http://www.w3.org/TR/mediacapture-streams/"
  }],
  "polyfills": ["getusermedia"]
}
!*/
define(["Modernizr","prefixed"],function(e,n){e.addTest("getusermedia",!!n("getUserMedia",navigator))});