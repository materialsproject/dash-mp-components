# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchFunnel(Component):
    """A SearchFunnel component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- allDefinitions (list; optional): An array of object describing the behavior/content of each card
- initCards (list; optional): Ids of the cards that are shown. They should match the card in allDefinitions array"""
    @_explicitize_args
    def __init__(self,
                 id=Component.UNDEFINED,
                 allDefinitions=Component.UNDEFINED,
                 initCards=Component.UNDEFINED,
                 **kwargs):
        self._prop_names = ['id', 'allDefinitions', 'initCards']
        self._type = 'SearchFunnel'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes = []
        self.available_properties = ['id', 'allDefinitions', 'initCards']
        self.available_wildcard_properties = []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError('Required argument `' + k +
                                '` was not specified.')
        super(SearchFunnel, self).__init__(**args)
