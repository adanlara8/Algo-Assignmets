//1
var myNumber=42;
var myName="Adan";
console.log(myNumber)
console.log(myName)
var temp=42;
myNumber=myName;
myName=temp;
console.log(myNumber)
console.log(myName)
//2
for(var num =-52;num<1067;num++){
    console.log(num);
}
//3
function beHappy(){
    console.log("good morning");
}
for(var num = 0;num<99;num++){
    if(num<99){
        beHappy();
    }
}
//4
for(var num=-300;num<1;num++){
    if(num%3==0){
        if(num==-6||num==-3){
            continue;
        }
        console.log(num)
    }
}
//5
var num1=2000;
while(num1<5280){
    num1=num1+1
    console.log(num1);
}
//6
/*function birthday(){
    if(birthday(10,8)||birthday(8,10)){
        console.log('happy bday')
    }
    else{
        console.log('its not your bday yet')
    }
}
birthday(10,8);
birthday(12,4)*/
//7
for(var year=0;year<2450;year++){

    if(year%4==0||year%400==0){

        if(year%100==0){
            continue;
        }
    console.log(year)

    }
}
