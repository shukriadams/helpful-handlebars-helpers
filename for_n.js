/**
 * Iterate through a count. Example:
 *
 *     {{#for_n 10}}
 *         <div>{{this}}</div>
 *      {{/for_n}}
 */
Handlebars.registerHelper('for_n', (count, block) =>{
    let out = ''

    for (let i = 0 ; i < count ; i ++)
        out += block.fn(i)

    return out
})
