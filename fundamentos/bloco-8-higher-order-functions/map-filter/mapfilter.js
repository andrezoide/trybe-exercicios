const somenteMotoristar = (array) => {
  const semCarteira = [];
  array.forEach ( (item) => {
    if ( !item.isDriver ) {
        semCarteira.push(item);
    }
  });
  return semCarteira;
}

//codigo refatorado
const somenteMotoristar = (array) => {
    return array.filter( (item) => {
        return !item.isDriver;
    });
}
console.log(somenteMotoristar(users));