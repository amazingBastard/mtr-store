Meteor.startup(function () {
    Products._ensureIndex({'type': 1});
    Items._ensureIndex({'qty': 1});
});