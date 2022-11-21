export default class URL {
  static base() {
    let env = process.env.REACT_APP_ENV;

    if (env === "local") {
      return `${window.location.protocol}/${process.env.REACT_APP_LOCAL_URL}`;
    } else if (env === "dev") {
      return `${window.location.protocol}//${window.location.host}${process.env.REACT_APP_DEV_URL}`;
    } else if (env === "uat") {
      return `${window.location.protocol}//${window.location.host}${process.env.REACT_APP_UAT_URL}`;
    } else if (env === "prod") {
      return `${window.location.protocol}//${window.location.host}${process.env.REACT_APP_PROD_URL}`;
    }
  }

  static api() {
    let env = process.env.REACT_APP_ENV;

    if (env === "local") {
      return `${window.location.protocol}/${process.env.REACT_APP_LOCAL_API_URL}`;
    } else if (env === "uat") {
      return `${window.location.protocol}//${window.location.host}${process.env.REACT_APP_UAT_API_URL}`;
    } else if (env === "prod") {
      return `${window.location.protocol}//${window.location.host}${process.env.REACT_APP_PROD_API_URL}`;
    }
  }
}
