const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sActivity) {
  if (typeof sActivity != 'string' || arguments[0] == undefined)
  return false;

  let counter = 0;
  for (let letter of sActivity.split(''))
  {
    if (letter == '.')
    counter++;
  }

  if (/^[0-9.]+/.test(sActivity))
  {
    if (counter > 1)
    {
      sActivity = sActivity.replace(/\.[0-9]+$/, '');
    }
  }
  else
  return false;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sActivity))/(0.693/HALF_LIFE_PERIOD));
  if (result < 0 || result == Infinity)
  return false;
  return result;
};
