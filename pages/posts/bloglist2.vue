<template>
  <Head>
    <Title>data</Title>
  </Head>

  <div v-for="post in posts" :key="post.id" style="padding: 10px 50px">
    <h4>
      <NuxtLink
        :to="{
          name: 'posts-contentid',
          params: { id: post.id, title: 'salam' },
        }"
      >
        {{ post.id }} - {{ post.title }}
      </NuxtLink>
    </h4>
    <p>
      {{ post.body }}
    </p>
  </div>
  <button @click="prev" class="btn btn-success m-3">Prev</button>
  <button @click="next" class="btn btn-success m-3">Next</button>
  <div v-if="pending">Fetching data ...</div>
</template>

<script setup>
const start = ref(0);

const {
  data: posts,
  error,
  refresh,
  pending,
} = await useAsyncData("posts", () =>
  $fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start.value}&_limit=5`
  )
);

function prev() {
  if (start.value > 0) {
    start.value -= 5;
    refresh();
  }
}

function next() {
  start.value += 5;
  refresh();
}
</script>
