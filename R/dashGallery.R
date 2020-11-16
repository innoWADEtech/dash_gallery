# AUTO GENERATED FILE - DO NOT EDIT

dashGallery <- function(id=NULL, images=NULL, options=NULL, selected=NULL, value=NULL) {
    
    props <- list(id=id, images=images, options=options, selected=selected, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashGallery',
        namespace = 'dash_gallery',
        propNames = c('id', 'images', 'options', 'selected', 'value'),
        package = 'dashGallery'
        )

    structure(component, class = c('dash_component', 'list'))
}
