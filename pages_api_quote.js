## pages/api/quote.js


```js
export default function handler(req, res) {
// Simple array of themed quotes — you can expand or use an external API
const quotes = [
{ text: 'The Pale Began. A little knight ventures forth.', author: 'Knight' },
{ text: 'Rest here, and gather your strength.', author: 'Nailmaster' },
{ text: 'Beyond the deep wells, you will find more.', author: 'Whispers' }
];


const idx = Math.floor(Math.random() * quotes.length);
res.status(200).json(quotes[idx]);
}
```
