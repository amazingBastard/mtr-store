Products = new Mongo.Collection('products');

Products.helpers({
    'products': function() {
        return Products.find({}, {sort: {created: -1}});
    }
});