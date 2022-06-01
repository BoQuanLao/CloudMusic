export * from "./api/banner";




// 批量导出有问题 缺少类型约束

// const apis = import.meta.globEager("./api/*.ts");
// let modules = {};
// for (const api in apis) {
//   Object.keys(apis[api]).forEach((it,i,t) => {
//     modules[it] = apis[api][it]
//   });
// }
// console.log(modules)
// console.log(modules.getBanner())

// export default modules;
