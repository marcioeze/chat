
      $(document).ready(function () {

            document.getElementById("btn_enviar").addEventListener("click",msjPropio,false);

            document.getElementById("msj_btn_ajeno").addEventListener("click",msjAjeno,false);
            
            document.getElementById("btn_salida").addEventListener("click",salida_chat,false);

            document.getElementById("btn_entrada").addEventListener("click",entrada_chat,false);


        });

  
    function msjPropio() {


        var texto_mensaje=document.getElementById("campo_mensaje").value;
        
        if (texto_mensaje=="") {
            alert ("El mensaje no puede estar vacio");
        }
        else {
            $("#box_msj_propio").append("<div class='foto_propia'></div>");
        
            $("#box_msj_propio").append("<div class='msj_propio_enviado'>" + texto_mensaje + "</div>");
        }

        

    }


    function msjAjeno () {
        
        $("#box_msj_ajeno").append("<div class='foto_ajena'></div>");

        $("#box_msj_ajeno").append("<div class='msj_ajeno'>ACA IRIA EL TEXTO DEL MENSAJE AJENO</div>");

    }

    function salida_chat () {
        $("#box_salida_entrada").append("<p class='salida_chat'>User ha salido de este chat</p>");
    }

    
    function entrada_chat () {
        $("#box_salida_entrada").append("<p class='entrada_chat'>User ha entrado a este chat</p>");
    }