'use strict';

describe('Service: wizbiiApiFactory', function () {

  // load the service's module
  beforeEach(module('wizbiiTechTestApp'));

  // instantiate service
  var wizbiiApiFactory;
  beforeEach(inject(function (_wizbiiApiFactory_) {
    wizbiiApiFactory = _wizbiiApiFactory_;
  }));

  it('should do something', function () {
    expect(!!wizbiiApiFactory).toBe(true);
  });

});
