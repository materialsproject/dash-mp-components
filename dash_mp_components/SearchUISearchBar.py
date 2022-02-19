# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchUISearchBar(Component):
    """A SearchUISearchBar component.
Search bar to be used within a `SearchUIContainer`.

Keyword arguments:

- id (string; optional)

- allowedInputTypesMap (dict; optional)

- chemicalSystemSelectHelpText (string; optional)

- className (string; optional)

- elementsSelectHelpText (string; optional)

- errorMessage (string; optional)

- helpItems (list; optional)

- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)

- placeholder (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, placeholder=Component.UNDEFINED, errorMessage=Component.UNDEFINED, allowedInputTypesMap=Component.UNDEFINED, periodicTableMode=Component.UNDEFINED, helpItems=Component.UNDEFINED, chemicalSystemSelectHelpText=Component.UNDEFINED, elementsSelectHelpText=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowedInputTypesMap', 'chemicalSystemSelectHelpText', 'className', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'periodicTableMode', 'placeholder']
        self._type = 'SearchUISearchBar'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedInputTypesMap', 'chemicalSystemSelectHelpText', 'className', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'periodicTableMode', 'placeholder']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SearchUISearchBar, self).__init__(**args)
