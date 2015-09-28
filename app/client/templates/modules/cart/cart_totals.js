Template.cartTotals.onRendered(function () {
    Tracker.autorun(function () {
        Session.setDefault('activeCart', false);
        Session.setDefault('itemTax', .08);
        Session.setDefault('itemCount', 0);
        Session.setDefault('itemSubTotal', 0);

        var total = 0,
            salesTax = .08,
            items = Items.find({}, {fields: {price: 1}});

        items.forEach(function (item) {
            total += item.price;
        });

        var itemSubTotal = Math.floor(total * 100) / 100,
            itemTax = itemSubTotal * salesTax,
            itemTotal = itemSubTotal + itemTax;

        Session.set('itemCount', items.count());
        Session.set('itemSubTotal', itemSubTotal);
        Session.set('itemTax', itemTax);
        Session.set('itemTotal', itemTotal);
    });
});