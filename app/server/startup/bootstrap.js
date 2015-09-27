Meteor.startup(function () {

    function loadFixture(fixtures, collection) {
        var i;

        for (i = 0; i < fixtures.length; i += 1) {
            collection.insert(fixtures[i]);
        }
    }

    if (Products.find().count() === 0) {
        loadFixture(Fixtures['products'], Products);
    }
});