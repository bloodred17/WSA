let contacts = {
    name: "Sharath",
    age: 35,
    address: {
        street: "1 Main St. Mg Road",
        city: "Bandgalore"
    },
    interests: ['writing blogs', 'biking'],
    getMessage : function() {
        return "Hello world";
    },
    getAll : function(){
        return "Name: "+this.name+
            "\nAge: "+this.age+
            "\nAddress: "+this.address;
    }
};

console.log(contacts.name);
console.log(contacts.age);
console.log(contacts['age']);
console.log(contacts.getMessage());
console.log(contacts.getAll());

// var obj = new Object();
// obj.name = "Ankur";
// obj.id = 123;
// console.log(obj);
for(let item in contacts){
    console.log(contacts[item]);
}

for(let item in contacts.address){
    console.log(contacts.address[item]);
}
