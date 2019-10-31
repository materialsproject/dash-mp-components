# AUTO GENERATED FILE - DO NOT EDIT

periodicTableInput <- function(id=NULL, clicked=NULL, disabled=NULL) {
    
    props <- list(id=id, clicked=clicked, disabled=disabled)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PeriodicTableInput',
        namespace = 'dash_mp_components',
        propNames = c('id', 'clicked', 'disabled'),
        package = 'dashMpComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
