const ImageVariants={
  initial:{
    opacity:0,
    filter:"blur(10px)"
  },
  animate:{
    filter:"blur(0px)",
    opacity:1,
    transition:{
      delay:1.5,
      duration:0.7,
      type:"tween"
    }
  }
}
const TextVariants={
  initial:{
    y:100,
    opacity:0,
    filter:"blur(10px)"
  },
  animate:{
    filter:"blur(0px)",
    opacity:1,
    y:0,
    transition:{
      delay:1.9,
      duration:1,
      type:"tween"
    }
  }
}
const btnVariants={
  initial:{
    opacity:0,
    filter:"blur(10px)"
  },
  animate:{
    filter:"blur(0px)",
    opacity:1,
    transition:{
      delay:2.6,
      duration:0.7,
      type:"tween"
    }
  }
}
const waveVariants={
  initial:{
    scale:0,
    filter:"blur(10px)"
  },
  animate:{
    filter:"blur(0px)",
    scale:1,
    transition:{
      delay:2.3,
      duration:0.7,
      type:"tween"
    }
  }
}
const variantsQ ={
  hidden:{
    scale:0,
  },
  show:{
    scale:1,
    transition:{ type:"spring" , stiffness:100, duration: 0.8 , delay:0.1 }
  },
}

export {waveVariants, ImageVariants , TextVariants , btnVariants , variantsQ}