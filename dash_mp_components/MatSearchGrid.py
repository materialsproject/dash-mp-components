# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MatSearchGrid(Component):
    """A MatSearchGrid component.
Use this search grid component if you do not use a periodic table

Keyword arguments:
- state (dict; optional): Latest configuration of the funnel
- id (string; optional): The ID used to identify this component in Dash callbacks."""
    @_explicitize_args
    def __init__(self, state=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['state', 'id']
        self._type = 'MatSearchGrid'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['state', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MatSearchGrid, self).__init__(**args)
