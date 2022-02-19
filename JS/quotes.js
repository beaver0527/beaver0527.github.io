const quotes = [
    {
        quote:"내가 존재한다는 사실이야말로 확실하고 영원한 생명의 경탄이다.",
        author:"타고르",
    },
    {
        quote:"기회는 어디에도 있는 것이다. 낚싯대를 던져놓고 항상 준비태세를 취하라. 없을 것 같아 보이는 곳도 언제나 고기가 있는 법이다.",
        author:"오비디우스",
    },
    {
        quote:"인간의 됨됨이는 그가 가진 지식에 있는 것이 아니라 지식을 갖기 위해 노력하는 데에 있다.",
        author:"G.E.레싱",
    },
    {
        quote:"나는 지금까지 자기의 욕구를 충족시키려고 노력하기보다는 오히려 그것을 억제하려 함으로써 행복을 얻을 수 있음을 알게되었다.",
        author:"J.S.밀",
    },
    {
        quote:"재산의 빈곤을 치유하기는 쉬우나 정신의 빈곤을 치유할 수는 없다.",
        author:"몽테뉴",
    },
    {
        quote:"우리들이 어디를 가든 무엇을 하든 우리들의 한가지 연구 대상은 바로 자기 자신이다.",
        author:"에머슨",
    },
    {
        quote:"보람 있게 보낸 하루가 편안한 잠을 가져다주는듯이 값지게 쓰여진 인생은 편안한 죽음을 가져다준다.",
        author:"레오나르도 다빈치",
    },
    {
        quote:"행복하려 하는 것은 권리지만 인간으로서 할 수 있는 한 알고 싶은 것을 배우고, 자신에게 최고의 기쁨을 가져다 줄 재능과 능력을 연마해야 함이 분명히 요구된다.",
        author:"버트런드 러셀",
    }   
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

//round 반올림 ceil 올림 floor 내림
quote.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote;
author.innerText = quotes[Math.floor(Math.random()*quotes.length)].author;


