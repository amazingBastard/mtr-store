Template.product.events({
    'click .insert.item.button': function (event, template) {
        event.preventDefault();

        var productId = this._id,
            qty = template.find('.qty.input').value,
            cartItems = Items.find({}, {sort: {created: -1}}),
            cartItemId = '',
            itemExists = false;

        if (qty === '') {
            qty = '1';
        }

        cartItems.forEach(function (cartItem) {
            if (cartItem.product === productId) {
                console.log(cartItem.product);
                console.log(cartItem._id);
                cartItemId = cartItem._id;
                itemExists = true;
                return false;
            } else {
                console.log(cartItem.product);
                console.log(cartItem._id);
                itemExists = false;
                return itemExists;
            }
        });

        if (itemExists) {
            console.log('use updateItem method to update qty');
            console.log(cartItemId);

            Meteor.call('updateItem', cartItemId, qty, function (error) {
                if (error) {
                    console.error('Update item method failed: ' + error.reason);
                } else {
                    Session.set('itemsCount', Items.find().count());
                }
            });
        } else {
            Meteor.call('insertItem', qty, productId, function (error) {
                if (error) {
                    console.error('Insert item method failed: ' + error.reason);
                } else {
                    Session.set('itemsCount', Items.find().count());
                }
            });
        }
    }
});