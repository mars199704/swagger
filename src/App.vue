<template>
  <Nav />
  <router-view class="ml-40" />
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>
