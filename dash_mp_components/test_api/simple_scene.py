import dash_mp_components
import time
import dash_html_components as html
from enum import Enum, unique
from .utils import click_with_offset, hover_with_offset
from .periodic_table import BasePage
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@unique
class Selectors(Enum):
    canvas = 'canvas'
    svg = 'svg'
    path = 'path'
    three_container = '.three-container'
    tooltip = '.tooltiptext'


class SimpleScene(BasePage):

    def __init__(self, dash_duo, scene, settings={'renderer': 'svg'}, id='3d'):
        super().__init__(dash_duo, '')
        self.settings = settings
        self.id = id
        self.scene = scene

    def render(self, scene_size):
        return html.Div(
            style={'width': '500px', 'height': '500px'},
            children=[
                dash_mp_components.Simple3DScene(
                    id=self.id,
                    settings=self.settings,
                    data=self.scene,
                    sceneSize=scene_size
                )
            ]
        )

    def wait_for_rendering(self):
        if self.settings['renderer'] == 'svg':
            self.dash_duo.wait_for_element_by_css_selector(Selectors.svg.value)
        else:
            self.dash_duo.wait_for_element_by_css_selector(Selectors.canvas.value)
        time.sleep(1)

    def get_renderer(self):
        if self.settings['renderer'] == 'svg':
            self.dash_duo.find_element(Selectors.svg.value)
        else:
            self.dash_duo.find_element(Selectors.canvas.value)

    def check_path(self, number_of_path):
        # check if we can pass an ID to SVG element
        # print(len(self.dash_duo.find_elements(Selectors.path.value)), number_of_path)
        assert len(self.dash_duo.find_elements(Selectors.path.value)) == number_of_path

    def check_path_color(self, path_element, color):
        # have an utility to transfer from rgba to hex and vice-versa
        assert path_element.value_of_css_property('fill') == color

    def wait_for_tooltip(self):
        WebDriverWait(self.dash_duo.driver, 20).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, Selectors.tooltip.value)))

    def get_container(self):
        return self.dash_duo.find_element(Selectors.three_container.value)

    def click_on_coordinate(self, x=1, y=1, use_shift=False):
        click_with_offset(self.dash_duo.driver, self.get_container(), x, y, use_shift)

    def hover_on_coordinate(self, x=1, y=1):
        hover_with_offset(self.dash_duo.driver, self.get_container(), x, y)

    def check_tooltip_text(self, text):
        assert self.dash_duo.find_element(Selectors.tooltip.value).text == text

    def hover_and_check_tooltip(self, x, y, text):
        self.hover_on_coordinate(x, y)
        self.wait_for_tooltip()
        self.check_tooltip_text(text)

    def check_size(self, size):
        width = self.dash_duo.find_element('svg').get_attribute('width')
        height = self.dash_duo.find_element('svg').get_attribute('height')
        # print('===', size, width, height)
        assert width == size
        assert height == size
