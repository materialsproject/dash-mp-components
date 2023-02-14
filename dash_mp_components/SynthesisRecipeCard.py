# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SynthesisRecipeCard(Component):
    """A SynthesisRecipeCard component.
Display synthesis recipe data in a standardized card view.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-data-block).

- data (dict; optional):
    Object (i.e. dictionary) of data to be displayed in the block.
    Data should be in the format returned for a single result from the
    synthesis API endpoint."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'SynthesisRecipeCard'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, data=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'data']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'data']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(SynthesisRecipeCard, self).__init__(**args)
