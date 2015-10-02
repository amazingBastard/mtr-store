'use strict';

describe('Redirect module', function() {

    it('should render a template with the div.redirect.module', function() {
        var div = document.createElement('div'),
            comp = UI.render(Template.redirect);

        UI.insert(comp, div);

        expect($(div).find('.redirect.module')[0]).toBeDefined();
    });
});