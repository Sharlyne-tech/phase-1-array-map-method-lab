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
  return tutorials.map(title=>{
    let empty = ""
    for(let i = 0;i < title.length; i++){
      if (i === 0 || title[i-1] === " "){
        empty += title[i].toUpperCase()
        // console.log(title[i].toUpperCase())
      }
      else{
        empty += title[i]
      }
    }
    return empty
  })
}
console.log(titleCased())