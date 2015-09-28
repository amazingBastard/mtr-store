Template.cart.onCreated(function () {
    this.autorun(() => {
        this.subscribe('items');
    });
});

Template.cart.onRendered(function () {
    Session.setDefault('activeCart', false);
    Session.setDefault('itemCount', 0);
    Session.setDefault('itemTotal', 0);
});

Tracker.autorun(function () {
    var query = {},
        total = 0,
        items = Items.find(query, {fields: {price: 1}});

    items.forEach(function(item){
        total += item.price;
    });

    Session.set('itemTotal', Math.floor(total*100)/100);
    Session.set('itemCount', items.count());
});