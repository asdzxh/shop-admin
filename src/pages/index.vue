<template>
    <div>
        <h2>index</h2>
        <p>{{ token }}</p>
    </div>
</template>

<script setup>

import { useCookies } from '@vueuse/integrations/useCookies';
import { ref } from 'vue';
const cookie = useCookies();
const token = ref(cookie.get('admin-token'))

</script>

<style  scoped>
.btn {
    @apply bg-red-500 text-white px-10 py-2 rounded-full hover: (bg-red-700) focus:(ring-8 ring-red-400) transition-all duration-500
}
</style>