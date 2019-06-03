
export class Is {

  static json(str: any): boolean/*Object|SyntaxError|TypeError*/ {
    if (!this.string(str)) {
      return false;
      //return new TypeError('Parameter should be of type string');
    }
    // let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
      //return e;
    }
    return true;
  }

  static function(func: any): boolean {
    let getType = {};
    return func && getType.toString.call(func) === '[object Function]';
  }

  static object(object: any): boolean {
    return object !== null && typeof object === 'object';
  }

  static array(array: any): boolean {
    return array !== null && array.constructor === Array;
  }

  static ascii(code: any, extended: boolean): boolean {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(<string>code);
  }

  static integer(number: any): boolean {
    return number === parseInt(<string>number, 10);
  }

  static float(number: any): boolean {
    return Number(number) === number && number % 1 !== 0;
  }

  static string(string: any): boolean {
    return typeof string === 'string';
  }

}
