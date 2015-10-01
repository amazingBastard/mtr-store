Template.toggleCart.events({
    'click #toggleCart': function (event) {
        event.preventDefault();

        Session.set('activeCart', !Session.get('activeCart'));
    }
});

Template.removeCartItem.events({
    'click #removeCartItem': function (event) {
        event.preventDefault();

        Meteor.call('removeItem', this._id);
    }
});

Template.removeCartItems.events({
    'click #removeCartItems': function (event) {
        event.preventDefault();

        Meteor.call('removeItems');
    }
});

Template.checkoutCartItems.events({
    'click #checkoutCartItems': function(event) {
        event.preventDefault();

        FlowRouter.go('checkout');
    }
})