"use strict";

document.documentElement.setAttribute("lang", "en");

let metaUTF = document.createElement('meta');
metaUTF.setAttribute('charset','UTF-8');

let metaContent = document.createElement('meta');
metaContent.setAttribute("http-equiv", "X-UA-Compatible");
metaContent.setAttribute("content", "IE=edge");

let metaViewport = document.createElement('meta');
metaViewport.setAttribute("name","viewport")
metaViewport.setAttribute("content","width=device-width");
metaViewport.setAttribute("initial-scale", "1.0")

let webTitle = document.createElement('title');
webTitle.innerHTML = 'DOM';

document.head.appendChild(metaUTF);
document.head.appendChild(metaViewport);
document.head.appendChild(metaContent);
document.head.appendChild(webTitle);

let style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans:wght@300&display=swap');
    *{
        margin: 0;
        padding:0;
    }

    .container {
        margin: 120px 0 120px;
    }
    .title {
        margin-bottom: 55px;
        text-align:center;
        font-family: 'Arvo';
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    }

    .subtitle {
        font-family: 'Open Sans';
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        margin: 0 auto;
    }

    .item {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding: 80px 95px 80px;
        border:1px solid #9FA3A7;
        border-radius: 1px
    }

    .upTitle {
    font-family: 'Montserrat';
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    margin-bottom:20px;
    }

    .item__title {
    max-width:210px;
    text-align: center;
    font-family: 'Arvo';
    font-size: 36px;
    line-height: 46px;
    margin-bottom:25px;
    }

    .text {
    font-family: 'Open Sans';
    font-size: 12px;
    max-width: 210px;
    line-height: 22px;
    text-align: center;
    color: #9FA3A7;
    margin-bottom:55px;
    }

    .button {
        text-decoration: none;
        display:flex;
        align-items:center;
        justify-content:center;
        width: 141px;
        min-height: 40px;
        font-family: 'Montserrat';
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #212121;
        border: 3px solid #FFC80A;
        border-radius: 25px;
    }

    .itemsContainer {
        display:flex;
        justify-content:center;
    }

`;
document.head.appendChild(style)

let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Choose Your Option';

let subtitle = document.createElement('p');
subtitle.classList.add('subtitle');
subtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';

container.appendChild(title);
title.appendChild(subtitle);

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('itemsContainer');
container.append(itemsContainer)


const items = [{
    upTitle: "FREELANCER",
    title: "Initially designed to ",
    text: "But I must explain to you how all this mistaken idea of denouncing ",
    button: "START HERE", },
    {
    upTitle: "STUDIO",
    title: "Initially designed to ",
    text: "But I must explain to you how all this mistaken idea of denouncing ",
    button: "START HERE",
}]

items.forEach(elem => {
    const item = document.createElement('div');
    item.classList.add('item');
    itemsContainer.append(item);

    const upTitle = document.createElement('span');
    upTitle.innerHTML = elem.upTitle;
    upTitle.classList.add('upTitle');
    item.appendChild(upTitle);

    const title = document.createElement('span');
    title.innerHTML = elem.title;
    title.classList.add('item__title')
    item.appendChild(title);

    const text = document.createElement('p');
    text.innerHTML = elem.text;
    text.classList.add('text')
    item.appendChild(text);

    const button = document.createElement('a');
    button.innerHTML = elem.button;
    button.setAttribute('href', '#');
    button.classList.add('button')
    item.appendChild(button);

    if(elem.upTitle == "STUDIO") {
        upTitle.style.color = '#FFC80A';
        item.style.backgroundColor = '#8F75BE'
        title.style.color = 'white';
        text.style.color = 'white';
        button.style.color = 'white';
     }
})