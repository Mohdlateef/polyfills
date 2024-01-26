const banckacc=function (name,acc,bal){

    this.name=name;
    this.acc=acc;
    this.bal=bal;
    banckacc.prototype.addbal=function(amount){
        this.bal+=amount;
    }
}
let cos1=new banckacc("umer","jandk",300);
console.log(cos1.__proto__);
cos1.addbal(300)
console.log(cos1.bal);

// now we are using generator funtion we are creating a object;
const ceateacc=function (name,acc,bal)

{
    let costumer=Object.create({
        addmoney:function(amount){
            costumer.bal+=amount;
        },
    });
    costumer.name=name;
    costumer.acc=acc;
    costumer.bal=bal;
    return costumer;
}
const costumer1=ceateacc("umer","jandk",1000);
console.log(costumer1.__proto__);
//simple way to create objects;
const createcos=function(name,acc,bal)
{
    const costumer3={

    }
    costumer3.name=name;
    costumer3.acc=acc;
    costumer3.bal=bal;
    costumer3.addmoney=function(amount){
        costumer3.bal+=amount;
    }
    return costumer3
}
let cost4=createcos("lateef","hdfc",400);
cost4.addmoney(500);
console.log(cost4.bal);