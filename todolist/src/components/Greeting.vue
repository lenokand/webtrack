<script setup>
import {ref, onMounted, watch} from 'vue';


const name = ref('');
let count = ref(0);

watch(name, (newVal)=>{
  localStorage.setItem('name', newVal)
})
watch(()=>count.value, (newCount)=>{
    localStorage.setItem('goals', newCount)
})


onMounted(()=>{
  name.value = localStorage.getItem('name') || 'Guest';
  count.value = localStorage.getItem('goals') || 0;

})

function decrease(){
    return count.value--
}


</script>

<template>
    <section class="greeting">
      What's up <input type="text" placeholder="Enter your name" v-model="name">
    </section>
    <section>
        <h2>My goal for today is {{count}}</h2>
        <button @click="decrease()" >decrease</button>
        <button @click="count++">increase</button>
    </section>
</template>