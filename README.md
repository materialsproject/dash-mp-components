![selenium_tests](https://github.com/materialsproject/dash-mp-components/workflows/selenium_tests/badge.svg)
![publish_python_package](https://github.com/materialsproject/dash-mp-components/workflows/publish_python_package/badge.svg)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/matproj/dash-mp-components)
![publish npm version](https://img.shields.io/npm/v/dash_mp_components?style=plastic)

# Materials Project Dash Components

Materials Project Dash Components is a Dash component library.

Get started with:

1. Install Dash and its dependencies: https://dash.plot.ly/installation
2. Run `python usage.py`
3. Visit http://localhost:8050 in your web browser

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

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

### Write your component code in `src/lib/components/PeriodicTableInput.react.js`.

-   The demo app is in `src/demo` and you will import your example component code into your demo app.
-   Test your code in a Python environment:
    1. Build your code
        ```
        $ npm run build
        ```
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```
-   Write tests for your component.
    -   A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    -   **Do not forget to re-build the components before running the tests.**
    -   Run the tests with `$ pytest tests`.
    -   The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
-   Add custom styles to your component by putting your custom CSS files into your distribution folder (`dash_mp_components`).
    -   Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    -   Make sure the stylesheets are added to the `_css_dist` dict in `dash_mp_components/__init__.py` so dash will serve them automatically when the component suite is requested.
-   [Review your code](./review_checklist.md)

### Build process

1. Tag a version by running `npm version patch|minor|major`

This will automatically bumps the version number in `package.json`, create a tag in the local
repository, and push it to github. A github action will build and publish the python package.

### Manually Create a production build and publish:

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


The npm package is NOT scoped to materialsProject org.
Dash does not build correctly component
