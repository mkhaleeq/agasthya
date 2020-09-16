 import Vue from 'vue'
 import Router from 'vue-router'
 import home from "@/components/pages/home.vue"
 import header from "@/components/pages/header.vue"
 import footer from "@/components/pages/footer.vue"
 Vue.use(Router)
 export default new Router({
     mode:"history",
     routes:[
         {
            path:'/',
            name:'home',
            component:home 
         },
         {
             path:"/header",
             name:'header',
             component:header 
         },
         {
             path:"/footer",
             name:'footer',
             component:footer
         }
     ]
 })