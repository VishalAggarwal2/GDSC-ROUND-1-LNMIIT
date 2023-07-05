
  gsap.to("#nav",{
    duration: 0.5,
    height: "70px",

    top: 0,
    left: 0,
    backgroundColor: "wheat",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -1rem ",
     
        end: "top -2rem",
        scrub: 1
      }
  })
  AOS.init();
  var btn =document.getElementById("Toggle");
var box= document.getElementById("nav-items-res");
btn.addEventListener("click",function(){
    console.log("cl");
    if(box.style.display=="none")
    {
        box.style.display="block"
    }
    else{
        box.style.display="none"
    }
})

var part1= document.getElementById("page5-right-main");
var part2= document.getElementById("page5-right-main2");
var btn1= document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
function change()
{
   
 if(part2.style.zIndex==-1){
    btn1.checked=  true;
            btn2.checked= false;
    part2.style.zIndex=1;
    part1.style.zIndex=-1;
    part1.style.opacity= 0.1;
    part2.style.opacity= 1;
 }
else{
    btn1.checked= false ;
    btn2.checked= true;
    part1.style.zIndex=1;
    part2.style.zIndex=-1;
    part2.style.opacity= 0.5;
    part1.style.opacity= 1;
}
}