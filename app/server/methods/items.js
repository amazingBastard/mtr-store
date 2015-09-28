Meteor.methods({
    insertItem: function (qty, title, type, price, sessionId) {
        if (qty > 0) {
            Items.insert({
                qty: qty,
                title: title,
                type: type,
                price: price,
                sessionId: sessionId
            });
        }
    },
    removeItem: function (itemId) {
        Items.remove(itemId);
    },
    removeItems: function() {
        Items.remove({});
    }
});