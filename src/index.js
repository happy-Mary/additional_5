module.exports = function check(str, bracketsConfig) {
  let charArr = str.split('');
  let stack = [];
  let debug = false;

  charArr.forEach((char, i) => {
    let openIndex = bracketsConfig.findIndex(item => item[0] === char);
    let closeIndex = bracketsConfig.findIndex(item => item[1] === char);
    
    if(openIndex >= 0 && closeIndex >= 0) {
      (stack.includes(openIndex)) ? openIndex = -1 : closeIndex = -1;
    }

    if(openIndex >= 0) {
      stack.push(openIndex);
    } else if (closeIndex >= 0 && closeIndex === stack[stack.length-1]) {
      stack.pop();
    } else {
      return;
    }
  });
  return (stack.length) ?  false : true;
}
