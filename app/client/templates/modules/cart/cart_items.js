Template.cartItems.helpers({
    items: function () {
        var cart = [],
            cartItems = Items.find({}, {sort: {created: -1}}),
            total = 0,
            salesTax = .08;

        cartItems.forEach(function(cartItem){
            var item = _.extend(cartItem,{});
            var product = Products.findOne({_id:cartItem.product});
            cartItem.title = product.title;
            cartItem.price = (Number(product.price) * cartItem.qty);
            total += cartItem.price;
            cart.push(cartItem);
        });

        cart.subTotal = total;
        cart.tax = cart.subTotal * salesTax;
        cart.total = cart.subTotal + cart.tax;

        return cart;
    }
});