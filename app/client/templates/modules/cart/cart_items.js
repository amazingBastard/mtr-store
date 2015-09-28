Template.cartItems.helpers({
    items: function () {
        return Items.find({}, {sort: {created: -1}});
    }
});