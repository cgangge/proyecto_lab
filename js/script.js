
let botonBuscar = document.querySelector("#buscar")
      
      botonBuscar.addEventListener("click",()=>{
          console.log("boton presionado")
          sendApiRequest()
      })
  async function sendApiRequest(){
          let API_KEY = "22jq3t1z8wVLBE971dtvuB3T0PYOTwzt8tMaGJnr"
          let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=22jq3t1z8wVLBE971dtvuB3T0PYOTwzt8tMaGJnr');
          console.log(response)
          let data = await response.json()
          console.log(data)
          useApiData(data)
      }
      function useApiData(data){
        
        document.querySelector("#contenido").innerHTML += data.explanation
        document.querySelector("#contenido").innerHTML += "<img src='"+data.hdurl+"'style='whidth:50%;'/>";
    }


    
