console.log("run");
delete Array.prototype.forEach;

let arr2=[2,3,4,5,6];
Array.prototype.forEach=function (callback){
   for(let i=0;i<this.length;i++)
   {
    callback(this[i],i,this);
   }
}
let sum=0;
arr2.forEach((iteam,i)=>{
    // console.log(iteam);
    // console.log(i);

    sum=sum+iteam+i
})
console.log(sum);