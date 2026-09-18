function mincost(arr)
{ 
let cost = 0;

  while(arr.length > 1){
    arr.sort((a, b) => a - b);

    let sum = arr[0] + arr[1];
    cost += sum;

    arr.splice(0, 2);
    arr.push(sum);
  }

  return cost;
}
  
}

module.exports=mincost;
