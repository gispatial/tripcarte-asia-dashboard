import mock from "@/fake-db/mock.js"

const data = {
  products: [
    {
      "id": 1,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/island-hopping-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "on_hold",
      "popularity": 97,
      "price": 27.20
    },
    {
      "id": 2,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/langkawi-underwater-world-ticket_1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 83,
      "price": 36.00
    },
    {
      "id": 3,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/kilim1-1-2.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "canceled",
      "popularity": 57,
      "price": 110.40
    },
    {
      "id": 4,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Langkawi-Cable-Car_13.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 65,
      "price": 224.62
    },
    {
      "id": 5,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/langkawi-cable-car_9.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "canceled",
      "popularity": 87,
      "price": 82.50
    },
    {
      "id": 6,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Langkawi-Wildlife-Park-Malaysia_1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 55,
      "price": 41.40
    },
    {
      "id": 7,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2020/02/Crocodile-adventure-Land.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 99,
      "price": 51.52
    },
    {
      "id": 8,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/upsidow-3.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 91,
      "price": 0
    },
    {
      "id": 9,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/standard-combo-5.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 52,
      "price": 39.99
    },
    {
      "id": 10,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "6D CINEMOTION",
      "order_status": "completed",
      "popularity": 64,
      "price": 28.20
    },
    {
      "id": 11,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/langkawi-cable-car_8.jpg",
      "name": "3 in 1 CENANG COMBO",
      "order_status": "completed",
      "popularity": 93,
      "price": 144.10
    },
    {
      "id": 12,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/SFFerry-3.jpg",
      "name": "FERRY – LANGKAWI to PENANG",
      "order_status": "completed",
      "popularity": 75,
      "price": 73.60
    },
    {
      "id": 13,
      "category": "langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/skycab-glass-bottom-e1571281285725.jpg",
      "name": "4 in 1 Langkawi Cable Car SKYCAB GLASS BOTTOM with Express Lane",
      "order_status": "completed",
      "popularity": 88,
      "price": 99.75
    },
    {
      "id": 14,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/legoland-malaysia-resort_1.jpg",
      "name": "LEGOLAND MALAYSIA",
      "order_status": "completed",
      "popularity": 86,
      "price": 263.00
    },
    {
      "id": 15,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/1-BP-Tower.jpg",
      "name": "WET WORLD BATU PAHAT VILLAGE RESORT",
      "order_status": "on_hold",
      "popularity": 62,
      "price": 28.50
    },
    {
      "id": 16,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/angry-bird-johor-1.jpg",
      "name": "ANGRY BIRD ACTIVITY PARK",
      "order_status": "canceled",
      "popularity": 51,
      "price": 69.00
    },
    {
      "id": 17,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2020/03/Paintball-Static-6.jpg",
      "name": "PAINTBALL STATIC AT RAF POINT",
      "order_status": "pending",
      "popularity": 51,
      "price": 46.00
    },
    {
      "id": 18,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2020/03/Paintball-Game-Combat-7.jpg",
      "name": "PAINTBALL GAME AT RAF POINT",
      "order_status": "on_hold",
      "popularity": 65,
      "price": 82.80
    },
    {
      "id": 19,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2020/03/ATV-Fun-Ride-Single-Seater.jpg",
      "name": "ATV FUN RIDE AT RAF POINT",
      "order_status": "on_hold",
      "popularity": 63,
      "price": 55.20
    },
    {
      "id": 20,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/MCM-Studio-Cartoon-Planet-Visual.png",
      "name": "2 in 1 JOHOR PASS",
      "order_status": "on_hold",
      "popularity": 72,
      "price": 83.88
    },
    {
      "id": 21,
      "category": "johor",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Future-Land-1.jpg",
      "name": "FUTURE LAND FUN ZONE",
      "order_status": "canceled",
      "popularity": 77,
      "price": 87.40
    },
    {
      "id": 22,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Beats by Dr. Dre - 3' USB-to-Micro USB Cable",
      "order_status": "completed",
      "popularity": 65,
      "price": 19.99
    },
    {
      "id": 23,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult",
      "order_status": "completed",
      "popularity": 60,
      "price": 49.99
    },
    {
      "id": 24,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "on_hold",
      "popularity": 59,
      "price": 49.99
    },
    {
      "id": 25,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "on_hold",
      "popularity": 87,
      "price": 49.99
    },
    {
      "id": 26,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 95,
      "price": 49.99
    },
    {
      "id": 27,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "canceled",
      "popularity": 98,
      "price": 49.99
    },
    {
      "id": 28,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "completed",
      "popularity": 75,
      "price": 49.99
    },
    {
      "id": 29,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "UNDERWATER WORLD LANGKAWI",
      "order_status": "pending",
      "popularity": 81,
      "price": 199.99
    },
    {
      "id": 30,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "canceled",
      "popularity": 91,
      "price": 199.99
    },
    {
      "id": 31,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "canceled",
      "popularity": 79,
      "price": 199.99
    },
    {
      "id": 32,
      "category": "kuala lumpur",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 95,
      "price": 699.99
    },
    {
      "id": 33,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 90,
      "price": 199.99
    },
    {
      "id": 34,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "completed",
      "popularity": 81,
      "price": 34.99
    },
    {
      "id": 35,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - Bose® SoundLink® III Cover",
      "order_status": "completed",
      "popularity": 81,
      "price": 34.99
    },
    {
      "id": 36,
      "category": "kuala lumpur",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 69,
      "price": 34.99
    },
    {
      "id": 37,
      "category": "audio",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - SoundLink® Mini Soft Cover",
      "order_status": "canceled",
      "popularity": 95,
      "price": 24.99
    },
    {
      "id": 38,
      "category": "audio",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - SoundLink® Color Bluetooth Speaker",
      "order_status": "on_hold",
      "popularity": 100,
      "price": 129.99
    },
    {
      "id": 39,
      "category": "audio",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - SoundLink® Color Bluetooth Speaker",
      "order_status": "pending",
      "popularity": 89,
      "price": 129.99
    },
    {
      "id": 40,
      "category": "audio",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - SoundLink® Color Bluetooth Speaker",
      "order_status": "pending",
      "popularity": 75,
      "price": 129.99
    },
    {
      "id": 41,
      "category": "audio",
      "img": "http://tripcarte.gispatial.tech/api/wp-content/uploads/2020/03/zoo-negara-ticket_-2-1.jpg",
      "name": "Bose® - SoundLink® Color Bluetooth Speaker",
      "order_status": "pending",
      "popularity": 54,
      "price": 129.99
    },
    {
      "id": 42,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Color Bluetooth Speaker",
      "order_status": "completed",
      "popularity": 98,
      "price": 129.99
    },
    {
      "id": 43,
      "category": "audio",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png",
      "name": "Bose® - SoundLink® Color Carry Case",
      "order_status": "pending",
      "popularity": 95,
      "price": 24.99
    },
    {
      "id": 44,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 76,
      "price": 34.99
    },
    {
      "id": 45,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "canceled",
      "popularity": 98,
      "price": 34.99
    },
    {
      "id": 46,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 70,
      "price": 34.99
    },
    {
      "id": 47,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Mini Bluetooth Speaker II",
      "order_status": "pending",
      "popularity": 62,
      "price": 199.99
    },
    {
      "id": 48,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker II",
      "order_status": "canceled",
      "popularity": 63,
      "price": 199.99
    },
    {
      "id": 49,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Mini Bluetooth Speaker Soft Cover",
      "order_status": "on_hold",
      "popularity": 90,
      "price": 24.99
    },
    {
      "id": 50,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker Soft Cover",
      "order_status": "canceled",
      "popularity": 98,
      "price": 24.99
    },
    {
      "id": 51,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker Soft Cover",
      "order_status": "on_hold",
      "popularity": 55,
      "price": 24.99
    },
    {
      "id": 52,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker",
      "order_status": "pending",
      "popularity": 53,
      "price": 24.99
    },
    {
      "id": 53,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Mini Bluetooth Speaker Soft Cover",
      "order_status": "pending",
      "popularity": 82,
      "price": 24.99
    },
    {
      "id": 54,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker Travel Bag",
      "order_status": "on_hold",
      "popularity": 78,
      "price": 44.99
    },
    {
      "id": 55,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Mini Soft Cover",
      "order_status": "canceled",
      "popularity": 81,
      "price": 24.99
    },
    {
      "id": 56,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Mini Soft Cover",
      "order_status": "pending",
      "popularity": 94,
      "price": 24.99
    },
    {
      "id": 57,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Speaker III",
      "order_status": "pending",
      "popularity": 97,
      "price": 299.99
    },
    {
      "id": 58,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - SoundLink® Soft Cover",
      "order_status": "completed",
      "popularity": 89,
      "price": 24.99
    },
    {
      "id": 59,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bose® - Bluetooth Music Adapter",
      "order_status": "on_hold",
      "popularity": 53,
      "price": 99.99
    },
    {
      "id": 60,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Bowers & Wilkins - Bluetooth Speaker",
      "order_status": "canceled",
      "popularity": 79,
      "price": 349.98
    },
    {
      "id": 61,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "BRAVEN - Balance Portable Bluetooth Speaker",
      "order_status": "on_hold",
      "popularity": 82,
      "price": 129.99
    },
    {
      "id": 62,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "BRAVEN - Balance Portable Bluetooth Speaker",
      "order_status": "pending",
      "popularity": 80,
      "price": 129.99
    },
    {
      "id": 63,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "BRAVEN - Outdoor Speaker",
      "order_status": "pending",
      "popularity": 86,
      "price": 199.99
    },
    {
      "id": 64,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 61,
      "price": 199.99
    },
    {
      "id": 65,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 85,
      "price": 299.99
    },
    {
      "id": 66,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 81,
      "price": 99.99
    },
    {
      "id": 67,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 50,
      "price": 99.99
    },
    {
      "id": 68,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "completed",
      "popularity": 93,
      "price": 99.99
    },
    {
      "id": 69,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 51,
      "price": 99.99
    },
    {
      "id": 70,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 77,
      "price": 69.99
    },
    {
      "id": 71,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "canceled",
      "popularity": 89,
      "price": 29.99
    },
    {
      "id": 72,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 81,
      "price": 399.98
    },
    {
      "id": 73,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 76,
      "price": 699.98
    },
    {
      "id": 74,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "Denon - Wireless Speaker",
      "order_status": "pending",
      "popularity": 88,
      "price": 399.98
    },
    {
      "id": 75,
      "category": "audio",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png",
      "name": "Denon - HEOS 7 Wireless Speaker",
      "order_status": "canceled",
      "popularity": 100,
      "price": 599.98
    },
    {
      "id": 76,
      "category": "audio",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult",
      "order_status": "canceled",
      "popularity": 52,
      "price": 129.99
    },
    {
      "id": 77,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult Rate (Large)",
      "order_status": "pending",
      "popularity": 66,
      "price": 149.99
    },
    {
      "id": 78,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult Rate (Large)",
      "order_status": "completed",
      "popularity": 66,
      "price": 149.99
    },
    {
      "id": 79,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "6D CINEMOTION",
      "order_status": "canceled",
      "popularity": 96,
      "price": 149.99
    },
    {
      "id": 80,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult Rate (Small)",
      "order_status": "on_hold",
      "popularity": 92,
      "price": 149.99
    },
    {
      "id": 81,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Adult Rate (Small)",
      "order_status": "completed",
      "popularity": 82,
      "price": 149.99
    },
    {
      "id": 82,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "6D CINEMOTION",
      "order_status": "pending",
      "popularity": 100,
      "price": 149.99
    },
    {
      "id": 83,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpgg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 100,
      "price": 149.99
    },
    {
      "id": 84,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 52,
      "price": 129.99
    },
    {
      "id": 85,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 51,
      "price": 129.99
    },
    {
      "id": 86,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "pending",
      "popularity": 80,
      "price": 129.99
    },
    {
      "id": 87,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUMmall)",
      "order_status": "on_hold",
      "popularity": 99,
      "price": 129.99
    },
    {
      "id": 88,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "SUNSET CRUISE by Crystal Yacht - Child (5 - 12 years old)",
      "order_status": "on_hold",
      "popularity": 75,
      "price": 129.99
    },
    {
      "id": 89,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUMmall)",
      "order_status": "pending",
      "popularity": 80,
      "price": 129.99
    },
    {
      "id": 90,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "completed",
      "popularity": 50,
      "price": 19.99
    },
    {
      "id": 91,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "completed",
      "popularity": 57,
      "price": 14.99
    },
    {
      "id": 92,
      "category": "kuala lumpur",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Sunway-lagoon-promo_1.jpg",
      "name": "SUNWAY LAGOON THEME PARK",
      "order_status": "on_hold",
      "popularity": 80,
      "price": 172.00
    },
    {
      "id": 93,
      "category": "kuala lumpur",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Sunway-lagoon-promo_1.jpg",
      "name": "SUNWAY LAGOON THEME PARK",
      "order_status": "canceled",
      "popularity": 78,
      "price": 172.00
    },
    {
      "id": 94,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "on_hold",
      "popularity": 81,
      "price": 14.99
    },
    {
      "id": 95,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/6D_Cinemotion-2.jpg",
      "name": "TIME TRAVEL IMAGINARIUM",
      "order_status": "canceled",
      "popularity": 51,
      "price": 14.99
    },
    {
      "id": 96,
      "category": "kuala lumpur",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Animal-1.jpg",
      "name": "G2G ANIMAL GARDENIA",
      "order_status": "canceled",
      "popularity": 56,
      "price": 28.20
    },
    {
      "id": 97,
      "category": "melaka",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Melaka-River-Cruise-1.jpg",
      "name": "MELAKA RIVER CRUISE",
      "order_status": "on_hold",
      "popularity": 95,
      "price": 27.60
    },
    {
      "id": 98,
      "category": "singapore",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/Universal_Studio_4.jpg",
      "name": "UNIVERSAL STUDIO SINGAPORE",
      "order_status": "completed",
      "popularity": 85,
      "price": 229.43
    },
    {
      "id": 99,
      "category": "penang",
      "img": "https://tripcarte.asia/wp-content/uploads/2019/10/penang-3d-1.jpg",
      "name": "PENANG 3D TRICK ART MUSEUM",
      "order_status": "pending",
      "popularity": 50,
      "price": 23.00
    },
    {
      "id": 100,
      "category": "Langkawi",
      "img": "https://tripcarte.asia/wp-content/uploads/2020/03/Kwai-Cha-Hong-4.jpg",
      "name": "KL UNSEEN (PRIVATE TOUR2)",
      "order_status": "Completed",
      "popularity": 72,
      "price": 733.20
    }
  ]
}


mock.onGet("/api/data-list/products").reply(() => {
  return [200, JSON.parse(JSON.stringify(data.products)).reverse()];
});

// POST : Add new Item
mock.onPost("/api/data-list/products/").reply((request) => {

  // Get event from post data
  let item = JSON.parse(request.data).item

  const length = data.products.length
  let lastIndex = 0
  if(length){
    lastIndex = data.products[length - 1].id
  }
  item.id = lastIndex + 1

  data.products.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  let item = data.products.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  const itemIndex = data.products.findIndex((p) => p.id == itemId)
  data.products.splice(itemIndex, 1)
  return [200]
})
