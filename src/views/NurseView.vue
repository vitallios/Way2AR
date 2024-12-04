<script setup>
import PersonalList from '@/components/PersonalList.vue';
import {nurses} from './../assets/list';

</script>

<template>
  <section class="h-full">
    <PersonalList :nurses="nurses" />
  </section>
</template>'
