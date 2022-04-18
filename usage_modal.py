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
            html.Button("Open Drawer 1"),
            forDrawerId="drawer-1"
        ),
        mpc.DrawerTrigger(
            html.Button("Open Drawer 2"),
            forDrawerId="drawer-2"
        ),
        mpc.Drawer(
            html.Div("Drawer content"),
            id="drawer-1"
        ),
        mpc.Drawer(
            html.Div("Other drawer content"),
            id="drawer-2"
        )
    ]
  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True, port=8051)