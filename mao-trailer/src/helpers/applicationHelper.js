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

export default applicationHelper;
