// 상태
export const state = {
  page: 0,
  questions: [
    {
      q: "호그와트에 입학하는 당신! 어떤 기숙사로 가고 싶나요?",
      a: [
        {
          text: "차갑지만 품위있게, 조용하지만 엄격하게 슬리데린!",
          value: "i"
        },
        {
          text: "뜨겁고도 강렬하게, 인생을 즐길 기회는 딱 한 번뿐 그리핀도르!",
          value: "e"
        }
      ]
    },
    {
      q:
        "최근 비밀의 방 괴담이 퍼져나가고 있습니다. 괴담을 해결해야 하게 된 당신. 어떤 방식으로 비밀의 방을 추적할까요??",
      a: [
        {
          text:
            "먼저 사건 현장부터 가서 무슨 일이 일어나고 있는 건지 확인해 보자.",
          value: "s"
        },
        {
          text:
            "비밀의 방과 관련된 모든 자료를 찾다 보면 더 빨리 비밀의 방에 도달할 수 있을 거야.",
          value: "n"
        }
      ]
    },
    {
      q:
        "벅빅이 말포이를 다치게 해서 처분형을 당하게 됐습니다. 이 소식을 듣자마자 든 생각은?",
      a: [
        {
          text: "하필 피해자가 말포이냐.",
          value: "t"
        },
        {
          text: "착한 애를 왜 죽여 이 나쁜 놈들아 ㅠㅠ",
          value: "f"
        }
      ]
    },
    {
      q:
        "당신이 해리와 둘이서 길을 걷는 중, 죽음을 먹는 자들이 등장했습니다. 어떻게 도망쳐야 할까요?",
      a: [
        {
          text: "주변에 도움 청할 방법과 퇴로를 파악하면서 견제 마법을 날린다.",
          value: "j"
        },
        {
          text: "강한 마법부터 때려 넣어! 스투페파이!",
          value: "p"
        }
      ]
    },
    {
      q: "당신은 감각적이십니까??",
      a: [
        {
          text: "네",
          value: "s"
        },
        {
          text: "아니오",
          value: "n"
        }
      ]
    },
    {
      q: "당신은 감정적이십니까?",
      a: [
        {
          text: "네",
          value: "f"
        },
        {
          text: "아니오",
          value: "t"
        }
      ]
    },
    {
      q: "당신은 외향적이십니까?",
      a: [
        {
          text: "네",
          value: "e"
        },
        {
          text: "아니오",
          value: "i"
        }
      ]
    },
    {
      q: "당신은 계획적이십니까?",
      a: [
        {
          text: "네",
          value: "j"
        },
        {
          text: "아니오",
          value: "p"
        }
      ]
    },
    {
      q: "당신은 외향적이십니까?",
      a: [
        {
          text: "네",
          value: "e"
        },
        {
          text: "아니오",
          value: "i"
        }
      ]
    },
    {
      q: "당신은 감각적이십니까??",
      a: [
        {
          text: "네",
          value: "s"
        },
        {
          text: "아니오",
          value: "n"
        }
      ]
    },
    {
      q: "당신은 감정적이십니까?",
      a: [
        {
          text: "네",
          value: "f"
        },
        {
          text: "아니오",
          value: "t"
        }
      ]
    },
    {
      q: "당신은 계획적이십니까?",
      a: [
        {
          text: "네",
          value: "j"
        },
        {
          text: "아니오",
          value: "p"
        }
      ]
    }
  ],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    p: 0,
    j: 0
  }
};

// 사용하고자 하는 커밋들이 여기에 들어감. state 를 변경한다
export const mutations = {
  // 사용자가 질문에 응답했을 때, 저장되도록 반영한다.
  SET_USER_TYPE(state, type) {
    // 사용자의 응답한 value의 값이 type이 된다.
    state.result[type] += 1;
    state.page += 1;
  },

  // 페이지만 변경하는 Mutation
  SET_PAGE(state, page) {
    state.page = page;
  },

  // 모든 테스트가 끝나고 최초 페이지로 넘어올 때
  // 사용자의 페이지가 새로 고침됐을 때도 RESET 돼야 함

  PAGE_RESET(state) {
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0
    };
  }
};

// 액션
export const actions = {
  clickButton({ commit }, type) {
    commit("SET_USER_TYPE", type);
  },
  clickResetButton({ commit }) {
    commit("PAGE_RESET");
  }
};
