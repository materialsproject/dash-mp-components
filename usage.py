import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from tests.grid import grid
import functools
from dash.exceptions import PreventUpdate
from pymatgen import MPRester

#

app = dash.Dash(__name__)

app.layout = html.Div(children=[
    # dash_mp_components.Search(
    #     id='test3', allDefinitions=grid, initCards=['has_properties']),
    # dash_mp_components.SearchGrid(id='test'),
    # dash_mp_components.MatSidebar(id='bar', layout='horizontal'),
    dash_mp_components.MatPrintViewContext(children=[
        dash_mp_components.MatSearchGrid(id='search-table'),
        dcc.Loading(
            [dash_mp_components.MatMaterialsTable(id='mat-result-table')]),
    ])
])


@app.callback(
    Output(component_id='mat-result-table', component_property='data'),
    [Input(component_id='search-table', component_property='state')])
def display_output2(c):
    if c is None:
        raise PreventUpdate
    cards = []
    for idx, card in enumerate(c['cardSettings']):
        if card['state'] != 'pristine' and not (card['disabled']):
            cards.append({'cardDef': c['cardDef'][idx], 'cardSettings': card})

    if len(cards) == 0 and (not (c['heroCardSetting']
                                 and not (c['heroCardSetting']['disabled']))):
        raise PreventUpdate

    query = {}
    table_card = c['heroCardSetting']
    if table_card is not None and not (
            table_card['disabled']) and not table_card['state'] == 'pristine':
        state = table_card['values'][0]
        if state is not None:
            if 'enabledElements' in state and len(
                    state['enabledElements']) > 0:
                query['elements'] = {'$in': state['enabledElements']}
            if 'disabledElements' in state and len(
                    state['disabledElements']) > 0:
                if 'elements' in query:
                    query['elements']['$not'] = {
                        '$in': state['disabledElements']
                    }
                else:
                    query['elements'] = {
                        ['$not']: {
                            '$in': state['disabledElements']
                        }
                    }

        if len(table_card['values']) > 1 and table_card['values'][1] > 0:
            query['nelements'] = table_card['values'][1]

    for card in cards:
        definition = card['cardDef']
        for widgetIndex, widget in enumerate(definition['widgets']):
            if card['cardSettings']['widgetState'][widgetIndex] == 'pristine':
                continue
            if widget['type'] == 'SLIDERS':
                key = widget['id']
                prefix = '' if definition[
                    'bypassIdForKey'] else definition['id'] + '.'
                query[prefix + key] = {
                    '$gte': card['cardSettings']['values'][widgetIndex][0],
                    '$lte': card['cardSettings']['values'][widgetIndex][1]
                }
            elif widget['type'] == 'TAG_SEARCH':
                if card['cardSettings']['values'][widgetIndex] is not None:
                    query[card['cardSettings']
                          ['id']] = card['cardSettings']['values'][widgetIndex]
            elif widget['type'] == 'SP_SEARCH':
                space_groups = card['cardSettings']['values'][widgetIndex]
                if space_groups is not None and len(space_groups) > 0:
                    query['spacegroup.number'] = {
                        '$in':
                        list(
                            map(lambda s: s['space-group.number'],
                                space_groups))
                    }
            elif widget['type'] == 'CHECKBOX_LIST':
                query['provenance'] = card['cardSettings']['values'][0]

    # bypass potentially big query
    if len((query.keys())) < 2 and 'nelements' in query:
        raise PreventUpdatse

    properties = [
        'volume', 'band_gap.search_gap.band_gap', 'material_id',
        'full_formula', 'theoretical', 'has_bandstructure', 'tags', 'density',
        'e_above_hull', 'nsites'
    ]
    #print('QUERYING', query)
    with MPRester("fJcpJy6hRNF3DzBo") as m:
        q = m.query(criteria=query, properties=properties)

    #print('RESULT', len(q))
    return q


# @app.callback([Output(component_id='p2', component_property='children')],
#               [Input(component_id='bar', component_property='appId')])
# def display_output2(value):
#     print(value)
#     if value is None:
#         return ['']
#     return [value]

#
# @app.callback([Output(component_id='p', component_property='children')],
#               [Input(component_id='context', component_property='state')])
# def display_output2(value):
#     print(value)
#     if value is None:
#         return ['']
#     return [value['enabledElements']]
#
#
# @app.callback([
#     Output(component_id='context', component_property='disabledElements'),
#     Output(component_id='context', component_property='enabledElements')
# ], [Input('RR', 'value')])
# def display_output(value):
#     return [], [value]
#
#
# @app.callback(
#     Output(component_id='context', component_property='forceTableLayout'),
#     [Input('RR', 'value')])
# def display_output(value):
#     if value == 'K':
#         return 'small'
#     if value == 'Cl':
#         return 'compact'
#     if value == 'Na':
#         return 'spaced'

#
# @app.callback(
#     Output(component_id='selected-object', component_property='children'),
#     [Input('3d-2', 'selectedObject')])
# def display_selectedObject(value):
#     return f'Type {value} color {value}'

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)
