class DataHelper{
    dataKey:string;
    primaryKey:string;
    constructor(dataKey:string,primaryKey:string){
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    readData():any{
        //1、根据dataKey读取localStorage中的数据
        let str:string|null = localStorage.getItem(this.dataKey);
        //2、将json字符串转成数组
        let arr:Array<any>=[];
        if(str != null){
            arr= JSON.parse(str);
        }
        //3、返回数组对象
        return arr;
    }

    saveData(arr:Array<Object>):void{
        //1.将数组转成json字符串
        let str:string = JSON.stringify(arr);
        //2.把json字符串存入localStorage
        localStorage.setItem(this.dataKey,str);
    }

    addData(conStr:string):number{
        //读取localStorage中的数据，并转为数组
        let arr:any = this.readData();

        //接收评论内容字符串
        //将评论字符串封装成一个评论对象，并生成一个id
        let obj:any = {
            content:conStr
        }
        //自动生成id
        let newId = arr.length>0?arr[arr.length-1][this.primaryKey]+1:1;

        //将id存入对象
        obj[this.primaryKey]=newId;

        //将评论对象加入到数组里 
        arr.push(obj);

        //再把数组转成字符串，存入localStorage
        this.saveData(arr);

        //小细节，返回评论id
        return newId;
    }

    //删除评论
    removeDataById(id:number):boolean{
        //读取localStorage数据，返回数组
        let arr:any = this.readData();

        //找到要删除的评论的id
        let index = arr.findIndex((ele:any)=>{
            return ele[this.primaryKey] == id;
        })

        //数组删除splice
        if(index>-1){
            arr.splice(index,1);
        //保存
            this.saveData(arr);
            return true
        }
        //返回布尔值表示删除是否成功
        return false;
    }
}