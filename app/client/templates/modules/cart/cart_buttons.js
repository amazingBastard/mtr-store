Template.toggleCart.events({
   'click .toggle.cart.button': function(event) {
       event.preventDefault();
       Session.set('activeCart', !Session.get('activeCart'));
   }
});

Template.insertCartItem.events({
    'click .insert.item.button': function(event) {
        event.preventDefault();
        console.log('insert item to cart items collection');
    }
});

Template.removeCartItem.events({
    'click .remove.item.button': function(event) {
        event.preventDefault();
        console.log('remove item from cart collection');
    }
})