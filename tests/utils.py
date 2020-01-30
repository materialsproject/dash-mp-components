def resize_browser_window(width, height, driver):
    print(driver.get_window_size())
    driver.set_window_size(1920, 1080)
    size = driver.get_window_size()
