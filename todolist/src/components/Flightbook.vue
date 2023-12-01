<script setup>

import {ref, computed} from 'vue'

let flightMode = ref('return')
const firstDate = ref(new Date().toISOString().toUpperCase().split('T')[0])
const secondDate = ref(firstDate.value)

// function selectFlight(event){
//   console.log(event.target.value)
//   flightMode.value = event.target.value
// }
const isFirstDateAfterSecond = computed(()=> {return isoDateStringToDate( firstDate.value) > isoDateStringToDate( secondDate.value)})

function isoDateStringToDate(isoDateString){
  const [year, month, day] = isoDateString.split("-")
  return new Date(year, month-1, day)
}
function bookFlight(e){
  const message =  flightMode.value ==="oneWay"? `You have booked one way flight leaving on ${firstDate.value}` : 
  `You have booked two way flight leaving on ${firstDate.value} back ${secondDate.value}`;
  alert(message);
}


</script>

<template>
  <main>
    {{ flightMode }}
    <form @submit.prevent="bookFlight">
      
        <select v-model='flightMode'>
            <option value="oneWay" >one way</option>
            <option value="return">return flight</option>
        </select>
        <input type="date" v-model="firstDate" />
        <input type="date" v-model="secondDate" :disabled="flightMode !=='return'"/>
        <button :disabled="flightMode ==='return' && isFirstDateAfterSecond">Book</button>
        <p v-show="flightMode ==='return' && isFirstDateAfterSecond">Return date must be after departure date.</p>
    </form>
  </main>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        border: 1px solid #74256baa;
        padding: 30px;
        border-radius: 25px;
    }
    input{
      margin-bottom: 15px;
      border-radius: 10px;
      padding: 5px;
    }
    select{
      margin-bottom: 15px;
      border-radius: 10px;
      padding: 5px;
    }
    button{
      background: linear-gradient(90deg, rgba(217,255,223,1) 0%, rgba(255,199,234,1) 50%, rgba(244,207,196,1) 100%);
      border: 3px #eb70c4 solid;
      outline: none;
      transition: 3000ms ease;
    }
    button:hover{
      background: linear-gradient(90deg, rgba(217,255,223,1) 50%, rgba(255,199,234,1) 80%, rgba(244,207,196,1) 100%);
    }

</style>
