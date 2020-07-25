//获取文本框对象
let txtKeyObj:any = document.querySelector('#txtKey');
let txtValueObj:any = document.querySelector('#txtValue');
let btnAdd:any = document.querySelector('#btnAdd');
let btnGet:any = document.querySelector('#btnGet');
let btnRemove:any = document.querySelector('#btnRemove');
let btnClear:any = document.querySelector('#btnClear');
let btnAddObj:any = document.querySelector('#btnAddObj');
let btnGetObj:any = document.querySelector('#btnGetObj');

//保存数据
btnAdd.onclick = function(){
    let key = txtKeyObj.value;
    let value = txtValueObj.value;
    localStorage.setItem(key,value);
    console.log('保存成功');
}

//获取数据
btnGet.onclick = function(){
    let key = txtKeyObj.value;
    let value = localStorage.getItem(key);
    console.log(`取出的数据为${value}`);
}

//删除数据
btnRemove.onclick = function(){
    let key = txtKeyObj.value;
    localStorage.removeItem(key);
    console.log(`删除成功`);
}

//清空数据
btnClear.onclick  = function(){
    localStorage.clear();
    console.log(`数据已清空`);
}

//存对象
btnAddObj.onclick = function(){
    let dog:Object = {
        name:`花花`,
        age:3,
        color:`white`
    }
    let strObj = JSON.stringify(dog);
    localStorage.setItem(`myDog`,strObj);
    console.log(`保存对象成功`);
}

//获取对象
btnGetObj.onclick = function(){
    let strJSON:string|null = localStorage.getItem(`myDog`)
    if(strJSON !=null){
        let obj = JSON.parse(strJSON);
        console.log(obj);
    }
    
    
}