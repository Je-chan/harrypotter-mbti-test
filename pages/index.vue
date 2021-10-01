<template>
  <!-- 인트로 페이지 -->
  <main v-if="page===0">
    <img src="/poster.jpeg" alt="해리포터" class="poster">
    <h1>나와 닮은 해리포터 캐릭터 찾기</h1>
    <Button text="Test start" :clickEvent="startTest"/>
  </main>

  <!-- 질문 페이지 -->
  <main v-else-if="page <= 12">
    <div class="wrap">
      <Question />
    </div>
  </main>

</template>


<script>
import Question from '~/components/Question.vue'
/**
 * 메인 페이지 안에 들어갈 것
 * 1. 인트로 페이지
 * 2. 조건부 렌더링을 통해 퀴즈 컴포넌트가 보여야 함
 * 3. 결과는 페이지 이동 /result/_mbti 
 */
export default {
  components: { Question },
  computed: {
    page() {
      return this.$store.state.page;
    }
  },
  methods: {
    startTest() {
      this.$store.commit("SET_PAGE", 1)
    }
  }
}
</script>
