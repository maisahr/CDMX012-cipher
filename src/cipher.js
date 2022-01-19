const cipher = {
    encode : function(a, b){

      return ((a - 65) + b) % 26 + 65 // Ciframos ASCII a ASCII
 
    },

    decode : function(x, y){
      return ((x - 65) - y) % 26 + 65
    },

};

export default cipher;
