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


class Markdown(Component):
    """A Markdown component.
A custom re-worked version of dcc.Markdown.
Uses v6 of react-markdown and applies five plugins
to the markdown component by default:
- remark-gfm
- remark-slug
- remark-highlight.js
- remark-math
- rehype-katex

Keyword arguments:

- children (string | list of strings; optional):
    A markdown string (or array of strings) that adhreres to the
    CommonMark spec.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Class name of the container element.

- dedent (boolean; optional):
    Remove matching leading whitespace from all lines. Lines that are
    empty, or contain *only* whitespace, are ignored. Both spaces and
    tab characters are removed, but only if they match; we will not
    convert tabs to spaces or vice versa.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Markdown'
    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        dedent: typing.Optional[bool] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        style: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'className', 'dedent', 'loading_state', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'dedent', 'loading_state', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Markdown, self).__init__(children=children, **args)

setattr(Markdown, "__init__", _explicitize_args(Markdown.__init__))
