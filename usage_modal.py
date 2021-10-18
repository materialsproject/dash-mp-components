import dash_mp_components as mpc
import dash
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.layout = html.Div([
  mpc.ModalContextProvider(
    [
        mpc.ModalTrigger(
            "Open Modal"
        ),
        mpc.Modal(
            html.Div("Modal content")
        )
    ]
  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)