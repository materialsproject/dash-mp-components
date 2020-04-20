grid = [{
    'title':
    'Has properties',
    'id':
    'has_properties',
    'allowMultipleInstances':
    False,
    'widgets': [{
        'type': 'CHECKBOX_LIST',
        'id': 'props',
        'name': 'test',
        'configuration': {
            'selectionStyle':
            'single',
            'checkboxes': [{
                'label': 'Elastic',
                'name': 'elastic'
            }, {
                'label': 'Vibrational',
                'name': 'vibrational'
            }, {
                'label': 'Dielectric',
                'name': 'dielectric'
            }, {
                'label': 'Elec. structure',
                'name': 'structure'
            }]
        }
    }]
}]
