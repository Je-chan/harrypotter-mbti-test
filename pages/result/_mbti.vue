<template>
  <div>
    <main>
      <img :src="result[mbti].img" :alt="result[mbti].title">
      <h1>{{result[mbti].title}}</h1>
      <!-- v-html 은 보안상의 문제, XSS 와 같은 문제가 있을 수 있다. 
        그러므로 반드시 사용자가 컨트롤하거나 악용할 수 있는 문제에는 사용해선 안 된다.
        오직 개발자가 의도한 값만 표출해줄 때 사용해주면 된다. -->
      <p v-html="result[mbti].description"></p>
      <Button text="다시 테스트하기!" :clickEvent="resetPage"/>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mbti: null,
      result: {
        istj: {
          img: "/isfj.jpeg",
          title: "미네르바 맥고나걸",
          dexcription: ""
        },
        isfj: {
          img: "/istj.jpeg",
          title: "네빌 롱바텀",
          dexcription: ""
        },
        esfj: {
          img: "/esfj.png",
          title: "세드릭 디고리",
          dexcription: ""
        },
        estj: {
          img: "/estj.jpeg",
          title: "헤르미온느 진 그레인저",
          dexcription: ""
        },
        istp: {
          img: "/istp.jpeg",
          title: "빅토르 크룸",
          dexcription: ""
        },
        isfp: {
          img: "/isfp.jpeg",
          title: "해리 제임스 포터",
          dexcription: ""
        },
        estp: {
          img: "/estp.jpeg",
          title: "시리우스 블랙",
          dexcription: ""
        },
        esfp: {
          img: "/esfp.jpeg",
          title: "로널드 빌리우스 위즐리",
          dexcription: ""
        },
        intj: {
          img: "/intj.jpeg",
          title: "세베루스 스네이프",
          dexcription: ""
        },
        intp: {
          img: "/intp.jpeg",
          title: "아서 위즐리",
          dexcription: ""
        },
        entp: {
          img: "/entp.jpeg",
          title: "프레드 위즐리",
          dexcription: ""
        },
        entj: {
          img: "/entj.jpeg",
          title: "볼드모트",
          dexcription: ""
        },
        infp: {
          img: "/infp.jpeg",
          title: "루나 러브굿 ",
          dexcription: ""
        },
        infj: {
          img: "/infj.jpeg",
          title: "알버스 퍼시벌 울프릭 브라이언 덤블도어",
          dexcription: ""
        },
        enfp: {
          img: "/enfp.jpeg",
          title: "콜린 크리비",
          dexcription: ""
        },
        enfj: {
          img: "/enfj.png",
          title: "릴리 에번스 포터",
          dexcription: ""
        },

      }
    }
  },
  created() {
    this.mbti = this.$route.params.mbti;

    if (this.result[this.$route.params.mbti] === undefined) {
      this.$router.push({name: "index"})
    }
  },
  methods: {
    resetPage() {
      this.$store.dispatch('clickResetButton')
      this.$router.push({name: "index"})
    }
  }
}
</script>

<style>

</style>