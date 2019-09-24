<template>
  <div id="minsk-coffee" class="underheader-mg">
    <section>
      <h1>Best Minsk Coffee Shops</h1>
      <p>
        First of all I want to note that I am not a certified 
        expert in the field of coffee.
        <br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem placeat nihil perspiciatis. Beatae, hic numquam, expedita commodi ducimus magnam quae iusto possimus incidunt reiciendis odio et, iure repudiandae natus atque?
        Non perferendis doloribus illum excepturi provident dignissimos corrupti, eum, illo pariatur cumque quisquam officiis. Porro quos, laborum labore pariatur ratione earum iure mollitia totam illum obcaecati id minus, dicta consequuntur?
      </p>
    </section>
    <section>
      <nav class="subnav">
        <router-link v-for="link in submenuLinks" :key="link.title" :to="`/minskcoffee${link.url}`">
          <h3>{{link.title}}</h3>
        </router-link>
      </nav>
    <router-view :coffeeShops = "coffeeShops" class="sheet"></router-view>
    </section>
  </div>

</template>
<script>
// import coffeeshops logos
import sverdlova26 from '../assets/img/coffee/26.jpg'
import vechnoeleto from '../assets/img/coffee/32.08.jpg'
import alt from '../assets/img/coffee/alt.jpg'
import coffeeholic from '../assets/img/coffee/coffeeholic.jpg'
import filtr from '../assets/img/coffee/filtr.jpg'
import grayhouse from '../assets/img/coffee/grayhouse.jpg'
import kcr from '../assets/img/coffee/kcr.jpg'
import manufactura from '../assets/img/coffee/manufactura.jpg'
import mesto from '../assets/img/coffee/mesto.jpg'
import seadog from '../assets/img/coffee/seadog.jpg'
import singlestep from '../assets/img/coffee/singlestep.jpg'
import whyknot from '../assets/img/coffee/whyknot.jpg'
import zerno from '../assets/img/coffee/zerno.jpg'

export default {

  data() {
    return{
      name: "MinskCoffee",
      submenuLinks: [
        { title: "Coffee shops", url: "/coffeeshops" },
        { title: "Favourites", url: "/favourites" },
      ],
      coffeeShops:[
        {
          title: 'Kitchen Coffee Roasters',
          instagram: 'kitchencoffeeroasters',
          img: kcr,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true
        },
        {
          title: '26',
          instagram: '26_sverdlova',
          img: sverdlova26,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true
        },
        {
          title: 'Why knot',
          instagram: 'whyknotcoffee',
          img: whyknot,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Mesto',
          instagram: 'coffee_mesto',
          img: mesto,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true
        },
        {
          title: 'SEADOG & FRIENDS',
          instagram: 'seadogfriends',
          img: seadog,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Coffeeholic',
          instagram: 'coffeeholic.minsk',
          img: coffeeholic,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Manufactura',
          instagram: 'manufacturaroasters',
          img: manufactura,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true
        },
        {
          title: 'Single Step Coffee co.',
          instagram: 'singlestepcoffee',
          img: singlestep,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Zerno',
          instagram: 'cafezerno',
          img: zerno,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Alternativa',
          instagram: 'altrncoffee',
          img: alt,
          roasters: true,
          description: `Lorem ipsum dolor sit amet.`,
          liked: false
        },
        {
          title: 'Grayhouse',
          instagram: 'grayhouse.official',
          img: grayhouse,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true 
        },
        {
          title: 'Filtr',
          instagram: 'filtr.coffee.team',
          img: filtr,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true 
        },
        {
          title: '32.08',
          instagram: 'coffee32.08',
          img: vechnoeleto,
          roasters: false,
          description: `Lorem ipsum dolor sit amet.`,
          liked: true 
        },
        
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .subnav{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid;
    nav{
      width: 100%;
      display: flex;
    }
    a{
      //min-width: 11rem;
      padding: 1rem 0;
      margin-right: 2rem;
      &:last-of-type {
        margin-right: 0rem;
      }
      &.router-link-active h3{
        font-weight: 400;
      }
      h3{
        font-size: 1.4rem;
        font-weight: 300;
        text-decoration: underline;
      }
    }
  }

  .sheet{
    padding: 3rem 0;
    //justify-content: space-evenly;
  }
</style>