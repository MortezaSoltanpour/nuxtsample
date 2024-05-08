<template>
  <Head>
    <Title>Contact us</Title>
    <Meta name="desciption" content="this is my home page" />
    <Body class="classTest"></Body>
  </Head>
  <h1>this is contact page</h1>
  <button @click="changelayout">Change Layout</button>
</template>

<script setup>
definePageMeta({
  middleware: "log",
});

function changelayout() {
  setPageLayout("custom");
}
</script>
