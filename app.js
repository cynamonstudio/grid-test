const children = document.querySelector(".grid-wrapper").querySelectorAll("*")
let childrenArray=[]


children.forEach((item)=>{
let name = item.getAttribute("id")
if ( name==null){
    console.log("yes")
}else{
if( name.includes("box-") ){
  childrenArray.push(item)
}
}
})


childrenArray.forEach( (el,i)=>{
    gsap.set (el,{scale:0})
})

function boxAnimation(){
childrenArray.forEach( (el,i)=>{
    gsap.fromTo (el, .5,
        {scale:0}, {scale:1,delay:.2*i,ease:"back.out"})
})
}



const tl = gsap.timeline({})
tl.paused( true ); 

tl.fromTo("#line1",.4,{scale:1.2,opacity:0},{scale:1,opacity:1})
  .fromTo("#line2",.4,{scale:1.2,opacity:0},{scale:1,opacity:1},"<.4" )
  .fromTo("#line3",.6,{opacity:0},{opacity:1,ease:"none"})
  .call(boxAnimation)
  

tl.play()