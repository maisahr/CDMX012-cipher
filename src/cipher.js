const cipher = {
    encode : function(offset, string){

      if(typeof(string) === "string"){
        let i = 0
        let acumulaMensaje = ""

        while(i < string.length){
          let letra = string.slice(i, i + 1)
          let letraASCII = Number(letra.charCodeAt())
          let formula = ((letraASCII - 65) + offset) % 26 + 65
          let letraNueva = String.fromCharCode(formula)
          if(letraASCII < 65 || letraASCII > 90){
            letraNueva = letra;
          }
          acumulaMensaje += letraNueva
          i ++
        
          if(i == string.length){
            return acumulaMensaje
          }
        }
      }

      else{
        throw new TypeError("El mensaje no es válido.")
      }

    },

    decode : function(offset, string){

      if(typeof(string) === "string"){
        let i = 0
        let acumulaMensaje = ""

        while(i < string.length){
          let letra = string.slice(i, i + 1)
          let letraASCII = Number(letra.charCodeAt())

          let formula = ((letraASCII - 65) - offset) % 26 + 65
          if(formula < 65){
            formula = formula + 26
          }

          let letraNueva = String.fromCharCode(formula)

          if(letraASCII < 65 || letraASCII > 90){
            letraNueva = letra;
          }
          
          acumulaMensaje += letraNueva
          i ++

          if(i == string.length){
            return acumulaMensaje
          }

        }
      }

      else{
        throw new TypeError("El mensaje no es válido.")
      }
      
    }

};

export default cipher;
