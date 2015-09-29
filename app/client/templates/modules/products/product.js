
Template.product.events({
    'click .insert.item.button': function (event, template) {
        event.preventDefault();

        var qty = template.find('.qty.input').value,
            product = this._id,
            sessionId = Meteor.default_connection._lastSessionId;

        Meteor.call('insertItem', qty, product, sessionId, function (error) {
            if (error) {
                console.error('Insert item method failed: ' + error);
            } else {
                Session.set('itemCount', Items.find().count());
            }
        });
    }
});