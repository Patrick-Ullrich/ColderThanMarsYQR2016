'use strict';

describe('Directive: customGraph', function () {

  // load the directive's module
  beforeEach(module('colderThanMarsYqr2016App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-graph></custom-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customGraph directive');
  }));
});
