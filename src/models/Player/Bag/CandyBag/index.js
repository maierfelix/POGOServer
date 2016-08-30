/**
 * @class CandyBag
 */
export default class CandyBag {

  /** @constructor */
  constructor() {
    this.candies = [];
  }

  getCandyByDexNumber(dex) {

    let candies = this.candies;

    let ii = 0;
    let length = candies.length;

    for (; ii < length; ++ii) {
      if (candies[ii].dex === dex) {
        return (candies[ii]);
      }
    };

    return (null);

  }

  /**
   * @param {String} str
   */
  parseCandies(str) {

    let result = null;

    let seperator = ":";
    let split = str.split(",");

    let ii = 0;
    let length = split.length;

    for (; ii < length; ++ii) {
      result = split[ii].split(seperator);
      this.candies.push({
        dex: result[0] << 0,
        amount: result[1] << 0
      });
    };

  }

  /**
   * @return {String}
   */
  serialize() {

    let str = "";
    let candies = this.candies;

    let ii = 0;
    let length = candies.length;

    for (; ii < length; ++ii) {
      str += candies[ii].dex + ":" + candies[ii].dex;
      if (ii + 1 < length) str += ",";
    };

    return (str);

  }

}