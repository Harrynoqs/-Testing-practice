const reverseString = (str) => {
    let first = str.split("");
    let second = first.reverse();
    let final = second.join("");
    
    return final;
  
  }
  
  console.log(reverseString('thank'));

module.exports = reverseString