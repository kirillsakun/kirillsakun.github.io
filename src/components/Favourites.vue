<template>
  <section v-if="coffeeShops.filter(item=>{
      return item.liked
    }).length">
    <coffeeShop
    v-for="(coffeeShop) in coffeeShops.filter(item=>{
      return item.liked
    })"
    :key="coffeeShop.title"
    :coffeeShop="coffeeShop">
    </coffeeShop>
  </section>
</template>

<script>
import coffeeShop from './coffeeShop';

export default {
  components:{
    coffeeShop
  },
  props:{
    coffeeShops:{
      type: Array,
      required: true
    }
  }
}

</script>

<style>

</style>