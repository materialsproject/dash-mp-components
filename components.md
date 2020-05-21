# Periodic table

## MatPeriodicTable

A single periodic table; you can pass an array of enable/disabled elements

```
 html.Div([
            PeriodicContextTable(
                id=self.id("periodic-table-absorbing"),
                maxElementSelectable=1,
                forwardOuterChange=False,
                disabledElements=NON_SUPPORTED_ELEMENTS,
                forceTableLayout="small")],
            className="mp-absorbing-table")
    ]
```

You can use the prop `state` in your callbacks. The callback will be fired when the state of the 
table change.

## PeriodicContext, SelectableTable, PeriodicFilter

You can use this component to wire multiple table together. 
PeriodicContext is a top-level that provides a model for the periodic table that it wraps.
PeriodicFilter allows you to use filter some elements on table, by groups/periods/properties.
It updates the PeriodicContext, which in turn is mirrored on the table.
```
//TODO
```

#3D Scene

## Simple3DScene

Simple3DScene displays a simple scene

```
dash_mp_components.Simple3DScene(
     id='3d-3',
     sceneSize=800,
     debug=True,
     inletSize=150,
     settings={'extractAxis': True},
     inletPadding=0,
     axisView='SW',
     data={ /* scene definition */ }
```

`selectedObject` can be used in your callback. The callback will fire when an object is selected.
The JSON of the object will be passed as an argument

## CameraContext

Camera context allows you to wire the camera of multiple SimpleScenes together.

```
dash_mp_components.CameraContext(children=[
   html.Div([
      dash_mp_components.Simple3DScene(
         id='3d-2',
         axisView='NW',
         animation='play',
         settings={
             'secondaryObjectView': True,
             'staticScene': False
         },
         sceneSize=550,
         data={ /* scene definition  */ }
      ),
      dash_mp_components.Simple3DScene(
         id='3d-3',
          sceneSize=800,
         debug=True,
         inletSize=150,
         settings={'extractAxis': True},
         inletPadding=0,
         axisView='SW',
         data={ /* scene definition */ }
      )
   ])
])
```


# Search

## SearchGrid

This is the whole search interface, wrapped in a React component. Everything happens in the frontend.

## MatSearchGrid / MatPrintViewContext / MAtMaterialsTable

This is the same interface. The search funnel and the result table are decoupled. The REST call
happens in dash. See usage.py for more details

```
dash_mp_components.MatPrintViewContext(children=[
        dash_mp_components.MatSearchGrid(id='search-table'),
        dcc.Loading(
            [dash_mp_components.MatMaterialsTable(id='mat-result-table')]),
    ])
```

##


