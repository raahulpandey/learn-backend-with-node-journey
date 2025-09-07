const _ = require('lodash');
const items = [1,[2,[3,[4,[5]]]]]
const itemlist = _.flattenDeep(items);
console.log(itemlist);
console.log("hello world")


//asyncronus callbacks
//started operating system
// console.log('start')
// setTimeout(()=> {
//     console.log('second')
// },0)
// console.log('third')

//compelete and exited operating system