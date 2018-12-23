import { Logger } from '@lcluber/mouettejs';

export class Is {

  static json(str: any): Object|false {
    if (!this.string(str)) {
      return false;
    }
    let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
    try {
      json = JSON.parse(str);
    } catch (e) {
      Logger.error(e);
      return false;
    }
    return json;
  }

  static function(func: any): boolean {
    let getType = {};
    return func && getType.toString.call(func) === '[object Function]';
  }

  static object(object: any): boolean {
    return object !== null && typeof object === 'object';
  }

  static ascii(code: string|number, extended: boolean): boolean {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(<string>code);
  }

  static integer(value: string|number): boolean {
    return value === parseInt(<string>value, 10);
  }

  static string(str: any) {
    return typeof str === 'string';
  }

}
