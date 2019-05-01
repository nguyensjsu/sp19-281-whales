/*'use strict';

angular.module('eclipperApp')
  .controller('ServiceMenuCtrl', function (menuService) {
    var self = this,
	init = function () {
    self.menu = menuService.getServiceMenu();
  }
  self.sumbit = function () {
    self.menu = menuService.getServiceMenu();
  }
  init();
  });*/

  'use strict';

angular.module('eclipperApp')
  .controller('ServiceMenuCtrl', function (menuService) {
    var self = this,
        init = function () {
    menuService.getServiceMenu( (test)=>{
      self.menu = test;
      console.log('test:',self.menu);
    });

  }
  self.sumbit = function () {
    //menuService.getServiceMenu( (test)=>{
    //  self.menu = test;
    //console.log('test:',self.menu);
    //});
  }
  init();
  });
