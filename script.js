gsap.from(".bar",{
    color:"red",
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.3
})

gsap.from("#title",{
    color:"red",
    duration:1,
    delay:0.2,
    opacity:0,
    stagger:0.3
})


gsap.from("#log",{
    x:1000,
    duration:0.5,
    rotate:360,
    borderRadius:"2px",
    scale:1
})
gsap.to("#log",{
    x:-1,
    duration:1,
    delay:1,
    rotate:360,
    borderRadius:"2px",
    scale:1
})

