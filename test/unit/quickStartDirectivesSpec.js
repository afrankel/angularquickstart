'use strict';

/* jasmine specs for directives go here */

describe('costBar', function() {
  beforeEach(module('myApp'));

  var element;
  describe('produce-bar', function() {
    it('should produce a bar based on the amount', inject(function($rootScope, $compile) {
      element = $compile('<div cost-bar="10.5"></div>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toBe('<div class="bar" style="width: 10%">$10.5</div>');
    }));
  });
});
