<template>
  <v-container fluid class="pa-0 ma-0" id="main-container">
    <v-layout row wrap>
      <v-flex class="light-bg skewbg">
      </v-flex>
      <v-layout row wrap>
        <v-flex lg6 class="zindex1">
          <v-layout row wrap class="pt-5">
            <v-flex xs4>

            </v-flex>
            <v-flex xs6>
              <img src="../assets/ars-creo-logo.png" />

            </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-5 header-content">
            <v-flex xs1 lg4>
            </v-flex>
            <v-flex xs10 lg6>
              <h1 class="main-title">DESIGN AND SOFTWARE DEVELOPMENT COMPANY</h1>
              <hr class="mt-5 mb-5" />
              <v-layout row wrap>
                <v-flex xs3>
                  email
                </v-flex>
                <v-flex xs9>
                  info@ars-creo.com
                </v-flex>
                <v-flex xs3>
                  phone
                </v-flex>
                <v-flex xs9>
                  +48 796 898 983
                </v-flex>
                <v-flex xs3>
                  office
                </v-flex>
                <v-flex xs9>
                  00-001 Warszawa, Chełmżyńska 180
                </v-flex>
              </v-layout>


            </v-flex>
          </v-layout>

        </v-flex>
        <v-flex lg6 class="dark-bg text-lg-right mt-5 pt-5 right-side">
          <v-layout row wrap class="mt-5 pt-5">
            <v-flex xs1></v-flex>
            <v-flex lg6 xs10 class="right-side-text mt-5 mb-5">
              <h1 class="mb-2">TECHNOLOGIES</h1>
              <p>PHP | SYMFONY | JAVA | C# |</p>
              <p>JavaScript | VUE.js |</p>
              <p>WEBGL | THREE.js | D3.js |</p>
              <p>Joomla | WordPress |</p>
              <hr class="mt-5 mb-5 ml-5"/>
              <h1 class="mb-2">SERVICES</h1>
              <p>SOFTWARE DEVELOPMENT |</p>
              <p>CUSTOM SOFTWARE DEVELOPMENT |</p>
              <p>WEB APPS | MOBILE APPS | DESKTOP APPS |</p>
              <p>UI DESIGN | 3D MAPS |</p>
              <p>DATA MANAGEMENT | DATA PROCESSING |</p>
            </v-flex>
            <v-flex lg6></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-container fluid class="zindex2 clients" mt-5>
      <h3 class="text-xs-center mb-3 white--text">Our software solutions where used by:</h3>
      <v-layout row wrap mb-5>
        <v-flex v-for="item in items" :key="item" class="xs6 sm2 lg1">
          <v-card title white :id=item.name class="logo-img" :class="[ item.background, item.padding]" v-on:click="onCl(item.name)">
            <v-img contain="true" :src="item.src" height="80"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h1 class="text-xs-center mt-5 grey--text">OUR SOFTWARE</h1>
    <v-container class="software">
      <v-layout row white>
        <v-flex class="xs12">
          <v-card v-for="slide in slides" :key="slide" class="mt-5 mr-2 ml-2 mb-5">
            <v-card-title>
              <h1>{{ slide.name }}</h1>
            </v-card-title>
            <v-img :src=slide.src contain="true"></v-img>
            <v-card-text class="font-weight-light title">
              {{ slide.content }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-card-actions>
            <v-toolbar>
              <v-title class="title">
                WEB DESIGN
              </v-title>
            </v-toolbar>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
            <v-layout row wrap>
              <v-flex
                      v-for="n in pages"
                      :key="n"
                      xs4
              >
                <v-card flat tile>
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <a :href=n.link>
                        <v-img v-on="on" :src=n.src height="150px"></v-img>
                      </a>
                    </template>
                    <span>{{n.alt}}</span>
                  </v-tooltip>

                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-footer class="pa-3 mt-3">
      <v-spacer></v-spacer>
      <div>Ars-Creo &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-container>
</template>

<script>
  // eslint-disable-next-line
  import { TweenMax, TimelineLite, TweenLite, TweenPlugin, Power2, Elastic, Ease, Bounce, Linear } from "gsap/TweenMax";



export default {
  data: () => ({
      size: 'sm',
      pages: [
        {
          src: require('@/assets/pages/galeriapolnocna.jpg'),
          alt: 'Galeria Północna',
          link: 'http://galeriapolnocna.pl'
        },
        {
          src: require('@/assets/pages/tomiauto.jpg'),
          alt: 'TomiAuto',
          link: 'http://tomiauto.pl'

        },
        {
          src: require('@/assets/pages/pmprecykl.jpg'),
          alt: 'PMP Recykl',
          link: 'http://pmprecykl.com'
        },
        {
          src: require('@/assets/pages/przedszkole.jpg'),
          alt: 'Przedszkole Mały Kopernik',
          link: 'http://przedszkole.ovh'
        },
        {
          src: require('@/assets/pages/dentysta.jpg'),
          alt: 'VitaDent',
          link: 'http://ostrow-dentysta.pl'
        },
        {
          src: require('@/assets/pages/enamellamp.jpg'),
          alt: 'Enamel Lamp',
          link: 'http://enamel-lamp.com/'
        }
      ],
      slides: [
        {
          name: "Custom CRM System",
          src: require('@/assets/slides/crm1.jpg'),
          content: "We build custom CRM which offer wide range of possibilities: time tracking, project value estimation, team comunication and many others."
        },
        {
          name: "Document management system",
          src: require('@/assets/slides/dokumenty.jpg'),
          content: "Document management system is a software which can helps you easly manage and distribute invoices, order sheets and many others documents between your employees or customers."
        }
        ,
        {
          name: "Advanced content management system",
          src: require('@/assets/slides/cms1.jpg'),
          content: "We have created advanced content management system where you can manage and upgrade conents on many of your web pages from one place."
        }
      ],
      items: [
        {
          src: require('@/assets/clients/logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/bps_logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/dzikie-logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/ekoplon-logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/galeria_polnocna_logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/hotelanders_logo.jpg'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/kenpol.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/pkobplogo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/pmprecykl.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/sgb_logo.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/sphinx.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
        {
          src: require('@/assets/clients/tomiauto.png'),
          background: "white",
          padding: "pa-2",
          name: "img1"
        },
      ]
    }),
  methods: {

  },
  mounted: function() {

    var logoImg = document.getElementsByClassName("logo-img");
    for(var i = 0; i < logoImg.length; i++){
      TweenMax.fromTo(logoImg[i], 4, {opacity: 0}, {opacity: 1, delay: i*.1, repeat: -1},);
    }
    let skewBg = document.getElementsByClassName('skewbg');
    let docSize = document.body.offsetWidth;
    let rightText = document.getElementsByClassName('right-side-text');
    let bodyRect = document.body.getBoundingClientRect();
    let elementRect = rightText[0].getBoundingClientRect();
    let offset = elementRect.left - bodyRect.left;
    TweenMax.fromTo(skewBg, 2, {width:2000}, {width:offset+100});


    console.log(offset);
    window.addEventListener("resize", function(event) {
      let bodyRect = document.body.getBoundingClientRect();
      let elementRect = rightText[0].getBoundingClientRect();
      let offset = elementRect.left - bodyRect.left;
      TweenMax.fromTo(skewBg, 2, {width:2000}, {width:offset+100});
    });
  }
}

</script>

<style lang="scss">
  .software{
    h1{
      font-weight: 300;
      font-size: 40px;
      color: #666;
    }
  }
  .clients{
    -webkit-box-shadow: 2px 0px 20px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 0px 20px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 0px 20px 0px rgba(0,0,0,0.75);
  }
  h3{
    font-size: 18px;
    font-weight: 100;
  }
  .small-img{
    width: 100px;
  }
  .right-side{
    color: #fff;
    z-index: -2;
    h1{
      font-size: 40px;
    }
    hr{
      background: #fff;
      color: #fff;
    }
  }
  .right-side-text{
    p{
      margin-bottom: 0px;
      font-size: 16px;
      font-weight: 900;
    }
  }
  .zindex1{
    z-index: 1;
  }
  .zindex2{
    z-index: 2;
  }

  .light-bg{
    background-color: #f2f3f7;
  }
  .dark-bg{
    background-color: #822544;

  }
  hr{
    background-color: #822544;
    color: #822544;
  }
  .main-title{
    font-weight: 900;
    font-size: 50px;
    line-height: 45px;

  }
  .skewbg{
    box-shadow: none !important;
    border-radius: 0px;
    padding: 200px;
    height: 1000px;
    width: 1000px;
    transform: skew(-20deg, 0deg);
    position: fixed;
    left: -200px;
    top: 0px;
    z-index: -1;
  }

  @media screen and (max-width: 800px) {
    .main-title{
      font-size: 40px !important;
    }
    .skewbg{
      display:none;
    }
    .right-side{
      padding-top: 0px !important;
      margin-top: 0px !important;
    }

  }
</style>
