<template>
  <div>
    <h1>{{page}}. {{question}}</h1>
    <Button 
    v-for="(item, index) in answers" 
    styleType="blue" 
    :key="index" 
    :text="item.text"
    :clickEvent="() => {
      clickButton(item)
    }"
    />
    <Progress />  
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    },

    question() {
      return this.$store.state.questions[this.$store.state.page - 1].q
    }, 
    answers() {
      return this.$store.state.questions[this.$store.state.page - 1].a
    }
  },
  methods: {
    clickButton(item) {
      this.$store.dispatch('clickButton', item.value);
      // 마지막 질문일 때만 라우터 이동
      if(this.page === this.$store.state.questions.length + 1) {
        const result = this.$store.state.result;

        this.$router.push({
          name: 'result-mbti', 
          // route돼서 result/params 이 params 안에 내용이 담기게 된다
          params: {
            mbti: `${result.e ? "e" : "i"}${result.n ? "n" : "s"}${result.f ? "f" : "t"}${result.j ? "j" : "p"}`
          }
        })
      }
    }
  }
}
</script>

<style>
  h1 {
    font-size: 1.5rem;
  }
</style>