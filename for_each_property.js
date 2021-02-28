/**
 * Iterate through all properties in an object. Example:
 *
 *     {{#for_each_property myObject}}
 *
 *         <div>{{this}}</div>
 *
 *      {{/for_each_property}}
 */
Handlebars.registerHelper('for_each_property', (obj, block) =>{
    let out = ''

    for (const property in obj)
        out += block.fn(obj[property])
        
    return out
})
