<template>
 <div class="wrapper">
    <div class="left"></div>
    <div class="right"></div>
    <nav class="nav">
      <ul>
        <li class="logo">TPHUC</li>
        <li class="menu"><i class="fa fa-bars"></i></li>
        <li class="collection">collection</li>
        <li class="explore">explore</li>
        <li class="search"><router-link to="/login">Login</router-link></li>
         
        <li class="profile">
          <div class="img"></div>
        </li>
      </ul>
    </nav>

    <div class="content">
      <div class="img-wrapper">
        <div class="karina"></div>
      </div>

      <div class="info">
        <ul>
          <li>source: codicts</li>
          <li>@codicts</li>
          <li>codicts/Photography-Portfolio-Landing-Page</li>
          <li><i class="fa fa-share-alt"></i></li>
        </ul>
      </div>

      <div class="text">
        <h1>pro blog</h1>
        <p>blog somethings that you think</p>
      </div>

      <div class="name">thanh phuc</div>

      <div class="bottomnav">
        <ul>
          <li>Your Hobbies</li>
          <li>Your Life</li>
          <li>Your Love</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import {TweenMax, Power2, Power3, Expo, Circ} from 'gsap'
import "./Home.css"

export default {
  name: "Home",
  mounted: function(){
    this.startAnimations();
  },
  methods:{
    startAnimations: function(){
      // gsap.to("#title",{ duration: 1, color: "red"})

    TweenMax.to('.left', 2, {
      delay: .8,
      width: '50%',
      ease: Power2.easeInOut
    })

    TweenMax.to('.right', 2, {
      delay: .6,
      width: '50%',
      ease: Power3.easeInOut
    })

    TweenMax.from('.nav', 2, {
      delay: .8,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.from('.text h1', 2, {
      delay: .6,
      x: 1000,
      ease: Circ.easeInOut
    })

    TweenMax.from('.text p', 2, {
      delay: .7,
      x: 1000,
      ease: Circ.easeInOut
    })

    TweenMax.to('.karina', 2, {
      delay: 1.5,
      width: '800px',
      ease: Power2.easeInOut
    })

    TweenMax.staggerFrom('.bottomnav ul li', 2, {
      delay: 1,
      x: 1000,
      ease: Circ.easeInOut
    }, 0.08)

    TweenMax.from('.info', 2, {
      delay: 1.5,
      y: 100,
      ease: Circ.easeInOut
    })

    TweenMax.from('.name', 2, {
      delay: 1.5,
      x: -600,
      ease: Circ.easeInOut
    })

    }
  }
  
};
</script>