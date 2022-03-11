const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(sentence => { 
    const words = sentence.split(' ')
    return words.map(word => { 
      return word[0].toUpperCase() + word.slice(1)
     }).join(' ')
  } )
 }

    

  //  )
//}


//Action plan:
//1. Select the first letter of each word
//2. Upper case each selected letter
//3. Use the map method on EACH of the arrays that gets produced after x.split
//TIP:
//First set x.split to a variable IN the argument of the first map then i can iterate inside of an iterator
//map returning map returning map. 










//	const titleCased = () => {tutorials.map(x => charAt(0) console.log(x.split(' ')))} 
//const titleCased = () => {
//return tutorials.map(x =>
//console.log(x.split(' ')  
  //)
  //}
  //const titleCased = () => {tutorials.map(x => console.log(a))
  //  let a = x.split(' ')
  //} 
  //const titleCased = () => {
  //  return tutorials.map(x =>  z= x.split(' ') + x.charAt(0) + x.toUpperCase)}
     