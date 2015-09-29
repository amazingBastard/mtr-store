Meteor.methods({
    insertItem: function (qty, product, sessionId) {
        if (qty > 0) {
            Items.insert({
                qty: qty,
                product: product,
                sessionId: sessionId
            });
        } else {
            console.error('Item must have quantity');
        }
    },
    removeItem: function (itemId) {
        Items.remove(itemId);
    },
    removeItems: function() {
        Items.remove({});
    }
});