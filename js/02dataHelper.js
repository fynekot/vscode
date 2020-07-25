"use strict";
var DataHelper = /** @class */ (function () {
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    DataHelper.prototype.readData = function () {
        //1、根据dataKey读取localStorage中的数据
        var str = localStorage.getItem(this.dataKey);
        //2、将json字符串转成数组
        var arr = [];
        if (str != null) {
            arr = JSON.parse(str);
        }
        //3、返回数组对象
        return arr;
    };
    DataHelper.prototype.saveData = function (arr) {
        //1.将数组转成json字符串
        var str = JSON.stringify(arr);
        //2.把json字符串存入localStorage
        localStorage.setItem(this.dataKey, str);
    };
    DataHelper.prototype.addData = function (conStr) {
        //读取localStorage中的数据，并转为数组
        var arr = this.readData();
        //接收评论内容字符串
        //将评论字符串封装成一个评论对象，并生成一个id
        var obj = {
            content: conStr
        };
        //自动生成id
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        //将id存入对象
        obj[this.primaryKey] = newId;
        //将评论对象加入到数组里 
        arr.push(obj);
        //再把数组转成字符串，存入localStorage
        this.saveData(arr);
        //小细节，返回评论id
        return newId;
    };
    //删除评论
    DataHelper.prototype.removeDataById = function (id) {
        var _this = this;
        //读取localStorage数据，返回数组
        var arr = this.readData();
        //找到要删除的评论的id
        var index = arr.findIndex(function (ele) {
            return ele[_this.primaryKey] == id;
        });
        //数组删除splice
        if (index > -1) {
            arr.splice(index, 1);
            //保存
            this.saveData(arr);
            return true;
        }
        //返回布尔值表示删除是否成功
        return false;
    };
    return DataHelper;
}());
