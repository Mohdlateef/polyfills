console.log("abc");
delete Array.prototype.map;
let arr=[1,2,3,4]
// map polyfil
Array.prototype.map=function(callback)
{
let newarr=[];
for(let i=0;i<this.length;i++)
{
    // why we use this becze when we create array or any object 
    // it is created like this new Array[] so a new memory is created has and it is like objecj and the first thing that
    // is called the thing that we crate like array
    let ele=callback(this[i],i,this);
    newarr.push(ele);
}
return newarr;
}
let arr2=arr.map((ele)=>ele+1);
console.log(arr2);
// pass array and get the output as sum of array
Array.prototype.sum=function(){
    let sum=0;
    for(let i=0;i<this.length;i++)
    {
sum=sum+this[i]
    }
console.log(sum)
} 

arr2.sum();
