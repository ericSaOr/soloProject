
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', e =>{

        e.preventDefault();

        console.log(e.target.userInput.value);

        let result = document.getElementById('inputBox').value;
        document.getElementById('userInput').innerHTML = 'User Comment:' + result;

        })
    console.log('DOM fully loaded and ready to go!')
    
    fetchLOTRData()
    anything()
    getComment()
    renderLOTRCard()
    buttonClick() 
    
})




function fetchLOTRData (data){
    console.log("Function Invoked!")
    fetch('https://the-one-api.dev/v2/character?limit=20', {
        //in documentation it says to enter character(s)?limit=someNumber. WRONG. 
        method: "GET", headers: {
            Authorization: "Bearer h32ntxCf7_hsaBM8g3G3"
        }
    })
    .then(resp => resp.json())
    .then(renderLOTRCard)
    
     
}


function renderLOTRCard (ringObject = {docs:[]}){

    for(let i = 0; i < ringObject.docs.length; i++) {
    
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
        buttonElement.textContent = ("Birthplace")
        buttonElement.addEventListener('click', function(e){
            console.log(e)
            buttonClick(e, ringObject);

        })
        document.getElementById('buttonContainer').appendChild(buttonElement);

        let spouseButtonElement = document.createElement('button');
        spouseButtonElement.textContent = ("Spouse")
        spouseButtonElement.addEventListener('click', function(e){
            spouseButtonClick(e, ringObject);
            
        })
        document.getElementById('buttonContainer').appendChild(spouseButtonElement);

        let deathButtonElement = document.createElement('button');
        deathButtonElement.textContent = ("Death")
        deathButtonElement.addEventListener('click', function(e){
            deathButtonClick(e, ringObject);
        })
        document.getElementById('buttonContainer').appendChild(deathButtonElement);


        
        
}

function anything () {
    console.log("cool")
}



function getComment() {
    console.log('hi');
    document.querySelector('form').addEventListener('submit', e =>{

        e.preventDefault();

        console.log(e);

        // let result = document.getElementById('inputBox').value;
        // document.getElementById('userInput').innerHTML = 'User Comment:' + result;
        // console.log(result);

        


    })
    
}










function buttonClick(e, allLOTRdata) {
    
    for (let i = 0; i < allLOTRdata.docs.length; i++){
       let ringBirthElement = document.createElement('p');
    ringBirthElement.textContent = allLOTRdata.docs[i].birth

    document.getElementById('buttonContainer').appendChild(ringBirthElement);

    
   }


}

function spouseButtonClick(e, spouseLOTRdata){

        for (let i = 0; i < spouseLOTRdata.docs.length; i++){
            let ringSpouseElement = document.createElement('p');
            ringSpouseElement.textContent = spouseLOTRdata.docs[i].spouse
            document.getElementById('buttonContainer').appendChild(ringSpouseElement);
           
        }
            
            
        
            
}

        function deathButtonClick(e, deathLOTRdata){
            console.log(e)
            for (let i = 0; i < deathLOTRdata.docs.length; i++){
                let deathElement = document.createElement('p');
                deathElement.textContent = deathLOTRdata.docs[i].death
                document.getElementById('buttonContainer').appendChild(deathElement);
            }
        }



    
//allLOTRdata.docs[i].birth;
//h32ntxCf7_hsaBM8g3G3
//Authorization: Bearer your-api-key-123
