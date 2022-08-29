<template>
  <div>
    <UserProfile :propsdata="userInfo">
      <span slot="username">{{userInfo.id}}</span>
      <template slot="time">{{'Joind : ' + userInfo.created}}</template> <!--태그 없이 데이터만 들어감-->
      <template slot="karma">{{'karma : ' + userInfo.karma}}</template>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },  
  computed : {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },

}
</script>

<style>

</style>