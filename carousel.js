const makeCarousel = (photoList)=>{
    const photoBox = document.getElementById('photo-box')
    init()
    const loose = setInterval(moveToLeft, 5000)
    
    function init(){
        appendPhoto(photoList[0])
        photoBox.firstElementChild.style.marginLeft='0'
    }
    
    // append a photo into the photo container `photoBox`
    function appendPhoto(photo){
        const item = document.createElement('div')
        item.className ='photo'; item.innerText = photo
        item.innerHTML =`<img src=${photo}></src>`
        photoBox.appendChild(item)
    }
    
    // remove the first photo and append the next photo into the photo container `photoBox`
    
    let i = 1
    function relocatePhoto(){
        if(photoBox.children.length>1){
            photoBox.removeChild(photoBox.firstElementChild)
        }
        appendPhoto(photoList[i%photoList.length])
        i++
    }
    
    //slide photos to the left
    function moveToLeft(){
        photoBox.firstElementChild.style.marginLeft = `-300px`
        relocatePhoto()
    }
}

export {makeCarousel}