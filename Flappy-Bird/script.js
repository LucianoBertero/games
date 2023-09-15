
//extraccion de variables como el bloque

var block=document.getElementById("block")
var hole=document.getElementById("hole")
var character=document.getElementById("character")
var jumping=0
var counter=0



//El evento "animationiteration" se dispara cuando una animación CSS se repite
//Esto hace que cada vez que se completa la animacion del bloque negro, se genere pero con un hueco al medio
hole.addEventListener('animationiteration',()=>{
var random=-((Math.random()*300)+150)
console.log(random)
hole.style.top=random+"px"
counter++
})


setInterval(function(){
    
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"))//aca con getcompuedStyle accedemos al css de este objeto, con el getpropertyValue a su atributo top

    

    if(jumping==0){
        character.style.top=(characterTop+3)+"px"
    }

    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"))

    var cTop=-(500-characterTop)

    if((characterTop>480 )|| ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){

        alert("Game over. Score: "+(counter-1))
        character.style.top=100+"px"
        counter=0
    }


},10)


function jump(){

    jumping=1
    let jumpCount=0
    var jumpInterval=setInterval(function(){

        var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top=(characterTop-5)+"px"

        }

        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping=0
            jumpCount=0

        }
        jumpCount++


},10)
}