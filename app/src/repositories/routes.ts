/// <reference path="../../../tools/typings/tsd.d.ts" />


routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    'use strict';
    $stateProvider
    .state('main.repositories', {
            url: '',
            views: {
                'content@main': {
                    templateUrl: 'src/repositories/repositories.html'
                }
            }
        });
}

export {routes}
