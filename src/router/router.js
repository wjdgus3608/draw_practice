import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../components/MainPage";

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "MainPage", component : MainPage },
    ]
});

export default router;