
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and ready to go!')
    fetchLOTRData()
})



console.log('Hi!')

function fetchLOTRData (){
    console.log("Function Invoked!")
    fetch('https://the-one-api.dev/v2/character?name=Gandalf', {
        method: "GET", headers: {
            Authorization: "Bearer h32ntxCf7_hsaBM8g3G3"
        }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
}

//h32ntxCf7_hsaBM8g3G3
//Authorization: Bearer your-api-key-123