<template>
<h1>{{getCount}}</h1>
  <button @click="increment">increment</button>
</template>
<script setup>

import { useStore } from 'vuex';
import {ref,computed} from 'vue';
const store=useStore();
const mapGetter = (getterName) => {
      return computed(() => store.getters[getterName]);
    };
     const getCount = mapGetter('getCounter');
const increment=()=>{
    store.dispatch("increment",10);
}
</script>