import * as angular from 'angular';
import {routes}  from './routes';

export angular.module('repositoriesModule', ['ui.router']);

angular.module('repositoriesModule')
  .config(routes)
  .directive('aboutComponent', repositoriesComponent);

/// <reference path="../../../tools/typings/tsd.d.ts" />
function repositoriesComponent() {
  'use strict';
  return {
    restrict: 'E',
    scope: {},
    controller: Repositories,
    controllerAs: 'repositories',
    bindToController: true,
    templateUrl: 'src/repositories/repositories.html'
  };
}

class Repositories {

  constructor() {
    console.log('I am the about component! I know what I am about!');

  }

  testMethod() {
    console.log('who clicked me!');
  }

  addUp(a: number, b: number) {
    return a + b;
  }
}

export {Repositories};

