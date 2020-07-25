//创建类
class City{
    cname:string;
    clevel:number;
    constructor(cName:string, cLevel:number){
        this.cname = cName;
        this.clevel = cLevel;
    }
    about(){
        console.log(`您所在的城市【${this.cname}】的安全等级为【${this.clevel}】`);
        
    }

}

let c1 = new City('PK',1);
console.log(c1.cname);
c1.about();