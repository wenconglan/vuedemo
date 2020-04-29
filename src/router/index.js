import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 

const routes = [
	{
		path:"/",
		redirect:"/guide" 
	},
	{
		path:"/guide",
		name:"guide",
		component:()=>import("@/views/Guide.vue")
	},
	{
		path:"/main",
		component:()=>import("@/views/Main.vue"),
		redirect:"/main/movie",
		children:[
			{
				path:"movie",
				name:"movie",
				component:()=>import("@/views/Movie.vue")
			},
			{
				path:"cinema",
				name:"cinema",
				component:()=>import("@/views/Cinema.vue")
			},
			{
				path:"shop",
				name:"shop",
				component:()=>import("@/views/Shop.vue")
			},
			{
				path:"news",
				name:"news",
				component:()=>import("@/views/News.vue")
			},
			{
				path:"mine",
				name:"mine",
				component:()=>import("@/views/Mine.vue")
			}
		]
	},
	{
		path:"*",
		redirect:{name:"guide"}
	}
  
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
