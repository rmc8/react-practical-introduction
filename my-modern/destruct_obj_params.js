function greet({ name, age }) {
    console.log(`こんにちは、私は${name}です。${age}歳です。`);
}

const me = { name: "佐藤理央", sex: "female", age: 18 };
greet(me);

function greet_by_obj(obj) {
    console.log(`こんにちは、私は${obj.name}です。${obj.age}歳です。`);
}

greet_by_obj(me);