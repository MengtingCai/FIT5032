import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { ifAuthenticate } from '../router/authentication'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/views/BookListView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'

const { isAuthenticated }= ifAuthenticate()

const routes = [
    {
        path: '/GetAllBookAPI',
        name: 'GetAllBookAPI',
        component: GetAllBookAPI,
    },
    {
        path: '/CountBookAPI',
        name: 'CountBookAPI',
        component: CountBookAPI
    },
    {
        path: '/GetBookCount',
        name: 'GetBookCount',
        component: GetBookCountView
    },
    {
        path: '/WeatherCheck',
        name: 'WeatherCheck',
        component: WeatherView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/FireLogin',
        name: 'FireLogin',
        component: FirebaseSigninView
    },
    {
        path: '/FireRegister',
        name: 'FireRegister',
        component: FirebaseRegisterView
    },
    {
        path: '/addBook',
        name: 'AddBook',
        component: AddBookView
    },
    {
        path: '/BookList',
        name: 'BookList',
        component: BookListView
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    
    routes
})

router.beforeEach((to, from, next) => {
    // Perform logic before every route change
    if (to.name == 'About') {
        if (isAuthenticated.value == true){
            next();
        }
        else{
            alert('Please login')
            next( './Login' );
        }
    } else {
        next();
    }
});

export default router