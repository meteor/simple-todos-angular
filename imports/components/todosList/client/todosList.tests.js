/* eslint-env mocha */

import 'angular-mocks';
import { Meteor } from 'meteor/meteor';

import todosList from '../todosList';

describe('todosList', function() {
  var element;

  beforeEach(function() {
    var $compile;
    var $rootScope;

    window.module(todosList.name);

    inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });

    element = $compile('<todos-list></todos-list>')($rootScope.$new(true));
    $rootScope.$digest();
  });
})
