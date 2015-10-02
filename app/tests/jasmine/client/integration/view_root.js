'use strict';

describe('Root view', function() {

    it('should render a template with the div.root.view', function() {
        var div = document.createElement('div'),
            comp = UI.render(Template.root);

        UI.insert(comp, div);

        expect($(div).find('.root.view')[0]).toBeDefined();
    });
});