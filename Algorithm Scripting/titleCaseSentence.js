function titleCase(str) {
  str = str.toLowerCase();
  let expreReg =/(^|\s)\S/g;
  return str.replace(expreReg,L => L.toUpperCase());
  }
  
  console.log(titleCase("I'm a little tea pot"));
  