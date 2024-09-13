<template>
    <div>
      <h1>Books List</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
          <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
  import db from '../firebase/init.js';
  
  const books = ref([]);
  
  // Fetch books from Firestore
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'books'));
      const booksArray = [];
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
      });
      books.value = booksArray;
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await deleteDoc(doc(db, 'books', id)); 
      books.value = books.value.filter((book) => book.id !== id); 
      alert('Book deleted successfully!');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  
  onMounted(() => {
    fetchBooks();
  });
  </script>
  