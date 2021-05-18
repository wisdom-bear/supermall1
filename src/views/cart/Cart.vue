<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{}})</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Cart",
  components: {
    NavBar,
  },
  computed: {
    cartLength() {
      return $store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background: pink;
  color: #fff;
  font-weight: 700;
}
</style>