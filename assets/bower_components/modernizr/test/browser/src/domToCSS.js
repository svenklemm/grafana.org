describe("domToCSS",function(){var t,e;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["domToCSS","cleanup"],function(i,r){t=i,e=r,n()})}),it("converts kebab to camel",function(){expect(t("fakeDetect")).to.equal("fake-detect")}),after(function(){e()})});