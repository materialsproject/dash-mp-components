![selenium_tests](https://github.com/materialsproject/dash-mp-components/workflows/selenium_tests/badge.svg)
![publish_python_package](https://github.com/materialsproject/dash-mp-components/workflows/publish_python_package/badge.svg)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/matproj/dash-mp-components)
![publish npm version](https://img.shields.io/npm/v/dash_mp_components?style=plastic)

# Materials Project Dash Components

Materials Project Dash Components is a Dash component library that ports components from [mp-react-components](https://github.com/materialsproject/mp-react-components).

[See examples and documentation](https://materialsproject.github.io/mp-react-components/?path=/story/introduction-mp-react-components--page)

Get started with:

1. Install Dash and its dependencies: https://dash.plot.ly/installation
2. Run `python usage.py`
3. Visit http://localhost:8050 in your web browser

## Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.

    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```

    _Note: venv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

## Adding a Component

Add a new component file inside of one of the directories in `src/lib/components` and name the file `MyComponent.react.js` (where "MyComponent" is replaced with the name of the new component). Also, remember to add "MyComponent" into `src/lib/index.js` for importing/exporting.

The components in this library are all ported from [mp-react-components](https://github.com/materialsproject/mp-react-components) so the component files should simply wrap the component from mp-react-components and redefine the prop types for the component.

```
import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
    render() {
        return <mpc.MyComponent {...this.props} />;
    }
}

MyComponent.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    setProps: PropTypes.func,
    children: PropTypes.node
};
```

Note that if the react component utilizes the `children` prop, make sure that prop is included in the `propTypes` object with the type `PropTypes.node`. If the react component is not configured to accept any children, then this prop should not be included.

## Building the Dash Components

First, make sure that you have pulled in the latest changes from mp-react-components:

```
npm install @materialsproject/mp-react-components@next
```

Make sure to use node v18 to correctly run build

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18
nvm use 18
```

After updating the JavaScript component files and the mp-react-components dependency, you need to run the build process to generate the Dash versions of the components:

```
npm run build
```

If you are using a virtual environment, make sure it is activated when you run the build command.

## Publishing Changes

Commit the changes and freshly built components:

```
git commit -am "Update components"
```

Tag and push a new version

```
npm version patch|minor|major
```

This will automatically bumps the version number in `package.json`, create a tag in the local
repository, and push it to github. A github action will build and publish the python package.

## Updating the Library with Changes from mp-react-components

In some cases, the changes made in mp-react-components won't require any new component files or props. In this case, you still need to update the package from npm and run the build steps:

```
npm install @materialsproject/mp-react-components@next
npm run build
git commit -am "Update mp-react-components"
npm version patch
```

## Manually Create a production build and publish:

1. Build your code:
    ```
    $ npm run build
    ```
2. Create a Python tarball

    ```
    $ python setup.py sdist
    ```

    This distribution tarball will get generated in the `dist/` folder

3. Test your tarball by copying it into a new environment and installing it locally:

    ```
    $ pip install dash_mp_components-x.x.x.tar.gz
    ```

4. If it works, then you can publish the component to NPM and PyPI:

    1. Publish on PyPI
        ```
        $ twine upload dist/*
        ```
    2. Cleanup the dist folder (optional)
        ```
        $ rm -rf dist
        ```
    3. Publish on NPM (Optional if chosen False in `publish_on_npm`)
        ```
        $ npm publish
        ```
        _Publishing your component to NPM will make the JavaScript bundles available on the unpkg CDN. By default, Dash serves the component library's CSS and JS locally, but if you choose to publish the package to NPM you can set `serve_locally` to `False` and you may see faster load times._

5. To publish a new version from github, use `npm version`

The components are currently published in the test index, so you'll need to specify the url of
the index when you install the package
`pip install --index-url https://test.pypi.org/simple/ dash-mp-components`

## dash-component-boilerplate

This project was generated by the [dash-component-boilerplate](https://github.com/plotly/dash-component-boilerplate) it contains the minimal set of code required to create your own custom Dash component.
