<template>
  <Head>
    <Title>data</Title>
  </Head>
  <h1>Blog 3</h1>
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
  <div v-if="pending">Fetching data in blog 3 ...</div>
  <br />
  <button @click="clear" class="btn btn-danger m-3">Clear</button>
</template>

<script setup>
const start = ref(0);

const {
  data: posts,
  error,
  refresh,
  pending,
} = useLazyFetch(
  () =>
    `https://jsonplaceholder.typicode.com/posts?_start=${start.value}&_limit=5`,
  {
    method: "get",
  }
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

function clear() {
  clearNuxtData();
}
</script>
