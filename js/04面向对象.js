"use strict";
//创建类
var City = /** @class */ (function () {
    function City(cName, cLevel) {
        this.cname = cName;
        this.clevel = cLevel;
    }
    City.prototype.about = function () {
        console.log("\u60A8\u6240\u5728\u7684\u57CE\u5E02\u3010" + this.cname + "\u3011\u7684\u5B89\u5168\u7B49\u7EA7\u4E3A\u3010" + this.clevel + "\u3011");
    };
    return City;
}());
var c1 = new City('PK', 1);
console.log(c1.cname);
c1.about();
