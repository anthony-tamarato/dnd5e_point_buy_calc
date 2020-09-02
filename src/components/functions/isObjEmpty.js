import React from "react";

const isObjEmpty = (obj) => {
  for (var prop in obj) {
    return false;
  }
  return true;
};

export default isObjEmpty;
