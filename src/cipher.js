const cipher = {
    encode : function(a, b){

      return ((a - 65) + b) % 26 + 65 // Ciframos ASCII a ASCII
 
    },

    decode : function(x, y){
      let formula = ((x - 65) - y) % 26 + 65
      if(formula < 65){
        console.log(formula)
        formula = formula + 26
      }
      return formula
    },

};

export default cipher;
