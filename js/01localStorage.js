"use strict";
//获取文本框对象
var txtKeyObj = document.querySelector('#txtKey');
var txtValueObj = document.querySelector('#txtValue');
var btnAdd = document.querySelector('#btnAdd');
var btnGet = document.querySelector('#btnGet');
var btnRemove = document.querySelector('#btnRemove');
var btnClear = document.querySelector('#btnClear');
var btnAddObj = document.querySelector('#btnAddObj');
var btnGetObj = document.querySelector('#btnGetObj');
//保存数据
btnAdd.onclick = function () {
    var key = txtKeyObj.value;
    var value = txtValueObj.value;
    localStorage.setItem(key, value);
    console.log('保存成功');
};
//获取数据
btnGet.onclick = function () {
    var key = txtKeyObj.value;
    var value = localStorage.getItem(key);
    console.log("\u53D6\u51FA\u7684\u6570\u636E\u4E3A" + value);
};
//删除数据
btnRemove.onclick = function () {
    var key = txtKeyObj.value;
    localStorage.removeItem(key);
    console.log("\u5220\u9664\u6210\u529F");
};
//清空数据
btnClear.onclick = function () {
    localStorage.clear();
    console.log("\u6570\u636E\u5DF2\u6E05\u7A7A");
};
//存对象
btnAddObj.onclick = function () {
    var dog = {
        name: "\u82B1\u82B1",
        age: 3,
        color: "white"
    };
    var strObj = JSON.stringify(dog);
    localStorage.setItem("myDog", strObj);
    console.log("\u4FDD\u5B58\u5BF9\u8C61\u6210\u529F");
};
//获取对象
btnGetObj.onclick = function () {
    var strJSON = localStorage.getItem("myDog");
    if (strJSON != null) {
        var obj = JSON.parse(strJSON);
        console.log(obj);
    }
};
