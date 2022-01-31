/**
 * Iterates through a block x times, equivalent to "for int" loop. this variable inside loop is the iterator.
 *
 *     {{#times 10}}
            {{this}}
 *     {{/times}}
 */
  Handlebars.registerHelper('forn', (times, block) =>{
      let out = ''

      for (let i = 0; i < times ; i ++)
          out += block.fn(i)

      return out
  })
