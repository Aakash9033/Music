let songindex=0
let audioelement= new Audio("songs/1.mp3")
let masterplay=document.getElementById("masterplay")
let myprogressbar=document.getElementById("myprogressbar")
let gif=document.getElementById("gif")
let songsiteams=Array.from(document.getElementsByClassName("songiteam"))
let songiteamplay=Array.from(document.getElementsByClassName("songiteamplay"))
let privioussong=document.getElementById("privious")
let nextsong=document.getElementById("next")

let songs=[
    {
        songname:"Ye Maussam Ki Barish",
        filepath:"songs/1.mp3"
    },
    {
        songname:"Tum Mere Ho Is Pal",
        filepath:"songs/2.mp3"
    },
    {
        songname:"Galliyan Returns",
        filepath:"songs/3.mp3"
    },
    {
        songname:"Is Qudar Tum Se",
        filepath:"songs/4.mp3"
    },
    {
        songname:"Khamoshiyan",
        filepath:"songs/5.mp3"
    },
    {
        songname:"Muskurane Ki Vjh",
        filepath:"songs/6.mp3"
    },
    {
        songname:"Sanam Re",
        filepath:"songs/7.mp3"
    }
]

songsiteams.forEach((element,i)=>{
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname
})

masterplay.addEventListener("click",()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play()
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        gif.style.opacity=1
    }
    else{
        audioelement.pause()
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        gif.style.opacity=0
        
    }
})

audioelement.addEventListener("timeupdate",()=>{
    progress=parseInt(audioelement.currentTime/audioelement.duration*100)
    myprogressbar.value=progress

})
 
myprogressbar.addEventListener("change",()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100
})

makeallplay=()=>
{
    Array.from(document.getElementsByClassName("songiteamplay")).forEach((element)=>{

           element.classList.remove("fa-pause")
            element.classList.add("fa-play")
    
    
        })
    
}

songiteamplay.forEach((element)=>{

    element.addEventListener("click",(e)=>{
        if(audioelement.paused)
      {
        songindex=parseInt(e.target.id)
        makeallplay()
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioelement.src=`songs/${songindex}.mp3`
        audioelement.currentTime=0;
        audioelement.play()
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        gif.style.opacity=1
      }
      else
      {
        //songindex=parseInt(e.target.id)
        makeallplay()
        e.target.classList.remove("fa-pause")
        e.target.classList.add("fa-play")
        //audioelement.src=`songs/${songindex}.mp3`
        //audioelement.currentTime=0;
        audioelement.pause()
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        gif.style.opacity=0
      }

     })
}) 
nextsong.addEventListener("click",()=>{
   if(songindex>=6)
   {
    songindex=0
   }
   else
   {
    songindex +=1
   }
   audioelement.src=`songs/${songindex+1}.mp3`
   audioelement.currentTime=0;
   audioelement.play()
   masterplay.classList.remove("fa-play")
   masterplay.classList.add("fa-pause")
   gif.style.opacity=1
})
privioussong.addEventListener("click",()=>{
    if(songindex<=0)
    {
      songindex=6
    }
    else
    {
      songindex -=1
    }
    audioelement.src=`songs/${songindex+1}.mp3`
   audioelement.currentTime=0;
   audioelement.play()
   masterplay.classList.remove("fa-play")
   masterplay.classList.add("fa-pause")
   gif.style.opacity=1
})