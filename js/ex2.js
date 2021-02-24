const Numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(Numbers.filter(x => x%2 !== 0));
console.log(Numbers.filter(x => (x%3 ===0) || (x%5 ===0)));
console.log(Numbers.filter(x=> x%3 ===0).map(x => x*x));
console.log(Numbers.map(x => x*2).filter(x => x%5 ===0).reduce((x,y)=> x+y,0));
