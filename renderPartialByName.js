/**
 * Renders a partial by its file name. Assuming you have a partial called "myPartial"
 *
 * Basic use :
 *
 *     {{renderPartialByName "myPartial"}}
 *
 * Send a known data object to the partial
 *
 *     {{renderPartialByName "myPartial" some_data}} 
 *
 * Send an on-the-fly data object to the partial
 *
 *     {{renderPartialByName "myPartial" foo=bar }} 
 */
Handlebars.registerHelper('renderPartialByName', function(partialName, context){
    let fn,
        template = Handlebars.partials[partialName]
    
    if (!template)
        throw `Partial ${partialName} does not exist`   
    
    if (typeof template === 'function')
        fn = template
    else
        fn = Handlebars.compile(template)
    
    return fn(context).replace(/^\s+/, '')
})
