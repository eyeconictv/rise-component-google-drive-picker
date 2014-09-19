/*jshint expr:true */
"use strict";

describe("Services: picker", function () {

  beforeEach(module("risevision.widget.common.google-drive-picker"));

  it("picker loader should exist", function (done) {
    inject(function (pickerLoader) {
      expect(pickerLoader).be.defined;
      done();
    });
  });

  it("picker api should exist", function (done) {
    inject(function (apiGooglePicker) {
      expect(apiGooglePicker).be.defined;
      done();
    });
  });

  it("should return picker api", function (done) {
    inject(function (apiGooglePicker) {
      expect(apiGooglePicker.get).be.defined;
      done();
    });
  });

});
