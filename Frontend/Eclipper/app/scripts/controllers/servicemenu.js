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
          self.menu = [];
          self.text ="95112";
  }
  self.find = function () {
    console.log("submit");
    menuService.getServiceMenu().then(function (response){
				self.menu = response;
        console.log(self.menu);
			}, function (){
				//TODO ERROR block
			});
  }
  init();
  });
