Template.onRendered(function() {
    Session.set('activeCart', false);
});

Template.cart.helpers({
   toggleClass: function() {
       return Session.get('activeCart') ? 'active' : '';
   }
});