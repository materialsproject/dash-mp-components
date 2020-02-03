import time
from selenium.webdriver.common.action_chains import ActionChains
import dash_mp_components
import dash_html_components as html


selectors = {
    'element': '.mat-element',
    'number': '.mat-number',
    'symbol': '.mat-symbol',
    'name': '.mat-name',
    'detailed': '.detailed',
    'disabled': '.disabled',
    'enabled': '.enabled'
}

class BasePage(object):
    """Base class to initialize the base page that will be called from all pages"""
    def __init__(self, dash_duo):
        self.dash_duo = dash_duo;

class PeriodicTable(BasePage):

    def __init__(self, dash_duo, id, disabledElements, enabledDelements, hiddenElements):
        self.table = dash_mp_components.PeriodicContext(
            children=[
                html.Div([
                    dash_mp_components.PeriodicTableInput(
                        id=id,
                        disabledElements=disabledElements,
                        enabledElements=enabledDelements,
                        hiddenElements=hiddenElements
                    )]
                )
            ])
        super().__init__(dash_duo)

    def findElement(self, symbol):
        selector = "//div[./*[normalize-space() = '" + symbol + "']]";
        return self.dash_duo.driver.find_element_by_xpath(selector)
    def checkDetailed(self, number, symbol, name):
        detailed_element = self.dash_duo.driver.find_element_by_css_selector(selectors['detailed'])
        assert(detailed_element.find_element_by_css_selector(selectors['number']).text == number)
        assert(detailed_element.find_element_by_css_selector(selectors['symbol']).text == symbol)
        assert(detailed_element.find_element_by_css_selector(selectors['name']).text == name)
    def check_if_element_has_class(self, element_symbol, klass):
        assert (klass in self.findElement(element_symbol).get_attribute('class').split()) is True
    def hover_over_element(self, symbol):
        element_to_hover_over = self.findElement(symbol)
        hover = ActionChains(self.dash_duo.driver).move_to_element(element_to_hover_over)
        hover.perform()
    def wait_for_table(self):
        time.sleep(1)
        self.dash_duo.wait_for_element_by_css_selector(selectors['element'])
    def find_all_elements(self):
        return self.dash_duo.find_elements(f'{ selectors["element"] }:not({selectors["detailed"]})')
    def check_if_element_is_enabled(self, symbol):
        self.check_if_element_has_class(symbol, "enabled")
    def check_if_element_is_disabled(self, symbol):
        self.check_if_element_has_class(symbol, "disabled")

