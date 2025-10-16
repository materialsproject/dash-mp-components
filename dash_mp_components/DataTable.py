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


class DataTable(Component):
    """A DataTable component.
Common wrapper for filters/inputs and their labels

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class.

- columns (list; optional):
    An array of column definition objects to control what is rendered
    in the table. See `Column` documentation for specifics on how to
    construct `Column` objects.

- conditionalRowStyles (list; optional):
    List of conditions for styling rows based on a property (selector)
    and a value. Note that this prop currently only supports checking
    for value equivalence (i.e. row[selector] === value). See
    `ConditionalRowStyle` documentation for how to construct
    `ConditionalRowStyle` conditions.

- data (list; optional):
    Array of data objects to display in the table.

- disableRichColumnHeaders (boolean; optional):
    This is a temporary solution to allow SearchUI's to render in
    Storybook. There is an issue with the dynamic column header
    components that causes Storybook to crash. Rendering column
    headers as plain PropTypes.strings fixes the problem. Note that
    this will disable column tooltips and unit labels.

- footer (string; optional):
    Content to display below the table but inside the table's box
    wrapper. Accepts markdown.

- hasHeader (boolean; optional):
    Set to True to show a header with total number of rows and a
    columns selector.

- headerClassName (string; optional):
    Optional class name to apply to the table header.

- pagination (boolean; optional):
    Set to True to paginate the table records.

- paginationIsExpanded (boolean; optional):
    If True, an expanded component will be used for pagination (same
    as in `SearchUI`). If False, a compact version will be used.

- resultLabel (string; optional):
    A noun in singular form to describe what a result represents (e.g.
    \"material\"). This is displayed in the table header.

- resultLabelPlural (string; optional):
    Plural form of the result label. If none supplied, it will
    automatically be the result label plus an \"s\".

- secondarySortAscending (boolean; optional):
    If including a secondarySortField, set whether it should ascend by
    default. True for ascending, False for descending.

- secondarySortField (string; optional):
    Optionally include a secondary sort field. If the sortField ever
    becomes the same as the secondarySortField, the secondary field is
    removed. Must be a valid field and included in your list of
    columns.

- selectableRows (boolean; optional):
    Optionally include/exclude checkboxes next to rows for selecting.

- selectedRows (boolean | number | string | dict | list; optional):
    Property to maintain the state of selected rows so that they are
    accessible via Dash callback.

- singleSelectableRows (boolean; optional):
    Combine with selectableRows prop to only allow one row to be
    selected at a time.

- sortAscending (boolean; optional):
    If including a sortField, set whether it should ascend by default
    True for ascending, False for descending.

- sortField (string; optional):
    Optionally include a field to sort by on initial load Must be a
    valid field and included in your list of columns."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'DataTable'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        data: typing.Optional[typing.Sequence] = None,
        columns: typing.Optional[typing.Sequence] = None,
        sortField: typing.Optional[str] = None,
        sortAscending: typing.Optional[bool] = None,
        secondarySortField: typing.Optional[str] = None,
        secondarySortAscending: typing.Optional[bool] = None,
        conditionalRowStyles: typing.Optional[typing.Sequence] = None,
        selectableRows: typing.Optional[bool] = None,
        selectedRows: typing.Optional[typing.Any] = None,
        singleSelectableRows: typing.Optional[bool] = None,
        hasHeader: typing.Optional[bool] = None,
        headerClassName: typing.Optional[str] = None,
        resultLabel: typing.Optional[str] = None,
        resultLabelPlural: typing.Optional[str] = None,
        pagination: typing.Optional[bool] = None,
        paginationIsExpanded: typing.Optional[bool] = None,
        footer: typing.Optional[str] = None,
        disableRichColumnHeaders: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'columns', 'conditionalRowStyles', 'data', 'disableRichColumnHeaders', 'footer', 'hasHeader', 'headerClassName', 'pagination', 'paginationIsExpanded', 'resultLabel', 'resultLabelPlural', 'secondarySortAscending', 'secondarySortField', 'selectableRows', 'selectedRows', 'singleSelectableRows', 'sortAscending', 'sortField']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'columns', 'conditionalRowStyles', 'data', 'disableRichColumnHeaders', 'footer', 'hasHeader', 'headerClassName', 'pagination', 'paginationIsExpanded', 'resultLabel', 'resultLabelPlural', 'secondarySortAscending', 'secondarySortField', 'selectableRows', 'selectedRows', 'singleSelectableRows', 'sortAscending', 'sortField']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DataTable, self).__init__(**args)

setattr(DataTable, "__init__", _explicitize_args(DataTable.__init__))
