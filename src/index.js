







const pupsUrl = 'http://localhost:3000/pups'
fetch(pupsUrl)
.then(rep => rep.json())
.then (pups => renderDog(pups))


// const dogInfo = document.getElementById('dog-bar')
// console.log(dogInfo)
function addPup(pupObject){
    const itemkeys = object.keys(pupObject);
    itemkeys.forEach((item) => addPupinfo(item, pupObject(item)));

}
function addPup(){
    const pupImg = document.createElement('dog-bar')
    pupImg.src = dog_image_url

//<img src=dog_image_url>
 // <h2>Mr. Bonkers</h2>
 // <button>Good Dog!</button>
}

function renderDog(pups) {
    let pupInfo = document.getElementById('dog-bar')
    // pups.name = 'Snowy'
    // pups.innerHTML = `
    // <img scr = '${dog_image_url}'
    // <h2> ${pups.name} </h2>
    // <button>Good Dog!</button>`

    pups.forEach(pups => {
        let span = document.createElement('span')
        span.innerHTML = pups.name
        pupInfo.appendChild(span)
        //console.log(pupinfo)
    })
    // const div = document.createElement('div')
    // div.id = 
}



//document.querySelector('#dog-bar').innerHTML = '<span> ' + Snowy + '</span>'
