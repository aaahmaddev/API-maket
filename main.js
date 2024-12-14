const api_key = 'e8dd93ac777746b29c848de53453af77';
const url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=' + api_key;

var news = [];

fetch(url)
    .then(response => response.json())
    .then(data => news = data);

setTimeout(() => {

    news.articles.map((news) => {

        if (news.urlToImage != null) {
            // card
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'mt-3', 'shadow',);
            cardElement.style.width = '18rem';

            // card top
            const cardTopElement = document.createElement('div');
            cardTopElement.classList.add('card-top', 'd-flex', 'align-items-center');
            cardElement.appendChild(cardTopElement);

            // card top avatar

            const CardTopImg = document.createElement('img');
            CardTopImg.classList.add('card-top-img', 'm-2');
            CardTopImg.src = './images/steve.jpg';
            cardTopElement.appendChild(CardTopImg);
            CardTopImg.style.width = '50px';
            CardTopImg.style.height = '50px';
            CardTopImg.style.borderRadius = '50%';

            // card top texts

            const CardTopTexts = document.createElement('div');
            CardTopTexts.classList.add('card-top-texts');
            cardTopElement.appendChild(CardTopTexts);




            // card top title 

            const CardTopTitle = document.createElement('h5');
            CardTopTitle.classList.add('card-top-title', 'fw-bold' , 'm-0');
            CardTopTitle.textContent = news.author;
            CardTopTexts.appendChild(CardTopTitle);

            // Card top Author

            const CardTopAuthor = document.createElement('p');
            CardTopAuthor.classList.add('card-top-author', 'fw-bold' , 'm-0');
            CardTopAuthor.textContent = news.author
            CardTopTexts.appendChild(CardTopAuthor);
            CardTopAuthor.style.opacity = "80%"

            // img
            const imgElement = document.createElement('img');
            imgElement.src = news.urlToImage;
            imgElement.classList.add('card-img-top');
            imgElement.style.height = '200px';
            cardElement.appendChild(imgElement);

            // card body
            const cardBodyElement = document.createElement('div');
            cardBodyElement.classList.add('card-body', 'p-0');
            cardElement.appendChild(cardBodyElement);

            // card title
            const cardTitleElement = document.createElement('h5');
            cardTitleElement.classList.add('card-title', 'fw-bold');
            cardTitleElement.textContent = news.title;
            cardBodyElement.appendChild(cardTitleElement);

            // card text
            const cardTextElement = document.createElement('p');
            cardTextElement.classList.add('card-text', 'text-center');
            cardTextElement.textContent = news.description;
            cardElement.appendChild(cardTextElement);

            // card link
            // const cardLinkElement = document.createElement('a');
            // cardLinkElement.classList.add('btn', 'btn-primary', 'w-75', 'mx-auto');
            // cardLinkElement.textContent = 'Link';
            // cardLinkElement.href = news.url;
            // cardLinkElement.target = '_blank';
            // cardElement.appendChild(cardLinkElement);

            document.querySelector('.main-sec-inner').appendChild(cardElement);
        }
    })
}, 1000);