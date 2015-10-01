FlowRouter.route('/', {
    name: 'root',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'root'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/checkout', {
    name: 'checkout',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'checkout'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout', {
            content: 'redirect'
        });
        GAnalytics.pageview();
    }
};