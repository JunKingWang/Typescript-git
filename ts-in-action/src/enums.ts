// 数字枚举
enum Role {
    Reporter,
    Developer,
    Maintainer=7,
    Owner,
    Guest
}

// 字符串枚举
enum Mesaage {
    Success = 'aaa',
    Fail = '123'
}

// Message = 'ac' 枚举不可修改

// 枚举分为两类
// 1、常量枚举成员Const：没有默认值，对已有枚举值的引用，赋值常量表达式--会在编译的时候运算出结果，以常量的形式出现在运行时的环境
enum Char {
    a,
    b = Char.a,
    d = 1 + 3
}
// 2、需要被计算的枚举成员Computed，在编译时不进行计算，在运行时计算
enum Char1 {
    c = Math.random(),
    e = '123'.length,
    // f  在computed后面的成员必须被赋予初始值，不然会报错
}

// 常量枚举 使用const声明的枚举，在编译阶段被移除，用处：在我们不需要对象，只需要对象的值的时候可以使用，减少编译环境的代码
const enum Month {
    Jan,
    Feb,
    Mars
}

let month = [Month.Jan, Month.Feb, Month.Mars]

// 枚举类型
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e : E = 3
let f : F = 0

// e === f 不同类型的枚举不允许相互比较

let e1: E.a = 1
let e2: E.b
let e3: E.a
// e1,e3可进行比较
let g1: G = G.a
// let g2: G = '123' 字符串类型的枚举取值只能时枚举成员的类型
let g3: G.b = G.b
// console.log(e2)
