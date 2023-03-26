function comb(myArray, a){
    let myNewArray = [];
    for (let i=0; i<myArray.length;i++){
        let count = 0;

        for(let j=0; j<myArray.length;j++){
            if(myNewArray.includes(myArray[i,j]))
            continue;
            if(myArray[i]+myArray[j]==a){
                count++
                myNewArray.push(myArray[i],myArray[j])
            }
        }
    }
    console.log(myNewArray.length/2);
}
    comb([2, 3, 4, 1, 8, 4], 5);