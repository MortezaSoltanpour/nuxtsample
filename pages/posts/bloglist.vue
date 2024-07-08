<template>
  <Head>
    <Title>data</Title>
  </Head>

  <h1>Blog 1</h1>
  <div v-if="isLoading">
    <svg
      width="30px"
      class="spin loader h-8 w-8 text-red-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  </div>
  <div v-for="post in posts" :key="post.id" style="padding: 10px 50px">
    <h4>
      <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
        {{ post.id }} - {{ post.title }}
      </NuxtLink>
    </h4>
    <p>
      {{ post.body }}
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const posts = ref([]);
const isLoading = ref(true);

onMounted(() => getData());

// await getData();

async function getData() {
  try {
    const data = await $fetch("/posts", {
      method: "GET",
      // body: {},
      // headers :{}
      baseURL: "https://jsonplaceholder.typicode.com",
      query: { _limit: 5 },
    });
    isLoading.value = false;
    posts.value = data;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
}
</script>
