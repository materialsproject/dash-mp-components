# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class Download(Component):
    """A Download component.


Keyword arguments:

- id (optional):
    The ID used to identify this component in Dash callbacks.

- data (optional):
    When set, a download is invoked using a Blob. Accepts an object
    with the following structure:       {         filename: string;
    content: any;         isBase64: boolean (optional);
    isDataURL: boolean (optional);         mimeType: string (optional,
    default: 'text/plan');       } Properties in data object take
    precedent over component props.

- isBase64 (optional):
    Set to True if data.content is a base64 string.

- isDataURL (optional):
    Set to True if data.content is a data url.

- mimeType (optional):
    Default value for mimeType.

- setProps (optional):
    Dash-assigned callback that should be called to report property
    changes to Dash, to make them available for callbacks."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Download'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        data: typing.Optional[typing.Any] = None,
        isBase64: typing.Optional[typing.Any] = None,
        isDataURL: typing.Optional[typing.Any] = None,
        mimeType: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'data', 'isBase64', 'isDataURL', 'mimeType', 'setProps']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'isBase64', 'isDataURL', 'mimeType', 'setProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Download, self).__init__(**args)

setattr(Download, "__init__", _explicitize_args(Download.__init__))
