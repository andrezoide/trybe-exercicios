const waking = () => console.log('acordando');
const coffe = () => console.log('tomar cafezinho');
const sleep = () => console.log('a mimir');

const doingThings = (things) => things();

console.log(doingThings(coffe));