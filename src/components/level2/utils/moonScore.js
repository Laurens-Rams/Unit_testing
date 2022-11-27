const MOON = '🌕';
const HALF_MOON = '🌗';

export function getMoonScore(score) {
  const normalizedScore = score / 20;
  const int_part = Math.trunc(normalizedScore);
  let moon_score = MOON.repeat(int_part);
  if (Number.isInteger(normalizedScore) === false) {
    //console.log('this is the int part ' + int_part);
    //console.log(moon_score);
    const remainder = normalizedScore % 1;
    //console.log('this is the decimal part ' + remainder);
    if (remainder >= 0.4 && remainder <= 0.5) {
      moon_score = moon_score + HALF_MOON;
    } else if (remainder > 0.5) {
      moon_score = moon_score + MOON;
    }
  }
  return moon_score;
}
