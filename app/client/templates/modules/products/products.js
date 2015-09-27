Template.products.onCreated(function() {
    this.autorun(() => {
       this.subscribe('products');
    });
});

Template.products.helpers({
    'products': function() {
        return Products.find({}, {sort: {created: -1}});
    }
});