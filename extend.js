var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
    banana: { 
        price: 200, 
        color:'yellow',
        name:'banana'   ,
        spiece:{
            name:'hello', 
            family:'world', 
            root:{
                name:'tree root'
            }
        }
     },
     durian: 100
};


var extend = function(obj1, obj2){
    for(var i in obj2){
        if(typeof obj1[i] === 'undefined')
            obj1[i] = obj2[i];
        else if(typeof obj2[i] === 'object') {
            obj1[i] = extend(obj1[i], obj2[i])
        }
        else obj1[i] = (obj1[i] != obj2[i]? obj2[i] : obj1[i]);
    }
    return obj1;
};
var config = extend( object1, object2 );
console.log(config);