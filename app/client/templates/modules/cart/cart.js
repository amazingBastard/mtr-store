Template.cart.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('items');
    });
});

//Template.cart.onRendered(function () {
//    Session.setDefault('activeCart', false);
//    Session.setDefault('itemTax', .08);
//    Session.setDefault('itemCount', 0);
//    Session.setDefault('itemSubTotal', 0);
//});

Template.cart.helpers({
    items: function () {
        return Items.find({}, {sort: {created: -1}});
    }
});