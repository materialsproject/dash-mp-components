# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BibtexButton(Component):
    """A BibtexButton component.
Standardized button for linking to BibTeX.
If no url prop is supplied, a link will be generated
using the doi prop and doi2bib.org.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-bibtex-button) @default 'button is-small'.

- doi (string; optional):
    The DOI (Digital Object Identifier) of the reference to pass to
    doi2bib.org.

- target (string; optional):
    Value to add to the anchor tag's target attribute @default
    '_blank'.

- url (string; optional):
    Directly supply the URL to a reference's bibtex. If supplied, the
    component will not generate its own link using the doi prop."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, doi=Component.UNDEFINED, url=Component.UNDEFINED, target=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'doi', 'target', 'url']
        self._type = 'BibtexButton'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'doi', 'target', 'url']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BibtexButton, self).__init__(**args)
