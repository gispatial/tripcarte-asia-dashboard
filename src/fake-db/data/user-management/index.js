import mock from "@/fake-db/mock.js"

const data = {
  users: [
    {
      "id": 268,
      "username": "underwaterworldadmin",
      "avatar": require("@/assets/images/portrait/small/demo-admin.png"),
      "email": "sitiraudhah_uwl@edenzil.com",
      "name": "UnderWater World Admin",
      "dob": "",
      "gender": "female",
      "country": "Malaysia",
      "role": "admin",
      "status": "active",
      "is_verified": true,
      "department": "sales",
      "company": "Underwater World Langkawi",
      "mobile": "",
      "website": "#",
      "languages_known": ["English", "Malay"],
      "contact_options": ["email", "message", "phone"],
      "location": {
        "add_line_1": "Jalan Pantai",
        "add_line_2": "Chenang",
        "post_code": "07000",
        "city": "Langkawi",
        "state": "Kedah",
        "country": "Malaysia"
      },
      "social_links": {
        //"twitter": "https://twitter.com/tripcarte",
        //"facebook": "https://www.facebook.com/tripcarte.asia/",
        //"instagram": "https://www.instagram.com/tripcarte.asia/",
        "github": "#",
        //"codepen": "https://codepen.io/gispatial",
        //"slack": "@tripcarte",
      },
      "permissions": {
        "users": {
          "read": true,
          "write": true,
          "create": false,
          "delete": false
        },
        "posts": {
          "read": true,
          "write": true,
          "create": true,
          "delete": true
        },
        "comments": {
          "read": true,
          "write": false,
          "create": true,
          "delete": false
        },

      }
    },
    {
      "id": 269,
      "username": "a20050007@163.com",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "brian12988@gmail.com",
      "name": "Brian Wong",
      "country": "MY",
      "role": "editor",
      "status": "blocked",
      "is_verified": false,
      "department": "Merchant",
    },
    {
      "id": 270,
      "username": "adityatyagi",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "nureza.aniss@finexusgroup.com",
      "name": "NUR NATASHA NABILLA BINTI MOHD NASIR MOHD ZAINAL",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 271,
      "username": "aiyu",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "zai_ninadil@yahoo.com",
      "name": "Rohaidah binti Md Yunos",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": false,
      "department": "Merchant",
    },
    {
      "id": 272,
      "username": "arin77",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "ayen77@gmail.com",
      "name": "Mohd hazrin bin hasim",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 273,
      "username": "bazaria",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "bazaria@gmail.com",
      "name": "Mohamad Mustaffa Baharudin",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 274,
      "username": "bestbuydeals",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "timsouthwoodmkt@gmail.com",
      "name": "Trinh Nhan Toan",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 275,
      "username": "bogo01",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "couponsplusdeals.com@gmail.com",
      "name": "Le Xuan Hoang",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 276,
      "username": "buzpoint1",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "glamorway99@gmail.com",
      "name": "Ilyas KHAN",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 277,
      "username": "erlantaha",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "erlancorp@gmail.com",
      "name": "Erlan Taha",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 278,
      "username": "gayatravel",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "team@gayatravel.com.my",
      "name": "Juhan Kamaruddin",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 279,
      "username": "gtravel10",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "irdiana22021999@gmail.com",
      "name": "Agusti Gunawan",
      "country": "Indonesia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 280,
      "username": "itsahmad88",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "tricks.blogger@gmail.com",
      "name": "ISHTIAQ AHMAD",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 281,
      "username": "ivacation4u@gmail.com",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "ivacation4u@gmail.com",
      "name": "Shazamawati Zam Hashari",
      "country": "Malaysia",
      "role": "editor",
      "status": "blocked",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 282,
      "username": "jomjalan",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "lelaiskandar@gmail.com",
      "name": "Jom Jalan",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 283,
      "username": "joyce",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "joyce.chai@amleisure.com.my",
      "name": "joyce chai",
      "country": "Malaysia",
      "role": "editor",
      "status": "deactivated",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 284,
      "username": "libon",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "marshevrobert1969@rambler.ru",
      "name": "libon",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 285,
      "username": "mafiosi",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "Muzammirshah@gmail.com",
      "name": "Muzammir Shah",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 286,
      "username": "nureza.aniss",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "nureza.aniss@finexusgroup.com",
      "name": "NUR EZA ANISS zainal",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 287,
      "username": "marinabashah",
      "avatar": "marinabashah@gmail.com",
      "name": "Normarina Bashah",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 288,
      "username": "nursabrina",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "sabrinamohdarip@gmail.com",
      "name": "Nur Sabrina Mohd Arip",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 289,
      "username": "sayha_",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "customersupport@tripcarte.asia",
      "name": "Sayha",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 290,
      "username": "slomb",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "arjunasibuk@gmail.com",
      "name": "shahrul",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 291,
      "username": "sweethut7296",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "nkhaisuan@sweethut.holiday",
      "name": "KOH SOON LEONG",
      "country": "Malaysia",
      "role": "editor",
      "status": "blocked",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 292,
      "username": "upgraded",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "aniss.zainal@gmail.com",
      "name": "ERYNA MELISSA EZAT AMIS",
      "country": "MY",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 293,
      "username": "wani_razak",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "syaz_fen@yahoo.com",
      "name": "Wani razak",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 294,
      "username": "xapadsmedia",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "manoj@xapads.com",
      "name": "Manoj Yadav",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 295,
      "username": "newcontent",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "nurfaseha@tripcarte.asia",
      "name": "—",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 296,
      "username": "finance",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "finance@tripcarte.asia",
      "name": "—",
      "country": "Malaysia",
      "role": "editor",
      "status": "active",
      "is_verified": true,
      "department": "Merchant",
    },
    {
      "id": 33147,
      "username": "nureza.aniss@finexusgroup.com",
      "avatar": require("@/assets/images/portrait/small/logo.png"),
      "email": "nureza.aniss@finexusgroup.com",
      "name": "NUR EZA ANISS MOHD ZAINAL",
      "country": "Asia/Kuala_Lumpur",
      "role": "editor",
      "status": "+60 11-1037 8990",
      "is_verified": true,
      "department": "Merchant",
    },

  ]
}


mock.onGet("/api/user-management/users").reply(() => {
  return [200, JSON.parse(JSON.stringify(data.users)).reverse()];
});

// GET: Fetch Single User Details
mock.onGet(/\/api\/user-management\/users\/\d+/).reply((request) => {

  const userId = request.url.substring(request.url.lastIndexOf("/")+1)

  let user = data.users.find((user) => user.id == userId)

  return user ? [200, JSON.parse(JSON.stringify(user))] : [404]
})

// // POST : Add new Item
// mock.onPost("/api/data-list/products/").reply((request) => {

//   // Get event from post data
//   let item = JSON.parse(request.data).item

//   const length = data.products.length
//   let lastIndex = 0
//   if(length){
//     lastIndex = data.products[length - 1].id
//   }
//   item.id = lastIndex + 1

//   data.products.push(item)

//   return [201, {id: item.id}]
// })

// // Update Product
// mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

//   const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

//   let item = data.products.find((item) => item.id == itemId)
//   Object.assign(item, JSON.parse(request.data).item)

//   return [200, item]
// })

// // DELETE: Remove Item
mock.onDelete(/\/api\/user-management\/users\/\d+/).reply((request) => {

  const userId = request.url.substring(request.url.lastIndexOf("/")+1)

  const itemIndex = data.users.findIndex((p) => p.id == userId)
  data.users.splice(itemIndex, 1)
  return [200]
})
