describe("hasOwnProp",function(){var e,t;before(function(n){var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["hasOwnProp","cleanup"],function(r,i){e=r,t=i,n()})}),it("is a function",function(){expect(e).to.be.an("function")}),it("works",function(){var t={};t.prop=!0,expect(e(t,"prop")).to.be(!0)}),after(function(){t()})});