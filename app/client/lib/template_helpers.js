// cart module helpers

Template.registerHelper('itemCount', function() {
    return Session.get('itemCount');
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