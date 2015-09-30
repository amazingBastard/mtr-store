Template.product.events({
    'click .insert.item.button': function (event, template) {
        event.preventDefault();

        var product = this._id,
            qty = template.find('.qty.input').value,
            itemExists = false;

        if (qty === '') {
            qty = '1';
        }

        // each items
        //   if productId === this.productId
        //     updateItem +=qty
        //   else
        //     insertItem

        Meteor.call('insertItem', qty, product, function (error) {
            if (error) {
                console.error('Insert item method failed: ' + error);
            } else {
                Session.set('itemsCount', Items.find().count());
            }
        });
    }
});