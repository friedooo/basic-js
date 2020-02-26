module.exports = function createDreamTeam(members) {
 if (Array.isArray(members) == false)
  return false;
  
  let resultArr = [];
  let result = '';
  for (let elem of members)
  { if (typeof elem == 'string')
    resultArr.push(elem.replace(/^\s*/, '').split('')[0].toUpperCase());
  }
  for (let elem of resultArr.sort())
  {
    result += elem;
  }
  return result;
};