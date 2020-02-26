module.exports = function transform(arr) {
    if (Array.isArray(arr) == false)
    throw new Error();
    let result = [];
    let flagN = false;
    let flagP = false;
    let flagDN = false;
    let flagDP = false;
    for (let i = 0; i < arr.length; i++)
    {
        if (flagP = true)
        {
            result.unshift();
        }

        flagP = false;


if (( arr[i] != '--discard-next' ||  arr[i] != '--discard-prev'  || arr[i] != '--double-next' ||  arr[i] != '--double-prev') && flagN == false)
        {
            if (flagDP == true)
            {
                result.push(arr[i-1]);
                flagDP = false;
            }
            result.push(arr[i]);
            if (flagDN == true)
            {
                result.push(arr[i]);
                flagDN = false;
            }
        }
///--discard-next
        flagN = false;

        if (arr[i] == '--discard-next')
        {
            flagN = true;
        }
///--discard-prev
        if (arr[i] == '--discard-prev')
        {
            flagP = true;
        }
///--double-next

        if (arr[i] == '--double-next')
        {
            flagDN = true;
        }
///--double-prev

        if (arr[i] == '--double-prev')
        {
            flagDP = true;
        }
    }

    for (let elem of result)
    {
        if (elem == '--discard-next' ||  elem == '--discard-prev'  || elem == '--double-next' ||  elem == '--double-prev')
        {
            console.log(arr);
            break;
        }
    }
    
    return result;
};
