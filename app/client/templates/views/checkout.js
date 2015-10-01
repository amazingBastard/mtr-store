Template.checkout.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('products');
    });
});

Template.checkout.helpers({
    'products': function() {
        return Products.find({}, {sort: {created: -1}});
    }
});