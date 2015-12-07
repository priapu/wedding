import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

angular.module('rsvp', ['ngAnimate', 'ngTouch', 'ngMessages', 'ngAria', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
