const jobs = [
    {
      id: 1,
      company: "로봇 소프트웨어기업",
      position: "사무실 환경미화",
      location: "경기도 성남시 분당구(야탑역 인근)",
      working_hours: "월~목 주4일 일4시간",
      pay: "시급 12,000원",
      requirements : ["출퇴근 가능한 등록장애인"],
      etc : ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-01",
      thumbnail_url: "/assets/images/jobs/1_thumbnail.jpg",
      image_url: "/assets/images/jobs/1_image.jpg",
    },

    {
      id: 2,
      company: "IT기업",
      position: "디자이너",
      location: "재택",
      working_hours: "월~금 주5일 일3시간",
      pay: "협의",
      requirements : ["장애인 고용촉진법 및 직업재활법에 따른 중증장애인"],
      etc : ["4대보험 필수가입", "이중취업 불가", "월 1회이상 유급휴무", "명절/생일/장애인의 날/근로자의 날 선물 지급", "경조사 지원", "퇴직금 지급"],
      deadline: "2024-12-02",
      thumbnail_url: "/assets/images/jobs/2_thumbnail.png",
      image_url: "/assets/images/jobs/2_image.png",
    },
    {
      id: 3,
      company: "대기업계열 금융사",
      position: "윤리경영팀",
      location: "재택",
      working_hours: "월~금 주5일 일4시간",
      pay: "월급 1,230,000원",
      requirements : ["중증장애인",  "전문학사학위 이상 취득자", "엑셀활용(VLOOKUP등) 가능자"],
      etc: ["4대보험 필수가입", "이중취업 불가", "업무 노트북 지원 협의"],
      deadline: "2024-12-03",
      thumbnail_url: "/assets/images/jobs/3_thumbnail.jpg",
      image_url: "/assets/images/jobs/3_image.jpg",
    },
    {
      id: 4,
      company: "제약회사",
      position: "사무보조 업무",
      location: "서울시 도봉구 도봉로 683(방학동 동성빌딩)",
      working_hours: "월~목 주5일 일8시간",
      pay: "월급 2,200,000~2,500,000원",
      requirements : ["출퇴근 가능한 등록장애인", "MSOFFICE사용 가능자", "고등학교 졸업 이상"],
      etc: ["4대보험 필수가입", "이중취업 불가", "식사제공"],
      deadline: "2024-12-03",
      thumbnail_url: "/assets/images/jobs/4_thumbnail.jpg",
      image_url: "/assets/images/jobs/4_image.jpg",
    },
    {
      id: 5,
      company: "대기업 계열사",
      position: "사무지원(총무)",
      location: "서울시 서초구 서초동",
      working_hours: "월~금 주5일 일9시간",
      pay: "협의",
      requirements : ["출퇴근 가능한 등록장애인", "사무 업무 경력자(Excel)"],
      etc: ["4대보험 필수가입", "개인연금 지원", "퇴직금", "사내복지시설", "경조지원"],
      deadline: "2024-12-04",
      thumbnail_url: "/assets/images/jobs/5_thumbnail.png",
      image_url: "/assets/images/jobs/5_image.png",
    },
    {
      id: 6,
      company: "뷰티기업",
      position: "디자이너",
      location: "재택",
      working_hours: "월~금 주5일 일3~4시간",
      pay: "협의",
      requirements : ["장애인 고용촉진법 및 직업재활법에 따른 중증장애인", "해당업무 수행가능자 (나이, 학력, 거주지 무관)"],
      etc : ["4대보험 필수가입", "이중취업 불가", "명절/생일/기념일 선물 지급", "월 1회 유급휴무", "경조사 지원", "퇴직금"],
      deadline: "2024-12-04",
      thumbnail_url: "/assets/images/jobs/6_thumbnail.jpg",
      image_url: "/assets/images/jobs/6_image.jpg",
    },
    {
      id: 7,
      company: "해운업체",
      position: "인사팀 사무보조",
      location: "부산시 동구 중앙대로 331, 메리츠타워",
      working_hours: "월~금 주5일 일8시간",
      pay: "월급 2,090,000원",
      requirements : ["출퇴근 가능한 등록장애인"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-05",
      thumbnail_url: "/assets/images/jobs/7_thumbnail.png",
      image_url: "/assets/images/jobs/7_image.png",
    },
    {
      id: 8,
      company: "제조업체",
      position: "마케팅디자인",
      location: "경기도 고양시 일산동구 성석동",
      working_hours: "월~금 주5일 일8시간",
      pay: "연봉 30,000,000원 이상",
      requirements : ["업무가능한 등록장애인"],
      etc: ["4대보험 필수가입", "이중취업불가"],
      deadline: "2024-12-07",
      thumbnail_url: "/assets/images/jobs/8_thumbnail.png",
      image_url: "/assets/images/jobs/8_image.png",
    },
    {
      id: 9,
      company: "호텔신라",
      position: "실내 미화",
      location: "서울시 중구 동호로 249",
      working_hours: "월~금 주5일 일4시간",
      pay: "월급 1,030,000원",
      requirements : ["업무가능한 등록장애인", "의사소통 가능자"],
      etc: ["4대보험 필수가입", "이중취업 불가", "식대지급","경조사/의료비 지원", "면세점/호텔 직원할인", "자기개발비 지급"],
      deadline: "2024-12-08",
      thumbnail_url: "/assets/images/jobs/9_thumbnail.png",
      image_url: "/assets/images/jobs/9_image.png",
    },
    {
      id: 10,
      company: "글로벌 의류 제조기업",
      position: "사내 푸드코트 매장관리자",
      location: "서울시 구로구 디지털로31길 12 (구로동 TP타워)",
      working_hours: "월~금 주5일 일4시간",
      pay: "시급 13,000",
      requirements : ["중증장애인"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-10",
      thumbnail_url: "/assets/images/jobs/10_thumbnail.png",
      image_url: "/assets/images/jobs/10_image.png",
    },
    {
      id: 11,
      company: "유명가구 중견기업",
      position: "웹디자이너",
      location: "인천광역시 남동구 논현고잔로 47 (남동국가산업단지)",
      working_hours: "월~금 주5일 일8시간",
      pay: "협의",
      requirements : ["출퇴근 가능한 등록장애인", "초대졸 이상", "경력 3년 이상", "HTML, CSS, Javascript 활용 가능자"],
      etc: ["4대보험 필수가입", "퇴직금", "통근버스"],
      deadline: "2024-12-14",
      thumbnail_url: "/assets/images/jobs/11_thumbnail.png",
      image_url: "/assets/images/jobs/11_image.png",
    },
    {
      id: 12,
      company: "교육회사",
      position: "디자이너",
      location: "재택",
      working_hours: "월~금 주5일 일4시간",
      pay: "월급 1,200,000원",
      requirements : ["디자인 업무가 가능한 중증장애인", "포트폴리오 제출가능자"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-15",
      thumbnail_url: "/assets/images/jobs/12_thumbnail.png",
      image_url: "/assets/images/jobs/12_image.png",
    },
    {
      id: 13,
      company: "중견기업 운송업체",
      position: "실내미화",
      location: "서울시 종로구 종로 47, 한국스탠다드차타드은행빌딩",
      working_hours: "월~금 주5일 일4시간",
      pay: "월급 1,050,000원",
      requirements : ["업무 가능한 등록장애인"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-16",
      thumbnail_url: "/assets/images/jobs/13_thumbnail.png",
      image_url: "/assets/images/jobs/13_image.png",
    },
    {
      id: 14,
      company: "금융기업",
      position: "디자이너",
      location: "재택",
      working_hours: "월~금 주5일 일3~4시간",
      pay: "협의",
      requirements : ["장애인 고용촉진법 및 직업재활법에 따른 중증장애인"],
      etc: ["4대보험 필수가입", "이중취업 불가", "월 1회이상 유급휴무", "명절/생일/장애인의 날/근로자의 날 선물 지급", "경조사 지원", "퇴직금 지급"],
      deadline: "2024-12-18",
      thumbnail_url: "/assets/images/jobs/14_thumbnail.png",
      image_url: "/assets/images/jobs/14_image.png",
    },
    {
      id: 15,
      company: "유명 쥬얼리사",
      position: "사무보조",
      location: "서울시 강남구 청담동",
      working_hours: "월~금 주5일 일8시간",
      pay: "월급 2,350,000원",
      requirements : ["업무 가능한 등록장애인(대중교통 출퇴근가능자)"],
      etc: ["건강검진 지원", "퇴직금", "각종 경조사 지원", "직원할인"],
      deadline: "2024-12-18",
      thumbnail_url: "/assets/images/jobs/15_thumbnail.png",
      image_url: "/assets/images/jobs/15_image.png",
    },
    {
      id: 16,
      company: "글로벌 광학기업",
      position: "CS상담원",
      location: "재택",
      working_hours: "월~금 주5일 일7시간",
      pay: "월급 2,000,000원",
      requirements : ["중증장애인", "업무특성상 전화통화 가능자"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-18",
      thumbnail_url: "/assets/images/jobs/16_thumbnail.png",
      image_url: "/assets/images/jobs/16_image.png",
    },
    {
      id: 17,
      company: "의약품 제조기업",
      position: "디자이너",
      location: "재택",
      working_hours: "월~금 주5일 일4시간",
      pay: "월급 1,200,000원",
      requirements : ["중증장애인", "디자인 포트폴리오 제출 가능자", "포토샵, 일러스트 프로그램 사용 가능자"],
      etc: ["4대보험 필수가입", "이중취업 불가"],
      deadline: "2024-12-20",
      thumbnail_url: "/assets/images/jobs/17_thumbnail.png",
      image_url: "/assets/images/jobs/17_image.png",
    },
];

export default jobs;