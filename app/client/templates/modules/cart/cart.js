Template.cart.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
    });

    Session.setDefault('activeCart', false);
});