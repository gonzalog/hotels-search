const hotelsSearchDirectives = angular.module('hotelsSearchDirectives', []);

hotelsSearchDirectives.directive('repeat', () => ({
    restrict: 'A',
    scope: { times: '=repeat' },
    transclude: true,
    template: '<ng-transclude ng-repeat="n in iterator track by $index"></ng-transclude>',
    link: (scope) => {
      scope.iterator = new Array(Number(scope.times));
    }
  }));