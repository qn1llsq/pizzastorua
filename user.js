const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            user: "",
        };
    },
    mounted() {
        const savedName = localStorage.getItem("user");
        if (savedName) {
            this.user = savedName;
        }
    },
});
app.mount("#app");