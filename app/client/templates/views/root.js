'use strict';

Template.root.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('products');
    });
});

Template.root.onRendered(function() {
    Session.set('activeCart', false);
});