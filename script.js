const menuData = [
    {
        name: "따뜻한 아메리카노",
        img: "americano.jpg",
        description: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지 않고 쓴맛이 납니다.",
        priceImg: "money_2000.jpg",
        orderText: "따뜻한 아메리카노 한잔 주세요"
    },
    {
        name: "시원한 아메리카노",
        img: "iceamericano.jpg",
        description: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지 않고 쓴맛이 납니다.",
        priceImg: "money_2000.jpg",
        orderText: "시원한 아메리카노 한잔 주세요"
    },
    {
        name: "따뜻한 카페라떼",
        img: "latte.jpg",
        description: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 카페라떼 한잔 주세요"
    },
    {
        name: "시원한 카페라떼",
        img: "Icecafelatte.jpg",
        description: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.",
        priceImg: "money_3000.jpg",
        orderText: "시원한 카페라떼 한잔 주세요"
    },
    {
        name: "따뜻한 바닐라라떼",
        img: "vanila.jpg",
        description: "바닐라시럽과 우유가 들어간 따뜻한 바닐라 라떼입니다. 달고 커피가 들어갑니다.",
        priceImg: "money_3500.jpg",
        orderText: "따뜻한 바닐라라떼 한잔 주세요"
    },
    {
        name: "시원한 바닐라라떼",
        img: "icevanila.jpg",
        description: "바닐라시럽과 우유가 들어간 시원한 바닐라 라떼입니다. 달고 커피가 들어갑니다.",
        priceImg: "money_3500.jpg",
        orderText: "시원한 바닐라라떼 한잔 주세요"
    },
    {
        name: "따뜻한 헤이즐넛라떼",
        img: "hazelnut.jpg",
        description: "헤이즐넛시럽과 우유가 들어간 따뜻한 헤이즐넛 라떼입니다. 달고 커피가 들어갑니다.",
        priceImg: "money_3500.jpg",
        orderText: "따뜻한 헤이즐넛라떼 한잔 주세요"
    },
    {
        name: "시원한 헤이즐넛라떼",
        img: "icehazelnut.jpg",
        description: "헤이즐넛시럽과 우유가 들어간 시원한 헤이즐넛 라떼입니다. 달고 커피가 들어갑니다.",
        priceImg: "money_3500.jpg",
        orderText: "시원한 헤이즐넛라떼 한잔 주세요"
    },
    {
        name: "따뜻한 초코라떼",
        img: "choco.jpg",
        description: "초코분말과 우유를 섞어서 달콤하고 초코맛이 나는 우유 음료입니다.",
        priceImg: "money_3500.jpg",
        orderText: "따뜻한 초코라떼 한잔 주세요"
    },
    {
        name: "시원한 초코라떼",
        img: "Icechoco.jpg",
        description: "초코분말과 우유를 섞어서 달콤하고 초코맛이 나는 우유 음료입니다.",
        priceImg: "money_3500.jpg",
        orderText: "시원한 초코라떼 한잔 주세요"
    },
    {
        name: "따뜻한 녹차라떼",
        img: "greentealatte.jpg",
        description: "녹차분말과 우유가 들어간 따뜻한 녹차맛 라떼입니다. 달고 커피는 들어가지 않습니다.",
        priceImg: "money_4000.jpg",
        orderText: "따뜻한 녹차라떼 한잔 주세요"
    },
    {
        name: "시원한 녹차라떼",
        img: "Icegreentealatte.jpg",
        description: "녹차분말과 우유가 들어간 시원한 녹차맛 라떼입니다. 달고 커피는 들어가지 않습니다.",
        priceImg: "money_4000.jpg",
        orderText: "시원한 녹차라떼 한잔 주세요"
    },
    {
        name: "따뜻한 고구마라떼",
        img: "goguma.png",
        description: "고구마분말과 우유가 들어간 따뜻한 고구마맛 라떼입니다. 달고 커피는 들어가지 않습니다.",
        priceImg: "money_4000.jpg",
        orderText: "따뜻한 고구마라떼 한잔 주세요"
    },
    {
        name: "시원한 고구마라떼",
        img: "icegoguma.png",
        description: "고구마분말과 우유가 들어간 시원한 고구마맛 라떼입니다. 달고 커피는 들어가지 않습니다.",
        priceImg: "money_4000.jpg",
        orderText: "시원한 고구마라떼 한잔 주세요"
    },
    {
        name: "시원한 딸기라떼",
        img: "berry.jpg",
        description: "딸기청과 우유가 들어간 시원한 딸기맛 라떼입니다. 달고 커피는 들어가지 않습니다.",
        priceImg: "money_4500.jpg",
        orderText: "시원한 딸기라떼 한잔 주세요"
    },
    {
        name: "따뜻한 페퍼민트 티",
        img: "mint.png",
        description: "페퍼민트 티백을 우려낸 박하맛 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 페퍼민트 티 한잔 주세요"
    },
    {
        name: "시원한 페퍼민트 티",
        img: "icemint.png",
        description: "페퍼민트 티백을 우려낸 박하맛 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "시원한 페퍼민트 티 한잔 주세요"
    },
    {
        name: "따뜻한 캐모마일 티",
        img: "chamo.png",
        description: "캐모마일 티백을 우려낸 사과향 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 캐모마일 티 한잔 주세요"
    },
    {
        name: "시원한 캐모마일 티",
        img: "icechamo.png",
        description: "캐모마일 티백을 우려낸 사과향 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "시원한 캐모마일 티 한잔 주세요"
    },
    {
        name: "따뜻한 루이보스 티",
        img: "rooibos.png",
        description: "루이보스 티백을 우려낸 구수한 맛의 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 루이보스 티 한잔 주세요"
    },
    {
        name: "시원한 루이보스 티",
        img: "icerooibos.png",
        description: "루이보스 티백을 우려낸 구수한 맛의 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "시원한 루이보스 티 한잔 주세요"
    },
    {
        name: "따뜻한 유자차",
        img: "youja.png",
        description: "유자청이 들어간 달달한 유자맛 차 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "따뜻한 유자차 한잔 주세요"
    },
    {
        name: "시원한 유자차",
        img: "iceyouja.jpg",
        description: "유자청이 들어간 달달한 유자맛 차 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "시원한 유자차 한잔 주세요"
    },
    {
        name: "시원한 복숭아 아이스티",
        img: "icetea.png",
        description: "복숭아 맛이 나는 달달하고 시원한 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "시원한 복숭아 아이스티 한잔 주세요"
    },
    {
        name: "따뜻한 자몽에이드",
        img: "gfade.jpg",
        description: "자몽청이 들어가서 약간 쓰고 달달한 차 입니다.",
        priceImg: "money_3000.jpg",
        orderText: "따뜻한 자몽에이드 한잔 주세요"
    },
    {
        name: "시원한 자몽에이드",
        img: "icegfade.jpg",
        description: "자몽청이 들어가서 약간 쓰고 달달한 차 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "시원한 자몽에이드 한잔 주세요"
    },
    {
        name: "따뜻한 레몬에이드",
        img: "lemon.jpg",
        description: "레몬청이 들어가서 새콤하고 달달한 차 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "따뜻한 레몬에이드 한잔 주세요"
    },
    {
        name: "시원한 레몬에이드",
        img: "icelemon.jpg",
        description: "레몬청이 들어가서 새콤하고 달달한 차 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "시원한 레몬에이드 한잔 주세요"
    },
    {
        name: "사과쥬스",
        img: "apple.jpg",
        description: "달콤한 사과 맛의 주스 입니다.",
        priceImg: "money_4000.jpg",
        orderText: "사과쥬스 주세요"
    },
    {
        name: "바닐라 시럽",
        img: "vsyrup.png",
        description: "커피에 넣으면 달콤한 바닐라 향이 납니다.",
        priceImg: "money_500.jpg",
        orderText: "바닐라 시럽 주세요"
    },
    {
        name: "헤이즐넛 시럽",
        img: "hsyrup.png",
        description: "커피에 넣으면 달콤한 헤이즐넛 향이 납니다.",
        priceImg: "money_500.jpg",
        orderText: "헤이즐넛 시럽 주세요"
    },
    {
        name: "요미요미",
        img: "latte.jpg",
        description: "페퍼민트 티백을 우려낸 박하맛 차 입니다.",
        priceImg: "money_1500.jpg",
        orderText: "따뜻한 카페라떼 한잔 주세요"
    }
];

const goodsData = [
    {
        name: "커피 드립백 10개",
        img: "drip10.jpg",
        description: "집에서도 카페 커피를 즐길 수 있는 드립백 10개 세트입니다.",
        priceImg: "money_11000.jpg",
        orderText: "커피 드립백 10개 주세요"
    },
    {
        name: "커피 드립백 5개",
        img: "drip5.jpg",
        description: "집에서도 카페 커피를 즐길 수 있는 드립백 5개 세트입니다.",
        priceImg: "money_4500.jpg",
        orderText: "커피 드립백 5개 주세요"
    },
    {
        name: "에코백",
        img: "eco.jpg",
        description: "카페 로고가 그려진 예쁜 에코백입니다.",
        priceImg: "money_9000.jpg",
        orderText: "에코백 주세요"
    },
    {
        name: "핸드폰 그립톡",
        img: "grip.jpg",
        description: "카페 로고가 그려진 핸드폰 그립톡입니다.",
        priceImg: "money_7000.jpg",
        orderText: "핸드폰 그립톡 주세요"
    },
    {
        name: "작은 키링",
        img: "smallkey.jpg",
        description: "카페 로고가 새겨진 작은 키링입니다.",
        priceImg: "money_4000.jpg",
        orderText: "작은 키링 하나 주세요"
    },
    {
        name: "큰 키링",
        img: "bigkey.jpg",
        description: "카페 로고가 새겨진 큰 키링입니다.",
        priceImg: "money_6000.jpg",
        orderText: "큰 키링 하나 주세요"
    }
];

// ── 요소 선택 ──
const mainPage       = document.getElementById('main-page');
const menuDiv        = document.getElementById('menu');
const menuList       = document.getElementById('menu-list');
const detailView     = document.getElementById('detail-view');
const detailDesc     = document.getElementById('detail-desc');
const detailMenuImg  = document.getElementById('detail-menu-img');
const detailPriceImg = document.getElementById('detail-price-img');
const closeDetailBtn = document.getElementById('close-detail');
const orderBtn       = document.getElementById('order-btn');
const orderBtnLabel  = document.getElementById('order-btn-label');
const speechBubble   = document.getElementById('speech-bubble');
const goodsDiv       = document.getElementById('goods');
const goodsList      = document.getElementById('goods-list');

let currentOrderText  = '';
let currentDescText   = '';
let previousPage      = null;
let savedScrollY      = 0;

// ── priceImg 파일명에서 가격 추출 ──
// 예: "money_2000.jpg" → "2000"
function extractPrice(priceImg) {
    const match = priceImg.match(/money_(\d+)/);
    return match ? Number(match[1]).toLocaleString('ko-KR') : '';
}

// ── TTS 헬퍼 ──
function speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang  = 'ko-KR';
    utter.rate  = 0.9;
    window.speechSynthesis.speak(utter);
}

// ── 페이지 진입 환영 TTS (모바일 대응) ──
window.addEventListener('load', () => {
    const welcomeText = '환영합니다. 무엇을 주문하시겠습니까?';
    const firstTouchHandler = () => {
        speak(welcomeText);
        document.getElementById('view-menu').removeEventListener('click', firstTouchHandler);
        document.getElementById('view-goods').removeEventListener('click', firstTouchHandler);
    };
    document.getElementById('view-menu').addEventListener('click', firstTouchHandler);
    document.getElementById('view-goods').addEventListener('click', firstTouchHandler);
});

// ── 초기화면 버튼 ──
document.getElementById('view-menu').addEventListener('click', () => {
    speak('메뉴를 선택하세요');
    showPage(menuDiv);
    renderMenuList();
});

document.getElementById('view-goods').addEventListener('click', () => {
    speak('물건을 선택하세요');
    showPage(goodsDiv);
    renderGoodsList();
});

// ── 다시 듣기 버튼 ──
document.getElementById('menu-replay').addEventListener('click', () => {
    speak('메뉴를 선택하세요');
});

document.getElementById('goods-replay').addEventListener('click', () => {
    speak('물건을 선택하세요');
});

document.getElementById('detail-replay').addEventListener('click', () => {
    speak(currentDescText);
});

// ── 뒤로 가기 (메뉴 → 초기화면) ──
document.getElementById('menu-back').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    showPage(mainPage);
});

// ── 뒤로 가기 (굿즈 → 초기화면) ──
document.getElementById('goods-back').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    showPage(mainPage);
});

// ── 뒤로 가기 (상세 → 이전 목록, 스크롤 복원) ──
closeDetailBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    speechBubble.classList.add('hidden');
    showPage(previousPage);
    requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollY);
    });
});

// ── 메뉴 목록 렌더링 ──
function renderMenuList() {
    menuList.innerHTML = '';
    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}"
                style="width:120px;height:120px;border-radius:10px;object-fit:cover;">
            <h3>${item.name}</h3>
        `;
        card.onclick = () => {
            savedScrollY = window.scrollY;
            previousPage = menuDiv;
            showDetail(item, '주문할래요', '(먹고싶어요)');
        };
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
                style="width:120px;height:120px;border-radius:10px;object-fit:cover;">
            <h3>${item.name}</h3>
        `;
        card.onclick = () => {
            savedScrollY = window.scrollY;
            previousPage = goodsDiv;
            showDetail(item, '구매할래요', '(갖고싶어요)');
        };
        goodsList.appendChild(card);
    });
}

// ── 상세 보기 (메뉴·굿즈 공통) ──
function showDetail(item, btnMain, btnSub) {
    const price = extractPrice(item.priceImg);
    const fullText = item.description + ' 가격은 ' + price + '원입니다.';

    detailDesc.innerText     = item.description;
    detailMenuImg.src        = item.img;
    detailMenuImg.alt        = item.name;
    detailPriceImg.src       = item.priceImg;
    currentOrderText         = item.orderText;
    currentDescText          = fullText;
    orderBtnLabel.innerHTML  = `${btnMain}<br><small>${btnSub}</small>`;
    speechBubble.classList.add('hidden');
    showPage(detailView);
    speak(fullText);
}

// ── 주문/구매 버튼 TTS ──
orderBtn.addEventListener('click', () => {
    speechBubble.textContent = '🔊 "' + currentOrderText + '"';
    speechBubble.classList.remove('hidden');
    speak(currentOrderText);
});

// ── 화면 전환 헬퍼 ──
function showPage(targetEl) {
    [mainPage, menuDiv, detailView, goodsDiv].forEach(el => el.classList.add('hidden'));
    targetEl.classList.remove('hidden');
    if (targetEl !== menuDiv && targetEl !== goodsDiv) {
        window.scrollTo(0, 0);
    }
}
