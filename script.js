function loco (){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main2"),
smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main2", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
pinType: document.querySelector(".main2").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();


function loader(){

document.addEventListener("mousemove",function(details){
  document.querySelectorAll(".slide").forEach((elem)=>{
      const position = elem.getAttribute("value");
      var x = (window.innerWidth - details.clientX * position) / 50;

      elem.style.transform = `translateX(${-x}px)`
  })
})
let button = document.querySelector("#main button");
let main = document.querySelector("#main");

button.addEventListener("click",function(){
    main.style.display = "none";
    gsap.to(".cntr-p", {
      onStart: function() {
        $(".cntr-p").scramble(10000, 100, "alphabet", true);
      },
      repeat: -1, // This makes the animation repeat infinitely
      yoyo: true, // This makes the animation reverse after each repeat (optional)
      duration: 4, // Duration of each repeat cycle (you can adjust this as needed)
      ease: "none" // Set easing function (optional, "none" makes it linear)
    });
})

}
loader();


function butterfly(){
  const butterflyCursor = document.createElement('div');
butterflyCursor.classList.add('butterfly-cursor');
document.body.appendChild(butterflyCursor);

document.addEventListener('mousemove', (event) => {
    butterflyCursor.style.left = `${event.clientX}px`;
    butterflyCursor.style.top = `${event.clientY}px`;

    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    glitter.style.left = `${event.clientX}px`;
    glitter.style.top = `${event.clientY}px`;
    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 1000); 
});

butterfly()


}

function page2Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page2",
      scroller:".main2",
      // markers:true,
      start:"top 45%",
      end:"top -80%",
      }
  })
  tl.from("#page2 #page2-one h5",{
    scale:0,
   
  },"a")
  tl.from("#page2 #page2-one h1",{
   scale:0,
  },"a")

  gsap.to("#page2 #line1",{
    width:"96vw",
    scrollTrigger:{
    trigger:"#line1",
    scroller:".main2",
    // markers:true,
    start:"top 80%",
    end:"top -50%",
    }
   })
   gsap.to("#page2 #line2",{
    height:"250vh",
    scrollTrigger:{
    trigger:"#line2",
    scroller:".main2",
    // markers:true,
    start:"top 20%",
    end:"top -50%",
    }
   })
   gsap.to("#page2 #line3",{
    width:"96vw",
    scrollTrigger:{
    trigger:"#line1",
    scroller:".main2",
    // markers:true,
    start:"top -100%",
    end:"top -200%",
    }
   })

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2-two",
    scroller:".main2",
    start:"top 46%",
    end:"top -80%"
  }
})
  tl2.from("#page2-two #pg1 #text " ,{
    y:"10%",
    stagger:0.5,
    opacity:0,  
  },"e")
  tl2.from("#page2-two #pg2 #text2 " ,{
    y:"10%",
    stagger:0.5,
    opacity:0,
  },"e")

  var zoom1 = document.querySelector("#zoom");
var zoom2 = document.querySelector("#zoom2");
zoom1.addEventListener("mouseenter",function(){
gsap.to("#zoom",{
  scale:1.2,
  duration:1.2,
  ease:"power1.out",
  // ease: "sine.out",
},"b")
gsap.to("#zoom2",{
  scale:.9,
  duration:1.5,
  ease:"power1.out ",

  // ease: "sine.out",
},"b")
})
zoom2.addEventListener("mouseenter",function(){
  gsap.to("#zoom",{
    scale:.9,
    duration:1.5,
    ease: "power1.out"
    // ease: "sine.out",
  },"f")
  gsap.to("#zoom2",{
    scale:1.2,
    duration:1.2,
    ease:"power1.out",
    // ease: "sine.out",
  },"f")
  })

var page2 = document.querySelector("#page2")
page2.addEventListener("mouseleave",function(){
  gsap.to("#zoom",{
    scale:1,
    duration:1.5,
    ease: "power1.out"
    // ease: "sine.out",
  },"x")
  gsap.to("#zoom2",{
    scale:1,
    duration:1.5,
    ease:"power1.out",
    // ease: "sine.out",
  },"x")
  })
  
}
page2Animation()

function page3Animation(){
 var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:".main2",
    start:"1% 0%",
    // markers:true,
    end:"top -50%",
    pin:true,
    scrub:true
  }
 })
 tl.to("#page3 .circle",{
  width:"100%",
  height:"100%",
  borderRadius:"5px"
 })
 tl.to("#page4",{
  y:"-40%"
 })
}
page3Animation()




// keshav part



function pagekAnimation(){
  let texts = document.querySelectorAll(".text");
  let videos = document.querySelectorAll(".video");
  
  function animateElement() {
      texts.forEach((textElement, index) => {
          const videoElement = videos[index];
          
          textElement.addEventListener("mousemove", function(e) {
            videos[index].style.display = "block";
              const videoWidth = videoElement.offsetWidth;
              const videoHeight = videoElement.offsetHeight;
  
              const xPos = e.clientX - (videoWidth / 2);
              const yPos = e.clientY - (videoHeight / 2);
  
              gsap.to(videoElement, {
                  duration: 0.5,
                  opacity: 1,
                  height: "80vh",
                  width: "50%",
                  left: xPos + "px",
                  top: yPos + "px",
              });
          });
  
          textElement.addEventListener("mouseleave", function() {
              gsap.to(videoElement, {
                  opacity: 0,
                  height: "20vh",
                  width: "20%",
                  duration: 0.2,
                  onComplete: () => {
                      videoElement.style.display = "none";
                  }
              });
          });
      });
  }
  
  animateElement();
  
}

pagekAnimation()

// Bhumi

function Bhumi(){
  var crsr = document.querySelector('.crsr');
  var crsr2 = document.querySelector('.crsr2');
  var crsr3 = document.querySelector('.crsr3');
  var img = document.querySelectorAll('.img');
  var image=document.querySelector('.MainImage')

  var customCrsr = document.querySelector('.custom-cursor');
  crsr.style.backgroundImage=`url(${img.src})`
  crsr2.style.backgroundImage=`url(${img.src})`
  crsr3.style.backgroundImage=`url(${img.src})`

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.page5',
    scroller:".main2",
    start:'27% 0%',
    end:'0% -90%',
    // markers:true,
    scrub:true,
    pin:true
}
})

tl.to('.page5 .sideScroller',{
  left:'-100%',
  
})

img.forEach((img)=>{
  img.addEventListener('mousemove',(e)=>{
      var rect = img.getBoundingClientRect();
      var imgSrc=e.target.src
     
     var currentX = e.pageX - rect.left;
      var currentY = e.pageY - rect.top;
      customCrsr.style.left= e.pageX + window.scrollX + 300 +'px';
      customCrsr.style.top= e.pageY + 3*(window.scrollY)/4 + 140 +'px'
    
      crsr.style.backgroundImage=`url(${imgSrc})`
  crsr2.style.backgroundImage=`url(${imgSrc})`
  crsr3.style.backgroundImage=`url(${imgSrc})`

  var x = currentX + 3 * crsr.getBoundingClientRect().height;
      var y = currentY + 5 * crsr.getBoundingClientRect().height;
      crsr.style.backgroundPosition = `-${x * 2 - crsr.getBoundingClientRect().width / 2}px -${y * 2 - crsr.getBoundingClientRect().height / 2}px`;

      var x2 = currentX + 3 * crsr2.getBoundingClientRect().height;
      var y2 = currentY + 5 * crsr2.getBoundingClientRect().height;
      crsr2.style.backgroundPosition = `-${x2 * 3 - crsr2.getBoundingClientRect().width / 2}px -${y2 * 3 - crsr2.getBoundingClientRect().height / 2}px`;

      var x3 = currentX + 3 * crsr3.getBoundingClientRect().height;
      var y3 = currentY + 5 * crsr3.getBoundingClientRect().height;
      crsr3.style.backgroundPosition = `-${x3 * 2 - crsr3.getBoundingClientRect().width / 2}px -${y3 * 2 - crsr3.getBoundingClientRect().height / 2}px`;

      // console.log(e.target.sr)
  })
})





var imageDiv=document.querySelectorAll('.imageDiv')
imageDiv.forEach((imgDiv)=>{
  imgDiv.addEventListener('mouseenter',(e)=>{
  customCrsr.style.display='flex'
})
})

imageDiv.forEach((imgDiv)=>{
  imgDiv.addEventListener('mouseleave',(e)=>{
  customCrsr.style.display='none'
})
})

}
Bhumi()



function footer(){
  
document.querySelector(".footer-top").addEventListener("mousemove", function(){
  gsap.to(".footer-top",{
      y:-20,
  })
})
document.querySelector(".footer-top").addEventListener("mouseleave", function(){
  gsap.to(".footer-top",{
      y:0,
  })
})
}

footer();