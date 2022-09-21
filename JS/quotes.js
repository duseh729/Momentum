const quotes = [
    {
        quote: "신은 죽었다.",
        author: "프리드리히 니체",
    },
    {
        quote: "나를 죽이지 못하는 것은 나를 더 강하게 만든다.",
        author: "프리드리히 니체",
    },
    {
        quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기다워지는 것이다.",
        author: "린 홈",
    },
    {
        quote: "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.",
        author: "찰리 채플린",
    },
    {
        quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
        author: "레오나르도 다빈치",
    },
    {
        quote: "배우나 생각하지 않으면 공허하고, 생각하나 배우지 않으면 위험하다.",
        author: "공자",
    },
    {
        quote: "우정이라는 기계에 잘 정제된 예의라는 기름을 바르는 것은 현명하다.",
        author: "콜레트",
    },
    {
        quote: "역경은 누가 진정한 친구인지 가르쳐준다.",
        author: "로이스 맥마스터 부욜",
    },
    {
        quote: "많은 책들이 우리를 무식하게 만들고 있다.",
        author: "볼테르",
    },
    {
        quote: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
        author: "플루타르코스",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;