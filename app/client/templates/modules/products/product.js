Template.product.events({
    'click .insert.item.button': function (event, template) {
        event.preventDefault();

        var productId = this._id,
            qty = template.find('.qty.input').value,
            cartItems = Items.find({}, {sort: {created: -1}}),
            cartItemId = '',
            cartItemQty = '',
            itemExists = false;

        if (qty === '') {
            qty = '1';
        }

        console.log(productId);
        console.log(cartItemId);
        console.log(itemExists);

        // TODO: validate if item exists

        cartItems.forEach(function (cartItem) {
            if (cartItem.product === productId) {
                cartItemId = cartItem._id;
                cartItemQty = cartItem.qty;
                console.log('item in cart: ' + cartItemId);
                console.log('item qty: ' + cartItemQty);
                itemExists = true;
                return false;
            } else {
                cartItemId = cartItem._id;
                cartItemQty = cartItem.qty;
                console.log('item not in cart: ' + cartItemId);
                console.log('item qty: ' + cartItemQty);
                itemExists = false;
            }
        });

        if (itemExists) {
            var qtyNew = template.find('.qty.input').value;

            if (qtyNew === '') {
                qtyNew = '1';
            }

            var qtySum = Number(cartItemQty) + Number(qtyNew);

            Meteor.call('updateItem', cartItemId, qtySum.toString(), function (error) {
                if (error) {
                    console.error('Update item method failed: ' + error.reason);
                } else {
                    Session.set('itemsCount', qtySum);
                }
            });
        } else {
            Meteor.call('insertItem', qty, productId, function (error) {
                if (error) {
                    console.error('Insert item method failed: ' + error.reason);
                } else {
                    Session.set('itemsCount', cartItemQty);
                }
            });
        }
    }
});