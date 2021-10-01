<template>
  <div class="progressbar">
    <div class="page">{{page}} / {{maxLength}}</div>
    <div class="gauge" :style="{width: `${page / maxLength * 100}%`}"></div>
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    }, 
    maxLength () {
      return this.$store.state.questions.length
    }
  }
}
</script>

<style scoped>
  .progressbar {
    margin: 50px 0;
  } 
  .page {
    font-size: 16px;
    color: #fff;
  }
  .gauge {
    margin-top: 10px;
    height: 10px;
    background: rgb(99, 99, 202);
    box-shadow: 0 0 10px #fff;
  }
</style>