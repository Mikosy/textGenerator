// VARIABLES

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Perfection is not attainable. But if we chase perfection we can catch excellence."`,
    person: `~ Vince Lombardi`
}, {
    quote: `"Life comes from the earth and returns to the earth."`,
    person: `~ Zhuangzi`
}, {
    quote: `"For the great doesn't happen through impulse alone, and is succession of little
    things that are brought together."`,
    person: `~ Vincent Van Gogh`
},  {
    quote: `"Believe you can and you're halfway there."`,
    person: `~ Pep Guardiola`
},  {
    quote: `"Life no suppose hard."`,
    person: `~ Kosy`
},  ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

