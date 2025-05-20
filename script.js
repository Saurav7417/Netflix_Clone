var play = document.querySelector("#name #play")

play.addEventListener("mouseenter", function(){
    play.style.height = '42px'
    play.style.width = '104px'
    play.style.border = '2px solid white'
})

play.addEventListener("mouseleave", function(){
    play.style.height = '38px'
    play.style.width = '100px'
    play.style.border = 'none'
})

var watch = document.querySelector("#name #watch")

watch.addEventListener("click", function(){
    window.open("https://www.youtube.com/watch?v=b9EkMc79ZSU")
})


var movie = document.querySelectorAll("#movies .movie")

movie.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        elem.style.height = '250px'
        elem.style.width = '200px'
    })

    elem.addEventListener('mouseleave', function(){
        elem.style.height = '100%'
        elem.style.width = '180px'
    })
})


var movie2 = document.querySelectorAll("#movies2 .movie")

movie2.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        elem.style.height = '250px'
        elem.style.width = '200px'
    })

    elem.addEventListener('mouseleave', function(){
        elem.style.height = '100%'
        elem.style.width = '180px'
    })
})


var back = document.querySelector("#backimg")

var img = document.querySelector("#backimg img")

var video = document.querySelector("#backimg video")


back.addEventListener('mouseenter', ()=>{
    img.style.display = 'none'
    video.play()
})

back.addEventListener('mouseleave', ()=>{
    img.style.display = 'block'
    video.pause()
})