# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Search(Component):
    """A Search component.
This search grid is using the periodic context provider. This allows the grid
 to be notified of changes happening in the periodic table. Use it if you intend
 to use the periodic table

Keyword arguments:
- state (dict; optional): Latest configuration of the funnel
- id (string; optional): The ID used to identify this component in Dash callbacks.
- allDefinitions (list; optional): An array of object describing the behavior/content of each card
- initCards (list; optional): Ids of the cards that are shown. They should match the card in allDefinitions array"""
    @_explicitize_args
    def __init__(self, state=Component.UNDEFINED, id=Component.UNDEFINED, allDefinitions=Component.UNDEFINED, initCards=Component.UNDEFINED, **kwargs):
        self._prop_names = ['state', 'id', 'allDefinitions', 'initCards']
        self._type = 'Search'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['state', 'id', 'allDefinitions', 'initCards']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Search, self).__init__(**args)
