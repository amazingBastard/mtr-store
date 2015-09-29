// template helpers

Template.registerHelper('currency', function(num){
    return '$' + Number(num).toFixed(2);
});

Template.registerHelper('hasItems', function() {
    return !Session.equals('itemsCount', 0);
});

Template.registerHelper('itemsCount', function() {
    return Session.get('itemsCount');
});

Template.registerHelper('itemsSubTotal', function() {
    return Session.get('itemsSubTotal');
});

Template.registerHelper('itemsTax', function() {
   return Session.get('itemsTax');
});

Template.registerHelper('itemsTotal', function() {
    return Session.get('itemsTotal');
});

Template.registerHelper('toggleClass', function() {
    return Session.get('activeCart') ? 'active' : '';
});

Template.registerHelper('toggleIcon', function() {
    return Session.get('activeCart') ? 'fa fa-times' : 'fa fa-shopping-cart';
});