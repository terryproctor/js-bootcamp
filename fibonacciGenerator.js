function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
         let newArray = [];
        for (let i = 0; i<n; i++){
            if ([0,1].includes(i)) {
                newArray.push(i);
            } else {
                let nextVal = newArray[i-2] + newArray[i-1];
                newArray.push(nextVal);
            }
        }
        
        //Return an array of fibonacci numbers starting from 0.
        return  newArray;
    //Do NOT change any of the code below 👇
    }
    
    