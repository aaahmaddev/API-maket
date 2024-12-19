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
            cardElement.style.width = '40vh';            


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
            cardTopElement.style.cursor = 'pointer';



            // card top title 

            const CardTopTitle = document.createElement('p');
            CardTopTitle.classList.add('card-top-title', 'fw-bold', 'm-0');
            CardTopTitle.textContent = news.author;
            CardTopTexts.appendChild(CardTopTitle);

            // Card top Author

            const CardTopAuthor = document.createElement('p');
            CardTopAuthor.classList.add('card-top-author', 'fw-bold', 'm-0');
            CardTopAuthor.textContent = news.author
            CardTopTexts.appendChild(CardTopAuthor);
            CardTopAuthor.style.opacity = "80%"
            CardTopAuthor.style.fontSize = "12px";

            // img
            const imgElement = document.createElement('img');
            imgElement.src = news.urlToImage;
            imgElement.classList.add('card-img-top');
            imgElement.style.height = '200px';
            imgElement.style.borderRadius = '0px';
            cardElement.appendChild(imgElement);

            // card body
            const cardBodyElement = document.createElement('div');
            cardBodyElement.classList.add('card-body', 'ps-3', 'pe-3');
            cardElement.appendChild(cardBodyElement);

            // card title
            const cardTitleElement = document.createElement('h5');
            cardTitleElement.classList.add('card-title', 'fw-bold');
            cardTitleElement.textContent = news.title;
            cardBodyElement.appendChild(cardTitleElement);

            // card text
            const cardTextElement = document.createElement('p');
            cardTextElement.classList.add('card-text',);
            cardTextElement.textContent = news.description;
            cardTextElement.style.fontSize = '17px';
            cardTextElement.style.opacity = '60%';
            cardBodyElement.appendChild(cardTextElement);

            // Button Div
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('d-flex', 'justify-content-end', 'align-items-center', 'mt-3');
            cardBodyElement.appendChild(buttonDiv);





            // Button

            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button');
            buttonElement.style.width = '35%';
            buttonElement.style.height = '35px';
            buttonElement.style.borderRadius = '20px';
            buttonElement.style.backgroundColor = 'transparent';
            buttonElement.style.border = '1px solid #3C3C43';
            buttonDiv.appendChild(buttonElement);



            // Button Text
            const buttonTextElement = document.createElement('a');
            buttonTextElement.classList.add('button-text', 'text-decoration-none');
            buttonTextElement.style.color = 'black';
            buttonTextElement.style.opacity = '80%';
            buttonTextElement.textContent = 'Go In News';
            buttonTextElement.href = news.url;
            buttonTextElement.target = '_blank';
            buttonElement.appendChild(buttonTextElement);

            document.querySelector('.main-sec-inner').appendChild(cardElement);

            // Button Hover
            buttonElement.addEventListener('mouseover', () => {
                buttonElement.style.backgroundColor = '#3C3C43';
                buttonElement.style.transition = 'background-color 0.3s ease';
                buttonElement.style.border = '3px solid black';
                buttonTextElement.style.color = 'white';
            });
            buttonElement.addEventListener('mouseout', () => {
                buttonElement.style.backgroundColor = 'transparent';   
                buttonElement.style.border = '1px solid #3C3C43';          
                buttonTextElement.style.color = 'black';
            });
        }
    })
}, 1000);


