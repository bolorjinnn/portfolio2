var words = ['I am a teencoder', 'I am a student', 'I am a dancer'];
var wordIndex = 0;
var letterIndex = 0;
var roleContainer = document.getElementById('roleContainer');

function displayWords() {
    const currentWord = words[wordIndex % words.length]; // Use modulo to loop through the words array
    roleContainer.textContent += currentWord[letterIndex];
    letterIndex++;

    if (letterIndex < currentWord.length) {
        setTimeout(displayWords, 100); // Change letter every 0.1 second (100 milliseconds)
    } else {
        setTimeout(clearContainer, 500); // Wait for 0.5 seconds (500 milliseconds) before clearing the container
    }
}

function clearContainer() {
    roleContainer.textContent = '';
    letterIndex = 0;
    wordIndex++;
    setTimeout(displayWords, 500); // Wait for 0.5 seconds (500 milliseconds) before displaying the next word
}

displayWords(); // Start displaying the words


// about
var  tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }   
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
 }

//  to make responsive
var sidememu=document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}