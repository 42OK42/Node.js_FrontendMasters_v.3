export const count = num => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
	count += i;
	//console.log('i:', i);
	console.log('count',count);
  }
  return count;
}

export const something = () => {}