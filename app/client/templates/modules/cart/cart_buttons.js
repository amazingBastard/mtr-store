Template.toggleCart.events({
    'click .toggle.cart.button': function (event) {
        event.preventDefault();
        Session.set('activeCart', !Session.get('activeCart'));
        $('body').toggleClass('hiddenflow');
    }
});

Template.insertCartItem.events({
    'click .insert.item.button': function (event) {
        event.preventDefault();

        var title = 'Title',
            type = 'Type',
            price = 1.50,
            qty = 1;

        Meteor.call('insertItem', title, type, price, qty, function (error) {
            if (error) {
                console.error('Insert item method failed: ' + error);
            } else {
                Session.set('itemCount', Items.find().count());
            }
        });
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