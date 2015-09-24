define('modules/blocks', ['knockout', 'proto/history', 'proto/objects'], function(ko, historyService, objects) {

  var BlocksViewModel = function() {
    var self = this;

    self.items = ko.observableArray([]);
    self.maxLengthTable = historyService.get('countItems');

    if ( historyService.search('users') ) {
      self.items = ko.observableArray(historyService.get('users'));
    }

    self.userBlockToogle = function(item) {
      item.active(!item.active());
    }
    self.activeBlock = function(status) {
      return status;
    }

  }

  return BlocksViewModel;
});