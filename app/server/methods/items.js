Meteor.methods({
    insertItem: function (title, type, price, quantity) {
        Items.insert({
            title: title,
            type: type,
            price: price,
            quantity: quantity
        });
    },
    updateItem: function (itemId, quantity) {
        Items.update(itemId, {$set: {quantity: quantity}});
    },
    removeItem: function (itemId) {
        Items.remove(itemId);
    }
});