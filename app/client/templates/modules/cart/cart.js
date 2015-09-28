Template.onRendered(function () {
    Session.set('activeCart', false);
    Session.setDefault('itemCount', 0);
});

Template.cart.helpers({
    toggleClass: function () {
        return Session.get('activeCart') ? 'active' : '';
    }
});