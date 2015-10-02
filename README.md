# Meteor Store (Cart and Checkout) Prototype

Mobile-first Store with Cart and Checkout built with Meteor

[VIEW LIVE DEMO](http://sugarsweets.meteor.com)

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## Roadmap

* Setup build environments (for testing)
* Security (permissions, accounts)

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Run Locally

```
cd mtr-store
```

Run the following to get the bash file to work:

```
chmod +x ./run.sh
```

Now you can start the app with the following command:

```
./run.sh
```

The app should now be running on:

```
http://localhost:3000
```

## Structure

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    lib/                # Lib files that get executed first on client
    stylesheets         # LESS files (with autoprefixer)
      templates/         # All template styles
        layouts/            # All layouts styles
        modules/            # Modules styles
          cart/               # All styles for cart module
          common/             # Common module styles (i.e. header, footer, loading)
          products/           # All styles for products module
        views/              # All views (routes) styles
      elements.less       # html elements and modules styles
      helpers.less        # style helpers for global use
      typography.less     # global typography styles
      variables.less      # All LESS variables
    templates/          # All templates
      layouts/            # Layout templates (used by router)
      modules/            # All module templates
        cart/               # Cart module templates
          cart_elements       # Cart elements (i.e. buttons, inputs)
          cart_items          # Cart items templates
          cart_totals         # Cart totals template
        common/             # Common modules (i.e. header, footer, loading)
        products/           # Products modules
  collections/        # All Collections
  lib/                # Lib files that get executed first
  public/             # Public files
    images/             # Public image files
  router/             # All router files
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    methods/            # Server methods
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
environments/       # Environments folder
  local/              # local environment
  production/         # production environment

```

### Packages Used

* Meteor Core
  * [meteor-base](http://github.com/meteor/meteor/tree/devel/packages/meteor-base)
  * [blaze-html-templates](https://github.com/meteor/meteor/tree/devel/packages/blaze-html-templates)
  * [react](http://github.com/meteor/meteor/tree/devel/packages/react)
  * [ecmascript](https://github.com/meteor/meteor/tree/devel/packages/ecmascript)
  * [es5-shim](https://github.com/meteor/meteor/tree/devel/packages/es5-shim)
  * [ejson](https://github.com/meteor/meteor/tree/devel/packages/ejson)
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [logging](https://github.com/meteor/meteor/tree/devel/packages/logging)
  * [mobile-experience](https://github.com/meteor/meteor/tree/devel/packages/mobile-experience)
  * [mongo](https://github.com/meteor/meteor/tree/devel/packages/mongo)
  * [session](https://github.com/meteor/meteor/tree/devel/packages/session)
  * [standard-minifiers](https://github.com/meteor/meteor/tree/devel/packages/standard-minifiers)
  * [tracker](https://github.com/meteor/meteor/tree/devel/packages/tracker)
  * [check](https://github.com/meteor/meteor/tree/devel/packages/check)
  * [random](https://github.com/meteor/meteor/tree/devel/packages/random)
  * [reload](https://github.com/meteor/meteor/tree/devel/packages/reload)
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
* Collections
  * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
* SEO
  * [spiderable](https://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* Analytics
  * [datariot:ganalytics](https://github.com/datariot/meteor-ganalytics)
* UI and UX
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
* Development
  * [flemay:less-autoprefixer](https://github.com/flemay/less-autoprefixer)
  * [sanjo:jasmine](https://github.com/xolvio/meteor-jasmine)
  * [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter/)

## License

This project has an MIT License, see the LICENSE.txt for more information.