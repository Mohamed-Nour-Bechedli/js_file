function reversestring(str){
    const strev=str.split('').reverse().join(''); //turn the string to array then reverse it and join it back to string
    return strev;
}

function countcharacters(str){
    const arr=str.split(''); // turn the string to array
    const count=arr.length;
    return count;
}

function capitalizewords(sent){
    const chars=sent.split('');
    let capitalize=true;
    for(let i=0;i<cap.length;i++){
        if (chars[i]===' '){
            capitalize=true; // Next character should be capitalized
        }
        else if(capitalize){
            chars[i]=chars[i].toUpperCase(); // Capitalize current letter
            capitalize=false;
        }
    }
    return chars.join('');
}

function minMax(arr){
    if(arr.length==0) return [undefined, undefined];

    for(let i=0;i<arr.length;i++){
        if(arr[i]<=arr[0]){
            let min=arr[i]; //find the minimal number
        }
        if(arr[i]>=arr[0]){
            let max=arr[i]; // find the maximal number
        }
    }
    return [min,max];
}

function sumofarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]; //adding every element of the array to the variable sum
    }
    return sum
}

function filterarray(arr, condition){
    let filtered=[];
    for(let i=0;i<arr.length;i++){
        if(condition(arr[i])){ //filter every element based on a condition 
            filter.push(arr[i]); //add the elements to filtered
        }
    }
    return filter;
}

function factorial(num){
    if(num<0){
        return "no factorial for negative numbers"; // return message if the number is negative
    }
    else if(num===0 || num===1){
        return 1; // return 1 for number 0 and 1
    }
    else{
        let result=1
        for(let i=1;i<=num;i++){
            result*=i; // return the factorial number of num
        }
    }
    return result;  
}

function isprime(num){
    if(num<=1){
        return false; // Numbers inferieur or equal to 1 not a prime number
    }
    if(num>=3){
        return true; // Numbers above three could be a prime number 
    }
    if(num%2===0){
        return false; // Number with rest of division equal 0 are not prime number
    }
    const sqrtnum=Math.sqrt(num);
    for(let i=3;i<=sqrtnum;i+=2){
        if(num%i===0){
            return flase;
        }
    }
    return true;
}

function fibonaccisequence(n){
    const sequence=[0,1]; //intialize a sequence

    if(n<=0){
        return []; // return empty array
    }
    if(n===1){
        return [0]; // return the first number
    }
    if(n===2){
        return sequence; // return the value in the sequence
    }
    for(let i=2;i<n;i++){
        sequence.push(sequence[i-1]+sequence[i-2]); // adding the previous elements and pushing them to the sequence
    }
    return sequence;
}