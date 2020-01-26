import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)


print("Hello World 2")
app.layout = html.Div([
    dash_mp_components.PeriodicFilter(
        id='periodic-filter',
    ),
    dash_mp_components.PeriodicTableInput(
        id='periodic-table',
        disabledElements={'Na': True, 'Cl': True},
        hiddenElements={'Fe': True, 'Dy': True},
        enabledElements={'H': True, 'O': True}
    ),
    html.Div(id='component')
])


@app.callback(Output('component', 'children'), [Input('periodic-table', 'state')])
def display_output(value):
    print("Hello World 2", value)
    return 'Clicked Elements {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
