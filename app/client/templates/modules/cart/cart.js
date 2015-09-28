Template.cart.onCreated(function() {
    this.autorun(() => {
        this.subscribe('items');
    });
});

Template.cart.onRendered(function () {
    Session.set('activeCart', false);
    Session.setDefault('itemCount', 0);
});