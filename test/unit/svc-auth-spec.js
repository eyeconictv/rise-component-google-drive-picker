/*jshint expr:true */
"use strict";

describe("Services: auth", function() {

  beforeEach(module("risevision.widget.common.google-drive-picker"));

  it("oauth loader should exist", function(done) {
    inject(function(oauthAPILoader) {
      expect(oauthAPILoader).be.defined;
      done();
    });
  });

  it("should return oauth api", function(done) {
    inject(function(oauthAPILoader) {
      expect(oauthAPILoader.get).be.defined;
      done();
    });
  });

  it("apiAuth should exist", function(done) {
    inject(function(apiAuth) {
      expect(apiAuth).be.defined;
      done();
    });
  });

});
