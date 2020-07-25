//可选参数
function gun(gName:string,count?:number):void{
    console.log(`【${gName}】武器的数量为【${count}】`);
}

gun('MK16');

//默认值
function gun2(gName:string,count:number=5):void{
    console.log(`【${gName}】武器的数量为【${count}】`);
}
gun2('ak75');

//剩余参数
function add(a:number,b:number,...c:number[]):void{
    let result:number = a+b;
    for(let item of c){
        result += item;
    }
    console.log(result);
}

add(1,2);
add(4,6,90);