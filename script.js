const setOfWords = [
    "Ankit The Great Tussi Great Ho!!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, pariatur illo? Quo quod velit ex nulla",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis impedit, repellat sapiente beatae officiis temporibus accusantium voluptate! Explicabo, sed.",
    "Illum, cupiditate atque itaque aliquid repellat nostrum, corrupti modi rem assumenda voluptatibus magni.",
    "Maxime voluptatibus, dicta in quos non, veniam corporis exercitationem praesentium error, ex magnam laborum quibusdam",
    "tempora esse officia obcaecati nesciunt voluptatum sint provident, voluptatibus corrupti! Eum voluptates enim eos dolorem ea sit itaque",
    "inventore soluta ipsam itaque. Aspernatur nemo reiciendis necessitatibus adipisci delectus eum officia alias accusamus temporibus, quae minus odit error ad maxime similique molestias maiores sed quos tempore veritatis ipsum nesciunt."
];
const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*(setOfWords.length));
    msg.innerText = setOfWords[randomNumber];
    btn.innerText = 'Done';
    let date = new Date();
    startTime = date.getTime();
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    let totalStr = typeWords.value;
    let wordCount = wordcounter(totalStr);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = msg.innerText;
    finalMsg += '\n\n\nYou typed at '+ speed + ' words per minute. ';
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

const wordcounter = (myStr) => {
    let response = myStr.split(" ").length;
    return response;
}

const compareWords = (str1, str2) => {
    let mystr1 = str1.split(" ");
    let mystr2 = str2.split(" ")
    let count = 0;

    for(let i=0; i<mystr1.length; i++) {
        for(let j=0; j<mystr2.length; j++) {
            if(mystr2[j] == mystr1[i]) {
                count++;
                mystr2[j] = " ";
                break;
            }
        }
    }

    // mystr1.forEach(function(item, index){
    //     if(item == mystr2[index]){
    //         count++;
    //     }
    // })

    let errorWords = mystr1.length - count;
    if(count == 1){
        return (count + ' word correct out of '+mystr1.length+' words and '+errorWords+' words are incorrect');
    }
    else{
        return (count + ' words correct out of '+mystr1.length+' words and '+errorWords+' words are incorrect');
    }
}

btn.addEventListener('click', function() {
    if(this.innerText === 'Start'){
        typeWords.disabled = false;
        playGame();
    } else if(this.innerText === 'Done'){
        typeWords.disabled = true;
        btn.innerText = 'Start';
        endPlay();
    }
});
