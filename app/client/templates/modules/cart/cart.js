Template.cart.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('items');
    });
});

Template.cart.onRendered(function () {
    Session.setDefault('activeCart', false);
    Session.setDefault('itemCount', 0);
    Session.setDefault('itemTotal', 0);
});

Template.cart.helpers({
    items: function () {
        return Items.find({}, {sort: {created: -1}});
    }
});

Tracker.autorun(function () {
    var total = 0,
        items = Items.find({}, {fields: {price: 1}});

    items.forEach(function(item){
        total += item.price;
    });

    Session.set('itemTotal', Math.floor(total*100)/100);
    Session.set('itemCount', items.count());
});