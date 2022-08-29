<template>
  <div class="user-info">
    <div class="user-profile">
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <p class="name"><slot name="username"></slot></p>
        <p class="time"><slot name="time"></slot></p>
        <template v-if="propsdata.karma">
          <p><slot name="karma"></slot></p>
        </template>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        propsdata : Object,
    },

}
</script>

<style>

</style>