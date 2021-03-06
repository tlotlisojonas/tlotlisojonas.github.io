const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const erros = document.querySelector(".numErrors");
const score = document.querySelector(".highScore");
const button = document.querySelector(".button");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");


var timer = [0,0,0,0];
var interval;
var timerRunning = false;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if (time <=9){
      time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
 var hi = "";
var array3 = [];
function runTimer(){
  let currentTimer = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

  theTimer.innerHTML = currentTimer;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
  timer[2] = Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
    
    hi = currentTimer;
    
}


// Match the text entered with the provided text on the page:
     var x =0;
    var y =0;
    var keycheck = "";
    var words = "";
    var select ="";
function generator(){
    
    button.style.background = "lightgreen"    
    button1.addEventListener("click", easy, false);
    button2.addEventListener("click", moderate, false);
    button3.addEventListener("click", hard, false);
    
    function easy(){
         select =0;
         button.style.background = "lightblue";
         button.innerHTML = "GENERATE A SENTANCE"
         button1.style.background = "lightblue";
         button2.style.background = "";
         button3.style.background = ""
    }
    function moderate(){
         select =1;
        button2.style.background = "lightblue";
        button.innerHTML = "GENERATE A SENTANCE"
        button.style.background = "lightblue";
        button1.style.background = "";
        button3.style.background = "";
    }
    function hard(){
         select =2;
        button3.style.background = "lightblue";
        button.innerHTML = "GENERATE A SENTANCE"
        button.style.background = "lightblue";
        button1.style.background = "";
        button2.style.background = "";
    }
    
    var wordArray = [["It was getting dark, and we weren't there yet.","Lets all be unique together until we realise we are all the same.","Wow, does that work?","Don't step on the broken glass.","He told us a very exciting adventure story.","Everyone was busy, so I went to the movie alone.","They got there early, and they got really good seats.","She folded her handkerchief neatly.","She folded her handkerchief neatly.","She folded her handkerchief neatly.","I will never be this young again. Ever. Oh damn… I just got older.","If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?","I often see the time 11:11 or 12:34 on clocks.","I want to buy a onesie… but know it won't suit me.","I currently have 4 windows open up… and I don’t know why.","Italy is my favorite country; in fact, I plan to spend two weeks there next year."],["Strange Bedfellows! lamented the title of a recent letter to Museum News, in which a certain Harriet Sherman excoriated the National Gallery of Art in Washington for its handling of tickets to the much-ballyhooed “Van Gogh's van Goghs” exhibit. A huge proportion of the 200,000 free tickets were snatched up by homeless opportunists in the dead of winter, who then scalped those tickets at $85 apiece to less hardy connoiseurs.","Yet, Sherman’s bedfellows are far from strange. Art, despite its religious and magical origins, very soon became a commercial venture. From bourgeois patrons funding art they barely understood in order to share their protegee's prestige, to museum curators stage-managing the cult of artists in order to enhance the market value of museum holdings, entrepreneurs have found validation and profit in big-name art. Speculators, thieves, and promoters long ago created and fed a market where cultural icons could be traded like commodities.","This trend toward commodification of high-brow art took an ominous, if predictable, turn in the 1980s during the Japanese bubble economy. At a time when Japanese share prices more than doubled, individual tycoons and industrial giants alike invested record amounts in some of the West’s greatest masterpieces. Ryoei Saito, for example, purchased van Gogh’s Portrait of Dr. Gachet for a record-breaking $82.5 million. The work, then on loan to the Metropolitan Museum of Modern Art, suddenly vanished from the public domain. Later learning that he owed the Japanese government $24 million in taxes, Saito remarked that he would have the paining cremated with him to spare his heirs the inheritance tax. This statement, which he later dismissed as a joke, alarmed and enraged many. A representative of the Van Gogh museum, conceding that he had no legal redress, made an ethical appeal to Mr. Saito, asserting, a work of art remains the possession of the world at large.","Ethical appeals notwithstanding, great art will increasingly devolve into big business. Firstly, great art can only be certified by its market value. Moreover, the world at large hasn’t the means of acquisition. Only one museum currently has the funding to contend for the best pieces–the J. Paul Getty Museum, founded by the billionaire oilman. The art may disappear into private hands, but its transfer will disseminate once static fortunes into the hands of various investors, collectors, and occasionally the artist.","This is one of several passages to include the views of Ronald Dworkin, a noted legal scholar. Regrettably, the topic under discussion—about legal cases that contain highly controversial issues that are not easily resolved—ventures into a nearly impenetrable discussion of legal principles.","Overall, this was a difficult RC section because the second passage—about Louise Gluck—was also tough. Test takers who fought their way through that passage would soon arrive at this brutal closer to the section. The science-based topic—embryo polarity, or how organisms determine what is up and down, and front and back—is unknown to most students, and certainly presented a reading challenge. The passage was then followed by eight questions, furthering the misery.","Maize is just another word for corn, so at first this passage doesn’t look too difficult. Indeed, the first paragraph is fairly easy to understand, as it lays out the importance of maize to the cultures that cultivated it. After the first paragraph, however, the discussion turns extremely detailed and covers the physical science behind why maize is so bountiful. Corn never tasted so bad."],["Honorable mentions: October 1994, Passage #3: US & UK Law Systems; October 1994, Passage #4: Serotonin; October 1996, Passage #2: Medieval Canon Lawyers; June 1997, Passage #4: Language in Science; December 2004, Passage #2: Hippocratic Oath, among others.","At a time when more soldiers are committing suicide than are dying in battle, it is well to remember that, no matter how thoroughly indoctrinated the belief in the superiority of an abstraction, there remains within each of us a powerful life-force that can never be fully repressed. What Gandhi called Satyagraha – a Truth-force or Soul-force – remains deep within us as, perhaps, the greatest power at work upon each of us. The state – and the civilization it is helping to bring down – will continue to fight this life-force in every conceivable manner, not simply in the war system, but in efforts to regulate even the most miniscule details of life’s expressions.","When the minds and the spirits of men and women combine to address, with intelligence, what we have done to ourselves – and are doing to our children and grandchildren – we may be able to walk away from our roles as servo-mechanisms to state and corporate power interests, and to discover how to live according to that life-force within each of us. To those unable or unwilling to confront the wickedness implicit in their robotic existences, there will be nothing but unfocused anger and giggling to accompany their trip into the awaiting black-hole.","The ideology of nonviolence has come to play a major role in political struggles in the United States of America and, indeed, in nations around the world. Almost every organization seeking radical change in the USA has been targeted by organizers for the nonviolence movement. Organizations like Earth First!, which originally did not subscribe to the ideology of nonviolence, have since then adopted that ideology or at least its set of rules for protest and civil disobedience. Yet nonviolence activists have put little energy into bringing their creed to establishment, reactionary, or openly violent organizations.","In this essay it will be argued that nonviolence encourages violence by the state and corporations. The ideology of nonviolence creates effects opposite to what it promises. As a result nonviolence ideologists cooperate in the ongoing destruction of the environment, in continued repression of powerless, and in U.S./corporate attacks on people in foreign nations. To minimize violence we must adopt a pragmatic, reality-based method of operation.","Nonviolence claims to have found a method to bring violence to an end. The fact that it has not worked at all so far has not deterred the adherents of Nonviolence from marching onward towards their millennium. If only more people would listen to us, our dreams would come true, they say. On the other hand they like to claim that non-violence has a remarkable track-record of success, with the gold-medalists of the Nonviolence Olympics usually being put forward as Mahatma Gandhi and Martin Luther King.","Violence as a dichotomy, with the only choices being Violence or Non-violence, is not a very useful basis for political discussion, unless you want to confuse people. Violence, the word, must be modified and illustrated to be useful for discussion. In this essay violence against animals, plants, and inanimate objects will be distinguished from violence against humans. Violence, unmodified, will always mean direct violence, actual bashing of people, and will be distinguished from the threat of violence, as when laws are passes with violent penalties attached. Also distinguished will be economic violence, as when economic activity leads to physical harm to humans, such as starvation or disease. Other methods of categorizing violence need to be distinguished, such as violent self-defense against violent predation."]]; 
    
    var randword = wordArray[select][Math.floor(Math.random() * Math.floor((wordArray[select]).length))];
    originText.innerHTML = randword;
    words = randword;    
    }




 
    
    
function spellCheck(){
    
  let textEntered = testArea.value;
  let originTextMatch = words.substring(0, textEntered.length);
    
  
    
    
    
    
  if (textEntered == words) {
    testWrapper.style.borderColor = "lightgreen";
    array3.unshift(timer[3]);
      if ((timer[3] == (Math.min(...array3))) || (array3.length==1)){
            score.innerHTML = hi;
            clearInterval(interval);
          if (array3.length!=1){
            originText.innerHTML = "NEW HIGH SCORE, WELL DONE!!";
          }
          }else{
              
          }
    clearInterval(interval);
  } else {
    if (textEntered == originTextMatch) {
//       ((originTextMatch.value)[testArea.value.length]).style.color = "blue";
      testWrapper.style.borderColor = "blue";
    } else {
        //Check if backspace key is pressed//
        window.addEventListener("keydown", checkKeyPressed, false);
    
        function checkKeyPressed(e) {
        if (e.keyCode == "8") {
            keycheck = true;
        }else{
            keycheck = false;
        }
            return keycheck;
        }
        
                
      testWrapper.style.borderColor = "red";
        if (keycheck == false){
             x = x+1;
            erros.innerHTML = x;
        }else{
            erros.innerHTML = x; 
        }
       
           
    }

  }

}


// Start the timer:
function start(){
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 ){
     //console.log(words);
     //originText.innerHTML = words;
      timerRunning = true;
      interval = setInterval(runTimer, 10);
    
    }
}

// Reset everything:

function reset(){
  clearInterval(interval); 
    button.style.background = "";
    button.innerHTML = "PRESS TO SELECT LEVEL";
    button1.style.background ="";
    button2.style.background = "";
    button3.style.background = "";
  erros.innerHTML = "";
    x = 0;
  interval = null;
  timer = [0,0,0,0];

  timerRunning = false;
  originText.innerHTML="|";
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
    
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
button.addEventListener("click", generator, false);

