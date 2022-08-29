<template>
    <div>
        <ul class="list">
            <li v-for="(item, i) in listItems" v-bind:key="i">
                <div class="points">{{ item.id }}</div>
                <div class="main-box">
                    <template v-if="item.domain">
                        <a :href="item.url">
                            <p class="news-title">{{ item.title }}</p>
                        </a>
                    </template>
                    <template v-else>
                        <router-link :to="`item/${item.id}`">
                            <p class="news-title">{{ item.title }}</p>
                        </router-link>
                    </template>
                    <small>by 
                        <router-link :to="`/user/${item.user}`" v-if="item.user">
                        {{ item.user }}
                        </router-link>
                        <a :href="item.url" v-else>{{ item.domain }}</a>
                    </small>
                </div>
                <div class="sub-info">
                    <p>{{ item.time }}</p>
                    <p>{{ item.time_ago }}</p>
                    <p>{{ item.comments_count }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: this.$route.name,
        }
    },
    // created() {
        //분기처리 
        //1. Path 에 따라 data 다르게 ex. this.$route.path === "path이름"
        //2. name에 따라 data 다르게

        // const actionName = (name) => {
        //     this.$store.dispatch(name);
        // }
        // if (this.name === 'newsView') {
        //     this.$store.dispatch('FETCH_NEWS');
        // } else if (this.name === 'ask') {
        //     this.$store.dispatch('FETCH_ASK');
        // } else if (this.name === 'jobs') {
        //     this.$store.dispatch('FETCH_JOBS');
        // }
        // this.$store.dispatch('FETCH_LIST')
    // },
    computed: {
        listItems() {
            // if (this.name === "news") {
            //     return this.$store.state.news;
            // } else if (this.name === "ask") {
            //     return this.$store.state.ask;
            // } else if (this.name === "jobs") {
            //     return this.$store.state.jobs;
            // }
            return this.$store.state.list;
        }
    },

}
</script>
