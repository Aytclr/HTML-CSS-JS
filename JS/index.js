

ogrenciNotlarList = [
    {name:"mustafa", notes:[70, 90, 60]},
    {name:"Rabia", notes:[50, 70, 60]},
    {name:"Hüseyin", notes:[40, 20, 30]},
    {name:"Ahmet", notes:[80, 90, 100]},
    {name:"İbrahim", notes:[30, 40, 55]},
    {name:"Tuba", notes:[90, 100, 100]},
]
// ----------------------1.yöntem---------------------------------
// const enYuksekNotListesi =({name,notes}) => {
    //     return{
        //         name:name,
        //         enYuksekNot:Math.max(...notes)
        //     }
        
        // }
        
// const alinanEnYuksekNot = ogrenciNotlarList.map((x) => enYuksekNotListesi(x))
// console.log(alinanEnYuksekNot);

// ----------------------1.yöntem---------------------------------

// const alinanEnYuksekNot = ogrenciNotlarList.map(({name,notes}) => {
    //     return{
        //         name:name,
        //         enYuksekNot:Math.max(...notes)
        //     }
        // })
        
        // console.log(alinanEnYuksekNot);
        
        
// ----------------------ortalama listesi---------------------------------
//? ----------------------1.yöntem---------------------------------
// const notOrtalaması = ({name,notes})=> {
//     const ort = (notes.reduce((sum,num)=> sum+num,0) / notes.length).toFixed(1)
//     return{
//         name:name,
//         ortalama:ort,
//     }
// }

// const ortalamaListesi = ogrenciNotlarList.map((item)=> notOrtalaması(item))
// console.log(ortalamaListesi);

// ----------------------2.yöntem---------------------------------

const ortalamaListesi = ogrenciNotlarList.map(({name,notes})=>{
    return{
        name:name,
        ortalama : (notes.reduce((sum,num)=> sum+num,0) / notes.length).toFixed(1)
    }
})
console.log(ortalamaListesi);

