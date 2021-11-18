import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import CreateListView from '../views/CreateListView.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news', 
            name: 'news',
            component: NewsView,
            // 라우터 네비게이션 이용
            beforeEnter: (to, from, next) => {
                // console.log("to", to);
                // console.log("from", from);
                // console.log(next); // next() 반드시 호출해야 해당 url로 이동한다.
                bus.$emit("start:spinner");
        
                // #1 실행순서
                store.dispatch("FETCH_LIST", to.name)
                    // #5 실행순서
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {console.error(error)})
            }
            // component: CreateListView('NewsView'),
        },
        {
            path: '/ask', 
            name: 'ask',
            component: AskView,
            beforeEnter(to, from, next) {
                bus.$emit("start:spinner");
        
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {console.error(error)})
            }
            // component: CreateListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs', 
            component: JobsView,
            beforeEnter(to, from, next) {
                bus.$emit("start:spinner");
        
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {console.error(error)})
            }
            // component: CreateListView('JobsView'),
        },
        {
            path: '/user/:id',
            name: 'user', 
            component: UserView,
        },
        {
            path: '/item/:id',
            name: 'item', 
            component: ItemView,
        },
    ]
})
