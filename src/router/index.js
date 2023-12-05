import { createRouter, createWebHistory } from "vue-router";
import Home from "Page/Home";
import ArticleList from "Page/ArticleList";
import Article from "Page/Article";
import Admin from "Page/Admin";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
      path: '/:pathMatch(.*)*',
      name: "not-found",
      component: Home,
    },
	],
});

export default router;
