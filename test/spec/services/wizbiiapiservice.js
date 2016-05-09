'use strict';

describe('Service: wizbiiApiService', function () {

  // load the service's module
  beforeEach(module('wizbiiTechTestApp'));

  // instantiate service
  var wizbiiApiService;
  beforeEach(inject(function (_wizbiiApiService_) {
    wizbiiApiService = _wizbiiApiService_;
  }));

  it('should do something', function () {
    expect(!!wizbiiApiService).toBe(true);
  });

});
