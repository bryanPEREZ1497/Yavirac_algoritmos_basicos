const add = (
function (){
  let counter = 0;
  return function () {counter +=1; return counter}
})()


const example = function (){
  return function () {return 'yeaaaaaaaaaaaaaaa'}
}()

console.log(example());
