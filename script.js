const menuData = [
    { 
        name: "따뜻한 아메리카노", 
        img: "americano.jpg",
        description: "따뜻하고 쓴맛이 나는 커피입니다. 시럽이 없어 달지 않아요.",
        priceImg: "money_4000.jpg" 
    },
    { 
        name: "카페라떼", 
        img: "latte.jpg",
        description: "커피에 하얀 우유를 넣어서 부드럽고 고소한 맛이 납니다.",
        priceImg: "money_4500.jpg" 
    },
    { 
        name: "초코라떼", 
        img: "choco.jpg",
        description: "달콤한 초콜릿과 우유가 섞인 아주 달콤한 음료입니다.",
        priceImg: "money_4800.jpg" 
    }
];

const viewMenuBtn = document.getElementById('view-menu');
const mainPage = document.getElementById('main-page');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const detailView = document.getElementById('detail-view');
const detailDesc = document.getElementById('detail-desc');
const detailPriceImg = document.getElementById('detail-price-img');
const closeDetailBtn = document.getElementById('close-detail');

// 1. 메뉴판 보기 버튼 이벤트
viewMenuBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden');
    menuDiv.classList.remove('hidden');
    renderMenuList();
});

// 2. 메뉴 목록 화면에 그리기
function renderMenuList() {
    menuList.innerHTML = ''; 
    menuData.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width:180px; height:180px; border-radius:15px; object-fit:cover;">
            <h2 style="font-size:1.5rem;">${item.name}</h2>
        `;
        // 카드 클릭 시 상세 페이지 이동
        menuCard.addEventListener('click', () => showDetail(item));
        menuList.appendChild(menuCard);
    });
}

// 3. 상세 정보 보여주기
function showDetail(item) {
    detailDesc.innerText = item.description;
    detailPriceImg.src = item.priceImg;
    
    // 상세 보기 창 열기
    detailView.classList.remove('hidden');
}

// 4. 상세 정보 닫기 (다시 메뉴 목록으로)
closeDetailBtn.addEventListener('click', () => {
    detailView.classList.add('hidden');
});
