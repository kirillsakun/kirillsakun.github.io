<template>
  <section>
    <coffeeShop
    v-for="(coffeeShop) in coffeeShops"
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

<style lang="scss" scoped>

</style>