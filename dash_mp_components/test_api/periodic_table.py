import time
from selenium.webdriver.common.action_chains import ActionChains
import dash_mp_components
import dash_html_components as html
from enum import Enum, unique
from .utils import wait_for_element_having_class

@unique
class Selectors(Enum):
    element = '.mat-element'
    number = '.mat-number'
    symbol = '.mat-symbol'
    name = '.mat-name'
    detailed = '.detailed'
    disabled = '.disabled'
    enabled = '.enabled'
    table_container = '.table-container'


DEFAULT_CONTAINER_SELECTOR = '.test-cmp'


class BasePage(object):
    """Base class to initialize the base page that will be called from all pages"""
    def __init__(self, dash_duo, base_selector=''):
        self.dash_duo = dash_duo
        self.base_selector = base_selector

# We are not supposed to couple the rendering with the testing. But I acknowledge
# that it can be useful to have a quick way to render a dash component. Therefore,
# every testing API class will expose by convention a render method that returns
# a dash components

class PeriodicTable(BasePage):

    def __init__(self, dash_duo, base_selector=''):
        super().__init__(dash_duo, base_selector)

    def render(self, id, disabledElements, enabledElements, hiddenElements, layout='spaced'):
        return dash_mp_components.PeriodicContext(
            children=[
                html.Div(children=[
                    dash_mp_components.PeriodicTableInput(
                        id=id,
                        disabledElements=disabledElements,
                        enabledElements=enabledElements,
                        hiddenElements=hiddenElements,
                        maxElementSelectable=2,
                        forceTableLayout=layout
                    )], className='test-cmp'
                )
            ])

    def get_table_selector(self):
        return f'{self.base_selector} {Selectors.table_container.value}'

    def find_element(self, symbol):
        table = self.dash_duo.find_element(self.get_table_selector())
        selector = ".//div[./*[normalize-space() = '" + symbol + "']]"
        return table.find_element_by_xpath(selector)

    def checkDetailed(self, number, symbol, name):
        table = self.dash_duo.find_element(self.get_table_selector())
        detailed_element = table.find_element_by_css_selector(Selectors.detailed.value)
        assert detailed_element.find_element_by_css_selector(Selectors.number.value).text == number
        assert detailed_element.find_element_by_css_selector(Selectors.symbol.value).text == symbol
        assert detailed_element.find_element_by_css_selector(Selectors.name.value).text == name

    def check_if_element_has_class(self, element_symbol, klass):
        assert (klass in self.find_element(element_symbol).get_attribute('class').split()) is True

    def hover_over_element(self, symbol):
        element_to_hover_over = self.find_element(symbol)
        hover = ActionChains(self.dash_duo.driver).move_to_element(element_to_hover_over)
        hover.perform()

    def wait_for_table(self):
        self.dash_duo.wait_for_element_by_css_selector(self.base_selector)
        self.dash_duo.wait_for_element_by_css_selector(self.get_table_selector())

    # This will throw if the element is not selectable
    def select_element(self, symbol):
        element = self.find_element(symbol)
        element.click()
        wait_for_element_having_class(self.dash_duo, element, Selectors.enabled.value[1:])

    def get_all_elements_selector(self):
        return f'{self.get_table_selector()} { Selectors.element.value }:not({Selectors.detailed.value})'

    def find_all_elements(self):
        return self.dash_duo.find_elements(self.get_all_elements_selector())

    def find_all_enabled_elements(self):
        return self.dash_duo.find_elements(
            f'{self.get_all_elements_selector()}{Selectors.enabled.value}')

    def check_if_element_is_enabled(self, symbol):
        self.check_if_element_has_class(symbol, Selectors.enabled.value[1:])

    def check_if_element_is_disabled(self, symbol):
        self.check_if_element_has_class(symbol, Selectors.disabled.value[1:])

    def check_if_element_is_hidden(self, symbol):
        hidden_element = self.periodic_table.find_element(symbol)
        self.check_if_element_has_class(symbol, Selectors.hidden.value[1:])
        assert hidden_element.find_element_by_css_selector(Selectors.number.value).is_displayed() is False
        assert hidden_element.find_element_by_css_selector(Selectors.symbol.value).is_displayed() is False

    def check_table_layout(self, expected_layout):
        table = self.dash_duo.find_element(self.get_table_selector())
        layouts = ['spaced', 'compact', 'small', 'map']
        # table container should ONLY have the associated class
        for layout in layouts:
            assert layout in table.get_attribute('class').split() is (expected_layout == layout)
        # test specific rendering of elements
