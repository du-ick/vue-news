<template>
  <div>
    <section>
        <!-- 질문 상세정보 -->
        <UserProfile :propsdata="fetchedItem">
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{fetchedItem.user}}
            </router-link>
            <span slot="time">{{'posted : ' + fetchedItem.time_ago}}</span>
        </UserProfile>
        <div class="askArea">
            <h2>{{fetchedItem.title}}</h2>
            <div v-html="fetchedItem.content"></div>
        </div>
    </section>

    <section>
        <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components : {
        UserProfile,
    },
    computed : {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId)
    }

}
</script>
