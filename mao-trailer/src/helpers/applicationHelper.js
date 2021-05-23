let applicationHelper = {};

applicationHelper.addSuffixToString = (str = "", count = 0, suffix = "") => {
  let suf = suffix ?? "...";
  let name = String(str).split("");
  if (name.length >= count) {
    if (
      name.slice(-1) === "-" ||
      name.slice(-1) === " " ||
      name.slice(-1) === ":"
    ) {
      name = String(name.join("")).substring(0, count - 1) + suf;
    } else {
      name = String(name.join("")).substring(0, count) + suf;
    }
  } else {
    name = str;
  }

  return name;
};

applicationHelper.checkIsArray = (data) => {
  if (!data) {
    return undefined;
  }

  if (Array.isArray(data)) {
    return true;
  }
  return false;
};

applicationHelper.detectType = (data) => {
  if (typeof data === "object") {
    if (this.checkIsArray(data)) {
      return "array";
    }
    return "object";
  }

  return typeof data;
};

applicationHelper.isEmptyObject = (obj) => {
  if (!obj) {
    return undefined;
  }

  if (!this.detectType(obj) === "object") {
    return false;
  }

  if (Object.keys(obj).length === 0) {
    return true;
  }

  return false;
};

export default applicationHelper;
