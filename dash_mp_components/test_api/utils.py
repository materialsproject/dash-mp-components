def resize_browser_window(width, height, driver):
    driver.set_window_size(width, height)
    size = driver.get_window_size()
