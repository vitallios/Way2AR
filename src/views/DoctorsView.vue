<script setup>
import PersonalList from '@/components/PersonalList.vue';
import { doctors } from './../assets/list';

</script>

<template>
  <section class="h-full">
    <PersonalList :doctors="doctors" />
  </section>
</template>



