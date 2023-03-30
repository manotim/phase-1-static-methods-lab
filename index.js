class Formatter {
  //add static methods here
  static capitalize(string) { 
    return string[0].toUpperCase() + string.slice(1)
  }

//   static sanitized(string) {
//     return string.split(' ').map(s => {
//       if(/([a-zA-Z]|\s|-|')/.test(s)) {
//         return s
//       } else {

//       return ''
//     }
//  }).join(' ')
// }

static sanitize(string) {
  return string.replace(/[^A-Za-z0-9\-\'\ ]/g,"")
}

static titleize(sentence) {
  const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let modSentence = sentence.split(" ").map(s => {
    if(!arr.includes(s)) {
      return Formatter.capitalize(s)
      } else {
        return s
      }

  }).join(" ")
  return Formatter.capitalize(modSentence)
}

}