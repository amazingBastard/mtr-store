Template.toggleCart.events({
    'click .toggle.cart.button': function (event) {
        event.preventDefault();
        Session.set('activeCart', !Session.get('activeCart'));
    }
});

Template.insertCartItem.events({
    'click .insert.item.button': function (event) {
        event.preventDefault();

        var title = $(event.target).find('[name=title]').val(),
            type = $(event.target).find('[name=image]').val(),
            price = $(event.target).find('[name=description]').val(),
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

        _deps.changed();
        console.log('remove item from cart collection');
    }
})