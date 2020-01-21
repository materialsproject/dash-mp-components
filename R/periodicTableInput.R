# AUTO GENERATED FILE - DO NOT EDIT

periodicTableInput <- function(id=NULL, state=NULL, disabledElements=NULL, enabledElements=NULL) {
    
    props <- list(id=id, state=state, disabledElements=disabledElements, enabledElements=enabledElements)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PeriodicTableInput',
        namespace = 'dash_mp_components',
        propNames = c('id', 'state', 'disabledElements', 'enabledElements'),
        package = 'dashMpComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
