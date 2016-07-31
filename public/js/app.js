'use strict';

var app = angular.module('miska', []);

app.controller('summaryController', ['$scope', function($scope) {
  $scope.summary = 'M.Is.K.A. (Mi Isten Követői vAgyunk) Pop Punk / Rock zenekar. 25000 megtett km… több, mint 130 koncert és számos vidám és felejthetetlen pillanat. Jól jellemzik ezek a szavak a M.Is.K.A. (Mi Isten Követői vAgyunk) zenekar fiatalos lendületét és dinamizmusát, amelyet a hat evangélikus fiatal hite táplál. Éppen ezért a szövegeikben elsősorban olyan kérdésekkel foglalkoznak, melyek a fiatalok mindennapi élethelyzeteire, problémáira keresik a válaszokat, Istennél, a Bibliában, kereszténységben.';
}]);
