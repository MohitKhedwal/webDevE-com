let flag=0;
// slideshow(flag)
setInterval(slideshow(flag),3000)
function control(x){
    flag=flag+x;
    slideshow(flag)
}
function slideshow(num){
    let slides=document.getElementsByClassName('slide')
    if(num>=slides.length){
        flag=0 // isko bhi 0 set karna padega kyuki apan ko flag bhi set karna hai
        num=0
    }
    else if(num<0){
        flag=num=(slides.length)-1
        num=(slides.length)-1

    }
    for(let y of slides){
  y.style.display="none"
    }
   
    slides[num].style.display="block"
}

const totop=document.getElementsByClassName('totop')
window.addEventListener('scroll',()=>{
    if(window.scrollY>110){
        totop.classlist.add('active')
    }
    else{
        totop.classlist.remove('active') 
    }
})

const bar=document.getElementsById('bar')
const nav=documnet.getElementsById('navh')
const close=document.getElementById('close')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })}
    if(close){
        close.addEventListener('click',()=>{
            nav.classList.remove('active')
        })
    }