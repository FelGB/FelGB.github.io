



document.querySelectorAll('.video-container video').forEach(vid =>{
 
   vid.onclick = () =>{

    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src')

   }

   document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';

   }     
});


// SELECCIONAR

let menuVisible = false;

function mostrarOcultar(){
    

    if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;

    }else{
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;

    }
  
}

function seleccionar(){
    // ocultar menu
    document.getElementById("nav").classList = "";
    menuVisible = false;


}


// efecto habilidades

function efectoHabilidades(){
    
    var skills = document.getElementById("skills");
    var distancia_skills =  window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skills >= 300){
         let habilidades = document.getElementsByClassName("progreso");
         habilidades[0].classList.add("html");
         habilidades[1].classList.add("javascript");
         habilidades[2].classList.add("Bootstrap");
         habilidades[3].classList.add("Angular");
         habilidades[4].classList.add("Netcore");
         habilidades[5].classList.add("css");
         habilidades[6].classList.add("Photoshop");
         habilidades[7].classList.add("wordpress");
    }



}

window.onscroll = function(){
    efectoHabilidades();
} 