let Array = [2, 0, 1, 2, 1];

function withoutRep(array){

    let newArray = []
    for (let i = 0; i < Array.length; i++) {
    let count = 0;
    for (let j = 0; j < Array.length; j++) {
         if(Array[i]==Array[j]){
            count+=1
         }
        
    }   
     if(count==1){
        newArray.push(Array[i])
     }
    }
    console.log(newArray)
}
withoutRep(Array)