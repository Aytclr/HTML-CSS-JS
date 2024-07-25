

// ogrenciNotlarList = [
//     {name:"mustafa", notes:[70, 90, 60]},
//     {name:"Rabia", notes:[50, 70, 60]},
//     {name:"Hüseyin", notes:[40, 20, 30]},
//     {name:"Ahmet", notes:[80, 90, 100]},
//     {name:"İbrahim", notes:[30, 40, 55]},
//     {name:"Tuba", notes:[90, 100, 100]},
// ]
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

// const ortalamaListesi = ogrenciNotlarList.map(({name,notes})=>{
//     return{
//         name:name,
//         ortalama : (notes.reduce((sum,num)=> sum+num,0) / notes.length).toFixed(1)
//     }
// })
// console.log(ortalamaListesi);

const studentList = [
    {
      id: 1,
      name: "Mustafa",
      username: "mustafa123",
      email: "mustafa@example.com",
      address: {
        street: "Karanfil Sokak",
        suite: "No: 10",
        city: "Ankara",
        zipcode: "06100",
      },
      phone: "0555-555-5555",
      website: "mustafa.org",
      school: {
        name: "Ankara Üniversitesi",
        grade: "A",
        major: "Bilgisayar Mühendisliği",
      },
      languages: ["JavaScript", "Python", "Java"]
    },
    {
      id: 3,
      name: "Tuba",
      username: "tuba123",
      email: "tuba@example.com",
      address: {
        street: "Lale Sokak",
        suite: "No: 15",
        city: "İzmir",
        zipcode: "35000",
      },
      phone: "0555-555-5557",
      website: "tuba.org",
      school: {
        name: "Ege Üniversitesi",
        grade: "A",
        major: "Bilgisayar Bilimleri",
      },
      languages: ["JavaScript", "C++", "PHP"]
    },
    {
      id: 4,
      name: "Asım",
      username: "asim123",
      email: "asim@example.com",
      address: {
        street: "Menekşe Sokak",
        suite: "No: 20",
        city: "Antalya",
        zipcode: "07000",
      },
      phone: "0555-555-5558",
      website: "asim.org",
      school: {
        name: "Akdeniz Üniversitesi",
        grade: "A",
        major: "Bilgisayar Mühendisliği",
      },
      languages: ["JavaScript", "Go", "Kotlin"]
    },
    {
      id: 5,
      name: "Rabia",
      username: "rabia123",
      email: "rabia@example.com",
      address: {
        street: "Gül Sokak",
        suite: "No: 25",
        city: "Bursa",
        zipcode: "16000",
      },
      phone: "0555-555-5559",
      website: "rabia.org",
      school: {
        name: "Uludağ Üniversitesi",
        grade: "B",
        major: "Bilgisayar Bilimleri",
      },
      languages: ["Java", "Swift", "R"]
    },
    {
      id: 6,
      name: "Mehmet",
      username: "mehmet123",
      email: "mehmet@example.com",
      address: {
        street: "Çiçek Sokak",
        suite: "No: 30",
        city: "Ankara",
        zipcode: "06100",
      },
      phone: "0555-555-5560",
      website: "mehmet.org",
      school: {
        name: "Ankara Üniversitesi",
        grade: "B",
        major: "Yazılım Mühendisliği",
      },
      languages: ["Python", "C++", "Java"]
    },
    {
      id: 7,
      name: "İbrahim",
      username: "ibrahim123",
      email: "ibrahim@example.com",
      address: {
        street: "Akasya Sokak",
        suite: "No: 35",
        city: "İstanbul",
        zipcode: "34000",
      },
      phone: "0555-555-5561",
      website: "ibrahim.org",
      school: {
        name: "İstanbul Teknik Üniversitesi",
        grade: "A",
        major: "Bilgisayar Mühendisliği",
      },
      languages: ["JavaScript", "TypeScript", "Rust"]
    },
    {
      id: 8,
      name: "Ahmet",
      username: "ahmet123",
      email: "ahmet@example.com",
      address: {
        street: "Manolya Sokak",
        suite: "No: 40",
        city: "İzmir",
        zipcode: "35000",
      },
      phone: "0555-555-5562",
      website: "ahmet.org",
      school: {
        name: "Ege Üniversitesi",
        grade: "A",
        major: "Bilgisayar Bilimleri",
      },
      languages: ["JavaScript", "Python", "Scala"]
    },
    {
      id: 9,
      name: "Vusala",
      username: "vusala123",
      email: "vusala@example.com",
      address: {
        street: "Orkide Sokak",
        suite: "No: 45",
        city: "Antalya",
        zipcode: "07000",
      },
      phone: "0555-555-5563",
      website: "vusala.org",
      school: {
        name: "Akdeniz Üniversitesi",
        grade: "B",
        major: "Yazılım Mühendisliği",
      },
      languages: ["C#", "Java", "PHP"]
    },
  ];
  
  
  
  const newStudent = {
    id: 2,
    name: "Hüseyin",
    username: "huseyin321",
    email: "huseyin@example.com",
    address: {
      street: "Papatya Caddesi",
      suite: "Daire: 5",
      city: "İstanbul",
      zipcode: "34000",
    },
    phone: "0555-555-5556",
    website: "huseyin.org",
    school: {
      name: "İstanbul Teknik Üniversitesi",
      grade: "B",
      major: "Yazılım Mühendisliği",
    },
    languages: ["C#", "Python", "Ruby"]
  }
  
  
  // ? SORU : name, username, email, phone ve adress bilgileri ile yeni bir liste döndüren fonksiyonu yazınız.
  
const newStudentList = [...studentList,newStudent]
console.log(newStudentList);

const istenenListe = newStudentList.map(({name, username,email,address,phone})=>{
    return{
        firstname : name.toUpperCase(),
        username: username,
        email:email,
        adress:`şehir :${city}, sokak: ${street}`,
        phone:phone,
    }
})