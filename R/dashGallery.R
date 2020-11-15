# AUTO GENERATED FILE - DO NOT EDIT

dashGallery <- function(id=NULL, images=NULL, gallery=NULL, value=NULL) {
    
    props <- list(id=id, images=images, gallery=gallery, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashGallery',
        namespace = 'dash_gallery',
        propNames = c('id', 'images', 'gallery', 'value'),
        package = 'dashGallery'
        )

    structure(component, class = c('dash_component', 'list'))
}
