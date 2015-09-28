Template.toggleCart.events({
   'click .toggle.cart.button': function() {
       Session.set('activeCart', !Session.get('activeCart'));
   }
});

Template.insertCartItem.events({
    'click .insert.item.button': function() {
        console.log('insert item to cart items collection');
    }
});