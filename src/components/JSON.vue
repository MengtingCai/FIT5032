// Activity 1: Import JSON files (authors.json and bookstores.json) // TODO: CODE TO IMPORT JSON
FILES HERE import authors from "../assets/json/authors.json" import bookstores from
"../assets/json/bookstores.json"
<!-- JSONLab.vue -->
<template>
  <div class="json-lab">
    <h1>🗄️ JSON Data & Vue Directives Lab</h1>

    <section class="lab-section">
      <h2>📚 Working with JSON Arrays</h2>
      <p>Our <code>authors.json</code> contains an array of author objects.</p>

      <h3>Iterating through Arrays</h3>
      <!-- Activity 6: Render a list containing author names and their birth years. Hint: Make use of the v-for directive to iterate through the array of authors. -->
      <!-- TODO: CODE TO RENDER LIST OF AUTHORS HERE -->
      <ul>
        <li v-for="author in authors" :key="author.id">
          {{ author.name }} ({{ author.birthYear }})
        </li>
      </ul>

      <h3>Filtering Arrays</h3>
      <!-- Activity 7: Render a list containing authors born after 1850. Hint: Make use of the v-for directive to iterate through the array of authors that you have filtered out. -->
      <p>Authors born after 1850:</p>
      <!-- TODO: CODE TO RENDER LIST OF AUTHORS HERE -->
      <ul>
        <li v-for="author in modernAuthors" :key="author.id">
          {{ author.name }} ({{ author.birthYear }})
        </li>
      </ul>

      <h3>Mapping Arrays</h3>
      <p>Famous works:</p>
      <ul>
        <!-- Activity 8: Render a list of all famous works. Hint: Use the v-for directive to iterate through the array of authors that you have filtered out. -->
        <!-- TODO: CODE TO RENDER LIST OF FAMOUS WORKS HERE -->
        <li v-for="work in allFamousWorks" :key="work">
          {{ work }}
        </li>
      </ul>

      <h3>Finding in Arrays</h3>
      <p>Finding by property: {{ orwell?.name }}</p>

      <h3>Nested Arrays/Objects</h3>
      <p>{{ austen?.name }}'s works:</p>
      <!-- Activity 9: Render a list of Austen's works. Hint: Use the v-for directive to iterate through the array of authors that you have filtered out. -->
      <!-- TODO: CODE TO RENDER LIST OF AUSTEN'S WORKS HERE -->
      <ul>
        <li v-for="work in austen.famousWorks" :key="work.title">
          {{ work.title }} ({{ work.year }})
        </li>
      </ul>
    </section>

    <section class="lab-section">
      <h2>🏢 Working with JSON Objects</h2>
      <p>Our <code>bookstores.json</code> is a JSON object.</p>

      <h3>Accessing Properties</h3>
      <p>
        Company:
        <!-- Activity 9a: Get the company name from the bookstores object. -->
        <!-- TODO: CODE TO GET COMPANY NAME HERE -->
        {{ bookstores.name }}
      </p>

      <p>
        Total Stores:
        <!-- Activity 9b: Get the total number of stores from the bookstores object. -->
        <!-- TODO: CODE TO GET TOTAL STORES HERE -->
        {{ bookstores.totalStores }}
      </p>

      <h3>Iterating Object Properties</h3>
      <p>Store Types:</p>
      <!-- Activity 10: Iterate through the storeTypes array and display the store type and the number of stores that use that type. -->
      <!-- TODO: CODE TO RENDER LIST OF STORE TYPES HERE -->
      <ul>
        <li v-for="(count, type) in bookstores.storeTypes" :key="type">{{ type }}: {{ count }}</li>
      </ul>

      <h3>Nested Objects</h3>
      <p>Opening Hours:</p>
      <!-- Activity 11: Iterate through the openingHours object and display the day of the week and the opening and closing times. -->
      <!-- TODO: CODE TO RENDER LIST OF OPENING HOURS HERE -->
      <ul>
        <li v-for="(hours, day) in bookstores.openingHours" :key="day">
          {{ day }}: {{ hours.open }} - {{ hours.close }}
        </li>
      </ul>

      <h3>Working with Arrays in Objects</h3>
      <!-- Activity 12: Get the top sellers from the bookstores object. -->
      <!-- TODO: CODE TO GET TOP SELLERS HERE -->
      <p>We operate in:</p>
      <p>Our #1 seller:</p>
      <ul>
        <li v-for="(seller, index) in bookstores.topSellers" :key="index">
          {{ seller }}
        </li>
      </ul>
    </section>

    <section class="lab-section">
      <h2>v-if & v-else</h2>
      <p>Toggle visibility based on a condition.</p>
      <!-- Activity 13: Toggle the message visibility when the button is clicked. -->
      <!-- TODO: CODE TO TOGGLE MESSAGE VISIBILITY HERE. Hint: Use the v-if directive. -->
      <button @click="showMessage = !showMessage">Toggle Message</button>
      <p v-if="showMessage" class="message success">✨ You're a Vue superstar! ✨</p>
      <p v-else class="message">Click the button to see a message.</p>
    </section>

    <section class="lab-section">
      <h2>Attribute, Class and Style Binding with <code>v-bind</code></h2>
      <p :class="successClass">Highlighting Specific Authors:</p>

      <p :style="{ color: specificAuthorsColor, fontSize: specificAuthorsFontSize }">
        {{ orwell.name }}
      </p>
      <img :src="orwellImg" />
      <p>Birth year: {{ orwell.birthYear }}</p>
      <p>Works:</p>
      <ul>
        <li v-for="work in orwell.famousWorks" :key="work.title">
          {{ work.title }}({{ work.year }})
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const specificAuthorsColor = ref('red')
const specificAuthorsFontSize = ref('20')
const successClass = ref('success')
const orwellImg = ref(
  'data:image/webp;base64,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'
)
// Activity 1: Import JSON files (authors.json and bookstores.json)
// TODO: CODE TO IMPORT JSON FILES HERE
import authors from '../assets/json/authors.json'
import bookstores from '../assets/json/bookstores.json'

const showMessage = ref(false)

// Activity 2: Get authors born after 1850
const modernAuthors = computed(() =>
  // TODO: CODE TO FILTER ARRAY OF AUTHORS HERE
  authors.filter((author) => author.birthYear > 1850)
)
console.log(modernAuthors)

// Activity 3: Get all famous works
const allFamousWorks = computed(() =>
  // TODO: CODE TO GET ALL FAMOUS WORKS HERE
  authors.flatMap((author) => author.famousWorks.map((work) => work.title))
)
console.log(allFamousWorks)

// Activity 4: Find author by name
const orwell = computed(() => {
  // TODO: CODE TO FIND AUTHOR id BY NAME HERE
  return authors.find((author) => author.name === 'George Orwell')
})
console.log(orwell)

// Activity 5: Find author by ID
const austen = computed(() => {
  // TODO: CODE TO FIND AUTHOR name BY ID HERE
  return authors.find((author) => author.id === 1)
})
console.log(austen)
</script>

<style scoped>
.json-lab {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  color: #333;
}
h1 {
  text-align: center;
}

.lab-section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message {
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.success {
  background-color: #e7faf3;
  color: #42b883;
  border: 1px solid #42b883;
}

.highlight {
  background-color: #42b883;
}

code {
  background-color: #e0e0e0;
  padding: 2px 5px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f0f0f0;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}
</style>
