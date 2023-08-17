const getRedColor = (text) => {
  return `\x1b[31m${text}\x1b[0m`;
};

const getGreenColor = (text) => {
  return `\x1b[32m${text}\x1b[0m`;
};

const getYellowColor = (text) => {
  return `\x1b[33m${text}\x1b[0m`;
};

const getBlueColor = (text) => {
  return `\x1b[34m${text}\x1b[0m`;
};

const getMagentaColor = (text) => {
  return `\x1b[35m${text}\x1b[0m`;
};

const getCyanColor = (text) => {
  return `\x1b[36m${text}\x1b[0m`;
};

module.exports = {
  getRedColor: getRedColor, //ROT
  getGreenColor: getGreenColor, //GRÜN
  getYellowColor: getYellowColor, //GELB
  getBlueColor: getBlueColor, //BLAU
  getMagentaColor: getMagentaColor, //MAGENTA
  getCyanColor: getCyanColor, //HELLBLAU
};
