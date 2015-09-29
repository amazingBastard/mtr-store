Template.product.events({
    'click .insert.item.button': function (event, template) {
        event.preventDefault();

        var qty = template.find('.qty.input').value,
            product = this._id;


        Meteor.call('insertItem', qty, product, function (error) {
            if (error) {
                console.error('Insert item method failed: ' + error);
            } else {
                Session.set('itemsCount', Items.find().count());
            }
        });
    }
});