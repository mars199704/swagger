<template>
  <div
    class="navigation fixed inset-y-0 left-0 w-40 overflow-hidden duration-300"
  >
    <ul class="absolute top-10 inset-x-0">
      <li :class="{ active: active_el === 1 }">
        <router-link to="/" class="href" @click="addActive(1)">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span class="title">Home</span>
        </router-link>
      </li>
      <li :class="{ active: active_el === 2 }">
        <router-link to="/hertz" class="href" @click="addActive(2)">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span class="title">Hertz</span>
        </router-link>
      </li>
      <li :class="{ active: active_el === 3 }" @click="addActive(3)">
        <router-link to="/taiwan" class="href">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span class="title">Taiwan</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const active_el = ref<number>(1);

    const addActive = (index: number) => {
      active_el.value = index;
    };

    return {
      active_el,
      addActive,
    };
  },
});
</script>

<style>
.navigation {
  background-color: #2b343b;
}

.navigation ul li.active {
  background-color: #4187f6;
}

.href {
  color: #fff;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  line-height: 4rem;
}
</style>
