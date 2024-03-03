const cookie={
    "name":"John",
    "lastName":"Doe"
    // eatCookie: function(){
    //     console.log("I am eating " + this.name);
    // }
};

cookie.name = "Clark";
console.log(cookie.name);

class Cookie{
    constructor(name, isGluten){
        this.name = name;
        this.isGluten = isGluten; 
    }

    eatCookie(){
        console.log("I am eating " + this.name);
    }
}
const cookie = new Cookie();