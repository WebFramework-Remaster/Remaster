const programs = [
  {
    id: 1,
    title: "발달 장애인 프로그램",
    content: `인천시 거주하는 성인 발달장애인을 위한 프로그램입니다. 이 프로그램에서는 모둠 타악기를 활용하여 참가자들이 서로 협력하고 리듬감을 키울 수 있는 활동을 제공합니다. 또한 미술심리치료를 통해 자신의 감정을 표현하고 내면의 안정감을 찾을 수 있는 시간을 갖습니다. 천연수공예 수업에서는 손재주를 활용한 창작 활동을 통해 성취감을 느낄 수 있으며, 뉴스포츠 시간에는 몸을 움직이며 건강한 생활을 유지하는 데 도움을 줍니다. 문화 및 여가 동아리에서는 영화 감상, 공연 관람 등 다양한 문화 체험을 통해 여유로운 시간을 보낼 수 있습니다. 생활체육 동아리에서는 배드민턴, 요가, 산책 등을 통해 체력을 키우고 활력을 더할 수 있는 활동들이 준비되어 있습니다. 이를 통해 참가자들은 새로운 친구를 사귀고, 자신의 관심사를 발견하며, 더 나아가 행복한 일상을 누릴 수 있는 기회를 얻을 수 있습니다.`,
    location: "남동구 용천로 208 인천 사회 복지관 707호",
    image_url: "assets/images/program/1.jpg",
    date: "2024-12-10",
    deadline: "2024-12-08",
    start_time: "14:00",
    end_time: "16:00",
    now_capacity: 18,
    max_capacity: 20,
    phone_number: "02-1234-5678",
    interval : "매주 화요일 14:00~16:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: 'tu', // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-10T14:00:00', // 시작 날짜 및 시간
      until: '2024-12-17T16:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 2,
    title: "평생학습 프로그램 참여자 모집",
    content: `나의 강점을 담은 스토리를 만들자’를 주제로 진행되는 이번 프로그램은 평생학습에 관심 있는 성인 장애인을 대상으로 합니다. 참가자들이 자신의 강점을 발견하고 이를 바탕으로 새로운 경험과 배움을 쌓을 수 있도록 다양한 활동이 준비되어 있습니다. 캘리그라피를 통해 창의력을 발휘하고, 노래교실에서는 음악을 통해 즐거움과 자신감을 키울 수 있습니다. 요리교실에서는 간단한 요리부터 실생활에 유용한 요리법을 배우며 자립 생활에 필요한 기술을 익힐 수 있습니다. 드론 수업은 최신 기술을 경험할 수 있는 기회를 제공하며, 손뜨개와 화훼 활동은 섬세한 손기술과 창작의 기쁨을 선사합니다. 또한, 요가를 통해 신체적 건강을 증진하고, 한글 교실에서는 언어 능력을 향상시킬 수 있습니다. 마지막으로, 영화감상 프로그램은 여가를 즐기며 문화적 감수성을 높이는 시간을 제공합니다. 이 프로그램은 성인 장애인들이 다양한 분야에서 자신만의 강점을 발견하고, 이를 발전시키며, 평생학습의 즐거움을 느낄 수 있는 기회를 제공합니다. 많은 관심과 참여를 부탁드립니다.`,
    location: "서울특별시 마포구 상암동",
    image_url: "assets/images/program/7.jpg",
    date: "2024-12-17",
    deadline: "2024-12-10",
    start_time: "13:00",
    end_time: "15:00",
    now_capacity: 11,
    max_capacity: 12,
    phone_number: "02-7890-1234",
    interval: "매주 화요일 13:00~15:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: 'tu', // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-17T13:00:00', // 시작 날짜 및 시간
      until: '2025-01-07T15:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 3,
    title: "발달장애자립프로그램 WITH US IL CAMP",
    content: `안녕하세요. 2024년 서울시 장애인자립생활센터 공모사업의 일환으로 진행되는 발달장애자립프로그램 「WITH US IL CAMP」의 참가자를 모집합니다. 본 캠프는 발달장애인을 대상으로 자립 능력을 키우고, 사회적 참여를 확대하며, 삶의 질을 높이는 것을 목표로 하고 있습니다. 캠프에서는 자립생활에 필요한 다양한 프로그램과 활동이 제공되며, 참가자들이 새로운 경험을 통해 자신의 역량을 발견하고 성장할 수 있는 기회를 제공합니다. 이번 프로그램은 발달장애인의 주체적인 생활을 지원하고, 지역사회와의 연결을 강화할 수 있는 소중한 자리입니다. 많은 홍보와 참여를 부탁드리며, 관심 있는 분들은 꼭 신청해 주시길 바랍니다.`,
    location: "부천한옥마을(경기도 부천시 길주로 1)",
    image_url: "assets/images/program/3.png",
    date: "2024-12-09",
    deadline: "2024-12-07",
    start_time: "15:00",
    end_time: "16:30",
    now_capacity: 9,
    max_capacity: 10,
    phone_number: "02-3456-7890",
    interval : "매주 월요일, 화요일 15:00~16:30",

    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: ['mo', 'we'], // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-09T15:00:00', // 시작 날짜 및 시간
      until: '2024-12-16T16:30:00', // 반복 종료 날짜
    },
  },
  {
    id: 4,
    title: "지체장애인 수영교실",
    content: `전문 수영강사와 함께하는 재활 수영 프로그램입니다. 이 프로그램은 수중운동을 통해 신체기능을 향상시키고, 참가자들의 전반적인 건강 증진을 목표로 하고 있습니다. 수중에서 진행되는 다양한 운동은 관절에 부담을 줄이는 동시에 근력을 강화하며, 균형감각과 유연성을 기르는 데 도움을 줍니다. 또한, 전문 강사의 지도를 통해 개인별 체력과 운동 능력에 맞춘 맞춤형 교육이 이루어지며, 참가자들이 자신감을 얻고 재활에 필요한 신체적, 정신적 회복을 경험할 수 있는 기회를 제공합니다.`,
    location: "서울특별시 강동구 천호동",
    image_url: "assets/images/program/4.jpg",
    date: "2024-12-13",
    deadline: "2024-12-08",
    start_time: "09:00",
    end_time: "10:30",
    now_capacity: 17,
    max_capacity: 20,
    phone_number: "02-4567-8901",
    interval: "매주 금요일 09:00~10:30",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: 'fr', // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-13T09:00:00', // 시작 날짜 및 시간
      until: '2024-12-20T10:30:00', // 반복 종료 날짜
    },
  },
  {
    id: 5,
    title: "너두! 나두!",
    content: `지적 및 자폐성 발달장애 청소년을 위한 자립능력향상 프로그램에 참가자를 모집합니다. 본 프로그램은 18세에서 30세 사이의 지적 또는 자폐성 장애등급을 받은 청소년들을 대상으로 진행되며, 참가자들의 자립적인 생활을 지원하고 실질적인 능력을 키우는 데 초점을 맞추고 있습니다. 이 프로그램에서는 일상생활 기술, 사회적 상호작용 능력, 그리고 자기관리 능력을 강화할 수 있는 다양한 활동이 제공됩니다. 또한, 참여자들이 개인의 잠재력을 발견하고 스스로의 삶에 긍정적인 변화를 만들어 갈 수 있도록 돕는 맞춤형 교육과 지원이 이루어질 예정입니다. 많은 관심과 참여 부탁드립니다.`,
    location: "덕천종합사회복지관",
    image_url: "assets/images/program/5.jpg",
    date: "2024-12-14",
    deadline: "2024-12-10",
    start_time: "13:00",
    end_time: "15:00",
    now_capacity: 27,
    max_capacity: 30,
    phone_number: "02-5678-9012",
    interval: "매주 토요일 13:00~15:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: 'sa', // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-14T13:00:00', // 시작 날짜 및 시간
      until: '2024-12-28T15:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 6,
    title: "집단 발달장애인 자립지원 프로그램",
    content: `이 프로그램은 집단 발달장애인을 대상으로 자립을 지원하는 특별한 프로그램입니다. 총 6일간 진행되며, 발달장애인들이 자립 생활에서 꼭 필요한 재정 관리 능력을 배울 수 있도록 구성되어 있습니다. 프로그램은 실생활에서 적용 가능한 다양한 주제를 다룹니다. '자립에서 돈이란 무엇일까?'를 시작으로, '얼마로 무엇을 살 수 있을까?'라는 질문을 통해 돈의 가치를 이해하고 소비 계획을 세우는 방법을 배웁니다. 또한, '나의 돈은 어디서 들어오고 어떻게 나갈까?'라는 주제를 통해 수입과 지출의 흐름을 파악하고, 재정의 균형을 유지하는 방법을 학습합니다. 마지막으로, 저축의 중요성과 필요성에 대해 강의하며, 참가자들이 장기적으로 재정적인 안정과 목표를 이룰 수 있도록 돕습니다. 이 프로그램은 자립을 꿈꾸는 발달장애인들에게 꼭 필요한 지식과 기술을 제공하며, 경제적 독립과 생활 능력을 키울 수 있는 소중한 기회를 제공합니다.`,
    location: "노들 장애인 자립 생활 센터",
    image_url: "assets/images/program/6.jpg",
    date: "2024-12-27",
    deadline: "2024-12-15",
    start_time: "10:00",
    end_time: "12:00",
    now_capacity: 23,
    max_capacity: 25,
    phone_number: "02-6789-0123",
    interval: "매주 월,수,금 10:00~12:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: ['mo', 'we', 'fr'], // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-27T10:00:00', // 시작 날짜 및 시간
      until: '2024-01-10T12:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 7,
    title: "미소 창작소",
    content: `미소창작소’는 한국장애인문화예술원과 충청남도가 주최하고, 충남문화관광재단과 천안문화재단이 주관하는 발달장애 초·중·고등학생을 위한 첫 교육 프로그램입니다. 미술과 소리를 활용해 발달장애인의 개별성을 존중하며, 작은 표현과 탐색 활동을 통해 창의력과 자기 표현 능력을 키우는 것을 목표로 합니다. 많은 관심 부탁드립니다.`,
    location: "천안 문화 재단 4층 소극장",
    image_url: "assets/images/program/10.jpg",
    date: "2024-12-11",
    deadline: "2024-12-09",
    start_time: "13:00",
    end_time: "15:00",
    now_capacity: 8,
    max_capacity: 10,
    phone_number: "02-0123-4567",
    interval: "매주 수요일 13:00~15:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: "we", // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-11T13:00:00', // 시작 날짜 및 시간
      until: '2024-12-18T15:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 8,
    title: "장애 친화마을 기장애 그리다.",
    content: `지역 장애인들의 이동권 및 접근권 확보를 위해 활동가로서 활약하여 지역사회 내 장애인들의 삶의 질 향상을 위한 자조집단 활동을 돕고자 합니다. 이를 통해 장애인들이 일상생활에서 겪는 불편함을 해소하고, 사회 참여를 확대하며, 더 나은 환경에서 살아갈 수 있도록 지원하고자 합니다. 또한, 지역사회 구성원들과의 협력을 통해 장애인에 대한 인식을 개선하고, 모두가 함께하는 포용적인 사회를 만들어나가는 데 기여하고자 합니다.`,
    location: "기장종합사회복지관 강당",
    image_url: "assets/images/program/8.png",
    date: "2024-12-12",
    deadline: "2024-12-10",
    start_time: "14:00",
    end_time: "16:00",
    now_capacity: 13,
    max_capacity: 15,
    phone_number: "02-8901-2345",
    interval: "매주 목,금 14:00~16:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: ["th", "fr"], // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-12T14:00:00', // 시작 날짜 및 시간
      until: '2024-12-26T16:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 9,
    title: "고덕어울림수영장 토요프로그램",
    content: `이 프로그램은 장애인 스포츠 참여를 확대하기 위해 기획된 특별한 수영 강습 프로그램입니다. 장애인들이 스포츠를 통해 신체적 건강을 증진하고, 새로운 경험을 쌓으며, 자신감을 키울 수 있도록 돕는 것을 목표로 하고 있습니다. 특히, 시간당 2200원의 저렴한 가격으로 제공되어 누구나 부담 없이 참여할 수 있습니다. 수영 초보자부터 중급자까지 모두가 자신에게 맞는 강습을 받을 수 있도록 전문 강사가 체계적으로 수업을 진행합니다. 프로그램은 기본적인 수영 기술부터 체력을 강화할 수 있는 다양한 수중 운동으로 구성되어 있으며, 참가자들의 실력과 필요에 맞춰 유연하게 진행됩니다. 장애인 스포츠 참여의 기회를 넓히고, 건강하고 활기찬 삶을 지원하기 위한 본 프로그램에 많은 관심과 참여 부탁드립니다.`,
    location: "고덕 어울림 수영장",
    image_url: "assets/images/program/9.png",
    date: "2024-12-14",
    deadline: "2024-12-10",
    start_time: "10:00",
    end_time: "12:00",
    now_capacity: 18,
    max_capacity: 20,
    phone_number: "02-9012-3456",
    interval: "매주 토요일 10:00~12:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: "sa", // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2024-12-14T10:00:00', // 시작 날짜 및 시간
      until: '2024-12-28T12:00:00', // 반복 종료 날짜
    },
  },
  {
    id: 10,
    title: "중장년 발달 장애인 프로그램",
    content: `평생교육지원팀에서는 '중장년 발달장애인의 주체적 삶의 질 향상'을 위한 자립지원사업을 운영하고 있습니다. 이 사업은 생애주기적 특성을 반영하여 건강, 자립, 교육, 사회참여, 문화여가라는 5개 영역을 중심으로 참여자들이 건강하고 의미 있는 생활을 할 수 있도록 지원합니다. 건강 관리를 위한 체력 증진 프로그램, 자립심을 기르는 일상생활 기술 교육, 그리고 실생활에 활용 가능한 학습 강좌가 제공됩니다. 또한, 지역사회와의 연계를 강화하는 사회참여 활동과 음악, 미술 등 다양한 취미를 즐길 수 있는 문화여가 프로그램도 준비되어 있습니다. 이에 따라, 평생교육지원팀은 참가자를 모집하오니 많은 관심과 신청 바랍니다.`,
    location: "서울시 강남구 헌릉로 757길 35",
    image_url: "assets/images/program/2.jpg",
    date: "2025-01-02",
    deadline: "2024-12-28",
    start_time: "10:00",
    end_time: "12:00",
    now_capacity: 14,
    max_capacity: 15,
    phone_number: "02-2345-6789",
    interval: "매주 목요일 10:00~12:00",
    //풀캘린더 반복
    rrule: {
      freq: 'weekly', // 반복 주기: 매주
      byweekday: "th", // 반복 요일: mo, tu, we, th, fr, sa, su
      dtstart: '2025-01-02T10:00:00', // 시작 날짜 및 시간
      until: '2024-01-16T12:00:00', // 반복 종료 날짜
    },
  },
];

export default programs;