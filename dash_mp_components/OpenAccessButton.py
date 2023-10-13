# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OpenAccessButton(Component):
    """An OpenAccessButton component.
Standardized button for linking to a publication.

This component can be used in four ways:
1. Supply just a `doi` and let the component build the url and fetch the journal name and year from crossref.
2. Supply just a `url` to doi.org and fetch the journal name and year from crossref.
3. Supply a `doi` and a link label in the component's `children`. In this case, there will be no fetch to crossref.
4. Supply a `url` to any location and a link label in the component's `children`. In this case, there will be no fetch to crossref.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-open-access-button). Note: the \"tag\" class is the default
    value for className. If you don't want the top-level element to
    have the \"tag\" class, add className=\"\" or any other value. If
    you want to use a bulma tag modifier, use the tagClassName prop
    instead. @default 'tag'.

- compact (boolean; optional):
    Only display the publication icon and hide the link label and OAB.
    Author names will display in a tooltip on hover.

- doi (string; optional):
    The DOI (Digital Object Identifier) of the publication Will be
    used to generate a doi.org link and to fetch an open access PDF
    link.

- showTooltip (boolean; optional):
    Show a tooltip on hover with the bibliographic citation for the
    publication.

- target (string; optional):
    Value to add to the anchor tag's target attribute @default
    '_blank'.

- url (string; optional):
    Directly supply the URL to the publication. If a doi.org url is
    supplied, this component will automatically parse the url for the
    doi and use that to fetch an open access link."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'OpenAccessButton'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, doi=Component.UNDEFINED, className=Component.UNDEFINED, url=Component.UNDEFINED, target=Component.UNDEFINED, compact=Component.UNDEFINED, showTooltip=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'compact', 'doi', 'showTooltip', 'target', 'url']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'compact', 'doi', 'showTooltip', 'target', 'url']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(OpenAccessButton, self).__init__(**args)
