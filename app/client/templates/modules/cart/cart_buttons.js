Template.toggleCart.events({
    'click .toggle.cart.button': function (event) {
        event.preventDefault();
        Session.set('activeCart', !Session.get('activeCart'));
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
    'click .remove.item.button': function (event) {
        event.preventDefault();

        console.log('remove item from cart collection');
    }
})