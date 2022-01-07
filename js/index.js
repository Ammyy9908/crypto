const trend_container = document.querySelector('.market-trend-cards');
const featured_container = document.querySelector('.feature-cards');
const markettable = document.querySelector('.market-table-rows');
const articles_container = document.querySelector('.articles');


const trends = [
    {
        id:1,
        title: 'BTC',
        icon:"bitcoin.svg",
        price:"56,623.54",
        percent:"1.41%",
        subtitle:"BITCOIN"
    },
    {
        id:2,
        title: 'ETH',
        icon:"etherium.svg",
        price:"56,623.54",
        percent:"2.2%",
        subtitle:"ETHEREUM"
    },
    {
        id:3,
        title: 'BNB',
        icon:"bnb.svg",
        price:"56,623.54",
        percent:"0.82%",
        subtitle:"BINANCE"
    },
    {
        id:4,
        title: 'USDT',
        icon:"usdt.svg",
        price:"56,623.54",
        percent:"0.03%",
        subtitle:"TETHER"
    },
]

const features = [
    {
        id:1,
        title: 'Manage Portfolio',
        icon:"feature1.svg",
        description:"Buy and sell popular digital currencies, keep track of them in the one place."
    },
    {
        id:2,
        title: 'Protected Securely',
        icon:"feature2.svg",
        description:"All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
    },
    {
        id:3,
        title: 'Cryptocurrency Variety',
        icon:"feature3.svg",
        description:"Supports a variety of the most popular digital currencies and always uptodate."
    },

    {
        id:4,
        title: 'Learn Best Practice',
        icon:"feature4.svg",
        description:"Easy to know how to cryptocurrency works and friendly to newbie."
    },
]


const table_data = [
    {
        id:1,
        title:"Bitcoin",
        accronym:"BTC",
        icon:"bitcoin.svg",
        chart:"chart1"
    },
    {
        id:2,
        title:"Ethereum",
        accronym:"ETH",
        icon:"etherium.svg",
        chart:"chart2"
    },
    {
        id:3,
        title:"Binance",
        accronym:"BNB",
        icon:"bnb.svg",
        chart:"chart3"
    },
    {
        id:4,
        title:"Tether",
        accronym:"USDT",
        icon:"usdt.svg",
        chart:"chart4"
    },
    {
        id:5,
        title:"Solana",
        accronym:"SOL",
        icon:"solana.svg",
        chart:"chart5"
    },
    {
        id:6,
        title:"XRP",
        accronym:"XRP",
        icon:"xrp.svg",
        chart:"chart6"
    },
    {
        id:7,
        title:"USD Coin",
        accronym:"USDC",
        icon:"usdc.svg",
        chart:"chart7"
    },
]

const articles = [
    {
        id:1,
        title:"What is cryptocurrency? all you need to know",
        description:"Cryptocurrencies are basically digital assets. It is secured by cryptography.",
        tag:"CRYPTO BASIC",
        tagColor:"rgba(15, 174, 150, 0.15)",
        image:"https://images.unsplash.com/photo-1628238289656-6457bb6e6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    },
    {
        id:2,
        title:"Can crypto really replace your bank account?",
        description:"From direct deposit to earning yield, key ways crypto can help you take control.",
        tag:"CRYPTO BASIC",
        tagColor:"rgba(15, 174, 150, 0.15)",
        image:"https://images.unsplash.com/photo-1616803140344-6682afb13cda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id:3,
        title:"How to setup crypto wallet in your account",
        description:"A crypto wallet is a place where you can securely keep your crypto..",
        tag:"TIPS & TRICKS",
        tagColor:"rgba(81, 18, 129, 0.15)",
        image:"https://images.unsplash.com/photo-1614330316567-11d8e572db16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
        id:4,
        title:"The fact about bitcoin must you know",
        description:"Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.. ",
        tag:"CRYPTO BASIC",
        tagColor:"rgba(15, 174, 150, 0.15)",
        image:"https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
        id:5,
        title:"When is the best time to invest in crypto?",
        description:"When prices are fluctuating, how do you know when to buy?",
        tag:"TIPS & TRICKS",
        tagColor:"rgba(81, 18, 129, 0.15)",
        image:"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id:6,
        title:"What Is DeFi? Inside the Wild West of Cryptocurrency.",
        description:"Welcome to decentralized finance or DeFi, the new frontier of crypto that will..",
        tag:"TIPS & TRICKS",
        tagColor:"rgba(81, 18, 129, 0.15)",
        image:"https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },

]

trends.forEach((trend)=>{
    trend_container.innerHTML += `<div class="trend-card">
    <div class="card-wrapper">
    <div class="trend-card-info">
    <div class="coin-meta">
        <div class="coin-icon">
            <img src="assets/${trend.icon}" alt="">
        </div>
        <span class="coin_name">${trend.title}</span>
        <div class="coin-chip">${trend.subtitle}</div>
    </div>
    <button class="coin-more-info">
        <img src="./assets/arrow_up.svg" alt="">
    </button>
</div>

<div class="coin-value">
        <div class="coint-value-meta">
            <div class="coin-price">$56,623.54</div>
            <div class="coin-perncetile">${trend.percent}</div>
        </div>
        <div class="coin-chart">
            <img src="./assets/chart-state.svg" alt="">
        </div>
</div></div>
   </div>`;
})

features.forEach((feature)=>{
    featured_container.innerHTML += ` <div class="feature-card">
    <div class="feature-card-content">
        <div class="feature-card-item">
            <div class="feture-card-item-icon">
            <img src="./assets/${feature.icon}" alt="feature-icon"/>
            </div>
            <div class="feature-card-item-content">
                <h3>${feature.title}</h3>
                <p>${feature.description}.</p>
            </div>
        </div>
        <a href="#" class="feture-card-link">See Explained <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.92422 1.30884L12.3088 5.30884M12.3088 5.30884L8.92422 9.30884M12.3088 5.30884L1.80884 5.30884" stroke="#0FAE96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
    </div>
</div>`;
})


table_data.forEach((table,i)=>{
    markettable.innerHTML+=`<div class="market-table-row">
    <div class="market-table-row-left">
        <span>${i+1}</span>
        <span class="coin-meta">
            <div class="market-coin-icon">
                <img src="./assets/${table.icon}" alt="">
            </div>
            <p>${table.title} BTC</p>
        </span>
    </div>
    <div class="market-table-row-right">
        <span>$56,623.54</span>
        <span>1.41%</span>
        <span><img src="./assets/${table.chart}.svg" alt=""></span>
        <span><button class="trade-btn">Trade</button></span>
    </div>
</div>`;
});


articles.forEach((article)=>{
    articles_container.innerHTML+=`<div class="article-card-medium">
    <div class="article-card-thumb">
        <img src=${article.image} alt="">
    </div>

    <div class="article-card-body">
        <div class="card-content">
            <div class="article-tag" style="background-color:${article.tagColor}">
                ${article.tag}
            </div>
            <h3 class="card-title">${article.title}</h3>
            <p class="card-description">${article.description} </p>
        </div>
    </div>
</div>`;
})