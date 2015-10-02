'use strict';

describe('Loading module', function() {

    it('should render a template with the div.loading.module', function() {
        var div = document.createElement('div'),
            comp = UI.render(Template.loading);

        UI.insert(comp, div);

        expect($(div).find('.loading.module')[0]).toBeDefined();
    });
});