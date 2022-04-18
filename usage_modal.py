import dash_mp_components as mpc
import dash
from dash import dcc, html


app = dash.Dash(__name__)

app.layout = html.Div([
  mpc.ModalContextProvider(
    [
        mpc.ModalTrigger(
            html.Button("Open Modal")
        ),
        mpc.Modal(
            html.Div("Modal content")
        )
    ]
  ),
  mpc.DrawerContextProvider(
    [
        mpc.DrawerTrigger(
            html.Button("Open Drawer")
        ),
        mpc.Drawer(
            html.Div("Drawer content")
        )
    ]
  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True, port=8051)