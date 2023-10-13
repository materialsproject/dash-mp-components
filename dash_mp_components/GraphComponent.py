# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GraphComponent(Component):
    """A GraphComponent component.


Keyword arguments:

- id (optional):
    The ID used to identify this component in Dash callbacks.

- graph (optional):
    A graph that will be displayed when this component is rendered.

- options (optional):
    Display options for the graph.

- setProps (optional):
    Dash-assigned callback that should be called whenever any of the
    properties change."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'GraphComponent'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, graph=Component.UNDEFINED, options=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'graph', 'options', 'setProps']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'graph', 'options', 'setProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(GraphComponent, self).__init__(**args)
