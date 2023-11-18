<!-- 在您的 Vue 组件中，例如 DomainList.vue -->
<template>
  <div>
    <h1>域名列表</h1>
    <ul>
      <li v-for="domain in domains" :key="domain.id">
        {{ domain.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import { getDomains } from "../api/index"

import { ref, onMounted } from "vue"
const domains = ref([{ name: "", id: 1 }])


onMounted(async () => {
  let res = await getDomains()
  console.log(res);

  domains.value = res.data
})


</script>
