Template.products.helpers({
    'products': function() {
        return Products.find({}, {sort: {created: -1}});
    }
});