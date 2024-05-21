<template>
  <!-- <NuxtLayout name="custom"> -->
  <h1>About page</h1>
  <!-- </NuxtLayout> -->
  <br />
  <br />
  <h2>current counter : {{ count }}</h2>
  <br />
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <br />
  <hr />
  <h2>pinia counter : {{ counterPinia.countPinia }}</h2>
  <br />
  <button @click="counterPinia.incrementPinia(count)">Increment</button>
  <button @click="counterPinia.decrementPinia(count)">Decrement</button>

  <hr />
  <h2>Toast</h2>
  <br />
  <button
    @click="showToast"
    type="button"
    class="btn btn-primary"
    id="liveToastBtn"
  >
    Show live toast
  </button>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div
      ref="liveToast"
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
import { useCounterPinia } from "../stores/counterPinia";

const { $bootstrap } = useNuxtApp();
const liveToast = ref(null);
function showToast() {
  const toast = new $bootstrap.Toast(liveToast.value);
  toast.show();
}

const counterPinia = useCounterPinia();

definePageMeta({
  layout: false,
  layout: "custom",
  middleware: ["log"],
});

useHead({
  title: "About",
  meta: [{ name: "description", content: "my About page description" }],
  bodyAttrs: {
    class: "testclass",
  },
});
</script>
