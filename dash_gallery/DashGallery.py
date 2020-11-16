# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashGallery(Component):
    """A DashGallery component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- images (list; optional): Images to display
- options (dict; optional): Options
- selected (list; optional): Gallery Options
- value (string; optional): The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, images=Component.UNDEFINED, options=Component.UNDEFINED, selected=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'images', 'options', 'selected', 'value']
        self._type = 'DashGallery'
        self._namespace = 'dash_gallery'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'images', 'options', 'selected', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashGallery, self).__init__(**args)
