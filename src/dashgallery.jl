# AUTO GENERATED FILE - DO NOT EDIT

export dashgallery

"""
    dashgallery(;kwargs...)

A DashGallery component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `images` (Array; optional): Images to display
- `options` (Dict; optional): Gallery Options
- `selected` (Array; optional): Selected Images
- `style` (Dict; optional): Style
"""
function dashgallery(; kwargs...)
        available_props = Symbol[:id, :images, :options, :selected, :style]
        wild_props = Symbol[]
        return Component("dashgallery", "DashGallery", "dash_gallery", available_props, wild_props; kwargs...)
end

