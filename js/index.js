var quote = document.getElementById("demo");
var numbers = [];
function quoteGenerator() {
    var num =Math.floor(Math.random() * 10) + 1;
    for(var i = numbers.length;numbers[i-1]===num;){
        num =Math.floor(Math.random() * 10) + 1;
    }
    numbers.push(num);
    
    switch(num){  
        case 1:
            quote.innerHTML=`“Be yourself; everyone else is already taken.”
           <br/> <br/>  ― Oscar Wilde`
            break;
        case 2:
            quote.innerHTML=`“It is better to be hated for what you are than to be loved for what you are not.”
            <br/> <br/>  ― Andre Gide, Autumn Leaves`
            break;
        case 3:
            quote.innerHTML=`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
           <br/> <br/> ― Albert Einstein`
            break;
        case 4:
            quote.innerHTML=`“So many books, so little time.”
            <br/> <br/> ― Frank Zappa `
            break;
        case 5:
            quote.innerHTML=`“A room without books is like a body without a soul.”
            <br/> <br/> ― Marcus Tullius Cicero`
            break;
        case 6:
            quote.innerHTML=`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
            <br/> <br/> ― Bernard M. Baruch`
            break;
        case 7:
            quote.innerHTML=`“Some people never go crazy. What truly horrible lives they must lead.”
            <br/> <br/> ― Charles Bukowski`
            break;
        case 8:
            quote.innerHTML=`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
            <br/> <br/>  ― Dr. Seuss`
            break;
        case 9:
            quote.innerHTML=`“You only live once, but if you do it right, once is enough.”
            <br/> <br/> ― Mae West`
            break;
        case 10:
            quote.innerHTML=`“Be the change that you wish to see in the world.”
            <br/> <br/>   ― Mahatma Gandhi`
            break;
    }
}