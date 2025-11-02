const str = null;
console.log(str?.substring(1)); // レシーバーstrがnull

let value = null;
console.log(value ?? "規定値");