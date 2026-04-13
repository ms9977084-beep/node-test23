const menuData = [
    {
        name: "따뜻한 아메리카노",
        img: "americano.jpg",
        description: "따뜻하고 쓴맛이 나는 커피예요.",
        price: "4000원", // 음성 안내를 위해 가격 텍스트 추가
        priceImg: "money_4000.jpg"
    },
    {
        name: "카페라떼",
        img: "latte.jpg",
        description: "우유가 들어가서 부드러운 커피예요.",
        price: "4500원",
        priceImg: "money_4500.jpg"
    },
    {
        name: "초코라떼",
        img: "choco.jpg",
        description: "달콤하고 맛있는 초코 우유예요.",
        price: "4800원",
        priceImg: "money_4800.jpg"
    }
];

const viewMenuBtn = document.getElementById('view-menu');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const detailView = document.getElementById('detail-view');
const detailDesc = document.getElementById('detail-desc');
const detailPriceImg = document.getElementById('detail-price-img');
const closeDetailBtn = document.getElementById('close-detail');
const mainPage = document.getElementById('main-page');

// --- TTS 음성 출력 함수 추가 ---
function speak(text) {
    // 이전 음성이 나오고 있다면 취소
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR'; // 한국어 설정
    utterance.rate = 0.9;     // 속도 (조금 천천히)
    window.speechSynthesis.speak(utterance);
}

// 1. 메뉴판 보기 버튼 이벤트
viewMenuBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    menuDiv.classList.remove('hidden');
    renderMenuList();
    
    // 음성 안내 시작
    speak("드시고 싶은 메뉴를 눌러주세요.");
});

// 2. 메뉴 목록 생성
function renderMenuList() {
    menuList.innerHTML = '';
    menuData.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width:100%; border-radius:10px; margin-bottom:10px;">
            <h3 style="font-size:1.5rem;">${item.name}</h3>
        `;
        menuCard.onclick = () => showDetail(item);
        menuList.appendChild(menuCard);
    });
}

// 3. 상세 정보 보여주기
function showDetail(item) {
    detailDesc.innerText = item.description;
    detailPriceImg.src = item.priceImg;
    
    // 화면 전환
    detailView.classList.remove('hidden');
    menuDiv.classList.add('hidden');
    
    // 상세 음성 안내 (요청하신 형식)
    const message = `${item.name} 입니다. ${item.description} 가격은 ${item.price}입니다.`;
    speak(message);

    console.log("선택된 가격 이미지 경로:", item.priceImg);
}

// 4. 상세 정보 닫기
closeDetailBtn.onclick = () => {
    detailView.classList.add('hidden');
    menuDiv.classList.remove('hidden');
    // 다시 메뉴 목록으로 돌아올 때 안내
    speak("다른 메뉴도 살펴보세요.");
};
