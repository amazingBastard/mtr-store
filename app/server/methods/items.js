Meteor.methods({
    insertItem: function (qty, product) {
        check(qty, String);
        check(product, String);

        if (qty > 0) {
            Items.insert({
                qty: qty,
                product: product
            });
        } else {
            throw new Meteor.Error('item-must-have-quantity', 'Item must have a quantity before adding to the cart');
        }
    },
    updateItem: function (itemId, qty) {
        check(itemId, String);
        check(qty, String);

        var item = Items.findOne(itemId);

        if (item) {
            Items.update(itemId, {$set: {qty: qty}});
        } else {
            throw new Meteor.Error('item-does-not-exist', 'This item doesn\'t exist in the cart');
        }
    },
    removeItem: function (itemId) {
        check(itemId, String);

        Items.remove(itemId);
    },
    removeItems: function() {
        Items.remove({});
    }
});