<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

interface Professional {
  id: number;
  name: {
    familiya: string;
    name: string;
    surname: string;
  }[];
  specialization: string;
  headOfDepartment?: boolean;
  image: string;
}

const props = defineProps<{
  doctors: Professional[];
  nurses: Professional[];
}>();

const path = ref(window.location.pathname);

const professionals = computed(() => {
  return path.value === '/' ? props.doctors : props.nurses;
});

</script>
<template>
  <div>
    <div class="mobail:w-4/5 mobail:p-0 px-3  m-auto">
      <h1 class="text-2xl pt-12 pb-4">
        {{ path === '/' ? 'Врачи' : 'Медсестры' }}
      </h1>
      <ul class="flex flex-wrap flex-col border border-gray-400 rounded-lg">
        <li v-for="professional in professionals" :key="professional.id"
          class="flex justify-between items-center p-4 border-b border-gray-400"
          :class="{ 'border-b-0': professionals.lastIndexOf(professional) === professionals.length - 1 }">
          <div class="flex flex-col flex-1">
            <h2 class="text-xl  mobail:text-2xl">
              {{ professional.name[0].familiya }}
            </h2>
            <span class="text-md mobail:text-lg">{{ professional.name[0].name }} {{ professional.name[0].surname }}</span>
          </div>
          <div class="items-end flex flex-col flex-1">
            <div>
            <strong>
               {{ professional.specialization }}
            </strong>
              <span v-show="path != '/nurse'"> отделение</span>
            </div>

            <span class="text-xs mobail:text-sm text-right text-gray-600">{{ professional.headOfDepartment ? 'Заведующий отделением' : '' }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
