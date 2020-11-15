# AUTO GENERATED FILE - DO NOT EDIT

export dashgallery

"""
    dashgallery(;kwargs...)

A DashGallery component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `images` (Array; optional): Images to display
- `gallery` (Bool; optional): Gallery Options
- `value` (String; optional): The value displayed in the input.
"""
function dashgallery(; kwargs...)
        available_props = Symbol[:id, :images, :gallery, :value]
        wild_props = Symbol[]
        return Component("dashgallery", "DashGallery", "dash_gallery", available_props, wild_props; kwargs...)
end

