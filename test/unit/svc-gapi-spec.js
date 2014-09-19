/*jshint expr:true */
"use strict";

describe("Services: gapi", function() {

  beforeEach(module("risevision.widget.common.google-drive-picker"));

  it("should exist", function(done) {
    inject(function(gapiLoader) {
      expect(gapiLoader).be.defined;
      done();
    });
  });

  it("should return gapi", function(done) {
    inject(function(gapiLoader) {
      expect(gapiLoader.get).be.defined;
      done();
    });
  });

});
