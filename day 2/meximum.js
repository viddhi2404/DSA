
let arr = [-1,-5,-9,-20,-41,-25,-36,0,-0]



let max = -Infinity;
for(let v=0; v<arr.length; v++){
    if(max < arr[v]){
        max = arr[v]
    }
}

console.log(max)