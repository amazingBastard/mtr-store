Template.onRendered(function () {
    Session.set('activeCart', false);
});

Template.cart.helpers({
    toggleClass: function () {
        return Session.get('activeCart') ? 'active' : '';
    },
    toggleIcon: function () {
        return Session.get('activeCart') ? 'fa fa-times' : 'fa fa-shopping-cart'
    }
});