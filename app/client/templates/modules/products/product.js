Template.product.events({
    'click #insertCartItem': function (event, template) {
        event.preventDefault();

        var productId = this._id,
            qty = template.find('.qty.input').value,
            cartItems = Items.find({}, {sort: {created: -1}}),
            cartItemId = '',
            cartItemQty = '',
            qtyCount = +qty,
            itemExists = false;

        if (qty === '') {
            qty = '1';
            qtyCount = +qty;
        }

        cartItems.forEach(function (cartItem) {
            if (cartItem.product === productId) {
                cartItemId = cartItem._id;
                cartItemQty = cartItem.qty;
                qtyCount += +cartItemQty;
                itemExists = true;
                return false;
            } else {
                cartItemId = cartItem._id;
                cartItemQty = cartItem.qty;
                qtyCount += +cartItemQty;
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
                    Session.set('itemsCount', qtyCount);
                }
            });
        } else {
            Meteor.call('insertItem', qty, productId, function (error) {
                if (error) {
                    console.error('Insert item method failed: ' + error.reason);
                } else {
                    Session.set('itemsCount', qtyCount);
                }
            });
        }
    }
});