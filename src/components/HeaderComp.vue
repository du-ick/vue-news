<template>
  <div class="header">
    <nav>
        <ul>
            <li>
                <router-link to="/news">News</router-link>
            </li>
            <li>
                <router-link to="/jobs">Jobs</router-link>
            </li>
            <li>
                <router-link to="/ask">Ask</router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name : "HeaderComp"
}
</script>

<style>

</style>