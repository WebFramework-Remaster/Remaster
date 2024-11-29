const notices = [
    {
      id: 1,
      title: "장애인 자립생활 교육프로그램 참가자 모집",
      writer: "자립지원팀",
      date: "2024-10-10",
      content: "일상생활 기술, 금전관리, 직업준비 등 자립생활에 필요한 실질적인 교육을 제공합니다. 6개월 과정으로 진행되며, 1:1 맞춤형 지도와 그룹 활동이 병행됩니다. 프로그램은 매주 월, 수, 금 오전 10시부터 오후 3시까지 진행되며, 점심식사가 제공됩니다. 교육 내용에는 개인위생관리, 식사준비, 집안관리, 대중교통 이용, 스마트폰/컴퓨터 활용, 안전교육 등이 포함됩니다. 프로그램 수료 후에는 자립생활 체험주택에서 2주간 실제 자립생활을 체험할 수 있는 기회가 제공됩니다. 특히 이번 과정에는 직업상담사와 연계한 취업준비 과정이 새롭게 추가되었으니 많은 관심 바랍니다."
    },
    {
      id: 2,
      title: "<이순신 관광 캐릭터 리뉴얼 공모전> 홍보",
      writer: "학생장학팀",
      date: "2024-10-28",
      content: "이순신 관광 캐릭터 리뉴얼 공모전을 개최합니다. 장애인 예술가들의 참여를 적극 권장하며, 배리어프리 디자인을 고려한 작품을 우대합니다. 공모 주제는 '모두가 친근하게 다가갈 수 있는 이순신 캐릭터'이며, 시각장애인도 촉각으로 인식할 수 있는 입체적 요소를 포함한 디자인을 특별 평가합니다. 접수 기간은 2024년 11월 1일부터 11월 30일까지입니다. 시상 내역은 대상 1명(500만원), 최우수상 2명(각 300만원), 우수상 3명(각 200만원)이며, 특별상 부문도 마련되어 있습니다. 수상작은 향후 관광 상품 개발과 홍보물 제작에 활용될 예정이며, 수상자에게는 디자인 프로젝트 참여 기회가 우선적으로 제공됩니다. 더불어 공모전 기간 동안 전문 디자이너의 온라인 멘토링도 지원되오니 많은 관심과 참여 바랍니다."
    },
    {
      id: 3,
      title: "2024년 장애인 일자리사업 참여자 모집 공고",
      writer: "취업지원팀",
      date: "2024-10-25",
      content: "2024년도 장애인 일자리사업 참여자를 모집합니다. 이번 사업은 사무보조, 복지서비스 지원, IT 분야 등 다양한 직무로 구성되어 있으며, 특히 올해는 데이터 라벨링, 웹 접근성 테스터 등 디지털 분야 일자리가 대폭 확대되었습니다. 참여자에게는 직무교육과 함께 근무 중 필요한 보조기기가 지원되며, 업무용 노트북도 대여해드립니다. 고용기간은 2024년 1월부터 12월까지이며, 4대 보험이 적용됩니다. 근무조건은 주 5일, 1일 6시간이며, 시급은 2024년 최저임금 이상으로 책정됩니다. 또한 매월 직무 관련 교육이 제공되며, 심리상담 지원 등 복리후생도 마련되어 있습니다. 참여자격은 만 18세 이상 미취업 등록장애인이며, 성실하게 근무가 가능한 분이면 됩니다. 서류접수는 11월 1일부터 11월 15일까지이며, 면접은 11월 20일부터 순차적으로 진행됩니다."
    },
    {
      id: 4,
      title: "발달장애인 미술치료 프로그램 참가자 모집",
      writer: "교육지원팀",
      date: "2024-10-23",
      content: "발달장애인을 위한 미술치료 프로그램을 시작합니다. 전문 미술치료사의 지도 하에 자기표현과 정서안정을 도모하는 다양한 활동이 진행됩니다. 프로그램은 매주 화요일과 목요일 오후 2시부터 4시까지 진행되며, 4-5명의 소그룹으로 운영됩니다. 활동 내용에는 그림그리기, 점토작업, 콜라주, 만다라 색칠하기 등 다양한 미술활동이 포함되며, 작품 전시회도 계획되어 있습니다. 참가비는 전액 무료이며, 재료비도 지원됩니다. 프로그램은 총 12주 과정으로 구성되어 있으며, 마지막 주에는 가족과 함께하는 작품 발표회도 진행됩니다. 참가신청은 방문 또는 전화로 가능하며, 선착순 10명 모집합니다. 문의사항은 교육지원팀(02-XXX-XXXX)으로 연락주시기 바랍니다."
    },
    {
      id: 5,
      title: "10월 무료 심리상담 프로그램 안내",
      writer: "상담지원팀",
      date: "2024-10-20",
      content: "정서적 어려움을 겪고 계신 분들을 위한 무료 심리상담을 진행합니다. 전문 상담사와의 1:1 상담을 통해 일상생활의 스트레스와 우울감을 해소하고, 긍정적인 마인드를 가질 수 있도록 도와드립니다. 이번 상담 프로그램은 대면상담과 비대면상담 중 선택하실 수 있으며, 화상상담의 경우 태블릿 PC 대여도 가능합니다. 상담은 주 1회 총 8회기로 진행되며, 필요시 4회기 연장이 가능합니다. 상담 시간은 평일 오전 10시부터 오후 6시까지이며, 야간상담(화, 목 저녁 8시까지)도 가능합니다. 모든 상담 내용은 비밀보장을 원칙으로 하며, 상담 종료 후 3개월간 온라인 사후관리도 제공됩니다. 가족상담이 필요한 경우 별도로 신청하실 수 있으며, 심리검사도 무료로 제공됩니다."
    },
    {
      id: 6,
      title: "장애인 가족 돌봄지원 서비스 확대 안내",
      writer: "가족지원팀",
      date: "2024-10-18",
      content: "장애인 가족의 돌봄 부담을 덜어드리기 위해 돌봄지원 서비스가 확대됩니다. 기존 주간보호 서비스(오전 9시-오후 6시)에 더해 저녁돌봄(오후 6시-9시)과 단기보호 서비스(1박 2일-최대 2주)가 신설되었습니다. 돌봄 도우미 파견 서비스도 월 60시간에서 120시간으로 확대되었으며, 응급상황 발생 시 긴급돌봄 서비스도 이용하실 수 있습니다. 새롭게 도입된 가족 상담 프로그램은 월 2회 무료로 제공되며, 돌봄 스트레스 해소를 위한 힐링 프로그램과 가족휴식 지원 프로그램도 분기별로 진행됩니다. 특히 돌봄 제공자를 위한 교육과 자조모임이 매월 운영되어 정보 교류와 소통의 기회를 제공합니다. 서비스 신청은 방문 및 전화로 가능하며, 소득 수준에 따라 비용 지원이 달라질 수 있습니다."
    },
    {
      id: 7,
      title: "장애인 문화예술교육 수강생 모집",
      writer: "문화지원팀",
      date: "2024-10-15",
      content: "2024년도 하반기 문화예술교육 프로그램 수강생을 모집합니다. 이번 학기에는 기존의 음악(피아노, 기타, 드럼, 합창), 미술(회화, 도예, 디지털아트), 무용(현대무용, 한국무용), 연극 강좌 외에도 방송댄스, 사진, 영상제작 강좌가 새롭게 개설되었습니다. 각 분야 전문 강사진이 지도하며, 보조강사도 배치되어 있어 개별적인 지도가 가능합니다. 강좌는 초급/중급/고급반으로 나누어 운영되며, 수준별 맞춤 교육을 제공합니다. 수강료는 전액 무료이며, 악기 및 미술도구도 무상으로 대여해드립니다. 모든 강의실은 휠체어 접근이 가능하며, 보조공학기기도 구비되어 있습니다. 연말에는 그동안의 교육 성과를 공유하는 종합발표회도 계획되어 있으니, 문화예술 활동을 통해 자기표현과 재능 개발의 기회를 가져보세요."
    },
    {
      id: 8,
      title: "장애인 이동지원 차량 신규 도입 안내",
      writer: "복지지원팀",
      date: "2024-10-12",
      content: "저희 기관에서는 장애인의 이동권 보장을 위해 신규 이동지원 차량 3대를 추가로 도입하였습니다. 새로 도입된 차량은 최신형 휠체어 리프트가 장착되어 있으며, 전동휠체어 이용자도 편리하게 탑승할 수 있습니다. 차량에는 안전벨트, 비상호출버튼, 자동발판 등 안전장치가 완비되어 있으며, GPS를 통한 실시간 위치 확인이 가능합니다. 이용시간은 평일 오전 8시부터 오후 8시까지이며, 주말 운행도 사전 예약시 가능합니다. 병원진료, 재활치료, 취업면접 등 필수적인 외출활동을 위한 이용자는 우선 배차됩니다. 이용을 원하시는 분들은 최소 3일 전까지 예약해 주시기 바라며, 긴급상황 시에는 당일 예약도 가능합니다. 요금은 기본 10km까지 1,000원이며, 추가 거리에 따라 요금이 산정됩니다. 기초생활수급자 및 차상위계층은 이용요금이 전액 면제됩니다."
    },
    { 
      id:9,  
      title: "웹사이트 접근성 개선 및 새로운 기능 업데이트 안내",
      writer: "시스템관리팀",
      date: "2024-10-30",
      content: "더 나은 서비스 제공을 위해 웹사이트의 주요 기능이 개선되었습니다. 시각장애인을 위한 스크린리더 호환성이 향상되었으며, 글자 크기 조절 기능이 추가되었습니다. 또한 모바일 사용자를 위한 반응형 디자인이 적용되어 더욱 편리하게 서비스를 이용하실 수 있습니다. 자세한 업데이트 내용은 공지사항 전문을 확인해 주시기 바랍니다."
    },
    {
      id: 10,
      title: "장애인 미디어 리터러시 교육 참가자 모집",
      writer: "교육지원팀",
      date: "2024-10-08",
      content: "디지털 시대를 살아가는 필수 역량인 미디어 리터러시 교육을 시작합니다. 본 교육은 스마트폰과 컴퓨터를 활용한 정보 검색, 뉴스 읽기, SNS 활용, 디지털 콘텐츠 제작 등을 포함합니다. 특히 허위정보 식별, 온라인 사기 예방, 개인정보 보호 등 디지털 안전 교육도 함께 진행됩니다. 교육은 총 12주 과정이며, 매주 수요일 오후 2시부터 4시까지 진행됩니다. 수강생 전원에게는 태블릿 PC가 무상 대여되며, 교육 수료 후에도 1개월간 온라인 상담을 통해 학습 내용을 복습할 수 있습니다. 디지털 기기 사용이 처음이신 분들을 위한 기초반도 별도로 운영되오니, 많은 참여 바랍니다."
    },
    {
      id: 11,
      title: "장애인 체육대회 참가 신청 안내",
      writer: "체육지원팀",
      date: "2024-10-05",
      content: "2024년 하반기 전국 장애인 체육대회 참가 신청을 받습니다. 이번 대회는 육상, 수영, 탁구, 배드민턴, 볼링, 쿠알링 등 총 10개 종목이 진행되며, 참가자의 장애유형과 정도에 따라 적절한 종목을 선택하실 수 있습니다. 대회 전 8주간의 종목별 기초훈련이 제공되며, 전문 코치진의 지도하에 체계적인 훈련이 이루어집니다. 참가자들을 위한 운동복과 장비는 무상으로 제공되며, 대회 기간 동안의 숙식과 교통편도 지원됩니다. 체육활동을 통한 건강증진과 사회적 교류의 기회를 제공하는 이번 대회에 많은 관심과 참여 바랍니다."
    },
    {
      id: 12,
      title: "장애인 창업지원 프로그램 참가자 모집",
      writer: "일자리지원팀",
      date: "2024-10-03",
      content: "예비 장애인 창업가를 위한 종합 지원 프로그램을 시작합니다. 본 프로그램은 창업 기초교육, 사업계획서 작성, 마케팅 전략, 재무관리 등 창업에 필요한 전반적인 내용을 포함합니다. 특히 이번 과정에는 온라인 쇼핑몰 창업, 프리랜서 창업 등 비대면 창업 분야가 새롭게 추가되었습니다. 교육 수료 후에는 최대 2천만원의 창업지원금을 신청할 수 있으며, 1년간 전문 멘토의 창업 컨설팅이 제공됩니다. 또한 공유 사무실 무상 이용, 홍보물 제작 지원 등 다양한 혜택이 마련되어 있습니다. 프로그램은 3개월 과정으로 진행되며, 온라인과 오프라인 교육을 병행합니다."
    },
    {
      id: 13,
      title: "장애인 가족 여행 프로그램 참가자 모집",
      writer: "문화여가팀",
      date: "2024-09-30",
      content: "장애인 가족들의 특별한 추억 만들기를 위한 '함께하는 행복여행' 프로그램을 진행합니다. 이번 여행은 완전 배리어프리 시설을 갖춘 제주도의 주요 관광지를 2박 3일 동안 방문하는 일정으로 구성됩니다. 이동에는 휠체어 리프트가 장착된 전용 관광버스가 제공되며, 숙박은 장애인 편의시설이 완비된 특급호텔에서 이루어집니다. 여행 기간 동안 전문 간호사와 사회복지사가 동행하여 안전하고 편안한 여행을 도와드립니다. 특히 시각장애인을 위한 해설사와 청각장애인을 위한 수어통역사도 함께합니다. 1인당 참가비는 10만원이며, 기초생활수급자는 전액 무료입니다."
    },
    {
      id: 14,
      title: "장애인 정보화 교육장 시설 개선 안내",
      writer: "시설관리팀",
      date: "2024-09-28",
      content: "장애인 정보화 교육장이 최신 시설로 새롭게 단장되었습니다. 기존 20석 규모에서 30석으로 확대되었으며, 모든 컴퓨터가 최신 사양으로 교체되었습니다. 시각장애인을 위한 화면확대 프로그램과 스크린리더가 설치되었으며, 높낮이 조절이 가능한 책상과 인체공학적 의자가 새로 구비되었습니다. 또한 청각장애인을 위한 영상 자막 시스템과 보청기 호환 음향장치도 설치되었습니다. 교육장 내 휴게공간도 새롭게 조성되어 쾌적한 학습 환경을 제공합니다. 10월부터는 확장된 시설을 활용하여 더욱 다양한 정보화 교육 프로그램이 운영될 예정이니 많은 관심 바랍니다."
    },
    {
      id: 15,
      title: "발달장애인 요리교실 '맛있는 자립' 참가자 모집",
      writer: "자립지원팀",
      date: "2024-09-25",
      content: "발달장애인의 자립능력 향상을 위한 요리교실을 시작합니다. 본 프로그램은 기본적인 조리도구 사용법부터 시작하여, 간단한 반찬 만들기, 건강한 한 끼 식사 준비하기 등을 단계별로 학습합니다. 특히 안전한 주방 생활을 위한 화구 사용법, 칼 다루기, 위생관리 등 안전교육이 강화되었습니다. 수업은 매주 화, 목요일 오전 10시부터 12시까지 진행되며, 재료비는 전액 지원됩니다. 완성된 요리는 참가자가 직접 시식하고 포장해 갈 수 있으며, 레시피 카드도 제공됩니다. 프로그램 종료 후에는 가족들을 초대하여 직접 만든 음식을 대접하는 특별한 시간도 마련되어 있습니다."
    },
    {
      id: 16,
      title: "장애인 인권영화제 자원봉사자 모집",
      writer: "문화지원팀",
      date: "2024-09-23",
      content: "제5회 장애인 인권영화제의 성공적인 개최를 위한 자원봉사자를 모집합니다. 활동 기간은 11월 15일부터 11월 21일까지이며, 영화제 사전 준비부터 행사 진행, 정리까지 전 과정에 참여하게 됩니다. 모집 분야는 상영관 안내, 관객 지원, 수어통역 보조, 행사 운영 보조 등입니다. 특히 올해는 배리어프리 영화 상영을 확대하여 화면해설과 자막 제작 보조 인력도 모집합니다. 선발된 봉사자에게는 사전교육이 제공되며, 영화제 기간 중 식사와 교통비가 지원됩니다. 봉사활동 인증서 발급은 물론, 영화제 관련 기념품도 제공됩니다. 장애인 문화예술에 관심 있는 분들의 많은 지원 바랍니다."
    },
    {
      id: 17,
      title: "장애인 일자리 통합 정보시스템 오픈 안내",
      writer: "취업지원팀",
      date: "2024-09-20",
      content: "장애인 구직자들의 취업 지원을 위한 통합 정보시스템이 새롭게 오픈했습니다. 본 시스템에서는 전국의 장애인 일자리 정보를 실시간으로 확인할 수 있으며, AI 매칭 시스템을 통해 개인의 특성과 희망 조건에 맞는 맞춤형 일자리를 추천받을 수 있습니다. 이력서 작성과 관리가 온라인으로 가능하며, 화상 면접 시스템도 구축되어 있습니다. 또한 직업훈련 정보, 자격증 정보, 취업성공 사례 등 다양한 취업 관련 정보도 제공됩니다. 시스템 이용방법 교육은 매주 화요일 오후 2시에 진행되며, 개별 상담도 가능합니다. 홈페이지 회원가입 시 취업 관련 정보를 문자로 받아보실 수 있습니다."
    },
    {
      id: 18,
      title: "장애인 동계스포츠 교실 참가자 모집",
      writer: "체육지원팀",
      date: "2024-09-18",
      content: "동계스포츠의 계절을 맞아 장애인 동계스포츠 교실을 운영합니다. 이번 프로그램에서는 좌식스키, 휠체어 컬링, 실내 빙상스포츠 등 다양한 종목을 경험할 수 있습니다. 모든 종목은 참가자의 장애유형과 수준에 맞게 맞춤형으로 진행되며, 국가대표 출신의 전문 지도자들이 안전하게 지도합니다. 장비는 전액 무상으로 대여되며, 실내 훈련장과 야외 훈련장을 번갈아가며 사용합니다. 초급자를 위한 기초 적응 프로그램부터 상급자를 위한 전문 기술 훈련까지 단계별 교육이 이루어지며, 정기적인 성취도 평가를 통해 개인별 발전 과정을 확인할 수 있습니다. 프로그램은 12월부터 2월까지 주 2회, 총 24회 진행됩니다."
    },
    {
      id: 19,
      title: "장애인 가족 심리지원 프로그램 확대 운영 안내",
      writer: "가족지원팀",
      date: "2024-09-15",
      content: "장애인 가족의 심리적 안정과 가족관계 증진을 위한 심리지원 프로그램이 확대 운영됩니다. 기존의 개별상담에 더해 가족단위 집단상담, 부부상담, 형제자매 프로그램 등이 새롭게 추가되었습니다. 특히 스트레스 해소를 위한 미술치료, 음악치료, 원예치료 등 다양한 매체활용 프로그램이 도입되었으며, 장애인 자녀를 둔 부모님들을 위한 양육코칭 프로그램도 실시됩니다. 모든 프로그램은 임상심리전문가와 가족상담사가 진행하며, 필요시 방문상담도 가능합니다. 야간과 주말에도 상담이 가능하도록 운영시간을 확대하였으며, 온라인 상담 시스템도 구축하여 언제든지 전문가와 상담할 수 있습니다."
    },
  ];
  export default notices;