import {makeCarousel} from './carousel.js'

const fetchData = async()=>{

    const response = await fetch("api url")
    const data = await response.json()

    const promotions = data.items
    const photoList = []
    for (let p of promotions){
        photoList.push(`./${p.productImgUrl}`)
    }
    return photoList
}

fetchData().then((data)=>{
    console.log(data)
    makeCarousel(data)
})

// const photoList=[1,2,3,4,5]

// makeCarousel(photoList)


// function ajax(){
// 	const oReq = new XMLHttpRequest()	
// 	oReq.addEventListener("load", ()=>{
//         if(oReq.status === 200 || oReq.status ===201){
//             console.log(JSON.parse(oReq.responseText).items)
//         }
//         else{
//             console.error(oReq.responseText)
//         }
        
// 	})
	
// 	oReq.open("GET", "http://localhost:8088/reservation/api/promotions")
// 	oReq.send()
// }
//  ajax()



