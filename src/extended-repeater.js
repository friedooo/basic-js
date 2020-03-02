module.exports = function repeater( str, options) {
    let result = [];
    let addition = [];
    
    if (str == null)
    str = 'null';
    
    if (options.addition === null)
    options.addition = 'null';
    
    if (typeof str != 'string')
    str = str.toString();
    
    if (options.additionRepeatTimes == undefined)
    options.additionRepeatTimes = 1;
    
    if (Number.isInteger(options.additionRepeatTimes))
    {
    for (let i = 0; i < options.additionRepeatTimes; i++)
    {
        addition.push(options.addition);
    }
    }
    else
    addition = [];
    
    if (options.additionSeparator == undefined)
    options.additionSeparator = '!';
    
    let add = addition.join(options.additionSeparator);
    
    if (options.repeatTimes == undefined)
    options.repeatTimes = 1;
    
    
    if (Number.isInteger(options.repeatTimes))
    {
    for (let i = 0; i < options.repeatTimes; i++)
    {
        result.push(str + add);
    }
    }
    
    if (options.separator == undefined)
    options.separator = '+';
    
    return result.join(options.separator);
    };
    