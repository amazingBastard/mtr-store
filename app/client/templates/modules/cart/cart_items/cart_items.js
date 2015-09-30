Template.cartItems.helpers({
    items: function () {
        var cart = [],
            cartItems = Items.find({}, {sort: {created: -1}}),
            total = 0,
            count = 0,
            salesTax = .08;

        cartItems.forEach(function (cartItem) {
            var product = Products.findOne({_id: cartItem.product});

            cartItem.title = product.title;
            cartItem.price = (Number(product.price) * cartItem.qty);

            total += cartItem.price;
            count += +cartItem.qty;

            cart.push(cartItem);
        });

        Tracker.autorun(function() {
            cart.count = count;
            cart.subTotal = total;
            cart.tax = cart.subTotal * salesTax;
            cart.total = cart.subTotal + cart.tax;

            Session.set('itemsCount', cart.count);
            Session.set('itemsSubTotal', cart.subTotal);
            Session.set('itemsTax', cart.tax);
            Session.set('itemsTotal', cart.total);
        });

        return cart;
    }
});