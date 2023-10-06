<script setup>
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="body-wrapper">
    <!-- <h2>Color mode: {{ $colorMode.value }}</h2> -->
    <div class="my-auto mx-auto text-center">
      <h2 class="text-medium-grey">
        This board is empty. Create a new column to get started.
      </h2>
      <q-btn color="primary" rounded no-caps size="md" class="mt-8">
        + Add New Column
      </q-btn>
    </div>
  </div>
</template>
