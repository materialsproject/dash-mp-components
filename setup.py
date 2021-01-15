import json
import os
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

# package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package["name"],
    version=package["version"],
    author=package['author'],
    packages=[package["name"]],
    include_package_data=True,
    license=package['license'],
    description=package.get('description', package["name"]),
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],    
)
