const menuData = [
    {
        name: "따뜻한 아메리카노",
        img: "americano.jpg",
        description: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지 않고 쓴맛이 납니다.",
        priceImg: "money_2000.jpg",
        orderText: "따뜻한 아메리카노 한잔 주세요"
    },
    {
        name: "카페라떼",
        img: "latte.jpg",
        description: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 카페라떼 한잔 주세요"
    },
    {
        name: "초코라떼",
        img: "choco.jpg",
        description: "초코분말과 우유를 섞어서 달콤하고 초코맛이 나는 우유 음료입니다.",
        priceImg: "money_3500.jpg",
        orderText: "따뜻한 초코라떼 한잔 주세요"
    }
];

// 굿즈 데이터 (원하시는 굿즈로 수정하세요)
const goodsData = [
    { name: "텀블러", img: "goods_tumbler.jpg", price: "12,000원" },
    { name: "에코백", img: "goods_bag.jpg", price: "8,000원" },
    { name: "모자", img: "goods_hat.jpg", price: "15,000원" },
    { name: "키링", img: "goods_keyring.jpg", price: "5,000원" }
];

// 요소 선택
const mainPage = document.getElementById('main-page');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const detailView = document.getElementById('detail-view');
const detailDesc = document.getElementById('detail-desc');
const detailPriceImg = document.getElementById('detail-price-img');
const closeDetailBtn = document.getElementById('close-detail');
const orderBtn = document.getElementById('order-btn');
const speechBubble = document.getElementById('speech-bubble');
const goodsDiv = document.getElementById('goods');
const goodsList = document.getElementById('goods-list');

let currentOrderText = '';

// ── 초기화면 버튼 ──
document.getElementById('view-menu').addEventListener('click', () => {
    showPage(menuDiv);
    renderMenuList();
});

document.getElementById('view-goods').addEventListener('click', () => {
    showPage(goodsDiv);
    renderGoodsList();
});

// ── 뒤로 가기 버튼들 ──
document.getElementById('menu-back').addEventListener('click', () => showPage(mainPage));
document.getElementById('goods-back').addEventListener('click', () => showPage(mainPage));

closeDetailBtn.addEventListener('click', () => {
    showPage(menuDiv);
    speechBubble.classList.add('hidden');
});

// ── 메뉴 목록 렌더링 ──
function renderMenuList() {
    menuList.innerHTML = '';
    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}"
                style="width:120px; height:120px; border-radius:10px; object-fit:cover;">
            <h3>${item.name}</h3>
        `;
        card.onclick = () => showDetail(item);
        menuList.appendChild(card);
    });
}

// ── 굿즈 목록 렌더링 ──
function renderGoodsList() {
    goodsList.innerHTML = '';
    goodsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}"
                style="width:120px; height:120px; border-radius:10px; object-fit:cover;">
            <h3>${item.name}</h3>
            <p style="margin:4px 0 0; font-size:1rem; color:#888;">${item.price}</p>
        `;
        goodsList.appendChild(card);
    });
}

// ── 상세 보기 ──
function showDetail(item) {
    detailDesc.innerText = item.description;
    detailPriceImg.src = item.priceImg;
    currentOrderText = item.orderText;
    speechBubble.classList.add('hidden');
    showPage(detailView);
}

// ── 주문 버튼: TTS 음성 출력 ──
orderBtn.addEventListener('click', () => {
    speechBubble.textContent = '🔊 "' + currentOrderText + '"';
    speechBubble.classList.remove('hidden');

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentOrderText);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
});

// ── 화면 전환 헬퍼 ──
function showPage(targetEl) {
    [mainPage, menuDiv, detailView, goodsDiv].forEach(el => el.classList.add('hidden'));
    targetEl.classList.remove('hidden');
}
