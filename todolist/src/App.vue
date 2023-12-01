<script setup>
import {ref,  computed} from 'vue';
import Greeting from './components/Greeting.vue'
import Flightbook from './components/Flightbook.vue'

const todos =ref([]);


const input_content = ref('');
const input_category = ref (null);

const todos_asc = computed(()=> todos.value.sort((a,b) => {
  return a.createdAt - b.createdAt
}))



</script>


<template>

  <Flightbook />
  <hr>
  <main class="app">
   <Greeting/>

    <section class="create-todo">
        <h2>Create to do</h2>

        <form @submit.prevent="addTodo">
          <p>What's on your todo list?</p>

          <input type="text" placeholder="e.g. make a video" v-model="input_content">
        </form>

        {{input_content}}

    </section>
  </main>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
