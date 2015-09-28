// template helpers

Template.registerHelper('currency', function(num){
    return '$' + Number(num).toFixed(2);
});

// cart module helpers

Template.registerHelper('hasItems', function() {
    return !Session.equals('itemCount', 0);
});

Template.registerHelper('itemCount', function() {
    return Session.get('itemCount');
});

Template.registerHelper('itemSubTotal', function() {
    return Session.get('itemSubTotal');
});

Template.registerHelper('itemTax', function() {
   return Session.get('itemTax');
});

Template.registerHelper('itemTotal', function() {
    return Session.get('itemTotal');
});

Template.registerHelper('toggleClass', function() {
    return Session.get('activeCart') ? 'active' : '';
});

Template.registerHelper('toggleIcon', function() {
    return Session.get('activeCart') ? 'fa fa-times' : 'fa fa-shopping-cart';
});