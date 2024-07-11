import { ENV } from "../enums/Enum";
const { Development } = ENV;
class Utilities {
  static Print = console.log;
  static getNodeEnv = (): string => process.env.NODE_ENV || Development;
  static isDevelopment = (): boolean => this.getNodeEnv() === Development;
  static messageGenerater = (msg: any) => {
    return {
      message: msg
    };
  };
}

export default Utilities;
