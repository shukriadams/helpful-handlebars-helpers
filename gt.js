/**
 * If first value greater than second value
 *
 *     {{#gt 11 10}}
 *         You always see this.
 *     {{else}}   
 *         Just no.
 *     {{/gt}}
 */
Handlebars.registerHelper('gt', function(value1, value2, options){
    if (value1 > value2)
        return options.fn(this)
    
    return options.inverse(this)
})
