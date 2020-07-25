"use strict";
//可选参数
function gun(gName, count) {
    console.log("\u3010" + gName + "\u3011\u6B66\u5668\u7684\u6570\u91CF\u4E3A\u3010" + count + "\u3011");
}
gun('MK16');
//默认值
function gun2(gName, count) {
    if (count === void 0) { count = 5; }
    console.log("\u3010" + gName + "\u3011\u6B66\u5668\u7684\u6570\u91CF\u4E3A\u3010" + count + "\u3011");
}
gun2('ak75');
//剩余参数
function add(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    var result = a + b;
    for (var _a = 0, c_1 = c; _a < c_1.length; _a++) {
        var item = c_1[_a];
        result += item;
    }
    console.log(result);
}
add(1, 2);
add(4, 6, 90);
