
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

    console.log(ringObject.docs[0].name)
 
    
    // 
    for(i = 0; i < ringObject.docs.length; i++) {
        console.log("hi")
        let nameElement = document.createElement('h2')
        nameElement.textContent=ringObject.docs.indexOf(i).name;
        document.getElementById('cardContainer').appendChild(nameElement)
    };

    
    

    //creating 
}


//h32ntxCf7_hsaBM8g3G3
//Authorization: Bearer your-api-key-123