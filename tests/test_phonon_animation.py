import dash
from dash.dependencies import Input, Output, State
from dash import dcc, html
from dash_mp_components import CrystalToolkitAnimationScene, CrystalToolkitScene
import json

print(CrystalToolkitAnimationScene)
print(CrystalToolkitScene)

"""
Tests the CrystalToolkitAnimationScene component
"""
"""
def test_crystal_animation(dash_duo):
    app = dash.Dash(__name__)

    with open("data.json", encoding="utf-8") as f:
      data = json.load(f)  

    crystal_animation = CrystalToolkitAnimationScene(
            data=data,
            sceneSize="200px",
            settings={"defaultZoom": 1.5},
        )

    app.layout = html.Div([
      crystal_animation
    ])

    @app.callback(
        Output('selected-value', 'children'),
        Input('select', 'value')
    )
    def showSelectedValue(value):
        if not value:
          raise PreventUpdate
        return value

    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    dash_duo.find_element('#select').click()
    selected = dash_duo.find_element('.react-select__option--is-selected')
    assert selected.text == 'one'
    options = dash_duo.find_elements('.react-select__option')
    assert len(options) == 2
    options[1].click()
    assert dash_duo.find_element('#selected-value').text == 'two'
"""


app = dash.Dash(__name__)

with open("mp149_animation.json") as f:
# with open("mp149.json") as f:
  data = json.load(f)  

crystal_animation = CrystalToolkitAnimationScene(
        data=data,
        sceneSize="200px",
        settings={"defaultZoom": 1.5},
    )

app.layout = html.Div([
  crystal_animation
])

if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0", port=8082)