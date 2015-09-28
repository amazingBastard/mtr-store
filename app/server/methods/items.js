Meteor.methods({
    insertItem: function (title, type, price, qty) {
        Items.insert({
            title: title,
            type: type,
            price: price,
            qty: qty
        });
    },
    updateItem: function (itemId, quantity) {
        Items.update(itemId, {$set: {qty: qty}});
    },
    removeItem: function (itemId) {
        Items.remove(itemId);
    }
});