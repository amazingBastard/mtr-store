'use strict';

Template.checkout.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('products');
    });
});


Template.checkout.onRendered(function() {
    Session.set('activeCart', false);
});