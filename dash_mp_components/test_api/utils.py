from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


def resize_browser_window(width, height, driver):
    driver.set_window_size(width, height)
    size = driver.get_window_size()


def wait_for_element_having_class(dash_duo, el, klass):
    wait = WebDriverWait(dash_duo.driver, 10)
    wait.until(element_has_css_class(el, klass))


def click_with_offset(driver, el, x, y, useShift = False):
    action = ActionChains(driver)
    action.move_to_element_with_offset(el, x, y)
    if useShift:
        action.key_down(Keys.SHIFT)
    action.click()
    if useShift:
        action.key_up(Keys.SHIFT)
    action.perform()


def hover_with_offset(driver, el, x, y):
    action = ActionChains(driver)
    action.move_to_element_with_offset(el, x, y)
    action.perform()


# move to dedicated file
class element_has_css_class(object):
    """An expectation for checking that an element has a particular css class.

    locator - used to find the element
    returns the WebElement once it has the particular css class
    """
    def __init__(self, element, css_class):
        self.element = element
        self.css_class = css_class

    def __call__(self, driver):
        element = self.element
        print(self.css_class, element.get_attribute("class"))
        if self.css_class in element.get_attribute("class"):
            return element
        return False
