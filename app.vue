<template>
  <div
    class="w-full h-svh overflow-hidden bg-dark-bg-lighter grid place-items-center"
  >
    <Loading v-if="loading" />
    <NuxtPage v-else />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = useLoading();
const router = useRouter();

router.beforeEach(() => {
  loading.value = true;
});
router.afterEach(() => {
  loading.value = false;
});
</script>
