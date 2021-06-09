//1
var value= 0;
var arr=[1,2,3,4,5];

function pushFront(arr,value){
    for(let i=arr.length; i>0 ;i--){
        arr[i]=arr[i-1]
    }
    arr[0]=value;
}
pushFront(arr, value);
console.log(arr);

//2
var arr2=[1,2,3,4,5];
function popFront(arr2){
    const val=arr2[0];
    for(let i=0; i < arr2.length;i++){
        arr2[i]=arr2[i+1];
    }
    arr2.length=arr2.length-1
}
popFront(arr2)
console.log(arr2)
//3
var arr3=[1,2,3,4,5];
var index=2;
function popIndex(arr3,index){
    toRemove=arr3[index];
    for(let i=index;i<arr3.length;i++){
        arr3[i]=arr3[i+1];
    }
    arr3.length=arr3.length-1;
    console.log(arr3);
    return toRemove;
}
popIndex(arr3,index);

//4
var arr4=[1,2,3,4,5,6,7];
function swapPairs(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
        
    }
}
swapPairs(arr4);
console.log(arr4);
//5
var arr5=[1,1,1,2,2,2,3,3,4,5,5,6];
function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
    console.log(newArr)
	return newArr;
}
removeDupesUnnested(arr5)