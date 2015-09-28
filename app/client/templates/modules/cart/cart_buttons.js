Template.toggleCart.events({
   'click .toggle.cart.button': function() {
       Session.set('activeCart', !Session.get('activeCart'));
   }
});