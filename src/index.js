module.exports = function getZerosCount(number, base) {

 let simpleArr =[];
 let i = 2;
 let proto = base;

	while(i<=proto){

        if (proto % i == 0) {
        	simpleArr.push(i);
        	proto = proto/i;
        } else {i++};
	} 
	    
	simpleArr.sort((a,b)=>{return a-b}); // got array of simple numbers for base
  
	let obj = {};

    for (let i = 0, length = simpleArr.length; i < length ; i++) {
    	
    	let str = simpleArr[i];
    	obj[str] = true; 
    }

   	simpleArr = Object.keys(obj); // deleted the same elements from array
   
   	let times = []; /* array with how many times each simple number 
   	is in base ex: for 10 (1 time -2, 1 time -5)*/
    let que = base;

    for(let i = 0, length = simpleArr.length; i < length; i++){
        
        times[i] = 0;
    	while (que % simpleArr[i] == 0){
    	
    		times[i]++;
    		que = que/simpleArr[i];  
    	}
    } 
    
    let pow = [];    
    let countZero = [];  // count zeros for every simple number
        
	for(let i = 0, length = simpleArr.length; i < length; i++){ 

		pow[i]=1;
		countZero[i]=0;

    	while (number/Math.pow(simpleArr[i],pow[i]) >1 ){
 	 
 	    	countZero[i] += Math.floor(number/Math.pow(simpleArr[i],pow[i]));
 	    	pow[i]++;
 	    
    	}
    } 

	let res =[];

	for(let i = 0, length = countZero.length; i < length; i++){
     	
     	res.push(+countZero[i]/+times[i]);
	}

    return Math.floor(Math.min(... res));
}  
  