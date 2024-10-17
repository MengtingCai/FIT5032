<template>
    <div>
        <h1>Get All Books</h1>
        <div v-if="jsondata">
            <ul>
                <li v-for="(book, index) in jsondata" :key="index">
                    <strong>{{ book.title }}</strong> by {{ book.author }} (ISBN: {{ book.isbn }})
                </li>
            </ul>
        </div>
        <p v-else-if="error">{{ error }}</p>
        <p v-else>Loading books...</p>
    </div>
</template>

<script>
import axios from 'axios';

// add commit
export default {
    data() {
        return {
            jsondata: null, 
            error: null     
        }
    },
    methods: {
        async getAllBooksAPI() {
            try {
                const response = await axios.get('https://getallbooks-fqbbf2kadq-uc.a.run.app');
                console.log(response.data);
                this.jsondata = response.data; 
                this.error = null; 
            } catch (error) {
                console.error('Error fetching books:', error);
                this.error = 'Error fetching books. Please try again later.';
                this.jsondata = null;
            }
        }
    },
    mounted() {
        this.getAllBooksAPI();
    }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
