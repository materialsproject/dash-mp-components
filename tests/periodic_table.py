from selenium.webdriver.common.action_chains import ActionChains

class BasePage(object):
    """Base class to initialize the base page that will be called from all pages"""
    def __init__(self, dash_duo):
        self.dash_duo = dash_duo;

class PeriodicTable(BasePage):

    def findElement(self, symbol):
        selector = "//div[./*[normalize-space() = '" + symbol + "']]";
        return self.dash_duo.driver.find_element_by_xpath(selector)
    def checkDetailed(self, number, symbol, name):
        detailed_element = self.dash_duo.driver.find_element_by_css_selector(".detailed")
        detailed_element.find_element_by_css_selector(".number").text == number
        detailed_element.find_element_by_css_selector(".symbol").text == symbol
        detailed_element.find_element_by_css_selector(".name").text == name
    def check_if_element_has_class(self, element_symbol, klass):
        assert (klass in self.findElement(element_symbol).get_attribute('class').split()) == True
    def hover_over_element(self, symbol):
        element_to_hover_over = self.findElement(symbol)
        hover = ActionChains(self.dash_duo.driver).move_to_element(element_to_hover_over)
        hover.perform()
