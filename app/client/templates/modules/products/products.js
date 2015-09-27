Template.products.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('products');
    });
});

Template.products.helpers({
    'products': function() {
        return Products.find({}, {sort: {created: -1}});
    }
});