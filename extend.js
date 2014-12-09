var config = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};

var newConfig = {
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

/**
*   PROBLEM:
*   common problem to jquery extend function which will over write
*   configuration if subtree existed
*
*   PURPOSE:
*   keep all default value and add additional new configs to the
*   default config and NOT overwrite defaule in the subtree.
*
*   @param {object} conf1 -> to be updated
*   @param {object} conf2 -> new config
*
*   return most up to date config settings 
*/

var extend = function(conf1, conf2){
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

// run true extend
config = extend( config, newConfig );
console.log(config);