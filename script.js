
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and ready to go!')
    fetchLOTRData(), renderLOTRCard()
})



console.log('Hi!')

function fetchLOTRData (data){
    console.log("Function Invoked!")
    fetch('https://the-one-api.dev/v2/character?limit=10', {
        //in documentation it says to enter character(s)?limit=someNumber. WRONG. 
        method: "GET", headers: {
            Authorization: "Bearer h32ntxCf7_hsaBM8g3G3"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        renderLOTRCard(data)
    
    })
    
     
}


function renderLOTRCard (ringObject){

    
    //console.log(ringObject.docs[0])

    console.log(ringObject.docs)
 
    
    // 
    for(let i = 0; i < ringObject.docs.length; i++) {
        console.log("hi")
        let nameElement = document.createElement('h2')
        nameElement.textContent = ringObject.docs[i].name;
        document.getElementById('cardContainer').appendChild(nameElement)

        let raceElement = document.createElement('p')
        raceElement.textContent = ringObject.docs[i].race;
        document.getElementById('cardContainer').appendChild(raceElement) 

        let sexElement = document.createElement('p')
        sexElement.textContent = ringObject.docs[i].gender
        document.getElementById('cardContainer').appendChild(sexElement)

        let birthElement = document.createElement('p')
        birthElement.textContent = ringObject.docs[i].birth
        document.getElementById('cardContainer').appendChild(birthElement)

        let wikiURLEl = document.createElement('a')
        wikiURLEl.textContent = ringObject.docs[i].wikiUrl;
        wikiURLEl.href = ringObject.docs[i].wikiUrl;
        
        
        
        document.getElementById('cardContainer').appendChild(wikiURLEl)
    
    

        wikiURLEl.addEventListener('click', function(){
           wikiURLEl.style.color = "purple";
           })
            
           
            
        }

        let buttonElement = document.createElement('button');
        buttonElement.textContent = ("Name/Birthplace")
        buttonElement.addEventListener('click', function(e){
            buttonClick(e, ringObject);

        })
        document.getElementById('buttonContainer').appendChild(buttonElement);




}
function buttonClick(event, allLOTRdata) {

    for (let i = 0; i < allLOTRdata.docs.length; i++){

    let ringNameElement = document.createElement('p')
    ringNameElement.textContent = allLOTRdata.docs[i].name;
    document.getElementById('buttonContainer').appendChild(ringNameElement);
    
    let ringBirthElement = document.createElement('p');
    ringBirthElement.textContent = allLOTRdata.docs[i].birth

    document.getElementById('buttonContainer').appendChild(ringBirthElement)

    
}


}

//allLOTRdata.docs[i].birth;
//h32ntxCf7_hsaBM8g3G3
//Authorization: Bearer your-api-key-123
//<div id = "buttonContainer">