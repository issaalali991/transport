<template>
  <div>
   <baseStartpageHeader />
  </div>
</template>

<script lang="ts" setup>
const { find, findOne } = useStrapi();
const name = ref('');
const { data } = await useFetch('http://localhost:1337/api/infos');
name.value = data.value.data[0].name;
console.log(data.value);
</script>
