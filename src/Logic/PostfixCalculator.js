export default class {
    /**
     * @param {String} expression Postfix expression
     * @return {Number} result of evaluating expression
     * @throws 
     */
    static evaluate(expression) {
        let input = expression.trim().replace(/\s\s+/g, ' ').split(' ');
        const queue = [];
        let currCheck = 0;
        let answer = 0;
        let firstNum = 0;
        let secNum = 0;
        while(input.length-1 >= currCheck) {
            switch (input[currCheck]) {
                case '+':
                    secNum = parseFloat(queue.pop());
                    firstNum = parseFloat(queue.pop());
                      //console.log('firstnum: %d  secNum: %d', firstNum, secNum);
                    if (isNaN(firstNum) || isNaN(secNum)) {
                        throw('Invalid Expression');
                    }
                    answer = firstNum + secNum;
                    queue.push(answer.toString());
                    break;
                case '-':
                    secNum = parseFloat(queue.pop());
                    firstNum = parseFloat(queue.pop());
                    if (isNaN(firstNum) || isNaN(secNum)) {
                        throw('Invalid Expression');
                    }
                    answer = firstNum - secNum;
                    queue.push(answer.toString());
                    break;
                case '*':
                    
                    secNum = parseFloat(queue.pop());
                    firstNum = parseFloat(queue.pop());
                    if (isNaN(firstNum) || isNaN(secNum)) {
                        throw('Invalid Expression');
                    }
                    answer = firstNum * secNum;
                    queue.push(answer.toString());
                    break;
                case '/':
                    secNum = parseFloat(queue.pop());
                    firstNum = parseFloat(queue.pop());
                    if (isNaN(firstNum) || isNaN(secNum)) {
                        throw('Invalid Expression');
                    }
                    answer = firstNum / secNum;
                    queue.push(answer.toString());
                    break;
                case '^':
                    secNum = parseFloat(queue.pop());
                    firstNum = parseFloat(queue.pop());
                    if (isNaN(firstNum) || isNaN(secNum)) {
                        throw('Invalid Expression');
                    }
                    answer = Math.pow(firstNum, secNum);
                    queue.push(answer.toString());
                    break;
                default: 
                    if (isNaN(input[currCheck])) {
                        throw('Unknown Operator');
                    }
                    queue.push(input[currCheck]);
                    break;
            }
            currCheck++;
        }
        if(queue.length > 1) {
            throw('Invalid Expression');
        }
        return queue.pop();
    }
}
  