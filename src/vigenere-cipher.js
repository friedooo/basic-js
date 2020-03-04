class VigenereCipheringMachine {
    constructor(direct)
    {
        this.direct = direct;
    }

    encrypt(string, key) {
        if (string == undefined || key == undefined)
        throw new Error();
        let answer = '';

        string = string.toUpperCase();
        
        let minusKey = -1;
        let objPosofSigns = {};
        for (let i = 0; i < string.length; i++)
        {
            if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90)
            {
               // console.log(string[i] + ' ' + minusKey);
               if (objPosofSigns[i + minusKey] != undefined)
                {
                    //console.log(string[i] + ' ' + (i + minusKey));
                    objPosofSigns[i + minusKey] = objPosofSigns[i + minusKey] + string[i];
                    //console.log(objPosofSigns[i + minusKey]);
                }
                else
                objPosofSigns[i + minusKey] = string[i];
                minusKey--;
            }
        }
        console.log(objPosofSigns);
        string = string.replace(/([^A-Z])/g, '');
        console.log(string);


        key = key.toUpperCase();
        let keyWord = '';
        if (string.length == key.length)
        keyWord = key;
        else if (string.length > key.length)
        {
            let counter = 0;
            for (let i = 0; i < string.length; i++, counter++)
            {
                if (key[counter] == undefined)
                counter = 0;

                keyWord += key[counter];
            }
            console.log('ключевое слово меньше, чем слово кодировки = ' + keyWord);
        }
        else
        {
            for (let i = 0; i < key.length; i++)
            {
                if (string[i] == undefined)
                {
                    keyWord = key.slice(0, string.length - i);
                }
            }
            console.log('ключевое слово больше, чем слово кодировки = ' + keyWord);
        }

        for (let i = 0; i < string.length; i++)
        {
            if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90)
            {
            if (string[i].charCodeAt(0) - 65 + keyWord[i].charCodeAt(0) - 65 > 25)
                {
                    answer += String.fromCharCode(string[i].charCodeAt(0) - 65 + keyWord[i].charCodeAt(0) - 65 + 65 - 26); 
                }
                    else
                {
                    //console.log(string[i] + ' ' + keyWord[i]);
                answer += String.fromCharCode((string[i].charCodeAt(0) - 65 + keyWord[i].charCodeAt(0) - 65) + 65);
                }
            }
            else 
            answer += string[i];
            }
  
            answer = answer.split('');

            for (let i = 0; i < answer.length; i++)
            {
               if (objPosofSigns[i] != undefined)
                {
                    console.log(answer[i]);
                    console.log(objPosofSigns[i]);

                    answer[i] += objPosofSigns[i];
                }   
            }
            answer = answer.join('');
        
            if (this.direct == undefined)
            return answer
            if (this.direct == false)
            return answer.split('').reverse().join('');
        
    }

    ///
    ///
    ///
    ///
    ///

    decrypt(string, key) {
        if (string == undefined || key == undefined)
        throw new Error();
        let answer = '';

        string = string.toUpperCase();
        
        let minusKey = -1;
        let objPosofSigns = {};
        for (let i = 0; i < string.length; i++)
        {
            if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90)
            {
               // console.log(string[i] + ' ' + minusKey);
               if (objPosofSigns[i + minusKey] != undefined)
                {
                    //console.log(string[i] + ' ' + (i + minusKey));
                    objPosofSigns[i + minusKey] = objPosofSigns[i + minusKey] + string[i];
                    //console.log(objPosofSigns[i + minusKey]);
                }
                else
                objPosofSigns[i + minusKey] = string[i];
                minusKey--;
            }
        }
        console.log(objPosofSigns);
        string = string.replace(/([^A-Z])/g, '');
        console.log(string);


        key = key.toUpperCase();
        let keyWord = '';
        if (string.length == key.length)
        keyWord = key;
        else if (string.length > key.length)
        {
            let counter = 0;
            for (let i = 0; i < string.length; i++, counter++)
            {
                if (key[counter] == undefined)
                counter = 0;

                keyWord += key[counter];
            }
            console.log('ключевое слово меньше, чем слово кодировки = ' + keyWord);
        }
        else
        {
            for (let i = 0; i < key.length; i++)
            {
                if (string[i] == undefined)
                {
                    keyWord = key.slice(0, string.length - i);
                }
            }
            console.log('ключевое слово больше, чем слово кодировки = ' + keyWord);
        }

        for (let i = 0; i < string.length; i++)
        {
            if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90)
            {
            if (string[i].charCodeAt(0) - 65 >= keyWord[i].charCodeAt(0) - 65)
                {
                   // console.log(string[i] + ' ' + keyWord[i] + ' ' + 'выше диагонали');
                    answer += String.fromCharCode(Math.abs(keyWord[i].charCodeAt(0) - 65 - (string[i].charCodeAt(0) - 65)) + 65); 
                }
                    else
                {
                    //console.log(string[i] + ' ' + keyWord[i] + ' ' + 'ниже диагонали');
                //answer += String.fromCharCode((string[i].charCodeAt(0) - 65 - (keyWord[i].charCodeAt(0) - 65)) + 65);
                //answer += String.fromCharCode(string[i].charCodeAt(0) - 65 + keyWord[i].charCodeAt(0) - 65 + 65 - 26)
                answer += String.fromCharCode(65 + 26 - Math.abs(string[i].charCodeAt(0) - 65 - (keyWord[i].charCodeAt(0) - 65)));
                }
            }
            else 
            answer += string[i];
            }
  
            answer = answer.split('');

            for (let i = 0; i < answer.length; i++)
            {
               if (objPosofSigns[i] != undefined)
                {
                    console.log(answer[i]);
                    console.log(objPosofSigns[i]);

                    answer[i] += objPosofSigns[i];
                }   
            }
            answer = answer.join('');
        
        if (this.direct == undefined)
        return answer
        if (this.direct == false)
        return answer.split('').reverse().join('');
        
    }
}

module.exports = VigenereCipheringMachine;
