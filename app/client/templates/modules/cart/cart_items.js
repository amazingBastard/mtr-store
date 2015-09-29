Template.cartItems.onCreated(function () {
    //Tracker.autorun(function () {
    //    Session.setDefault('activeCart', false);
    //    Session.setDefault('itemTax', .08);
    //    Session.setDefault('itemCount', 0);
    //    Session.setDefault('itemSubTotal', 0);
    //});
});

Template.cartItems.helpers({
    items: function () {
        var cart = [],
            cartItems = Items.find({}, {sort: {created: -1}}),
            total = 0,
            count = 0,
            salesTax = .08;

        cartItems.forEach(function (cartItem) {
            var item = _.extend(cartItem, {}),
                product = Products.findOne({_id: cartItem.product});

            cartItem.title = product.title;
            cartItem.price = (Number(product.price) * cartItem.qty)

            total += cartItem.price;
            count += +cartItem.qty;

            cart.push(cartItem);
        });

        cart.count = count;
        cart.subTotal = total;
        cart.tax = cart.subTotal * salesTax;
        cart.total = cart.subTotal + cart.tax;

        Session.set('itemCount', cart.count);
        Session.set('itemSubTotal', cart.subTotal);
        Session.set('itemTax', cart.tax);
        Session.set('itemTotal', cart.total);

        return cart;
    }
});