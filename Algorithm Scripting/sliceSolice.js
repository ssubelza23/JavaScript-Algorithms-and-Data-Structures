function frankenSplice(arr1, arr2, n) {
    let bandera = [...arr2];
    bandera.splice(n,0,...arr1);
    return bandera;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));