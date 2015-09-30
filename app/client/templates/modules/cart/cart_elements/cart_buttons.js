Template.toggleCart.events({
    'click .toggle.cart.button': function (event) {
        event.preventDefault();

        Session.set('activeCart', !Session.get('activeCart'));
    }
});

Template.removeCartItem.events({
    'click .remove.item.button': function (event, template) {
        event.preventDefault();

        Meteor.call('removeItem', this._id);
    }
});

Template.removeCartItems.events({
    'click .remove.items.button': function (event, template) {
        event.preventDefault();

        Meteor.call('removeItems');
    }
});