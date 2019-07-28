// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;

// 对象
let obj: object = {x: 1, y: 2} //不允许修改属性
let obj1: {x: number, y: number} = {x: 2, y: 3}
obj1.x = 2

// undefined, null
let un: undefined = undefined;
let nu: null = null;
// 可通过修改tsconfig.json文件修改使得undefined,nullf赋值给别的类型  "strictNullChecks": true,修改为false

// void
let noReturn = () => {}

// any 可被任意赋值，和js一致
let x: any = 1;
x = 'a'
x = {}

// never  不会有返回值的类型 有两种情况，一种返回错误，一种死循环
let error = ():never => {
    throw new Error('error')
}

let endledd = ():never => {
    while(true) {}
}