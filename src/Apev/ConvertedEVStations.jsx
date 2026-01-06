// // apevstations.js
// import React, { useEffect, useState } from "react";

<<<<<<< HEAD
export const ConvertedEVStations = () => {
  const evStationsData = {
    ev_stations: [
    {
      "station_name": "MSHSD Adhoc Srinivasa Petroleum",
      "address": "S. No 188/2b, Kothavalasa Road, Pendurthi Mandal, 530047",
      "coordinates": {
        "latitude": 17.82622,
        "longitude": 83.2042
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/452024/00015235",
      "district": "Visakhapatnam",
      "registration": "1"
    },
    {
      "station_name": "MSHSD Adhoc Visalakshi Filling Station",
      "address": "S No 221 Penduthi Village Pendurthi Mandal 531173",
      "coordinates": {
        "latitude": 17.80498,
        "longitude": 83.1784
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1162024/00015250",
      "district": "Visakhapatnam",
      "registration": "2"
    },
    {
      "station_name": "MSHSD Police Welfare Petrol Station",
      "address": "Dist. Police Head Quarters, S.No: 150, Chinnagadili, Kailashgiri, 530043",
      "coordinates": {
        "latitude": 17.75382983,
        "longitude": 83.3413
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1162024/00015252",
      "district": "Visakhapatnam",
      "registration": "3"
    },
    {
      "station_name": "MSHSD Sri Lakshmi Narashima Flgstn L.Kot",
      "address": "S.No:30/4, 30/5 & 30/6 Seetharampuram Village Lakkavarapukota Mandalam 535161",
      "coordinates": {
        "latitude": 18.04017,
        "longitude": 83.1487
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/652024/00015236",
      "district": "Vizianagaram",
      "registration": "4"
    },
    {
      "station_name": "MSHSD Jayalakshmi Filling Station",
      "address": "Survey No. 220/4,5,6 Palasa-Kasibugga Muncipality Palasa 532221",
      "coordinates": {
        "latitude": 18.78148098,
        "longitude": 84.4137
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/SR/1462024/00015259",
      "district": "Srikakulam",
      "registration": "5"
    },
    {
      "station_name": "MSHSD Andhra Petroleum Services Vaddadi",
      "address": "Hpc Petrol Diesel Pump S No. 27/1,Ward No.2 Vaddadi Village,Butchayyapeta Mandal 531026",
      "coordinates": {
        "latitude": 17.8517542,
        "longitude": 82.8706
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1562024/00015263",
      "district": "Visakhapatnam",
      "registration": "6"
    },
    {
      "station_name": "MSHSD Diamond Petroleum Agen",
      "address": "S No 75/4 P L Puram Village Payakaraopeta Mandal 531126",
      "coordinates": {
        "latitude": 17.37244076,
        "longitude": 82.5845
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1562024/00015264",
      "district": "Visakhapatnam",
      "registration": "7"
    },
    {
      "station_name": "MSHSD Hp Auto Care Centre Kotabommali",
      "address": "Hpcl Dealers Tarlipeta Village Nh- 5, Kotabommali Mandal 532195",
      "coordinates": {
        "latitude": 18.54559501,
        "longitude": 84.1751
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/SR/1862024/00015274",
      "district": "Srikakulam",
      "registration": "8"
    },
    {
      "station_name": "MSHSD Sri Padmanabha Fuels",
      "address": "S. No 274/1a Thetagunta Village Tuni Mandal 533406",
      "coordinates": {
        "latitude": 17.32352095,
        "longitude": 82.4808
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1462024/00015262",
      "district": "East Godavari",
      "registration": "9"
    },
    {
      "station_name": "MSHSD Sri Radha Petro Fill",
      "address": "Hpcl Dealer, Sy No. 29/4 Kothapeta Road, Crc Road Corner Ravulapalem 533238",
      "coordinates": {
        "latitude": 16.74721566,
        "longitude": 81.8516
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1962024/00015277",
      "district": "East Godavari",
      "registration": "10"
    },
    {
      "station_name": "MSHSD Kinnu Fuels",
      "address": "Hpc Dealers Rs No : 359/3 Bendapudi Village , Thondangi Mandal , East Godavari Dist, 533406",
      "coordinates": {
        "latitude": 17.24171069,
        "longitude": 82.362
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1862024/00015269",
      "district": "East Godavari",
      "registration": "17"
    },
    {
      "station_name": "MSHSD Suryaraja Agency",
      "address": "Hpc Dealers S.No.153/2a, 153/3a Nh-5, Prathipadu, East Godavari District, 533432",
      "coordinates": {
        "latitude": 17.23694408,
        "longitude": 82.1779
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2462024/00015287",
      "district": "East Godavari",
      "registration": "18"
    },
    {
      "station_name": "MSHSD Mahalakshmi Fuels Bhemili",
      "address": "Rs No : 16/1,Keethinapeta Area Mulkuddu Village Bhimili Mandal, Visakhapatnam Dist 531163",
      "coordinates": {
        "latitude": 17.90348524,
        "longitude": 83.4437
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1962024/00015278",
      "district": "Visakhapatnam",
      "registration": "19"
    },
    {
      "station_name": "MSHSD Itda Parvathipuram",
      "address": "S.No. 553/2a, Belagam Village Parvathipuram Mandal 535501",
      "coordinates": {
        "latitude": 18.76893707,
        "longitude": 83.4217
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/1962024/00015275",
      "district": "Vizianagaram",
      "registration": "20"
    },
    {
      "station_name": "MSHSD Seetarama Fuels",
      "address": "Hpcl Petrol Pump, Surveyu No. 38/1,2,3 Gollapalli Village Bobbili 535558",
      "coordinates": {
        "latitude": 18.55575511,
        "longitude": 83.3345
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1462024/00015260",
      "district": "Vizianagaram",
      "registration": "21"
    },
    {
      "station_name": "MSHSD Sri Arunachala Filling Station",
      "address": "Hpcl Dealers Survey No:565/1, Nh 216,Chebrolu Village Chebrolu Gram Panchayat,Gollaprolu Mandal 533449",
      "coordinates": {
        "latitude": 17.17859413,
        "longitude": 82.3041
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1862024/00015273",
      "district": "East Godavari",
      "registration": "22"
    },
    {
      "station_name": "MSHSD Sri Satya Balaji Agencies, Kathipudi",
      "address": "S. No. 125/1 & 2 Nh-5, Kathipudi Village, Sankhavaram Mandal ,East Godavari Dist 533449",
      "coordinates": {
        "latitude": 17.24235104,
        "longitude": 82.3417
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2462024/00015286",
      "district": "East Godavari",
      "registration": "23"
    },
    {
      "station_name": "MSHSD TVK Brothers",
      "address": "Hpcl Dealers-Petrol Bunki D.No.23-289, Near Old Bus Stand Narasannapeta 532421",
      "coordinates": {
        "latitude": 18.42031941,
        "longitude": 84.0464
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/SR/2462024/00015288",
      "district": "Srikakulam",
      "registration": "24"
    },
    {
      "station_name": "Hp Service Centre Arasavilli",
      "address": "Sy No 424, Ts No 476,Arasavilli Village,Srikakulam,Ap,532001",
      "coordinates": {
        "latitude": 18.28880614,
        "longitude": 83.9123
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1462024/00015261",
      "district": "Srikakulam",
      "registration": "25"
    },
    {
      "station_name": "MSHSD GCC Araku",
      "address": "Plot Number 38, Kanta Bowsa Guda Villlage, Araku Mandal, Sh 39 Araku Valley, Visakhapatnam Dist 531149",
      "coordinates": {
        "latitude": 18.3200705,
        "longitude": 82.8826
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/1562024/00015268",
      "district": "Visakhapatnam",
      "registration": "26"
    },
    {
      "station_name": "MSHSD Adhoc Marthand Agencies",
      "address": "S No 55/16,17,57/1 , Nh - 5, Singavaram Village , Nathavalasa Mandal, Vizianagaram Dist ( 531216 )",
      "coordinates": {
        "latitude": 18.05457282,
        "longitude": 83.5193
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/2562024/00015293",
      "district": "Vizianagaram",
      "registration": "27"
    },
    {
      "station_name": "MSHSD Marthand Agencies",
      "address": "S No44/14, 44/15, Jonnada Village Denkada Mandalam Jonnada Panchayat 534241",
      "coordinates": {
        "latitude": 18.02083218,
        "longitude": 83.4053
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/2562024/00015291",
      "district": "Vizianagaram",
      "registration": "28"
    },
    {
      "station_name": "MSHSD Millennium Comco Siripuram Jnt.",
      "address": "T.S. No 1014 /2p, 1013 / 2b , Siripuram Junction , Visakhapatnam Town, Visakhapatnam Dist 530003",
      "coordinates": {
        "latitude": 17.72082737,
        "longitude": 83.3204
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/2462024/00015290",
      "district": "Visakhapatnam",
      "registration": "29"
    },
    {
      "station_name": "MSHSD Apsp Fuel Station, 5th Battalion",
      "address": "Survey No. 1/1, 1/2 Apsp 5th Battalion , Ayanada Village , Padmanabham Mandal , Vizianagram Dist, 535005",
      "coordinates": {
        "latitude": 18.05340104,
        "longitude": 83.4007
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/1862024/00015272",
      "district": "Vizianagaram",
      "registration": "30"
    },
    {
      "station_name": "MSHSD Sri Srinivasa Agencies",
      "address": "Sy No 68-2,69-2p, Tennuboddavara Village , Srungavarapu Kota Mandal , Vizianagaram Dist 535145",
      "coordinates": {
        "latitude": 18.16306184,
        "longitude": 83.1293
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/1862024/00015270",
      "district": "Vizianagaram",
      "registration": "31"
    },
    {
      "station_name": "MSHSD A. Satyanarayana Raju, R.C. Puram",
      "address": "R.S.No.259/3 , Ramachandrapuram Village, Ramachandrapuram Mandal , East Godavari Dist 533255",
      "coordinates": {
        "latitude": 16.83238116,
        "longitude": 82.0345
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1862024/00015271",
      "district": "East Godavari",
      "registration": "32"
    },
    {
      "station_name": "MSHSD Sri Krishna Agency",
      "address": "Survey No.202, 203 Main Road (Old Gnt Road) Tuni Municipality, Tuni 533401",
      "coordinates": {
        "latitude": 17.35289322,
        "longitude": 82.528
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2782024/00015737",
      "district": "East Godavari",
      "registration": "33"
    },
    {
      "station_name": "MSHSD Venkataramana Filling Station",
      "address": "Hp Petrol Pump, S No : 156-4b & 2a Kolamuru Rajanagaram Mandal 533102",
      "coordinates": {
        "latitude": 17.06135,
        "longitude": 81.8069
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2782024/00015738",
      "district": "East Godavari",
      "registration": "34"
    },
    {
      "station_name": "MSHSD Sriram Quality Fuels",
      "address": "Sy No 102/5 Nellipaka Village Yatapaka Mandal 533352",
      "coordinates": {
        "latitude": 17.65583854,
        "longitude": 81.0047
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/3082024/00015744",
      "district": "East Godavari",
      "registration": "35"
    },
    {
      "station_name": "MSHSD Gcc Chinturu",
      "address": "Sy No 15 Opp Andhra Bank,Yerrampeta Village, Yerrampeta Mandal, Ap-533347",
      "coordinates": {
        "latitude": 17.75197775,
        "longitude": 81.4069
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2882024/00015741",
      "district": "East Godavari",
      "registration": "36"
    },
    {
      "station_name": "MSHSD Hp Service Centre, Kakinada Tml",
      "address": "S No 236/2b3, Ida Vakalapudi, Kakinada Mandal, AP - 533005",
      "coordinates": {
        "latitude": 17.00454864,
        "longitude": 82.2747
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/3082024/00015743",
      "district": "East Godavari",
      "registration": "37"
    },
    {
      "station_name": "MSHSD Gcc Narsipatnam",
      "address": "S. No. 121/3b Narsipatnam Village And Mandal Narsipatnam, Ap 531116",
      "coordinates": {
        "latitude": 17.66724372,
        "longitude": 82.6108
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/2782024/00015739",
      "district": "East Godavari",
      "registration": "38"
    },
    {
      "station_name": "MSHSD J C Filling Station Bo",
      "address": "Rs. No: 80, Mallammpeta Village, Bobbili Mandal, Vizianagaram District, Andhra Pradesh - 535558",
      "coordinates": {
        "latitude": 18.57719865,
        "longitude": 83.3488
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/1092024/00021266",
      "district": "Vizianagaram",
      "registration": "39"
    },
    {
      "station_name": "MSHSD Sai Balaji Enterprises Vizianagar",
      "address": "R.S.No 31/5 Kanapaka Village, Vizianagaram Mandal,Ap- 535003",
      "coordinates": {
        "latitude": 18.19172926,
        "longitude": 83.6831
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/2782024/00015740",
      "district": "Vizianagaram",
      "registration": "40"
    },
    {
      "station_name": "MSHSD Sri Lakshmi Balaji Vizianagaram",
      "address": "S.No.130/9, Ring Road, Simhadhari Nagar,Vizianagaram Mandal, Ap- 535002",
      "coordinates": {
        "latitude": 18.10384148,
        "longitude": 83.4084
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/2882024/00015742",
      "district": "Vizianagaram",
      "registration": "41"
    },
    {
      "station_name": "NRO Bhendapudi",
      "address": "Sy.No 103/5b & 104/2a , Bendapudi Village , Thodangi Mandal, East Godavari Dist, Ap- 533406.",
      "coordinates": {
        "latitude": 17.27031329,
        "longitude": 82.3937
      },
      "capacity": "50-60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1092024/00021267",
      "district": "East Godavari",
      "registration": "42"
    },
    {
      "station_name": "Adhoc Sri Hari Filling Station",
      "address": "Adhoc Sri Hari Filling Station, Bommidodi, Palamaner, Chittoor, 517408",
      "coordinates": {
        "latitude": 13.200251,
        "longitude": 78.725768
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/662024/00015249",
      "district": "Chittoor",
      "registration": "43"
    },
    {
      "station_name": "MS/HSD Vijaya Filling Station",
      "address": "MS/HSD Vijaya Filling Station , S.No: 1239-A,1239-C, Nellore, 524003",
      "coordinates": {
        "latitude": 14.427737,
        "longitude": 79.993322
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/562024/00015247",
      "district": "Nellore",
      "registration": "44"
    },
    {
      "station_name": "MS/HSD P.S.Reddy's Petro Plaza",
      "address": "MS/HSD P.S.Reddy's Petro Plaza, S.No: 265 & 258, Guruvindapudi, Manubolu, Nellore, 524405",
      "coordinates": {
        "latitude": 14.265252,
        "longitude": 79.901993
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/2272024/00015352",
      "district": "Nellore",
      "registration": "45"
    },
    {
      "station_name": "MSHSD Adhoc Pothula Rangaiah Co",
      "address": "MSHSD Adhoc Pothula Rangaiah Co Chagollu, S.No :31-B2A2,32-1B2,32-2A2,33-2B,Chagollu, Ulavapadu, Prakasam, 523292",
      "coordinates": {
        "latitude": 15.105309,
        "longitude": 80.008903
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/562024/00015245",
      "district": "Prakasam",
      "registration": "46"
    },
    {
      "station_name": "MS/HSD Sri Sai Gautham Service Station",
      "address": "MS/HSD Sri Sai Gautham Service Station, S.No: 60/A, Macherla, Thettu, Prakasam, 523291",
      "coordinates": {
        "latitude": 15.04401,
        "longitude": 79.999266
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/2272024/00015353",
      "district": "Prakasam",
      "registration": "47"
    },
    {
      "station_name": "MSHSD Sri Sai Lakshmi Fs",
      "address": "MSHSD Sri Sai Lakshmi Fs Kakarla, S.No: 71-A-1B, Kakarla, Ardavedu, Prakasam, 523335",
      "coordinates": {
        "latitude": 15.627674,
        "longitude": 79.13607
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/2272024/00015354",
      "district": "Prakasam",
      "registration": "48"
    },
    {
      "station_name": "MSHSD Adhoc GMR Filling Station",
      "address": "MSHSD Adhoc GMR Filling Station Bollapal, S.No: 512C1B1, 511A2B, 5071A1, Kondamanjulurulu, J.Pingaluru, Prakasam, 523261",
      "coordinates": {
        "latitude": 15.874619,
        "longitude": 80.066778
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/2272024/00015350",
      "district": "Prakasam",
      "registration": "49"
    },
    {
      "station_name": "MS/HSD Sri Savitri Service Station",
      "address": "MS/HSD Sri Savitri Service Station, S.No: 557/3A2,558/1A2, Medarametla, Korisapadu, Prakasam, 523212",
      "coordinates": {
        "latitude": 15.719488,
        "longitude": 80.01274
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/562024/00015244",
      "district": "Prakasam",
      "registration": "50"
    },
    {
      "station_name": "MSHSD Sainadha Petroleums",
      "address": "MSHSD Sainadha Petroleums, S.No: 94/7, Maddipadu, Prakasam, 523211",
      "coordinates": {
        "latitude": 15.62441,
        "longitude": 80.02049
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/2272024/00015351",
      "district": "Prakasam",
      "registration": "51"
    },
    {
      "station_name": "MS/HSD Chittem Jagannath Petroleums",
      "address": "MS/HSD Chittem Jagannath Petroleums,  S.No: 46AA & 46AB, Marteru, Prakasam, 523260",
      "coordinates": {
        "latitude": 15.92911,
        "longitude": 80.077856
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/562024/00015246",
      "district": "Prakasam",
      "registration": "52"
    },
    {
      "station_name": "MS/HSD Kona Filling Station",
      "address": "MS/HSD Kona Filling Station, S.No: 656, Bapatla, 522101",
      "coordinates": {
        "latitude": 15.907762,
        "longitude": 80.478114
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/GU/2272024/00015355",
      "district": "Bapatla",
      "registration": "53"
    },
    {
      "station_name": "MS/HSD SKLS Filling Station",
      "address": "MS/HSD SKLS Filling Station, S.No: 4-1C & 4-2, Birdawada, Naidupeta, Nellore, 524126",
      "coordinates": {
        "latitude": 13.900693,
        "longitude": 79.911205
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/662024/00015248",
      "district": "Nellore",
      "registration": "54"
    },
    {
      "station_name": "MS/HSD SKLS Filling Station",
      "address": "MSHSD Padmavathi Petro Park, S.No: 308/4b, Merlapaka, Yerpedu, Chittoor, 517619",
      "coordinates": {
        "latitude": 13.900693,
        "longitude": 79.911205
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1372024/00015325",
      "district": "Chittoor",
      "registration": "55"
    },
    {
      "station_name": "Sai Sadguru Fuel Station",
      "address": "Sai Sadguru Fuel Station,  S.No: 220/1A1, 220/1A2 & 220/1B, kalroadpalli, Chandragiri, Chittoor, 517112",
      "coordinates": {
        "latitude": 15.105309,
        "longitude": 80.008903
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/2272024/00015356",
      "district": "Chittoor",
      "registration": "56"
    },
    {
      "station_name": "MS/HSD Tirumala Fuels",
      "address": "MS/HSD Tirumala Fuels, S.No: 25/3 & 372/3, Iyethepalli, Chandragiri, 524319",
      "coordinates": {
        "latitude": 13.522755,
        "longitude": 79.222663
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1372024/00015326",
      "district": "Chandragiri",
      "registration": "57"
    },
    {
      "station_name": "MS/HSD Harshni Petro Park",
      "address": "MS/HSD Harshni Petro Park, S.No: 407/1A1, Thukivakam, Renigunta, Chittoor, 517520",
      "coordinates": {
        "latitude": 15.719488,
        "longitude": 80.01274
      },
      "capacity": "60 KW DC",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/2272024/00015357",
      "district": "Chittoor",
      "registration": "58"
    },
    {
      "station_name": "MSHSD Siva Prasad Petro Fuels",
      "address": "Sy.No. 185, NH-7, Kurnool - Bangalore Road, Peddatekur Village, Kallur Mandal, Kurnool District- 518218",
      "coordinates": {
        "latitude": 15.72320638,
        "longitude": 78.00176718
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/1362024/00015256",
      "district": "Kurnool",
      "registration": "59"
    },
    {
      "station_name": "MSHSD Yogaswera Filling Station",
      "address": "S.No.187, Peddatekur (V) & Kallur (M) NH-7, Kurnool-Bengaluru Road Peddatekur Kurnool District-518218",
      "coordinates": {
        "latitude": 15.7229327,
        "longitude": 78.00053873
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/1362024/00015254",
      "district": "Kurnool",
      "registration": "60"
    },
    {
      "station_name": "MSHSD Royal Fuel Station",
      "address": "Survey No. 199-2 NH -7, On Lhs Hyderabad-Bangalore Road, Lolur Village, Singanamala Mandal, Ananthapuramu District - 515 732",
      "coordinates": {
        "latitude": 14.79446013,
        "longitude": 77.59842038
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015314",
      "district": "Anantapur",
      "registration": "61"
    },
    {
      "station_name": "MSHSD K.V. Seshaiah Setty Fuels",
      "address": "Survey No.247/17, Vengalampalle Village, Peapally Mandal, Kurnool-518221.",
      "coordinates": {
        "latitude": 15.25507811,
        "longitude": 77.75488704
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/1362024/00015258",
      "district": "Kurnool",
      "registration": "62"
    },
    {
      "station_name": "MSHSD Sri Rajarajeswari Filling Station",
      "address": "Survey No. 167/2, Thamarajupalli Village, Panyam Mandal, Nandyal District - 518112",
      "coordinates": {
        "latitude": 15.55144,
        "longitude": 78.21545
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/1362024/00015241",
      "district": "Nandyal",
      "registration": "63"
    },
  {
      "station_name": "MSHSD Sri Rajarajeswari Filling Station",
      "address": "Survey No. 167/2, Thamarajupalli Village, Panyam Mandal, Nandyal District - 518112",
      "coordinates": {
        "latitude": 15.55144,
        "longitude": 78.21545
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/1362024/00015241",
      "district": "Nandyal",
      "registration": "63"
    },
    {
      "station_name": "MSHSD Vaibhav Fuel Station",
      "address": "Survey No. 501-2B, NH-44, Ananthapuramu-Bangalore Road, Raptadu Village & Mandal, Ananthapuramu District - 515722",
      "coordinates": {
        "latitude": 14.6049484,
        "longitude": 77.6061093
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1362024/00015257",
      "district": "Anantapur",
      "registration": "64"
    },
    {
      "station_name": "MSHSD Maurya Quality Fuels",
      "address": "123/2 &3, NH-44, Yerrampalli Village, C.K.Pally Mandal, Chennekottapally, Sri Sathya Sai District-515101",
      "coordinates": {
        "latitude": 14.290784,
        "longitude": 77.628028
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1362024/00015255",
      "district": "Sri Sathya Sai District",
      "registration": "65"
    },
    {
      "station_name": "MSHSD Jagadeesh Shai Filling Station",
      "address": "Survey No. 605-3e & 605-3d, Nh 44, Opp Kia Motors, Eramanchi Village, Penukonda Mandal, Sri Sathya Sai District - 515110.",
      "coordinates": {
        "latitude": 14.162506,
        "longitude": 77.611993
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1362024/00015253",
      "district": "Sri Sathya Sai District",
      "registration": "66"
    },
    {
      "station_name": "MSHSD Afnan Khan Quality Fuels",
      "address": "Sy.No. 53/1A1, Nannur Village, NH-40 (Kurnool - Chittoor Road), Orvakal Mandal, Kurnool District - 518010.",
      "coordinates": {
        "latitude": 15.713004,
        "longitude": 78.114531
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015305",
      "district": "Kurnool",
      "registration": "67"
    },
    {
      "station_name": "MSHSD Adithya Fuels",
      "address": "Sy.No1145/1A1A & 1142/1B Kotakandukur Village Allagadda Mandal Nandyal District 518543",
      "coordinates": {
        "latitude": 15.10339326,
        "longitude": 78.51312041
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015306",
      "district": "Nandyal",
      "registration": "68"
    },
    {
      "station_name": "MSHSD Sri Lakshmi Narasimha Filling Station",
      "address": "S.No. 650/1 & 2, 170 Nh-18, Knl-Kdp Road Gubagundam (V) & Panyam (M) Allagadda Nandyal District 518543",
      "coordinates": {
        "latitude": 15.17078765,
        "longitude": 78.5014531
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015310",
      "district": "Nandyal",
      "registration": "69"
    },
    {
      "station_name": "MSHSD Sree Veerabhadra Filling Station",
      "address": "Survey No. 654/3a2, Duvvur Village & Mandal, Y.S.R District - 516 175",
      "coordinates": {
        "latitude": 14.8340742,
        "longitude": 78.66488414
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CU/872024/00015313",
      "district": "Kadapa",
      "registration": "70"
    },
    {
      "station_name": "MSHSD Swetha Fuel Station",
      "address": "Survey No. 22/2A PYKI & 23, Udumalapuram Village, Nandyal Mandal, Nandyal District - 518502.",
      "coordinates": {
        "latitude": 15.487094,
        "longitude": 78.423138
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015311",
      "district": "Nandyal",
      "registration": "71"
    },
    {
      "station_name": "MSHSD Ramisetty Filling Station",
      "address": "Survey No. 3/1B2 & 3/2B1, NH-40, Mydukur Village & Mandal, Y.S.R District - 516 172",
      "coordinates": {
        "latitude": 14.7021843,
        "longitude": 78.74203841
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CU/672024/00015307",
      "district": "Kadapa",
      "registration": "72"
    },
    {
      "station_name": "MSHSD Siva Sai Petro Hub",
      "address": "Sy. No. 1299, Bandapalli National Highway-18, Kurnool-Chittoor Road Rayachoty, Annamayya District- 516 270",
      "coordinates": {
        "latitude": 14.09373845,
        "longitude": 78.75616864
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1072024/00015324",
      "district": "Annamayya District",
      "registration": "73"
    },
    {
      "station_name": "MSHSD Sri Sai Tirumala Fuels",
      "address": "Sh-31, Renigunta Road, Rajampeta, Annamayya District - 516 152.",
      "coordinates": {
        "latitude": 14.20061323,
        "longitude": 79.16125776
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/672024/00015309",
      "district": "Annamayya District",
      "registration": "74"
    },
    {
      "station_name": "MSHSD Sri Lakshmi Venkata Sai Automobiles",
      "address": "Survey No. 447-1, Kadiri-Bengaluru Road,Ananthapuramu District 515001",
      "coordinates": {
        "latitude": 14.66493298,
        "longitude": 77.61281858
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015315",
      "district": "Anantapur",
      "registration": "75"
    },
    {
      "station_name": "MSHSD Nikhil Filling Station",
      "address": "Survey No. 336, Malakavemula Village & Panchayat, Mudigubba Mandal, Sri Sathya Sai District-515501.",
      "coordinates": {
        "latitude": 14.260188,
        "longitude": 78.06063
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/872024/00015317",
      "district": "Sri Sathya Sai District",
      "registration": "76"
    },
    {
      "station_name": "Ms/Hsd P.S.N.Reddy Filling Station",
      "address": "HPCL Dealers S.No.568/570, Basinikonda Village, Madanapalli 517325",
      "coordinates": {
        "latitude": 13.54502095,
        "longitude": 78.53052022
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015319",
      "district": "Annamayya District",
      "registration": "77"
    },
    {
      "station_name": "MSHSD - Balaji Enterprises - Kadiri",
      "address": "Survey No. 200-1 Kadiri Muncipality Kadiri Mandal Kutagulla Sri Sathya Sai District-515541",
      "coordinates": {
        "latitude": 14.14603968,
        "longitude": 78.14913547
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015320",
      "district": "Sri Sathya Sai District",
      "registration": "78"
    },
    {
      "station_name": "MSHSD Ramakrishna Flng Centre,Kalakada",
      "address": "NH-18, Trunk Road Kalakada, Annamayya District -517236",
      "coordinates": {
        "latitude": 13.82427642,
        "longitude": 78.79012048
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015321",
      "district": "Annamayya District",
      "registration": "79"
    },
    {
      "station_name": "MSHSD Sony Fuel Bay,Angallu",
      "address": "Sy.No. 129/2 , Angallu Village, Kuramala Kota Mandal, Annamayya district -517325",
      "coordinates": {
        "latitude": 13.61495705,
        "longitude": 78.48838806
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/872024/00015322",
      "district": "Annamayya District",
      "registration": "80"
    },
    {
      "station_name": "MSHSD K.V.R. Petromart",
      "address": "Survey No.660/A2, Kallur Village & Mandal, Kurnool District-518003.",
      "coordinates": {
        "latitude": 15.79529423,
        "longitude": 78.06166628
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/972024/00015323",
      "district": "Kurnool",
      "registration": "81"
    },
    {
      "station_name": "MSHSD Sri Puvvadi Radha Krishna Fuels",
      "address": "Survey No. 599/1, Kallur Village & Mandal, Kurnool District - 518 003.",
      "coordinates": {
        "latitude": 15.797462,
        "longitude": 78.033893
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015312",
      "district": "Kurnool",
      "registration": "82"
    },
    {
      "station_name": "MSHSD Sri Puvvadi Radha Krishna Fuels",
      "address": "Survey No. 599/1, Kallur Village & Mandal, Kurnool District - 518 003.",
      "coordinates": {
        "latitude": 15.797462,
        "longitude": 78.033893
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/672024/00015312",
      "district": "Kurnool",
      "registration": "82"
    },
    {
      "station_name": "MS/HSD Vijaya Service Station",
      "address": "S.No:439/440-3 & 143,144,145, Karakulambadi, Renigunta, Chittoor - 517501",
      "coordinates": {
        "latitude": 13.642796,
        "longitude": 79.512973
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1792024/00021283",
      "district": "Chittoor",
      "registration": "83"
    },
    {
      "station_name": "MSHSD Durga Filling Station",
      "address": "S.No: 10-9A,10-12A, Vadamala, Vadamalapeta, Chittoor - 517551",
      "coordinates": {
        "latitude": 13.563194,
        "longitude": 79.516556
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1692024/00021282",
      "district": "Chittoor",
      "registration": "84"
    },
    {
      "station_name": "MS/HSD Sri Hari-Peddanjimedu",
      "address": "S.No:12/8A,12/7A,12/4A,12/11B1A,12/10A1A,12/10B-1, Peddanjimedu, Yerpedu, Nellore - 517520",
      "coordinates": {
        "latitude": 13.682695,
        "longitude": 79.574593
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/1692024/00021280",
      "district": "Nellore",
      "registration": "85"
    },
    {
      "station_name": "MS/HSD Srinivasulu Filling Station, Venkatagiri",
      "address": "S.No: 91/10, chavireddipalli, Venkatagiri, Nellore",
      "coordinates": {
        "latitude": 13.934588,
        "longitude": 79.591027
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/1392024/00021277",
      "district": "Nellore",
      "registration": "86"
    },
    {
      "station_name": "MS/HSD Sivaragini Filling Station",
      "address": "S.No: 14-1B1, Yerrabalem, Sullurpet, Chittoor -524121",
      "coordinates": {
        "latitude": 13.705579,
        "longitude": 80.011936
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1392024/00021276",
      "district": "Chittoor",
      "registration": "87"
    },
    {
      "station_name": "MSHSD ADHOC Sri Venkateswara Filling Station",
      "address": "S.No:1600, Gudur, Chittoor - 524101",
      "coordinates": {
        "latitude": 14.136943,
        "longitude": 79.864366
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1192024/00021275",
      "district": "Chittoor",
      "registration": "88"
    },
    {
      "station_name": "MS/HSD Rishidar Filling Station",
      "address": "S.No:714/1, Kanigiri, Prakasam - 523230",
      "coordinates": {
        "latitude": 15.411502,
        "longitude": 79.497447
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/1192024/00021274",
      "district": "Prakasam",
      "registration": "89"
    },
    {
      "station_name": "MS/HSD Babu Filling Station-SR Palem",
      "address": "S.No: 505/2, Surareddypalem, Tangutur, Prakasam - 523272",
      "coordinates": {
        "latitude": 15.39944,
        "longitude": 80.039147
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/1192024/00021273",
      "district": "Prakasam",
      "registration": "90"
    },
    {
      "station_name": "MSHSD SBT Filling Station Manubolu",
      "address": "S.No: 248-13,248-14,248-15,248-18,248-19,248-3, Manubolu, Nellore - 524405",
      "coordinates": {
        "latitude": 14.202193,
        "longitude": 79.875415
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/NE/1192024/00021272",
      "district": "Nellore",
      "registration": "91"
    },
    {
      "station_name": "MS/HSD Prasad Filling Station",
      "address": "S.No: 236/1, Bangarupalem, Chittoor - 517416",
      "coordinates": {
        "latitude": 13.189281,
        "longitude": 78.864289
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1192024/00021271",
      "district": "Chittoor",
      "registration": "92"
    },
    {
      "station_name": "MS/HSD Sri Chakra Fuel Station",
      "address": "S.No: 479/1, 479/2, P.Kothakotta, Puthalapatu, Chittoor- 517124",
      "coordinates": {
        "latitude": 13.395982,
        "longitude": 79.09857
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1192024/00021270",
      "district": "Chittoor",
      "registration": "93"
    },
    {
      "station_name": "MS/HSD Vijaya Fuel Station",
      "address": "S.No: 16-1, Mordhanapalli, Yadhamari, Chittoor - 517001",
      "coordinates": {
        "latitude": 13.193723,
        "longitude": 79.036991
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1192024/00021268",
      "district": "Chittoor",
      "registration": "94"
    },
    {
      "station_name": "MS/HSD Vivekananda Filling Station",
      "address": "S.No: 27/2, Alkuppam, Gangavaram, Chittoor - 517432",
      "coordinates": {
        "latitude": 13.194078,
        "longitude": 78.558657
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/CH/1192024/00021269",
      "district": "Chittoor",
      "registration": "95"
    },
    {
      "station_name": "Adhoc Ram Filling Station",
      "address": "Adhoc Ram Filling Station, S.No 585/A NH-44 Kasepalli,Gooty Peddavaduguru Mandal, Anantapur Dt -515401",
      "coordinates": {
        "latitude": 15.110376,
        "longitude": 77.636921
      },
      "capacity": "120 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/27112024/00024047",
      "district": "Anantapur",
      "registration": "96"
    },
    {
      "station_name": "Adhoc Royal Filling Station",
      "address": "Adhoc Royal Filling Station, S.No :151, Karadikonda, Ananthapur Dt , AP-515401",
      "coordinates": {
        "latitude": 15.165056,
        "longitude": 77.675999
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/312025/00024116",
      "district": "Anantapur",
      "registration": "97"
    },
    {
      "station_name": "SKF Filling Station",
      "address": "SKF Filling Station,S.No: 239/1, Chabolu, Nandyal, Kurnool Dt, AP- 518502",
      "coordinates": {
        "latitude": 15.418229,
        "longitude": 78.50966
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/KU/2712025/00024149",
      "district": "Kurnool",
      "registration": "98"
    },
    {
      "station_name": "Unnamed Station 99",
      "address": "S.No: 116/1A1B, Rajupalem Village, Ulavapadu Mandal, Prakasam District, AP -523292",
      "coordinates": {
        "latitude": 15.159459,
        "longitude": 80.007999
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/PR/131 22024/00024081",
      "district": "Prakasam",
      "registration": "99"
    },
    {
      "station_name": "Unnamed Station 100",
      "address": "S.No:75/2, Obulakkapalli, Peddaraveedu, Prakasam, AP - 523320",
      "coordinates": {
        "latitude": 15.903599,
        "longitude": 79.309708
      },
      "capacity": "60 KW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/131 22024/00024083",
      "district": "Prakasam",
      "registration": "100"
    },
  {
    "station_name": "NRT Center Filling Station",
    "address": "S.No: 5/406, NRT center, purushothampatnam (v), chilakaluripeta mandal, Guntur Dt, AP-522616",
    "coordinates": {
      "latitude": 16.09557003,
      "longitude": 80.16531699
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/2 7122024/00024108",
    "district": "Guntur",
    "registration": "128"
  },
  {
    "station_name": "MPR Oil Filling Station",
    "address": "S.No:380/1B, savalyapuram(v), savalyapuram mandal, Guntur Dt, AP- 522646",
    "coordinates": {
      "latitude": 16.110043,
      "longitude": 79.822564
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/3 1122024/00024111",
    "district": "Guntur",
    "registration": "129"
  },
  {
    "station_name": "Sri Sai Shanmukha Sita Rama Filling Station",
    "address": "S.No:164, prathipadu (v), prathipadu mandal, Guntur Dt, AP 522019",
    "coordinates": {
      "latitude": 16.18673476,
      "longitude": 80.34145677
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/1 1122024/00024112",
    "district": "Guntur",
    "registration": "130"
  },
  {
    "station_name": "Amrutha Enterprises",
    "address": "S.No:390/1, Lemalle(v), Amaravathi mandal, Guntur Dt, AP- 522016",
    "coordinates": {
      "latitude": 16.481049,
      "longitude": 80.397422
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/3 1122024/00024133",
    "district": "Guntur",
    "registration": "131"
  },
  {
    "station_name": "Hyway Fuel Filling Station",
    "address": "S.No:778/1, Yanamadala (v), Prathipadumandal, Guntur Dt, AP- 522019",
    "coordinates": {
      "latitude": 16.24268896,
      "longitude": 80.32661921
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/2 7122024/00024107",
    "district": "Guntur",
    "registration": "132"
  },
  {
    "station_name": "DIVNL Co-op Officer, Penugolanu",
    "address": "S.No: 555/2, Penugolanu (v), Gampalagudem mandal, Krishna Dt, AP-541401",
    "coordinates": {
      "latitude": 16.977028,
      "longitude": 80.444135
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024143",
    "district": "Krishna",
    "registration": "133"
  },
  {
    "station_name": "Sri Sai Roadways",
    "address": "S.No:115/1A, Jupudi (v), Ibrahimpatnam mandal, Krishna Dt, AP- 521456",
    "coordinates": {
      "latitude": 16.604948,
      "longitude": 80.483693
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024145",
    "district": "Krishna",
    "registration": "134"
  },
  {
    "station_name": "Kanchi Radhika Filling Station",
    "address": "S.No: 468/2B & 468/3, Cheemalapadu (v), A Konduru mandal. KrishnaDt, AP- 521226",
    "coordinates": {
      "latitude": 16.9707084,
      "longitude": 80.6472981
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024144",
    "district": "Krishna",
    "registration": "135"
  },
  {
    "station_name": "Sri Lakshmi Oil Traders",
    "address": "S.No: 224/4, Gudivada (v), Gudivada mandal, Krishna Dt, AP- 521301",
    "coordinates": {
      "latitude": 16.4275779,
      "longitude": 81.0011522
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 512025/00024128",
    "district": "Krishna",
    "registration": "136"
  },
  {
    "station_name": "Friends Filling Station",
    "address": "S.No: 133/2, Narasannapalam (v), Koyyalagudem mandal, WestGodavari Dt, AP-534312",
    "coordinates": {
      "latitude": 17.12286645,
      "longitude": 81.32611251
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2612025/00024146",
    "district": "WestGodavari",
    "registration": "137"
  },
  {
    "station_name": "Sankari Filling Station",
    "address": "S.No: 366/1A, 375/3D, Velagaleru (v), A Konduru mandal, Krishna Dt, AP- 521229",
    "coordinates": {
      "latitude": 16.6508595,
      "longitude": 80.6138967
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 512025/00024129",
    "district": "Krishna",
    "registration": "138"
  },
  {
    "station_name": "Madipalli Chalamaiah",
    "address": "S.No: 22-C-1, Elluru (v), Elluru mandal, West Godavari Dt, AP- 534002",
    "coordinates": {
      "latitude": 16.7092084,
      "longitude": 81.1032034
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2512025/00024130",
    "district": "WestGodavari",
    "registration": "139"
  },
  {
    "station_name": "Sanjana Filling Station",
    "address": "S.No: 87/23, Kattubadipalem (v), G Konduru mandal, Krishna Dt, AP- 521228",
    "coordinates": {
      "latitude": 16.651116,
      "longitude": 80.563903
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024132",
    "district": "Krishna",
    "registration": "140"
  },
  {
    "station_name": "ADHOC Sri Datta Ranga Agencies",
    "address": "S.No: 112/3D, Jagaihpeta (v), Jagaihpeta mandal, Krishna Dt, AP-522001",
    "coordinates": {
      "latitude": 16.8582165,
      "longitude": 80.1960472
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024147",
    "district": "Krishna",
    "registration": "141"
  },
  {
    "station_name": "Sri Rajyalakshmi Oil Services",
    "address": "S.No: 10/5 Perikedu (v), Bapulapadu mandal, Krishna Dt, AP- 521106",
    "coordinates": {
      "latitude": 16.61888,
      "longitude": 80.970617
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024133",
    "district": "Krishna",
    "registration": "142"
  },
  {
    "station_name": "Delta Filling Station",
    "address": "S.No:193/1 Jaganathapuram (v), Poduru mandal, West Godavari Dt, AP- 534122",
    "coordinates": {
      "latitude": 16.614887,
      "longitude": 81.739203
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2612025/000241134",
    "district": "WestGodavari",
    "registration": "143"
  },
  {
    "station_name": "Pushpa Premium Fuels",
    "address": "558-1B, Gunipudi (v), Bhimavaram mandal, West Godavari Dt, AP- 534244",
    "coordinates": {
      "latitude": 16.531328,
      "longitude": 81.539032
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2612025/00024135",
    "district": "WestGodavari",
    "registration": "144"
  },
  {
    "station_name": "Omkar Pavana Sai Balaji Fuels",
    "address": "S.No: 219/2G1, Uppalapadu (v), Kamavarapukota mandal, West Godavari Dt, AP- 534449",
    "coordinates": {
      "latitude": 17.0405677,
      "longitude": 81.2309193
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2612025/00024136",
    "district": "WestGodavari",
    "registration": "145"
  },
  {
    "station_name": "Sri Tarakaramanjaneya Filling Station",
    "address": "S.No: 81/4, Adavinekkalam (v), Agiripalli mandal, Krishna Dt, AP- 521211",
    "coordinates": {
      "latitude": 16.653903,
      "longitude": 80.731131
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/000241478",
    "district": "Krishna",
    "registration": "146"
  },
  {
    "station_name": "Coco Athkuru",
    "address": "S.No: 142/C12, Athkuru (v), G Konduru mandal, Krishna Dt, AP- 521229",
    "coordinates": {
      "latitude": 16.6856174,
      "longitude": 80.6002104
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024137",
    "district": "Krishna",
    "registration": "147"
  },
  {
    "station_name": "Shree Veeranjaneya Filling Station",
    "address": "S.No: 271/4, Kondaparva (v), Visannapeta mandal, Krishna Dt, AP- 521213",
    "coordinates": {
      "latitude": 16.907227,
      "longitude": 80.820898
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024138",
    "district": "Krishna",
    "registration": "148"
  },
  {
    "station_name": "Vijaya Durga Filling Station",
    "address": "S.No: 857/2, Vinukonda (v), Vinukonda mandal, Guntur /Dt, Ap- 522647",
    "coordinates": {
      "latitude": 16.0568398,
      "longitude": 79.7453318
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/2 612025/00024142",
    "district": "Guntur",
    "registration": "149"
  },
  {
    "station_name": "Viajayawada Serice Station",
    "address": "S.No: 4/1, Nandamuri nagar (v), Vijayawada mandal, Krishna Dt, AP- 520015",
    "coordinates": {
      "latitude": 16.554263,
      "longitude": 80.638397
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/2 612025/00024139",
    "district": "Krishna",
    "registration": "150"
  },
  {
    "station_name": "WSA Gundagolanu",
    "address": "S.No: 31/1, Gundugolany (v), Singavaram mandal, West Godavari Dt, AP- 534425",
    "coordinates": {
      "latitude": 16.782303,
      "longitude": 81.22246
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2712025/00024153",
    "district": "WestGodavari",
    "registration": "151"
  },
  {
    "station_name": "WSA Lakshminagaram",
    "address": "S.No: 242/3E1C,242/3F2, 242/3G2,242/3H,242/3K1,242/4B, 242/5A&242/3D1B, Gunnampalli (v), Dwarakatirumala mandal, West Godavari Dt, AP-534425",
    "coordinates": {
      "latitude": 16.891222,
      "longitude": 81.327806
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2612025/00024141",
    "district": "WestGodavari",
    "registration": "152"
  },
  {
    "station_name": "Viajaya Oil Filling Station",
    "address": "Narasaraopeta (v), Narasaraopeta mandal, Guntur Dt, AP- 522601",
    "coordinates": {
      "latitude": 16.2383436,
      "longitude": 80.0430086
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/2 612025/00024131",
    "district": "Guntur",
    "registration": "153"
  },
  {
    "station_name": "Sri Dhanalakshmi Oil Corporation",
    "address": "S.No 1-2 NH-214, Akiveedu (v), Akiveedu mandal, West Godavari, AP -532235",
    "coordinates": {
      "latitude": 16.57839,
      "longitude": 81.36472
    },
    "capacity": "60 KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/ 2512025/00024127",
    "district": "WestGodavari",
    "registration": "154"
  },
  {
    "station_name": "PRABHUVU FILLING STATION",
    "address": "VEERAGOTTAM ROAD, NEAR FIRE STATION, PALAKONDA, SRIKAKULAM DIST, ANDHRA PRADESH- 532440",
    "coordinates": {
      "latitude": 18.6051,
      "longitude": 83.7475
    },
    "capacity": "30",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2182024/00015725",
    "district": "SRIKAKULAM",
    "registration": "38"
  },
  {
    "station_name": "MANOHAR ENTERPRISES",
    "address": "INDIAN OIL DEALERS, SY NO 375/29 & 375/30, JAMI VILLAGE, VIZIANAGARAM DISTRICT, ANDHRA PRADESH-535250",
    "coordinates": {
      "latitude": 18.052569,
      "longitude": 83.237267
    },
    "capacity": "30",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2182024/00015726",
    "district": "VIZIANAGARAM",
    "registration": "39"
  },
  {
    "station_name": "S S V V S B FUEL STATION",
    "address": "SY NO.102-1A, SANKAVARAM MANDALAM, ANNAVARAM, EAST GODAVARI DIST, ANDHRA PRADESH-533406",
    "coordinates": {
      "latitude": 17.270131,
      "longitude": 82.402559
    },
    "capacity": "30",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2082024/00015710",
    "district": "EAST GODAVARI",
    "registration": "40"
  },
  {
    "station_name": "PALURI VENKATARAMANA",
    "address": "INDIAN OIL DEALERS, LOCK NO.T1 189, TUNI, EAST GODAVARI DIST, ANDHRA PRADESH- 533401",
    "coordinates": {
      "latitude": 17.358763,
      "longitude": 82.540871
    },
    "capacity": "30",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2082024/00015711",
    "district": "EAST GODAVARI",
    "registration": "41"
  },
  {
    "station_name": "SWAGAT BENDAPUDI",
    "address": "NDIAN OIL PETROL PUMP, NH 5 (OLD) ROAD, BENDAPUDI, EAST GODAVARI DIST, ANDHRA PRADESH-533406",
    "coordinates": {
      "latitude": 17.25099,
      "longitude": 82.35489
    },
    "capacity": "60",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2182024/00015729",
    "district": "EAST GODAVARI",
    "registration": "42"
  },
  {
    "station_name": "KALA AGENCIES",
    "address": "SY NO.1103/1B, GOWRAPALLEM WARD, ANAKAPALLI BYE-PASS ROAD, LOCK NO.T1 80, VISAKHAPTNAM DIST, ANDHRA PRADESH 531001",
    "coordinates": {
      "latitude": 17.675743,
      "longitude": 83.016899
    },
    "capacity": "100-120",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2182024/00015730",
    "district": "VISAKHAPATNAM",
    "registration": "43"
  },
  {
    "station_name": "RAKSHAK RETAIL SERVICE STATION",
    "address": "AP POLICE DEPARTMENT, SY. NO.856/1, MAIN ROAD MURUKONDAPADU VILLAGE, STUARTPURAM, BAPATLA DISTRICT-522317",
    "coordinates": {
      "latitude": 15.86635507,
      "longitude": 80.40562282
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015510",
    "district": "BAPATLA DISTRICT",
    "registration": "44"
  },
  {
    "station_name": "ARUNA AGENCIES",
    "address": "PRATHIPADU V & M, SY NO.769, Lock T1-313/4 DNO:116, ANDHRA PRADESH-522519",
    "coordinates": {
      "latitude": 16.177892,
      "longitude": 80.33029
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015511",
    "district": "GUNTUR DISTRICT",
    "registration": "45"
  },
  {
    "station_name": "SANGAM MILK PRODUCER CO. LTD.",
    "address": "SANGAM DAIRY, SY NOs 27/5 & 27/6, VADLAMUDI, Lock T1-349/50/1 DNO:131, ANDHRA PRADESH-522213",
    "coordinates": {
      "latitude": 16.23829,
      "longitude": 80.560753
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015512",
    "district": "GUNTUR DISTRICT",
    "registration": "46"
  },
  {
    "station_name": "NAYAGRA FUEL STATION",
    "address": "SY.NO.55/3 & 55/4, MAIN ROAD, REPALLE VILLAGE & MANDAL, BAPATLA DISTRICT-522265",
    "coordinates": {
      "latitude": 16.0168,
      "longitude": 80.82177
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015513",
    "district": "BAPATLA DISTRICT",
    "registration": "47"
  },
  {
    "station_name": "GUNTUR RURAL POLICE FUEL STATION",
    "address": "AP POLICE DEPARTMENT, INDIAN OIL DEALERS, SATTENAPALLI, SY NO.200-1B1, GUNTUR DISTRICT-522403",
    "coordinates": {
      "latitude": 16.39477,
      "longitude": 80.151595
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015514",
    "district": "GUNTUR DISTRICT",
    "registration": "48"
  },
  {
    "station_name": "G G K RAJU FILLING STATION",
    "address": "S.NO.392/2, LOCK NO. 22020 /544 NIDAMARRU (V) & MANDAL, ANDHRA PRADESH - 522514",
    "coordinates": {
      "latitude": 16.7208,
      "longitude": 81.4296
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/882024/00015515",
    "district": "Guntur GODAVARI",
    "registration": "49"
  },
  {
    "station_name": "SRINIVASA FILLING STATION",
    "address": "CHILAKALURIPETA, Lock T2- 235/6, DNO:191, ANDHRA PRADESH - 522616",
    "coordinates": {
      "latitude": 16.10275,
      "longitude": 80.169361
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015516",
    "district": "PALNADU DISTRICT",
    "registration": "50"
  },
  {
    "station_name": "K.V.R.FILLING STATION",
    "address": "5-39, ASSESSMENT NO.839, SY No 85, MALLADI VILLAGE, AMARAVTHI MANDAL, GUNTUR DISTRICT - 522020",
    "coordinates": {
      "latitude": 16.573139,
      "longitude": 80.273167
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015517",
    "district": "GUNTUR DISTRICT",
    "registration": "51"
  },
  {
    "station_name": "P.JUSTEENAIAH",
    "address": "INDIRA COLONY BUS STOP, 19-7-87, SY NOs. 534/1 & 534/3, PONNUR ROAD, SANGADIGUNTA, GUNTUR DISTRICT-522124",
    "coordinates": {
      "latitude": 16.281358,
      "longitude": 80.455072
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015518",
    "district": "GUNTUR DISTRICT",
    "registration": "52"
  },
  {
    "station_name": "DURGA FILLING STATION",
    "address": "SY NO. 539/2, DUGGIRALA, Lock T1-327/8 DNO:122 ANDHRA PRADESH-522330",
    "coordinates": {
      "latitude": 16.343069,
      "longitude": 80.627474
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/882024/00015519",
    "district": "GUNTUR DISTRICT",
    "registration": "53"
  },
  {
    "station_name": "AMARAVATI PETROLEUMS",
    "address": "SY NO. 269/2, KORETIPADU Gujjanagundla Centre, Guntur -522007",
    "coordinates": {
      "latitude": 16.323924,
      "longitude": 80.405024
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015522",
    "district": "GUNTUR DISTRICT",
    "registration": "54"
  },
  {
    "station_name": "SRI RAMASWAMY FILLING STATION",
    "address": "GUNTUR, Lock T1-451/2/3, DNO:168, ANDHRA PRADESH - 522006",
    "coordinates": {
      "latitude": 16.30901613,
      "longitude": 80.41840515
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015524",
    "district": "GUNTUR DISTRICT",
    "registration": "55"
  },
  {
    "station_name": "SRI LAXMI NARSIMHA FILLING STATION",
    "address": "SH-89, VINUKONDA MACHERLA ROAD, SY NO.577/B, DURGI VILLAGE & MANDAL PALNADU DISTRICT - 523201",
    "coordinates": {
      "latitude": 16.42705837,
      "longitude": 79.53390245
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015525",
    "district": "PALNADU DISTRICT",
    "registration": "56"
  },
  {
    "station_name": "ANJANIPUTHRA FILLING STATION",
    "address": "SY NO. 270, TUMMALACHERUVU VILLAGE, BRAMHANAPALLI-VEERAPURAM RHS, PIDUGURALLA MANDAL, GUNTUR DISTRICT - 522437",
    "coordinates": {
      "latitude": 16.532604,
      "longitude": 79.808706
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015526",
    "district": "GUNTUR DISTRICT",
    "registration": "57"
  },
  {
    "station_name": "SANGAMESWARA FILLING STATION",
    "address": "PIDUGURALLA, Lock T1-413/4 DNO:153, ANDHRA PRADESH - 522413",
    "coordinates": {
      "latitude": 16.44903428,
      "longitude": 79.91839443
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015527",
    "district": "GUNTUR DISTRICT",
    "registration": "58"
  },
  {
    "station_name": "SAGAR FUELS",
    "address": "SY NO. 898/1, MACHERLA, Lock T2- 261/2, DNO:220, MACHERLA MANDAL, PALNADU DISTRICT -522426",
    "coordinates": {
      "latitude": 16.48442862,
      "longitude": 79.41050656
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/GU/982024/00015531",
    "district": "PALNADU DISTRICT",
    "registration": "59"
  },
  {
    "station_name": "LAKSHMI VINAYAKA FILLING STATION",
    "address": "2/148, MACHILIPATNAM TOWN, KRISHNA DISTRICT-521001",
    "coordinates": {
      "latitude": 16.167741,
      "longitude": 81.118016
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015481",
    "district": "KRISHNA DISTRICT",
    "registration": "60"
  },
  {
    "station_name": "ADITYA FILLING STATION",
    "address": "R.S.228/7, KODURU, KRISHNA DIST AP -521328",
    "coordinates": {
      "latitude": 16.008122,
      "longitude": 81.020309
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015480",
    "district": "KRISHNA DISTRICT",
    "registration": "61"
  },
  {
    "station_name": "BROTHERS SERVICE STATION",
    "address": "INDIAN OIL DEALERS, LOCK NO: T1-18/19/20/21/22, D NO:7, Vijayawada, Krishna, ANDHRA PRADESH",
    "coordinates": {
      "latitude": 16.497815,
      "longitude": 80.65353
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015533",
    "district": "KRISHNA DISTRICT",
    "registration": "62"
  },
  {
    "station_name": "PAC RAMASAMY RAJA CENTENARY TRUST",
    "address": "C/O.RAMCO CEMENTS COLONY, B-3 KUMARASAMY RAJA NAGAR, Chillakallu Village, Jaggayapeta, - 521178",
    "coordinates": {
      "latitude": 16.873271,
      "longitude": 80.1328
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015534",
    "district": "KRISHNA DISTRICT",
    "registration": "63"
  },
  {
    "station_name": "VANI FUEL STATION",
    "address": "NANDIGAMA TOWN, Lock T1-272/3, DNO:100, ANDHRA PRADESH - 521185",
    "coordinates": {
      "latitude": 16.76477,
      "longitude": 80.2807
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015535",
    "district": "KRISHNA DISTRICT",
    "registration": "64"
  },
  {
    "station_name": "PILOT SERVICE STATION",
    "address": "27-37-58, MG ROAD, GOVERNORPET VIJAYAWADA NTR DISTRICT - 520002",
    "coordinates": {
      "latitude": 16.50916,
      "longitude": 80.62446
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015536",
    "district": "NTR DISTRICT",
    "registration": "65"
  },
  {
    "station_name": "RUN WAY FILLING STATION",
    "address": "BANGARAYYA SHOP, CHITTINAGAR, Lock T1-138/9/40, D.NO:47, ANDHRA PRADESH - 520001",
    "coordinates": {
      "latitude": 16.528794,
      "longitude": 80.611271
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015537",
    "district": "KRISHNA DISTRICT",
    "registration": "66"
  },
  {
    "station_name": "SRI VENKATESWARA SERVICE STATION",
    "address": "32-119, OLD BUS STAND, NANDIGAMA VILLAGE & MANDAL, NTR DISTRICT-521185",
    "coordinates": {
      "latitude": 16.77895,
      "longitude": 80.28365
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015538",
    "district": "NTR DISTRICT",
    "registration": "67"
  },
  {
    "station_name": "VENKATA SAI RAGHAVA AUTO FUEL",
    "address": "SY Nos 250/4 & 250/3, TIRUVURU TOWN & MANDAL, TIRUVURU BYPASS, NH30, NTR DISTRICT, ANDHRA PRADESH - 521235",
    "coordinates": {
      "latitude": 17.11237,
      "longitude": 80.61772
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015476",
    "district": "NTR DISTRICT",
    "registration": "68"
  },
  {
    "station_name": "SUPRIYA SERVICE STATION",
    "address": "SY.NO .439/3, MYLAVARAM VILLAGE & MANDAL IBRAHIMPATNAM-TIRUVURU ROAD, NH 30, NTR DISTRICT - 521230",
    "coordinates": {
      "latitude": 16.73912,
      "longitude": 80.63253
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015477",
    "district": "NTR DISTRICT",
    "registration": "69"
  },
  {
    "station_name": "VIJETHA FILLING STATION",
    "address": "SY NO 377, AKONDORU VILLAGE & MANDAL, IBRAHIMPATNAM-TIRUVURU ROAD, NH 30, NTR DISTRICT, AP- 521227",
    "coordinates": {
      "latitude": 16.96985,
      "longitude": 80.6505
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015478",
    "district": "NTR DISTRICT",
    "registration": "70"
  },
  {
    "station_name": "VIJAYALAKSHMI ENTERPRISES",
    "address": "SYNO 230/2, PLOT NO 16, ELURU ROAD, PADAVALAREVU, GUNADALA, NTR DISTRICT, ANDHRA PRADESH - 520005",
    "coordinates": {
      "latitude": 16.52451,
      "longitude": 80.65878
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015475",
    "district": "NTR DISTRICT",
    "registration": "71"
  },
  {
    "station_name": "MADURAI MEENAKSHI AGENCIES",
    "address": "Lock T1-87/8/9 D.NO:28, SY NO 291, GUDIVADA, KRISHNA DISTRICT, ANDHRA PRADESH - 521301",
    "coordinates": {
      "latitude": 16.420614,
      "longitude": 81.00193
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015540",
    "district": "KRISHNA DISTRICT",
    "registration": "72"
  },
  {
    "station_name": "GOLDEN FUELS",
    "address": "Lock T1-338/9, SY NO 587/2B, VELERU VILLAGE, BAPULAPADU MANDAL, KRISHNA DIST, ANDHRA PRADESH - 521110",
    "coordinates": {
      "latitude": 16.62744144,
      "longitude": 80.94273188
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015541",
    "district": "KRISHNA DISTRICT",
    "registration": "73"
  },
  {
    "station_name": "SRINIVASA AGENCIES",
    "address": "SYNO 113/8, KANKIPADU GUDIVADA ROAD, NANDAMURU VILLAGE & VUNGUTUR MANDAL KRISHNA DISTRICT - 521311",
    "coordinates": {
      "latitude": 16.445151,
      "longitude": 80.858993
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/982024/00015542",
    "district": "KRISHNA DISTRICT",
    "registration": "74"
  },
  {
    "station_name": "SHAKTHI FILLING STATION",
    "address": "MAIN ROAD ON NH MANUBOLU VILLAGE & MANDAL SPSR NELLORE DISTRICT - 524405",
    "coordinates": {
      "latitude": 14.22456,
      "longitude": 79.880932
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015544",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "75"
  },
  {
    "station_name": "KRISHNAPATNAM FILLING STATION",
    "address": "SY.NO.236/1, LOCK NO - D1-343536, PANTAPALEM VILLAGE, NELLORE DIST ANDHRA PRADESH - 524323",
    "coordinates": {
      "latitude": 14.25837,
      "longitude": 80.042913
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015545",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "76"
  },
  {
    "station_name": "SRIRAMA FILLING STATION",
    "address": "SY.NO.666, MUMBAI ROAD, PADAMATIPALEM VILLAGE, SANGAM MANDAL, SPSR NELLORE DISTRICT - 524306",
    "coordinates": {
      "latitude": 14.5734,
      "longitude": 79.7953
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015546",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "77"
  },
  {
    "station_name": "GPR FILLING STATION",
    "address": "MAIN ROAD, SY NO 339/C, THODERU VILLAGE, PODALAKUR MANDAL, SPSR NELLORE DISTRICT - 524345",
    "coordinates": {
      "latitude": 14.38803,
      "longitude": 79.74456
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015547",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "78"
  },
  {
    "station_name": "SRI BRAMARAMBIKA FILLING STATION",
    "address": "INDIAN OIL DEALER, LOCK NO - D1-201, MYPADU ROAD-ALLIPURAM, NELLORE DIST ANDHRA PRADESH - 524002",
    "coordinates": {
      "latitude": 14.467909,
      "longitude": 80.033962
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015548",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "79"
  },
  {
    "station_name": "SRI VENKAIAH SWAMY FILLING STATION",
    "address": "SURVEY NO 6B, POTTEPALEM VILLAGE, NELLORE RURAL MANDAL, SPSR NELLORE DISTRICT - 524004",
    "coordinates": {
      "latitude": 14.469278,
      "longitude": 79.916451
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/982024/00015549",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "80"
  },
  {
    "station_name": "SRI SRINIVASA FILLING STATION",
    "address": "SY.NO.382 C & 384 C, LOCK NO - D1-18, BLOCK NO.6, PODALAKURU, NELLORE DISTRICT, ANDHRA PRADESH - 524004",
    "coordinates": {
      "latitude": 14.378392,
      "longitude": 79.730852
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015483",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "81"
  },
  {
    "station_name": "SRINIVASA OIL COMPANY",
    "address": "INDIAN OIL DELEARS, LOCK NO - D1-62, SY NO 582/1, KANDUKUR, PRAKASAM DT, ANDHRA PRADESH - 523105",
    "coordinates": {
      "latitude": 15.22056495,
      "longitude": 79.91371449
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015485",
    "district": "PRAKASAM DISTRICT",
    "registration": "82"
  },
  {
    "station_name": "SRI VENKATA DURGA FILLING STATION",
    "address": "S.NO.26/2A, BASINENIPALLI VILLAGE, SEETHARAMAPURAM MANDAL, SPSR NELLORE DISTRICT - 524226",
    "coordinates": {
      "latitude": 14.969548,
      "longitude": 79.20957
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015486",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "83"
  },
  {
    "station_name": "SAI QUALITY FILLING STATION ADHOC",
    "address": "SY NO 25-1A & 26-1, BODDUVARIPALEM VILLAGE, KODAVALUR MANDAL, SPSR NELLORE DISTRICT - 524004",
    "coordinates": {
      "latitude": 14.57420773,
      "longitude": 79.98423839
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015487",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "84"
  },
  {
    "station_name": "ABEED BABAJEE FILLING STATION",
    "address": "SY NO.133, NANDAVARAM JUNCTION, NANDAVARAM VILLAGE & MARRIPADU MANDAL SPSR NELLORE DISTRICT - 524307",
    "coordinates": {
      "latitude": 14.691528,
      "longitude": 79.483566
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015488",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "85"
  },
  {
    "station_name": "HYNDHAVI FILLING STATION",
    "address": "MARRIPADU VILLAGE, LOCK NO - D1-293, MARRIPADU VILL, NELLORE DISTRICT, ANDHRA PRADESH - 524312",
    "coordinates": {
      "latitude": 14.68894,
      "longitude": 79.35531
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015489",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "86"
  },
  {
    "station_name": "SRI SAINADH FILLING STATION",
    "address": "INDIAN OIL DEALERS GUDLUR V & M, PRAKASAM DIST. LOCK NO - D1-209211 ANDHRA PRADESH - 523281",
    "coordinates": {
      "latitude": 15.077186,
      "longitude": 79.900666
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015490",
    "district": "PRAKASAM DISTRICT",
    "registration": "87"
  },
  {
    "station_name": "K V N ASSOCIATES",
    "address": "SY NO.237/5, KANDUKUR VILLAGE & MANDAL PRAKASAM DISTRICT - 523105",
    "coordinates": {
      "latitude": 15.219689,
      "longitude": 79.893648
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015491",
    "district": "PRAKASAM DISTRICT",
    "registration": "88"
  },
  {
    "station_name": "SRINIVASA FILLING STATION (L-191)",
    "address": "INDIAN OIL DEALER LOCK NO - D1-189 SY.NO.191/3 & 192 NELLORE DIST ANDHRA PRADESH - 524312",
    "coordinates": {
      "latitude": 14.687505,
      "longitude": 79.508947
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/NE/882024/00015492",
    "district": "SPSR NELLORE DISTRICT",
    "registration": "89"
  },
  {
    "station_name": "PRIME ENERGIES",
    "address": "D.NO.1-62, NRT ROAD, REVENUE WARD, ADDANKI VILLAGE & MANDAL BAPATLA DISTRICT - 523201",
    "coordinates": {
      "latitude": 15.81905654,
      "longitude": 79.97090576
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015508",
    "district": "BAPATLA DISTRICT",
    "registration": "90"
  },
  {
    "station_name": "SRINIVASA SERVICE CENTRE",
    "address": "446 UPPUTURU VILLAGE PARCHUR MANDAL, PRAKASAM DISTRICT - 523169",
    "coordinates": {
      "latitude": 15.9611,
      "longitude": 80.2802
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015509",
    "district": "PRAKASAM DISTRICT",
    "registration": "91"
  },
  {
    "station_name": "KHALNAYAK FILLING STATION",
    "address": "Sy.No-399/7, Ward-6, VISANNAPETA TOWN & MANDAL, SATTUPALLI ROAD, NTR DISTRICT, ANDHRA PRADESH-521215",
    "coordinates": {
      "latitude": 16.9445,
      "longitude": 80.7874
    },
    "capacity": "50-60KW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/KR/682024/00015479",
    "district": "NTR DISTRICT",
    "registration": "92"
  },
  {
    "station_name": "SRINIVASA AGENCIES (MRT)",
    "address": "DNO:224 LOCK T2/ 199/200, MARTURU, ANDHRA PRADESH - 523301",
    "coordinates": {
      "latitude": 15.9811,
      "longitude": 80.1009
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015493",
    "district": "PRAKASAM DISTRICT",
    "registration": "93"
  },
  {
    "station_name": "KARGIL HERO HAJI BASHA MEMORIAL IND",
    "address": "OIL PETROL BUNK, SY.NO.131/1, NEAR SANGHAMITRA HOSPITAL ON NH, PELLURU VILLAGE, ONGOLE MANDAL, PRAKASAM DISTRICT - 523001",
    "coordinates": {
      "latitude": 15.471852,
      "longitude": 80.048689
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015494",
    "district": "PRAKASAM DISTRICT",
    "registration": "94"
  },
  {
    "station_name": "SRI HARI FUEL POINT",
    "address": "INDIAN OIL DEALERS, LOCK NO - D1-19, DARSI, PRAKASAM DT. ANDHRA PRADESH - 523247",
    "coordinates": {
      "latitude": 15.7547,
      "longitude": 79.6727
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015495",
    "district": "PRAKASAM DISTRICT",
    "registration": "95"
  },
  {
    "station_name": "RAJA PETROLEUMS",
    "address": "10-5, PARCHURU ROAD, INKOLLU VILLAGE & MANDAL, BAPATLA DISTRICT - 523167",
    "coordinates": {
      "latitude": 15.8355402,
      "longitude": 80.1957693
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015496",
    "district": "BAPATLA DISTRICT",
    "registration": "96"
  },
  {
    "station_name": "THE SUPERINTENDENT",
    "address": "RAILWAY STATION ROAD, NEAR COLLECTOR HOUSE, ONGOLE CITY, PRAKASAM DISTRICT - 523001",
    "coordinates": {
      "latitude": 15.498744,
      "longitude": 80.051694
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015497",
    "district": "PRAKASAM DISTRICT",
    "registration": "97"
  },
  {
    "station_name": "ANJANEYA AGENCY",
    "address": "BESIDE RIMS HOSPITAL 37-1-410/A, RAM NAGAR 3RD LANE, TRUNK ROAD, ONGOLE, PRAKASAM DISTRICT - 523001",
    "coordinates": {
      "latitude": 15.489277,
      "longitude": 80.047951
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015498",
    "district": "PRAKASAM DISTRICT",
    "registration": "98"
  },
  {
    "station_name": "MAMIDI FUEL POINT",
    "address": "IOCL DLR 9-1-25, CHURCH ROAD, CHIRALA PRAKASAM DIST. ANDHRA PRADESH - 523157",
    "coordinates": {
      "latitude": 15.829727,
      "longitude": 80.360601
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015499",
    "district": "PRAKASAM DISTRICT",
    "registration": "99"
  },
  {
    "station_name": "APSRTC FILLING STATION VETAPALEM",
    "address": "SY.NO.131-12, VETAPALEM VILLAGE, VETAPALEM MANDAL, BAPATLA DISTRICT - 523187",
    "coordinates": {
      "latitude": 15.786042,
      "longitude": 80.310354
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015500",
    "district": "BAPATLA DISTRICT",
    "registration": "100"
  },
  {
    "station_name": "MNR PETROLEUM FUELS",
    "address": "LOCK NO - D1,- 356 THALLUR VILLAGE, SY.NO.539/4, PRAKASAM DIST, ANDHRA PRADESH - 523264",
    "coordinates": {
      "latitude": 15.73465,
      "longitude": 79.885307
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015501",
    "district": "PRAKASAM DISTRICT",
    "registration": "101"
  },
  {
    "station_name": "MNR PETROLEUM FUELS",
    "address": "LOCK NO - D1,- 356 THALLUR VILLAGE, SY.NO.539/4, PRAKASAM DIST, ANDHRA PRADESH - 523264",
    "coordinates": {
      "latitude": 15.73465,
      "longitude": 79.885307
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015501",
    "district": "PRAKASAM DISTRICT",
    "registration": "101"
  },
  {
    "station_name": "VISHNU SREE TRADERS",
    "address": "SY.NO.117/4, BUDAWADA CHIMAKURTHY MANDAL PRAKASAM DISTRICT - 523226",
    "coordinates": {
      "latitude": 15.58918,
      "longitude": 79.806179
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015502",
    "district": "PRAKASAM DISTRICT",
    "registration": "102"
  },
  {
    "station_name": "KAVYA FILLING STATION",
    "address": "PRAKASAM DIST LOCK NO.12034/93 SY No.37/2, Obulakkapalli(V), Peddaraveedu (M), ANDHRA PRADESH - 523333",
    "coordinates": {
      "latitude": 15.902616,
      "longitude": 79.302412
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015503",
    "district": "PRAKASAM DISTRICT",
    "registration": "103"
  },
  {
    "station_name": "SRI SAIBALA FILLING STATION PRAKSAM",
    "address": "INDIAN OIL DEALER LOCK NO. 13011/56, Sy No 131, K.G.ROAD, THRIPURANTHAKAM, PRAKSAM ANDHRA PRADESH - 523326",
    "coordinates": {
      "latitude": 16.006217,
      "longitude": 79.460224
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015504",
    "district": "PRAKASAM DISTRICT",
    "registration": "104"
  },
  {
    "station_name": "HANUMA PETROLEUM",
    "address": "IOC DEALERS LOCK NO - D1-348349, SURVEY NO.557/2A, GIDDALURU, PRAKASAM DIST ANDHRA PRADESH - 523367",
    "coordinates": {
      "latitude": 15.336417,
      "longitude": 78.901881
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015505",
    "district": "PRAKASAM DISTRICT",
    "registration": "105"
  },
  {
    "station_name": "PRAVEEN ENTERPRISES",
    "address": "RACHERLA, SY NO 385, RACHERLA VILLAGE & MANDAL PRAKASAM DISTRICT - 523368",
    "coordinates": {
      "latitude": 15.473238,
      "longitude": 78.969603
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015506",
    "district": "PRAKASAM DISTRICT",
    "registration": "106"
  },
  {
    "station_name": "KAMAKSHI THAI FILLING STATION",
    "address": "INDIAN OIL DEALERS LOCK NO - D1-31 SY.NO.155/2, VIJAYA GOPALAPURAM(V), PRAKASAM DIST, ANDHRA PRADESH - 523108",
    "coordinates": {
      "latitude": 15.283552,
      "longitude": 79.46742
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/PR/882024/00015507",
    "district": "PRAKASAM DISTRICT",
    "registration": "107"
  },
  {
    "station_name": "THE DISTRICT MANAGER (APSCSC LTD)",
    "address": "Indian Oil Dealers, Rs No 201/1, N R P Agraharam, Nh-165, West Godavari, A.P - 534199",
    "coordinates": {
      "latitude": 16.5771274,
      "longitude": 81.4782258
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCIB4:B77/WG/2672024/00015376",
    "district": "West Godavari",
    "registration": "108"
  },
  {
    "station_name": "JYOTHI FARM SERVICE",
    "address": "Indian Oil Dealers, Lock No. 297/37 & 5249 / 37, Devarapalli, Andhra Pradesh - 533313",
    "coordinates": {
      "latitude": 17.035403,
      "longitude": 81.563676
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2672024/00015377",
    "district": "West Godavari",
    "registration": "109"
  },
  {
    "station_name": "Sri Ramachandra Traders",
    "address": "Indian Oil Dealer, Sy No. 160/1, Palakollu Town, West Godavari Dirstrict, A.P - 534260",
    "coordinates": {
      "latitude": 16.53710686,
      "longitude": 81.72489452
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2672024/00015378",
    "district": "West Godavari",
    "registration": "110"
  },
  {
    "station_name": "LAKSHMI PADMAVATHI FILLING STATION",
    "address": "Indian Oil Dealers, S.No.199/2, Medapadu Village, East Godavari, A.P - 534268",
    "coordinates": {
      "latitude": 16.510011,
      "longitude": 81.767603
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2672024/00015379",
    "district": "West Godavari",
    "registration": "111"
  },
  {
    "station_name": "Sri Ramachandra Filling Station",
    "address": "Rsno.127/2a, 127/1h, 127/2b & 127/1i, Vempa Village, Bheemavaram Mandal - 534207",
    "coordinates": {
      "latitude": 16.446328,
      "longitude": 81.570273
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2672024/00015380",
    "district": "West Godavari",
    "registration": "112"
  },
  {
    "station_name": "VIJAYA SATYA SURYA AGENCIES",
    "address": "Indian Oil Dealer, Sy No. 262/8f1d, Vemagiri Village, Kadiyam Mandal, East Godavari District - 533125",
    "coordinates": {
      "latitude": 16.92107,
      "longitude": 81.80339
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2672024/00015381",
    "district": "East Godavari",
    "registration": "113"
  },
  {
    "station_name": "K.PAPA REDDY AGENCIES",
    "address": "Indian Oil Dealers, Pottilanka, Lock No. 8400 / 37,Kadiyam, Andhra Pradesh - 533126",
    "coordinates": {
      "latitude": 16.870816,
      "longitude": 81.815772
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015449",
    "district": "East Godavari",
    "registration": "114"
  },
  {
    "station_name": "COCO GOKAVARAM - ADHOC GOLDEN FILLING STATION",
    "address": "Indian Oil Petrol Pump, Rajamundry Terminal, Gokavaram, East Godavari District - 533286",
    "coordinates": {
      "latitude": 17.19859,
      "longitude": 81.84207
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015450",
    "district": "East Godavari",
    "registration": "115"
  },
  {
    "station_name": "RAJUS SERVICE STATION",
    "address": "Indian Oil Dealers, Tallapudi, Lock No. 11001/93262, Andhra Pradesh - 534341",
    "coordinates": {
      "latitude": 17.13089187,
      "longitude": 81.66042996
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2672024/00015382",
    "district": "West Godavari",
    "registration": "116"
  },
  {
    "station_name": "GAYATRI ENTERPRISES",
    "address": "Indian Oil Dealers, Rs No.34, Plot No.6566, Haripuram, Rajahmundry,A.P - 533105",
    "coordinates": {
      "latitude": 17.018927,
      "longitude": 81.781813
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015451",
    "district": "East Godavari",
    "registration": "117"
  },
  {
    "station_name": "SATYADEVA FILLING STATION",
    "address": "Malikipuram, Lock No. 12024 /544, Sy.No-101-9, Malikipuram, East Godavari District, Andhra Pradesh - 533253",
    "coordinates": {
      "latitude": 16.41647,
      "longitude": 81.810492
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2672024/00015383",
    "district": "East Godavari",
    "registration": "118"
  },
  {
    "station_name": "LAKSHMI LOKESH AGENCIES",
    "address": "Indian Oil Dealers, Lock No.T3 189, Uppada (Aminabada), East Godavari,Andhra Pradesh - 533448",
    "coordinates": {
      "latitude": 17.088972,
      "longitude": 82.344936
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015452",
    "district": "East Godavari",
    "registration": "119"
  },
  {
    "station_name": "MITHI FUEL STATION",
    "address": "Indian Oil Dealer, Sy No 498, Peddapurapadu (V), Karapa (M), East Godavari District, A.P - 533468",
    "coordinates": {
      "latitude": 16.8326604,
      "longitude": 82.1342766
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2672024/00015384",
    "district": "East Godavari",
    "registration": "120"
  },
  {
    "station_name": "Singampalli PACS Ltd.",
    "address": "Indian Oil Dealer, Sy No 152/3, Singampalle Village, Rangampeta Mandal, East Godavari District, A.P - 533343",
    "coordinates": {
      "latitude": 17.022351,
      "longitude": 82.015481
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015390",
    "district": "East Godavari",
    "registration": "121"
  },
  {
    "station_name": "LAKSHMANARAJU HIGHWAY SERVICES",
    "address": "Indian Oil Dealers, Sy.No.117/4, 117/5, 117/3b2, 117/6, 117/7, Pedalavunipalli(V), Nandigam Md, Srikakulam- 532201",
    "coordinates": {
      "latitude": 18.680027,
      "longitude": 84.320363
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/SR/2772024/00015391",
    "district": "Srikakulam",
    "registration": "122"
  },
  {
    "station_name": "T.K.R.FILLING STATION",
    "address": "Indian Oil Dealers, S.No.261/1, Peddapadu, Srikakulam, Andhra Pradesh - 532001",
    "coordinates": {
      "latitude": 18.30984496,
      "longitude": 83.91971432
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/SR/2772024/00015392",
    "district": "Srikakulam",
    "registration": "123"
  },
  {
    "station_name": "COCO SALIGRAMAPURAM SP A SRINIVASA",
    "address": "Indian Oil Petrol Pump, Sy.No.2/1(P), Dondaparthy Extn Ward No 34, Vpt Land, A.P- 530024",
    "coordinates": {
      "latitude": 17.73997,
      "longitude": 83.296086
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2772024/00015393",
    "district": "Visakhapatnam",
    "registration": "124"
  },
  {
    "station_name": "COCO KAILASAGIRI-SP BEHARA JAYAKISH",
    "address": "Indian Oil Petrol Pump, Opp Appu Ghar, Mnvp Colony, Kailasagiri Beach Road, A.P- 530001",
    "coordinates": {
      "latitude": 17.743019,
      "longitude": 83.344105
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2772024/00015394",
    "district": "Visakhapatnam",
    "registration": "125"
  },
  {
    "station_name": "BHANU FILLING STATION",
    "address": "Indian Oil Dealers, Pendurthy Mandal, Andhra Pradesh - 531173",
    "coordinates": {
      "latitude": 17.844798,
      "longitude": 83.257304
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2772024/00015395",
    "district": "Visakhapatnam",
    "registration": "126"
  },
  {
    "station_name": "ASHOK ENTERPRISES",
    "address": "Tarluwada Anandapuram Jn, Visakhapatnam, Andhra Pradesh - 530042",
    "coordinates": {
      "latitude": 17.888399,
      "longitude": 83.342499
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/3072024/00015453",
    "district": "Visakhapatnam",
    "registration": "127"
  },
  {
    "station_name": "BHANUTEJA FILLING STATION",
    "address": "Sy.No.191/1, Gabbada Village, Narsipatnam Mandal, Visakha Dist - 531118",
    "coordinates": {
      "latitude": 17.69539889,
      "longitude": 82.60015021
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2772024/00015396",
    "district": "Visakhapatnam",
    "registration": "128"
  },
  {
    "station_name": "M/S VKR.PETRO POINT",
    "address": "Indian Oil Dealers, S.No. 241/14p, 16p & 17p, Rebaka, Andhra Pradesh - 531126",
    "coordinates": {
      "latitude": 17.727681,
      "longitude": 83.044663
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2772024/00015397",
    "district": "Visakhapatnam",
    "registration": "129"
  },
  {
    "station_name": "Sri Chakrapani Agencies",
    "address": "S.No.57, Chintapalli Village, Chintapalli Mandal, Andhra Pradesh - 531111",
    "coordinates": {
      "latitude": 17.864357,
      "longitude": 82.357106
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/3072024/00015454",
    "district": "Visakhapatnam",
    "registration": "130"
  },
  {
    "station_name": "Perumali PACS Ltd,",
    "address": "Indian Oil Dealer, Sy No: 244/2, Perumali Village, Ther Mandal, Vizianagaram District - 532127",
    "coordinates": {
      "latitude": 18.4487074,
      "longitude": 83.5621784
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015398",
    "district": "Vizianagaram",
    "registration": "131"
  },
  {
    "station_name": "Nandigam PACS Ltd",
    "address": "Sno: 158/2a, Nandigam Pacs Ltd, Nandigam Therlam Mandal, Vizianagaram District - 535124",
    "coordinates": {
      "latitude": 18.51393804,
      "longitude": 83.4903002
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015399",
    "district": "Vizianagaram",
    "registration": "132"
  },
  {
    "station_name": "SHIRDI SAIBABA FILLING STATION",
    "address": "Arikathota (Ramabhadrapuram Jn) Towards Gajapathinagaram(Nh-43 S.No.265/2 To 8, Arikathota (V), A.P- 535579",
    "coordinates": {
      "latitude": 18.458955,
      "longitude": 83.307176
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015400",
    "district": "Vizianagaram",
    "registration": "133"
  },
  {
    "station_name": "SRI VENKATESWARA FILLING STN",
    "address": "Indian Oil Dealers, S.No.252/37, Penubarthi Village, Andhra Pradesh - 535128",
    "coordinates": {
      "latitude": 18.27048309,
      "longitude": 83.51794873
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015401",
    "district": "Vizianagaram",
    "registration": "134"
  },
  {
    "station_name": "RK FILLING STATION",
    "address": "4-171, Akkireddypalem,Lock No.T1 30 Bhpv Postrajapulova, Bhogapuram, Andhra Pradesh - 530012",
    "coordinates": {
      "latitude": 17.964584,
      "longitude": 83.4322
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/3072024/00015455",
    "district": "Vizianagaram",
    "registration": "135"
  },
  {
    "station_name": "SRI SATYA SAI SERVICE STATION",
    "address": "Indian Oil Dealers, Lock No.T1 52, Modavalasa, Vizianagaram Dist, Andhra Pradesh - 531162",
    "coordinates": {
      "latitude": 17.964216,
      "longitude": 83.426949
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015402",
    "district": "Vizianagaram",
    "registration": "136"
  },
  {
    "station_name": "TIRUMALA SATYADEV TRADERS",
    "address": "Vizianagaram To Vizag (Rhs On Nh-43 From 558 Km To 563 Km ), Sy.No.14/1-5, Modavalasa Village, A.P - 531162",
    "coordinates": {
      "latitude": 17.98020706,
      "longitude": 83.41646506
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VZ/2772024/00015403",
    "district": "Vizianagaram",
    "registration": "137"
  },
  {
    "station_name": "GOWTHAMI AGRO SERVICE",
    "address": "Indian Oil Dealers, Pippara Tpg Rd, Pippara, Lock 7622 / 37, Ganapavaram, Andhra Pradesh - 534197",
    "coordinates": {
      "latitude": 16.714514,
      "longitude": 81.54136
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015404",
    "district": "West Godavari",
    "registration": "138"
  },
  {
    "station_name": "COCO TADEPALLIGUDEM ADHOC DEEPTHI PETROLEUMS",
    "address": "Sno.136, Adhoc Deepthi Petroleums Tadepalligudem, West Godavari District, A.P - 534101",
    "coordinates": {
      "latitude": 16.816,
      "longitude": 81.524
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/3072024/00015456",
    "district": "West Godavari",
    "registration": "139"
  },
  {
    "station_name": "KARTHIKEYAN FILLING STATION",
    "address": "Ndian Oil Petrol Pump, R.S.No. 767/1, Penumantra Village, West Godavari, A.P - 534124",
    "coordinates": {
      "latitude": 16.6341773,
      "longitude": 81.6639316
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015405",
    "district": "West Godavari",
    "registration": "140"
  },
  {
    "station_name": "Sri Srinivasa Filling Station",
    "address": "Indian Oil Dealer, Sno: 34/7c, 7d & 7e, Lock No. 11016, Velpur, Tanuku, Andhra Pradesh - 534222",
    "coordinates": {
      "latitude": 16.726055,
      "longitude": 81.674967
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015406",
    "district": "West Godavari",
    "registration": "141"
  },
  {
    "station_name": "RAO'S FUEL STATION",
    "address": "Veeravasaram Village, Nh-214, Wg Dt, Lock No.8396/37, Andhra Pradesh - 534245",
    "coordinates": {
      "latitude": 16.537486,
      "longitude": 81.634349
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015407",
    "district": "West Godavari",
    "registration": "142"
  },
  {
    "station_name": "SRI CHANDRASEKHAR SERVICE STATION",
    "address": "S. No. 219, Kalla Village, Kalla Lock No:110007 / 926, Andhra Pradesh - 534237",
    "coordinates": {
      "latitude": 16.538,
      "longitude": 81.421483
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015408",
    "district": "West Godavari",
    "registration": "143"
  },
  {
    "station_name": "LUCKY FILLING STATION",
    "address": "Indian Oil Dealers, T.S.No.941/2, Palakole, West Godavari District, A.P - 532101",
    "coordinates": {
      "latitude": 16.513379,
      "longitude": 81.740598
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015409",
    "district": "West Godavari",
    "registration": "144"
  },
  {
    "station_name": "VENKATESWARA FILLING STATION",
    "address": "Indian Oil Dealers, Sy No.439/3 & 439/2, Ravulapalem, East Godavari Dist - 533238",
    "coordinates": {
      "latitude": 16.697497,
      "longitude": 81.846941
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015457",
    "district": "East Godavari",
    "registration": "145"
  },
  {
    "station_name": "BULLEYYA REDDY'S FILLING STATION",
    "address": "Indian Oil Dealers, Balabhadrapuram, Biccavole, Lock 11011 / 37, Andhra Pradesh - 533343",
    "coordinates": {
      "latitude": 16.958649,
      "longitude": 82.008733
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015410",
    "district": "East Godavari",
    "registration": "146"
  },
  {
    "station_name": "The Jeypore Sugars Co.Ltd",
    "address": "(Vvs Sugars Emp.Co-Op Stores Ltd) Main Road, Lock No. 21003 / 544, Pangidi Mandal, West Godavari, Andhra Pradesh - 534342",
    "coordinates": {
      "latitude": 16.99934,
      "longitude": 81.665888
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/WG/2772024/00015411",
    "district": "West Godavari",
    "registration": "147"
  },
  {
    "station_name": "PADMAJA FILLING STATION",
    "address": "Ap Paper Mill Road, Rajahmundry, Lock No 12011 / 252, East Godavari Dt, Andhra Pradesh - 533101",
    "coordinates": {
      "latitude": 17.030675,
      "longitude": 81.77529
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015412",
    "district": "East Godavari",
    "registration": "148"
  },
  {
    "station_name": "Veeru Agencies",
    "address": "S.No.687-3,Lock No 11005/ 926, Palivela Village, Kothapeta, Andhra Pradesh - 533223",
    "coordinates": {
      "latitude": 16.697246,
      "longitude": 81.895377
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015413",
    "district": "East Godavari",
    "registration": "149"
  },
  {
    "station_name": "SUPERINTENTDENT OF POLICE, RAJAMAHENDRAVARAM",
    "address": "Indian Oil Dealers,Sy.No.664, Jampeta, Rajamahendravaram,A.P- 533103",
    "coordinates": {
      "latitude": 17.00633,
      "longitude": 81.777147
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015458",
    "district": "East Godavari",
    "registration": "150"
  },
  {
    "station_name": "BHASKARA AGENCIES",
    "address": "Indian Oil Dealers, Morampudi, Lock No.22012/ 544 & 11027 / 256, Sy.No-379/1, Morampudi Junction, Rajahmundry, East Godavari, Andhra Pradesh - 533103",
    "coordinates": {
      "latitude": 16.997034,
      "longitude": 81.800637
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015459",
    "district": "East Godavari",
    "registration": "151"
  },
  {
    "station_name": "CENTRAL PRISON - RAJAHMUNDRY",
    "address": "Sy.No-107/3a, Lalacheruvu Y Junction Road, Superintendent Of Jails, Central Prison, Andhra Pradesh - 533105",
    "coordinates": {
      "latitude": 17.0167,
      "longitude": 81.7937
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015448",
    "district": "East Godavari",
    "registration": "152"
  },
  {
    "station_name": "SWATANTRA AGENCIES",
    "address": "Indian Oil Dealers, Rajahmundry, Lock No. 22011 / 544, Andhra Pradesh - 533105",
    "coordinates": {
      "latitude": 17.013412,
      "longitude": 81.778188
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015414",
    "district": "East Godavari",
    "registration": "153"
  },
  {
    "station_name": "COCO RAMDASUPETA-ADHOC BHASKARA AGE",
    "address": "Indian Oil Petrol Pump, Ramadasupeta, Rajahmundry, A.P- 533105",
    "coordinates": {
      "latitude": 17.036886,
      "longitude": 81.790943
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015415",
    "district": "East Godavari",
    "registration": "154"
  },
  {
    "station_name": "SWAMY AUTO CARE",
    "address": "Indian Oil Dealers, S.No.92/2 & 92/3, Nadakuduru, Andhra Pradesh - 533016",
    "coordinates": {
      "latitude": 16.917007,
      "longitude": 82.207681
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015416",
    "district": "East Godavari",
    "registration": "155"
  },
  {
    "station_name": "SRI GAYATRI MANIKANTA AGENCIES",
    "address": "Indian Oil Dealers, Sivakodu, Razole- Lock No.22024/544, Andhra Pradesh - 533244",
    "coordinates": {
      "latitude": 16.462971,
      "longitude": 81.815678
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015417",
    "district": "East Godavari",
    "registration": "156"
  },
  {
    "station_name": "Sri Rama Fuels",
    "address": "Indian Oil Dealer, Sy No: 36-5 & 36-4-C1, Sivakodu, Razole Mandal, East Godavari- 533244",
    "coordinates": {
      "latitude": 16.456182,
      "longitude": 81.799734
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015460",
    "district": "East Godavari",
    "registration": "157"
  },
  {
    "station_name": "VENKAT RAMANN & CO.",
    "address": "Indian Oil Dealers S.No.277/1, Malkipuram Mandal, Kesanapalli, East Godavari Dist, A.P - 533244",
    "coordinates": {
      "latitude": 16.40801,
      "longitude": 81.893101
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015418",
    "district": "East Godavari",
    "registration": "158"
  },
  {
    "station_name": "PRAVEEN VAMSI AGENCIES",
    "address": "Indian Oil Dealers, S.No.146/3, Appanapalli (V), Mamidikuduru(M), East Godavari - 533247",
    "coordinates": {
      "latitude": 16.521977,
      "longitude": 81.930617
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015419",
    "district": "East Godavari",
    "registration": "159"
  },
  {
    "station_name": "RENUKA ENTERPRISES",
    "address": "R.S.No.342/5, Peddapuram, Lock No. 11022 /926, Samaralakota, Andhra Pradesh - 533437",
    "coordinates": {
      "latitude": 17.06351,
      "longitude": 82.16194
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3072024/00015461",
    "district": "East Godavari",
    "registration": "160"
  },
  {
    "station_name": "TIRUMALA AGENCIES",
    "address": "Indian Oil Dealers, Peddapuram Town, Lock No:13005 /252 & 23002/544, Andhra Pradesh - 533437",
    "coordinates": {
      "latitude": 17.080927,
      "longitude": 82.128613
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015420",
    "district": "East Godavari",
    "registration": "161"
  },
  {
    "station_name": "SRI AMRUTHA ENTERPRISES",
    "address": "Indian Oil Dealers, S.No.162/2b, 162/9c, Anuru, Peddapuram, Andhra Pradesh - 533437",
    "coordinates": {
      "latitude": 17.079497,
      "longitude": 82.14108
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015421",
    "district": "East Godavari",
    "registration": "162"
  },

  {
    "station_name": "SRI AMRUTHA ENTERPRISES",
    "address": "Indian Oil Dealers, S.No.162/2b, 162/9c, Anuru, Peddapuram, Andhra Pradesh - 533437",
    "coordinates": {
      "latitude": 17.079497,
      "longitude": 82.14108
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015421",
    "district": "East Godavari",
    "registration": "162"
  },
  {
    "station_name": "SATYAVENI FUEL FILLING STATION",
    "address": "Gandhi Statue To Pithapuram Rd, Near Brown Peta, Samarlakota, Andhra Pradesh - 533440",
    "coordinates": {
      "latitude": 17.063784,
      "longitude": 82.17849
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3172024/00015462",
    "district": "East Godavari",
    "registration": "163"
  },
  {
    "station_name": "APSP Fuel Station",
    "address": "Indian Oil Dealers, Rs.No.15/1, Peddapuram Village, Peddapuram Mandal - 533437",
    "coordinates": {
      "latitude": 17.082308,
      "longitude": 82.079496
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015422",
    "district": "East Godavari",
    "registration": "164"
  },
  {
    "station_name": "SREE PRASAD FILLING STATION",
    "address": "Indian Oil Dealers, Sy No.105/1, D.No.4-1 Rekhavanipalem Village, Tuni Mandal, A.P - 533401",
    "coordinates": {
      "latitude": 17.3773,
      "longitude": 82.5413
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015423",
    "district": "East Godavari",
    "registration": "165"
  },
  {
    "station_name": "SRI VENKATA SAI AGENCIES",
    "address": "Survey No.62/762/8, Kotanandur Village, Andhra Pradesh - 533407",
    "coordinates": {
      "latitude": 17.468191,
      "longitude": 82.502716
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015425",
    "district": "East Godavari",
    "registration": "166"
  },
  {
    "station_name": "RAMAKRISHNA FILLING STATION",
    "address": "Sy.No-841, Near Danvaipeta Ontimamidada, Thondangi Mandal, Andhra Pradesh - 533408",
    "coordinates": {
      "latitude": 17.221535,
      "longitude": 82.47293
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2772024/00015426",
    "district": "East Godavari",
    "registration": "167"
  },
  {
    "station_name": "ADITYA AGENCIES",
    "address": "S.No. 416/1 & 416/3, Yeleshwaram Village, Yeleshwaram Mandal, A.P - 533429",
    "coordinates": {
      "latitude": 17.279121,
      "longitude": 82.107374
    },
    "capacity": "100-120kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/3172024/00015463",
    "district": "East Godavari",
    "registration": "168"
  },
  {
    "station_name": "SRI SHIRIDI SAI PETROLEUM",
    "address": "S.No.211/3p, Birusuwada Village, Sompeta Md, Andhra Pradesh - 532216",
    "coordinates": {
      "latitude": 18.956109,
      "longitude": 84.578731
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/SR/2772024/00015427",
    "district": "Srikakulam",
    "registration": "169"
  },
  {
    "station_name": "RADHA KRISHNA FILLING STATION",
    "address": "S.No.252, Chapara Village, Meliaputti Mandal, Srikakulam, Andhra Pradesh - 532284",
    "coordinates": {
      "latitude": 18.770626,
      "longitude": 84.190242
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/SR/2772024/00015428",
    "district": "Srikakulam",
    "registration": "170"
  },
  {
    "station_name": "SUPERINTENDENT OF POLICE SRIKAKULAM",
    "address": "S No.234, Ward No.24, Potti Sriramulu Junction, Srikakulam - 532001",
    "coordinates": {
      "latitude": 18.29615,
      "longitude": 83.8952
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/SR/2772024/00015429",
    "district": "Srikakulam",
    "registration": "171"
  },
  {
    "station_name": "Steel City Petro Filling Station",
    "address": "S.No. 21-4, Agnampudi, Agnampudi, Agnampudi, Visakhapatnam, 531021",
    "coordinates": {
      "latitude": 17.688045,
      "longitude": 83.14166
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2792024/00021291",
    "district": "Visakhapatnam",
    "registration": "1"
  },
  {
    "station_name": "Sri Kota sakthi Filling Station",
    "address": "S.No. 849/2, Nidadavolu, Nidadavolu Mandal, Nidadavolu, West Godavari, 534201",
    "coordinates": {
      "latitude": 16.906696,
      "longitude": 81.66442
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/1672024/00015334",
    "district": "West Godavari",
    "registration": "2"
  },
  {
    "station_name": "DSR Energy Station",
    "address": "S.No. 7-1G, 7-1G-1A, Yerravaram Village, Yellamanchili Mandal, Yerravaram Village, Anakapalli, 531055",
    "coordinates": {
      "latitude": 17.637852,
      "longitude": 82.89995
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/VS/2792024/00021292",
    "district": "Anakapalli",
    "registration": "3"
  },
  {
    "station_name": "Sri Balaji Agencies",
    "address": "S.No.T.S 501/1, (Old T.S.No-70, Ward No-5), Kakinada, Kakinada, Kakinada, Kakinada, 533001",
    "coordinates": {
      "latitude": 16.954213,
      "longitude": 82.23153
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/1672024/00015335",
    "district": "Kakinada",
    "registration": "4"
  },
  {
    "station_name": "Sree Suryaprakash Service Station",
    "address": "S.No. 173/B, Rajahmundry Lalacheruvu National, Lalcheruvu, Rajahmundry, East Godavari, 533103",
    "coordinates": {
      "latitude": 17.027302,
      "longitude": 81.80804
    },
    "capacity": "50-60kW",
    "number_of_chargers": 1,
    "application_number": "NREDCAP/EVCI/EG/2792024/00021293",
    "district": "East Godavari",
    "registration": "5"
  },
    {
      "station_name": "Sri Balaji Agencies",
      "address": "S.No.T.S 501/1, (Old T.S.No-70, Ward No-5), Kakinada, Kakinada, Kakinada, Kakinada, 533001",
      "coordinates": {
        "latitude": 16.954213,
        "longitude": 82.23153
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1672024/00015335",
      "district": "Kakinada",
      "registration": "4"
    },
    {
      "station_name": "Sree Suryaprakash Service Station",
      "address": "S.No. 173/B, Rajahmundry Lalacheruvu National, Lalcheruvu, Rajahmundry, East Godavari, 533103",
      "coordinates": {
        "latitude": 17.027302,
        "longitude": 81.80804
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2792024/00021293",
      "district": "East Godavari",
      "registration": "5"
    },
    {
      "station_name": "Sree S.V.Agencies",
      "address": "S.No. 338lP39/88-, Peddapuram-Samalkot Road, Peddapuram, Peddapuram, Kakinada, 533437",
      "coordinates": {
        "latitude": 17.069449,
        "longitude": 82.15375
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1672024/00015341",
      "district": "Kakinada",
      "registration": "12"
    },
    {
      "station_name": "Srikakulam Ser Stn.",
      "address": "123, S.No. -234/11, New S.No21/9,21/10,21/11, Pedapadu, Srikakulam Mandal, Peddapadu, Srikakulam, 532001",
      "coordinates": {
        "latitude": 18.323172,
        "longitude": 83.93741
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/SR/2792024/00021295",
      "district": "Srikakulam",
      "registration": "13"
    },
    {
      "station_name": "Baalaji Agencies",
      "address": "S.No.6-8 & 6-9, Kotakki Village, Vizianagaram, Saluru, Parvathipuram Manyam, 535591",
      "coordinates": {
        "latitude": 18.510277,
        "longitude": 83.22103
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/2472024/00015369",
      "district": "Parvathipuram Manyam",
      "registration": "14"
    },
    {
      "station_name": "Venkatesawara Petro Products",
      "address": "S.No. 219/2A2B & 220/1A2, Talluru, Gandepalli, Talluru Village, Kakinada, 533297",
      "coordinates": {
        "latitude": 17.157892,
        "longitude": 82.01782
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/AN/1772024/00015343",
      "district": "Srikakulam",
      "registration": "15"
    },
    {
      "station_name": "Sri Lakshmi Narasimha Petro Station",
      "address": "S.No. 219/1, Tetagunta Village, Tuni, Tetagunta, Kakinada, 533406",
      "coordinates": {
        "latitude": 17.302196,
        "longitude": 82.43532
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1772024/00015344",
      "district": "Srikakulam",
      "registration": "16"
    },
    {
      "station_name": "Vizag Automobiles Service Station",
      "address": "S.No. 167/1,166/2, Paradesipalem, Visakhapatnam, Visakhapatnam, Visakhapatnam, 530040",
      "coordinates": {
        "latitude": 17.832658,
        "longitude": 83.35817
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/2792024/00021296",
      "district": "Visakhapatnam",
      "registration": "17"
    },
    {
      "station_name": "Satya Maheswari Agencies",
      "address": "S.No. 188/11A-1, Bhogapuram, Bhogapuram, Bhogapuram, Vizianagaram, 535216",
      "coordinates": {
        "latitude": 18.026718,
        "longitude": 83.49138
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VZ/25112024/00024043",
      "district": "Vizianagaram",
      "registration": "18"
    },
    {
      "station_name": "SNJR Petro Filling Station",
      "address": "S.No. 1/4A, Thadi Village, Parwada Amandal, Anakapalli, Visakhapatnam, 531019",
      "coordinates": {
        "latitude": 17.687017,
        "longitude": 83.08009
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/VS/4102024/00021297",
      "district": "Visakhapatnam",
      "registration": "19"
    },
    {
      "station_name": "JP's Oil Filling Station",
      "address": "S.No. 7/2B1, Borrampalem Village, Gandepalle, Gandepalli, Kakinada, 533435",
      "coordinates": {
        "latitude": 17.138394,
        "longitude": 81.97283
      },
      "capacity": "50-60kW",
      "number_of_chargers": 1,
      "application_number": "NREDCAP/EVCI/EG/1772024/00015346",
      "district": "Kakinada",
      "registration": "20"
    },
  ],
  };
=======
// export const ConvertedEVStations = () => {
//   const evStationsData = {
//    ev_stations: [
//     {
//       "station_name": "MSHSD Adhoc Srinivasa Petroleum",
//       "address": "S. No 188/2b, Kothavalasa Road, Pendurthi Mandal, 530047",
//       "coordinates": {
//         "latitude": 17.82622,
//         "longitude": 83.2042
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/452024/00015235",
//       "district": "Visakhapatnam",
//       "registration": "1"
//     },
//     {
//       "station_name": "MSHSD Adhoc Visalakshi Filling Station",
//       "address": "S No 221 Penduthi Village Pendurthi Mandal 531173",
//       "coordinates": {
//         "latitude": 17.80498,
//         "longitude": 83.1784
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1162024/00015250",
//       "district": "Visakhapatnam",
//       "registration": "2"
//     },
//     {
//       "station_name": "MSHSD Police Welfare Petrol Station",
//       "address": "Dist. Police Head Quarters, S.No: 150, Chinnagadili, Kailashgiri, 530043",
//       "coordinates": {
//         "latitude": 17.75382983,
//         "longitude": 83.3413
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1162024/00015252",
//       "district": "Visakhapatnam",
//       "registration": "3"
//     },
//     {
//       "station_name": "MSHSD Sri Lakshmi Narashima Flgstn L.Kot",
//       "address": "S.No:30/4, 30/5 & 30/6 Seetharampuram Village Lakkavarapukota Mandalam 535161",
//       "coordinates": {
//         "latitude": 18.04017,
//         "longitude": 83.1487
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/652024/00015236",
//       "district": "Vizianagaram",
//       "registration": "4"
//     },
//     {
//       "station_name": "MSHSD Jayalakshmi Filling Station",
//       "address": "Survey No. 220/4,5,6 Palasa-Kasibugga Muncipality Palasa 532221",
//       "coordinates": {
//         "latitude": 18.78148098,
//         "longitude": 84.4137
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/SR/1462024/00015259",
//       "district": "Srikakulam",
//       "registration": "5"
//     },
//     {
//       "station_name": "MSHSD Andhra Petroleum Services Vaddadi",
//       "address": "Hpc Petrol Diesel Pump S No. 27/1,Ward No.2 Vaddadi Village,Butchayyapeta Mandal 531026",
//       "coordinates": {
//         "latitude": 17.8517542,
//         "longitude": 82.8706
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1562024/00015263",
//       "district": "Visakhapatnam",
//       "registration": "6"
//     },
//     {
//       "station_name": "MSHSD Diamond Petroleum Agen",
//       "address": "S No 75/4 P L Puram Village Payakaraopeta Mandal 531126",
//       "coordinates": {
//         "latitude": 17.37244076,
//         "longitude": 82.5845
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1562024/00015264",
//       "district": "Visakhapatnam",
//       "registration": "7"
//     },
//     {
//       "station_name": "MSHSD Hp Auto Care Centre Kotabommali",
//       "address": "Hpcl Dealers Tarlipeta Village Nh- 5, Kotabommali Mandal 532195",
//       "coordinates": {
//         "latitude": 18.54559501,
//         "longitude": 84.1751
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/SR/1862024/00015274",
//       "district": "Srikakulam",
//       "registration": "8"
//     },
//     {
//       "station_name": "MSHSD Sri Padmanabha Fuels",
//       "address": "S. No 274/1a Thetagunta Village Tuni Mandal 533406",
//       "coordinates": {
//         "latitude": 17.32352095,
//         "longitude": 82.4808
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1462024/00015262",
//       "district": "East Godavari",
//       "registration": "9"
//     },
//     {
//       "station_name": "MSHSD Sri Radha Petro Fill",
//       "address": "Hpcl Dealer, Sy No. 29/4 Kothapeta Road, Crc Road Corner Ravulapalem 533238",
//       "coordinates": {
//         "latitude": 16.74721566,
//         "longitude": 81.8516
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1962024/00015277",
//       "district": "East Godavari",
//       "registration": "10"
//     },
//     {
//       "station_name": "MSHSD Kinnu Fuels",
//       "address": "Hpc Dealers Rs No : 359/3 Bendapudi Village , Thondangi Mandal , East Godavari Dist, 533406",
//       "coordinates": {
//         "latitude": 17.24171069,
//         "longitude": 82.362
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1862024/00015269",
//       "district": "East Godavari",
//       "registration": "17"
//     },
//     {
//       "station_name": "MSHSD Suryaraja Agency",
//       "address": "Hpc Dealers S.No.153/2a, 153/3a Nh-5, Prathipadu, East Godavari District, 533432",
//       "coordinates": {
//         "latitude": 17.23694408,
//         "longitude": 82.1779
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2462024/00015287",
//       "district": "East Godavari",
//       "registration": "18"
//     },
//     {
//       "station_name": "MSHSD Mahalakshmi Fuels Bhemili",
//       "address": "Rs No : 16/1,Keethinapeta Area Mulkuddu Village Bhimili Mandal, Visakhapatnam Dist 531163",
//       "coordinates": {
//         "latitude": 17.90348524,
//         "longitude": 83.4437
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1962024/00015278",
//       "district": "Visakhapatnam",
//       "registration": "19"
//     },
//     {
//       "station_name": "MSHSD Itda Parvathipuram",
//       "address": "S.No. 553/2a, Belagam Village Parvathipuram Mandal 535501",
//       "coordinates": {
//         "latitude": 18.76893707,
//         "longitude": 83.4217
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/1962024/00015275",
//       "district": "Vizianagaram",
//       "registration": "20"
//     },
//     {
//       "station_name": "MSHSD Seetarama Fuels",
//       "address": "Hpcl Petrol Pump, Surveyu No. 38/1,2,3 Gollapalli Village Bobbili 535558",
//       "coordinates": {
//         "latitude": 18.55575511,
//         "longitude": 83.3345
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1462024/00015260",
//       "district": "Vizianagaram",
//       "registration": "21"
//     },
//     {
//       "station_name": "MSHSD Sri Arunachala Filling Station",
//       "address": "Hpcl Dealers Survey No:565/1, Nh 216,Chebrolu Village Chebrolu Gram Panchayat,Gollaprolu Mandal 533449",
//       "coordinates": {
//         "latitude": 17.17859413,
//         "longitude": 82.3041
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1862024/00015273",
//       "district": "East Godavari",
//       "registration": "22"
//     },
//     {
//       "station_name": "MSHSD Sri Satya Balaji Agencies, Kathipudi",
//       "address": "S. No. 125/1 & 2 Nh-5, Kathipudi Village, Sankhavaram Mandal ,East Godavari Dist 533449",
//       "coordinates": {
//         "latitude": 17.24235104,
//         "longitude": 82.3417
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2462024/00015286",
//       "district": "East Godavari",
//       "registration": "23"
//     },
//     {
//       "station_name": "MSHSD TVK Brothers",
//       "address": "Hpcl Dealers-Petrol Bunki D.No.23-289, Near Old Bus Stand Narasannapeta 532421",
//       "coordinates": {
//         "latitude": 18.42031941,
//         "longitude": 84.0464
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/SR/2462024/00015288",
//       "district": "Srikakulam",
//       "registration": "24"
//     },
//     {
//       "station_name": "Hp Service Centre Arasavilli",
//       "address": "Sy No 424, Ts No 476,Arasavilli Village,Srikakulam,Ap,532001",
//       "coordinates": {
//         "latitude": 18.28880614,
//         "longitude": 83.9123
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1462024/00015261",
//       "district": "Srikakulam",
//       "registration": "25"
//     },
//     {
//       "station_name": "MSHSD GCC Araku",
//       "address": "Plot Number 38, Kanta Bowsa Guda Villlage, Araku Mandal, Sh 39 Araku Valley, Visakhapatnam Dist 531149",
//       "coordinates": {
//         "latitude": 18.3200705,
//         "longitude": 82.8826
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/1562024/00015268",
//       "district": "Visakhapatnam",
//       "registration": "26"
//     },
//     {
//       "station_name": "MSHSD Adhoc Marthand Agencies",
//       "address": "S No 55/16,17,57/1 , Nh - 5, Singavaram Village , Nathavalasa Mandal, Vizianagaram Dist ( 531216 )",
//       "coordinates": {
//         "latitude": 18.05457282,
//         "longitude": 83.5193
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/2562024/00015293",
//       "district": "Vizianagaram",
//       "registration": "27"
//     },
//     {
//       "station_name": "MSHSD Marthand Agencies",
//       "address": "S No44/14, 44/15, Jonnada Village Denkada Mandalam Jonnada Panchayat 534241",
//       "coordinates": {
//         "latitude": 18.02083218,
//         "longitude": 83.4053
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/2562024/00015291",
//       "district": "Vizianagaram",
//       "registration": "28"
//     },
//     {
//       "station_name": "MSHSD Millennium Comco Siripuram Jnt.",
//       "address": "T.S. No 1014 /2p, 1013 / 2b , Siripuram Junction , Visakhapatnam Town, Visakhapatnam Dist 530003",
//       "coordinates": {
//         "latitude": 17.72082737,
//         "longitude": 83.3204
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/2462024/00015290",
//       "district": "Visakhapatnam",
//       "registration": "29"
//     },
//     {
//       "station_name": "MSHSD Apsp Fuel Station, 5th Battalion",
//       "address": "Survey No. 1/1, 1/2 Apsp 5th Battalion , Ayanada Village , Padmanabham Mandal , Vizianagram Dist, 535005",
//       "coordinates": {
//         "latitude": 18.05340104,
//         "longitude": 83.4007
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/1862024/00015272",
//       "district": "Vizianagaram",
//       "registration": "30"
//     },
//     {
//       "station_name": "MSHSD Sri Srinivasa Agencies",
//       "address": "Sy No 68-2,69-2p, Tennuboddavara Village , Srungavarapu Kota Mandal , Vizianagaram Dist 535145",
//       "coordinates": {
//         "latitude": 18.16306184,
//         "longitude": 83.1293
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/1862024/00015270",
//       "district": "Vizianagaram",
//       "registration": "31"
//     },
//     {
//       "station_name": "MSHSD A. Satyanarayana Raju, R.C. Puram",
//       "address": "R.S.No.259/3 , Ramachandrapuram Village, Ramachandrapuram Mandal , East Godavari Dist 533255",
//       "coordinates": {
//         "latitude": 16.83238116,
//         "longitude": 82.0345
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1862024/00015271",
//       "district": "East Godavari",
//       "registration": "32"
//     },
//     {
//       "station_name": "MSHSD Sri Krishna Agency",
//       "address": "Survey No.202, 203 Main Road (Old Gnt Road) Tuni Municipality, Tuni 533401",
//       "coordinates": {
//         "latitude": 17.35289322,
//         "longitude": 82.528
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2782024/00015737",
//       "district": "East Godavari",
//       "registration": "33"
//     },
//     {
//       "station_name": "MSHSD Venkataramana Filling Station",
//       "address": "Hp Petrol Pump, S No : 156-4b & 2a Kolamuru Rajanagaram Mandal 533102",
//       "coordinates": {
//         "latitude": 17.06135,
//         "longitude": 81.8069
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2782024/00015738",
//       "district": "East Godavari",
//       "registration": "34"
//     },
//     {
//       "station_name": "MSHSD Sriram Quality Fuels",
//       "address": "Sy No 102/5 Nellipaka Village Yatapaka Mandal 533352",
//       "coordinates": {
//         "latitude": 17.65583854,
//         "longitude": 81.0047
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/3082024/00015744",
//       "district": "East Godavari",
//       "registration": "35"
//     },
//     {
//       "station_name": "MSHSD Gcc Chinturu",
//       "address": "Sy No 15 Opp Andhra Bank,Yerrampeta Village, Yerrampeta Mandal, Ap-533347",
//       "coordinates": {
//         "latitude": 17.75197775,
//         "longitude": 81.4069
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2882024/00015741",
//       "district": "East Godavari",
//       "registration": "36"
//     },
//     {
//       "station_name": "MSHSD Hp Service Centre, Kakinada Tml",
//       "address": "S No 236/2b3, Ida Vakalapudi, Kakinada Mandal, AP - 533005",
//       "coordinates": {
//         "latitude": 17.00454864,
//         "longitude": 82.2747
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/3082024/00015743",
//       "district": "East Godavari",
//       "registration": "37"
//     },
//     {
//       "station_name": "MSHSD Gcc Narsipatnam",
//       "address": "S. No. 121/3b Narsipatnam Village And Mandal Narsipatnam, Ap 531116",
//       "coordinates": {
//         "latitude": 17.66724372,
//         "longitude": 82.6108
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/2782024/00015739",
//       "district": "East Godavari",
//       "registration": "38"
//     },
//     {
//       "station_name": "MSHSD J C Filling Station Bo",
//       "address": "Rs. No: 80, Mallammpeta Village, Bobbili Mandal, Vizianagaram District, Andhra Pradesh - 535558",
//       "coordinates": {
//         "latitude": 18.57719865,
//         "longitude": 83.3488
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/1092024/00021266",
//       "district": "Vizianagaram",
//       "registration": "39"
//     },
//     {
//       "station_name": "MSHSD Sai Balaji Enterprises Vizianagar",
//       "address": "R.S.No 31/5 Kanapaka Village, Vizianagaram Mandal,Ap- 535003",
//       "coordinates": {
//         "latitude": 18.19172926,
//         "longitude": 83.6831
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/2782024/00015740",
//       "district": "Vizianagaram",
//       "registration": "40"
//     },
//     {
//       "station_name": "MSHSD Sri Lakshmi Balaji Vizianagaram",
//       "address": "S.No.130/9, Ring Road, Simhadhari Nagar,Vizianagaram Mandal, Ap- 535002",
//       "coordinates": {
//         "latitude": 18.10384148,
//         "longitude": 83.4084
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/2882024/00015742",
//       "district": "Vizianagaram",
//       "registration": "41"
//     },
//     {
//       "station_name": "NRO Bhendapudi",
//       "address": "Sy.No 103/5b & 104/2a , Bendapudi Village , Thodangi Mandal, East Godavari Dist, Ap- 533406.",
//       "coordinates": {
//         "latitude": 17.27031329,
//         "longitude": 82.3937
//       },
//       "capacity": "50-60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1092024/00021267",
//       "district": "East Godavari",
//       "registration": "42"
//     },
//     {
//       "station_name": "Adhoc Sri Hari Filling Station",
//       "address": "Adhoc Sri Hari Filling Station, Bommidodi, Palamaner, Chittoor, 517408",
//       "coordinates": {
//         "latitude": 13.200251,
//         "longitude": 78.725768
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/662024/00015249",
//       "district": "Chittoor",
//       "registration": "43"
//     },
//     {
//       "station_name": "MS/HSD Vijaya Filling Station",
//       "address": "MS/HSD Vijaya Filling Station , S.No: 1239-A,1239-C, Nellore, 524003",
//       "coordinates": {
//         "latitude": 14.427737,
//         "longitude": 79.993322
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/562024/00015247",
//       "district": "Nellore",
//       "registration": "44"
//     },
//     {
//       "station_name": "MS/HSD P.S.Reddy's Petro Plaza",
//       "address": "MS/HSD P.S.Reddy's Petro Plaza, S.No: 265 & 258, Guruvindapudi, Manubolu, Nellore, 524405",
//       "coordinates": {
//         "latitude": 14.265252,
//         "longitude": 79.901993
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/2272024/00015352",
//       "district": "Nellore",
//       "registration": "45"
//     },
//     {
//       "station_name": "MSHSD Adhoc Pothula Rangaiah Co",
//       "address": "MSHSD Adhoc Pothula Rangaiah Co Chagollu, S.No :31-B2A2,32-1B2,32-2A2,33-2B,Chagollu, Ulavapadu, Prakasam, 523292",
//       "coordinates": {
//         "latitude": 15.105309,
//         "longitude": 80.008903
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/562024/00015245",
//       "district": "Prakasam",
//       "registration": "46"
//     },
//     {
//       "station_name": "MS/HSD Sri Sai Gautham Service Station",
//       "address": "MS/HSD Sri Sai Gautham Service Station, S.No: 60/A, Macherla, Thettu, Prakasam, 523291",
//       "coordinates": {
//         "latitude": 15.04401,
//         "longitude": 79.999266
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/2272024/00015353",
//       "district": "Prakasam",
//       "registration": "47"
//     },
//     {
//       "station_name": "MSHSD Sri Sai Lakshmi Fs",
//       "address": "MSHSD Sri Sai Lakshmi Fs Kakarla, S.No: 71-A-1B, Kakarla, Ardavedu, Prakasam, 523335",
//       "coordinates": {
//         "latitude": 15.627674,
//         "longitude": 79.13607
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/2272024/00015354",
//       "district": "Prakasam",
//       "registration": "48"
//     },
//     {
//       "station_name": "MSHSD Adhoc GMR Filling Station",
//       "address": "MSHSD Adhoc GMR Filling Station Bollapal, S.No: 512C1B1, 511A2B, 5071A1, Kondamanjulurulu, J.Pingaluru, Prakasam, 523261",
//       "coordinates": {
//         "latitude": 15.874619,
//         "longitude": 80.066778
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/2272024/00015350",
//       "district": "Prakasam",
//       "registration": "49"
//     },
//     {
//       "station_name": "MS/HSD Sri Savitri Service Station",
//       "address": "MS/HSD Sri Savitri Service Station, S.No: 557/3A2,558/1A2, Medarametla, Korisapadu, Prakasam, 523212",
//       "coordinates": {
//         "latitude": 15.719488,
//         "longitude": 80.01274
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/562024/00015244",
//       "district": "Prakasam",
//       "registration": "50"
//     },
//     {
//       "station_name": "MSHSD Sainadha Petroleums",
//       "address": "MSHSD Sainadha Petroleums, S.No: 94/7, Maddipadu, Prakasam, 523211",
//       "coordinates": {
//         "latitude": 15.62441,
//         "longitude": 80.02049
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/2272024/00015351",
//       "district": "Prakasam",
//       "registration": "51"
//     },
//     {
//       "station_name": "MS/HSD Chittem Jagannath Petroleums",
//       "address": "MS/HSD Chittem Jagannath Petroleums,  S.No: 46AA & 46AB, Marteru, Prakasam, 523260",
//       "coordinates": {
//         "latitude": 15.92911,
//         "longitude": 80.077856
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/562024/00015246",
//       "district": "Prakasam",
//       "registration": "52"
//     },
//     {
//       "station_name": "MS/HSD Kona Filling Station",
//       "address": "MS/HSD Kona Filling Station, S.No: 656, Bapatla, 522101",
//       "coordinates": {
//         "latitude": 15.907762,
//         "longitude": 80.478114
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/GU/2272024/00015355",
//       "district": "Bapatla",
//       "registration": "53"
//     },
//     {
//       "station_name": "MS/HSD SKLS Filling Station",
//       "address": "MS/HSD SKLS Filling Station, S.No: 4-1C & 4-2, Birdawada, Naidupeta, Nellore, 524126",
//       "coordinates": {
//         "latitude": 13.900693,
//         "longitude": 79.911205
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/662024/00015248",
//       "district": "Nellore",
//       "registration": "54"
//     },
//     {
//       "station_name": "MS/HSD SKLS Filling Station",
//       "address": "MSHSD Padmavathi Petro Park, S.No: 308/4b, Merlapaka, Yerpedu, Chittoor, 517619",
//       "coordinates": {
//         "latitude": 13.900693,
//         "longitude": 79.911205
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1372024/00015325",
//       "district": "Chittoor",
//       "registration": "55"
//     },
//     {
//       "station_name": "Sai Sadguru Fuel Station",
//       "address": "Sai Sadguru Fuel Station,  S.No: 220/1A1, 220/1A2 & 220/1B, kalroadpalli, Chandragiri, Chittoor, 517112",
//       "coordinates": {
//         "latitude": 15.105309,
//         "longitude": 80.008903
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/2272024/00015356",
//       "district": "Chittoor",
//       "registration": "56"
//     },
//     {
//       "station_name": "MS/HSD Tirumala Fuels",
//       "address": "MS/HSD Tirumala Fuels, S.No: 25/3 & 372/3, Iyethepalli, Chandragiri, 524319",
//       "coordinates": {
//         "latitude": 13.522755,
//         "longitude": 79.222663
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1372024/00015326",
//       "district": "Chandragiri",
//       "registration": "57"
//     },
//     {
//       "station_name": "MS/HSD Harshni Petro Park",
//       "address": "MS/HSD Harshni Petro Park, S.No: 407/1A1, Thukivakam, Renigunta, Chittoor, 517520",
//       "coordinates": {
//         "latitude": 15.719488,
//         "longitude": 80.01274
//       },
//       "capacity": "60 KW DC",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/2272024/00015357",
//       "district": "Chittoor",
//       "registration": "58"
//     },
//     {
//       "station_name": "MSHSD Siva Prasad Petro Fuels",
//       "address": "Sy.No. 185, NH-7, Kurnool - Bangalore Road, Peddatekur Village, Kallur Mandal, Kurnool District- 518218",
//       "coordinates": {
//         "latitude": 15.72320638,
//         "longitude": 78.00176718
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/1362024/00015256",
//       "district": "Kurnool",
//       "registration": "59"
//     },
//     {
//       "station_name": "MSHSD Yogaswera Filling Station",
//       "address": "S.No.187, Peddatekur (V) & Kallur (M) NH-7, Kurnool-Bengaluru Road Peddatekur Kurnool District-518218",
//       "coordinates": {
//         "latitude": 15.7229327,
//         "longitude": 78.00053873
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/1362024/00015254",
//       "district": "Kurnool",
//       "registration": "60"
//     },
//     {
//       "station_name": "MSHSD Royal Fuel Station",
//       "address": "Survey No. 199-2 NH -7, On Lhs Hyderabad-Bangalore Road, Lolur Village, Singanamala Mandal, Ananthapuramu District - 515 732",
//       "coordinates": {
//         "latitude": 14.79446013,
//         "longitude": 77.59842038
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015314",
//       "district": "Anantapur",
//       "registration": "61"
//     },
//     {
//       "station_name": "MSHSD K.V. Seshaiah Setty Fuels",
//       "address": "Survey No.247/17, Vengalampalle Village, Peapally Mandal, Kurnool-518221.",
//       "coordinates": {
//         "latitude": 15.25507811,
//         "longitude": 77.75488704
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/1362024/00015258",
//       "district": "Kurnool",
//       "registration": "62"
//     },
//     {
//       "station_name": "MSHSD Sri Rajarajeswari Filling Station",
//       "address": "Survey No. 167/2, Thamarajupalli Village, Panyam Mandal, Nandyal District - 518112",
//       "coordinates": {
//         "latitude": 15.55144,
//         "longitude": 78.21545
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/1362024/00015241",
//       "district": "Nandyal",
//       "registration": "63"
//     },
//   {
//       "station_name": "MSHSD Sri Rajarajeswari Filling Station",
//       "address": "Survey No. 167/2, Thamarajupalli Village, Panyam Mandal, Nandyal District - 518112",
//       "coordinates": {
//         "latitude": 15.55144,
//         "longitude": 78.21545
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/1362024/00015241",
//       "district": "Nandyal",
//       "registration": "63"
//     },
//     {
//       "station_name": "MSHSD Vaibhav Fuel Station",
//       "address": "Survey No. 501-2B, NH-44, Ananthapuramu-Bangalore Road, Raptadu Village & Mandal, Ananthapuramu District - 515722",
//       "coordinates": {
//         "latitude": 14.6049484,
//         "longitude": 77.6061093
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1362024/00015257",
//       "district": "Anantapur",
//       "registration": "64"
//     },
//     {
//       "station_name": "MSHSD Maurya Quality Fuels",
//       "address": "123/2 &3, NH-44, Yerrampalli Village, C.K.Pally Mandal, Chennekottapally, Sri Sathya Sai District-515101",
//       "coordinates": {
//         "latitude": 14.290784,
//         "longitude": 77.628028
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1362024/00015255",
//       "district": "Sri Sathya Sai District",
//       "registration": "65"
//     },
//     {
//       "station_name": "MSHSD Jagadeesh Shai Filling Station",
//       "address": "Survey No. 605-3e & 605-3d, Nh 44, Opp Kia Motors, Eramanchi Village, Penukonda Mandal, Sri Sathya Sai District - 515110.",
//       "coordinates": {
//         "latitude": 14.162506,
//         "longitude": 77.611993
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1362024/00015253",
//       "district": "Sri Sathya Sai District",
//       "registration": "66"
//     },
//     {
//       "station_name": "MSHSD Afnan Khan Quality Fuels",
//       "address": "Sy.No. 53/1A1, Nannur Village, NH-40 (Kurnool - Chittoor Road), Orvakal Mandal, Kurnool District - 518010.",
//       "coordinates": {
//         "latitude": 15.713004,
//         "longitude": 78.114531
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015305",
//       "district": "Kurnool",
//       "registration": "67"
//     },
//     {
//       "station_name": "MSHSD Adithya Fuels",
//       "address": "Sy.No1145/1A1A & 1142/1B Kotakandukur Village Allagadda Mandal Nandyal District 518543",
//       "coordinates": {
//         "latitude": 15.10339326,
//         "longitude": 78.51312041
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015306",
//       "district": "Nandyal",
//       "registration": "68"
//     },
//     {
//       "station_name": "MSHSD Sri Lakshmi Narasimha Filling Station",
//       "address": "S.No. 650/1 & 2, 170 Nh-18, Knl-Kdp Road Gubagundam (V) & Panyam (M) Allagadda Nandyal District 518543",
//       "coordinates": {
//         "latitude": 15.17078765,
//         "longitude": 78.5014531
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015310",
//       "district": "Nandyal",
//       "registration": "69"
//     },
//     {
//       "station_name": "MSHSD Sree Veerabhadra Filling Station",
//       "address": "Survey No. 654/3a2, Duvvur Village & Mandal, Y.S.R District - 516 175",
//       "coordinates": {
//         "latitude": 14.8340742,
//         "longitude": 78.66488414
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CU/872024/00015313",
//       "district": "Kadapa",
//       "registration": "70"
//     },
//     {
//       "station_name": "MSHSD Swetha Fuel Station",
//       "address": "Survey No. 22/2A PYKI & 23, Udumalapuram Village, Nandyal Mandal, Nandyal District - 518502.",
//       "coordinates": {
//         "latitude": 15.487094,
//         "longitude": 78.423138
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015311",
//       "district": "Nandyal",
//       "registration": "71"
//     },
//     {
//       "station_name": "MSHSD Ramisetty Filling Station",
//       "address": "Survey No. 3/1B2 & 3/2B1, NH-40, Mydukur Village & Mandal, Y.S.R District - 516 172",
//       "coordinates": {
//         "latitude": 14.7021843,
//         "longitude": 78.74203841
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CU/672024/00015307",
//       "district": "Kadapa",
//       "registration": "72"
//     },
//     {
//       "station_name": "MSHSD Siva Sai Petro Hub",
//       "address": "Sy. No. 1299, Bandapalli National Highway-18, Kurnool-Chittoor Road Rayachoty, Annamayya District- 516 270",
//       "coordinates": {
//         "latitude": 14.09373845,
//         "longitude": 78.75616864
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1072024/00015324",
//       "district": "Annamayya District",
//       "registration": "73"
//     },
//     {
//       "station_name": "MSHSD Sri Sai Tirumala Fuels",
//       "address": "Sh-31, Renigunta Road, Rajampeta, Annamayya District - 516 152.",
//       "coordinates": {
//         "latitude": 14.20061323,
//         "longitude": 79.16125776
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/672024/00015309",
//       "district": "Annamayya District",
//       "registration": "74"
//     },
//     {
//       "station_name": "MSHSD Sri Lakshmi Venkata Sai Automobiles",
//       "address": "Survey No. 447-1, Kadiri-Bengaluru Road,Ananthapuramu District 515001",
//       "coordinates": {
//         "latitude": 14.66493298,
//         "longitude": 77.61281858
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015315",
//       "district": "Anantapur",
//       "registration": "75"
//     },
//     {
//       "station_name": "MSHSD Nikhil Filling Station",
//       "address": "Survey No. 336, Malakavemula Village & Panchayat, Mudigubba Mandal, Sri Sathya Sai District-515501.",
//       "coordinates": {
//         "latitude": 14.260188,
//         "longitude": 78.06063
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/872024/00015317",
//       "district": "Sri Sathya Sai District",
//       "registration": "76"
//     },
//     {
//       "station_name": "Ms/Hsd P.S.N.Reddy Filling Station",
//       "address": "HPCL Dealers S.No.568/570, Basinikonda Village, Madanapalli 517325",
//       "coordinates": {
//         "latitude": 13.54502095,
//         "longitude": 78.53052022
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015319",
//       "district": "Annamayya District",
//       "registration": "77"
//     },
//     {
//       "station_name": "MSHSD - Balaji Enterprises - Kadiri",
//       "address": "Survey No. 200-1 Kadiri Muncipality Kadiri Mandal Kutagulla Sri Sathya Sai District-515541",
//       "coordinates": {
//         "latitude": 14.14603968,
//         "longitude": 78.14913547
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015320",
//       "district": "Sri Sathya Sai District",
//       "registration": "78"
//     },
//     {
//       "station_name": "MSHSD Ramakrishna Flng Centre,Kalakada",
//       "address": "NH-18, Trunk Road Kalakada, Annamayya District -517236",
//       "coordinates": {
//         "latitude": 13.82427642,
//         "longitude": 78.79012048
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015321",
//       "district": "Annamayya District",
//       "registration": "79"
//     },
//     {
//       "station_name": "MSHSD Sony Fuel Bay,Angallu",
//       "address": "Sy.No. 129/2 , Angallu Village, Kuramala Kota Mandal, Annamayya district -517325",
//       "coordinates": {
//         "latitude": 13.61495705,
//         "longitude": 78.48838806
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/872024/00015322",
//       "district": "Annamayya District",
//       "registration": "80"
//     },
//     {
//       "station_name": "MSHSD K.V.R. Petromart",
//       "address": "Survey No.660/A2, Kallur Village & Mandal, Kurnool District-518003.",
//       "coordinates": {
//         "latitude": 15.79529423,
//         "longitude": 78.06166628
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/972024/00015323",
//       "district": "Kurnool",
//       "registration": "81"
//     },
//     {
//       "station_name": "MSHSD Sri Puvvadi Radha Krishna Fuels",
//       "address": "Survey No. 599/1, Kallur Village & Mandal, Kurnool District - 518 003.",
//       "coordinates": {
//         "latitude": 15.797462,
//         "longitude": 78.033893
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015312",
//       "district": "Kurnool",
//       "registration": "82"
//     },
//     {
//       "station_name": "MSHSD Sri Puvvadi Radha Krishna Fuels",
//       "address": "Survey No. 599/1, Kallur Village & Mandal, Kurnool District - 518 003.",
//       "coordinates": {
//         "latitude": 15.797462,
//         "longitude": 78.033893
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/672024/00015312",
//       "district": "Kurnool",
//       "registration": "82"
//     },
//     {
//       "station_name": "MS/HSD Vijaya Service Station",
//       "address": "S.No:439/440-3 & 143,144,145, Karakulambadi, Renigunta, Chittoor - 517501",
//       "coordinates": {
//         "latitude": 13.642796,
//         "longitude": 79.512973
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1792024/00021283",
//       "district": "Chittoor",
//       "registration": "83"
//     },
//     {
//       "station_name": "MSHSD Durga Filling Station",
//       "address": "S.No: 10-9A,10-12A, Vadamala, Vadamalapeta, Chittoor - 517551",
//       "coordinates": {
//         "latitude": 13.563194,
//         "longitude": 79.516556
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1692024/00021282",
//       "district": "Chittoor",
//       "registration": "84"
//     },
//     {
//       "station_name": "MS/HSD Sri Hari-Peddanjimedu",
//       "address": "S.No:12/8A,12/7A,12/4A,12/11B1A,12/10A1A,12/10B-1, Peddanjimedu, Yerpedu, Nellore - 517520",
//       "coordinates": {
//         "latitude": 13.682695,
//         "longitude": 79.574593
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/1692024/00021280",
//       "district": "Nellore",
//       "registration": "85"
//     },
//     {
//       "station_name": "MS/HSD Srinivasulu Filling Station, Venkatagiri",
//       "address": "S.No: 91/10, chavireddipalli, Venkatagiri, Nellore",
//       "coordinates": {
//         "latitude": 13.934588,
//         "longitude": 79.591027
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/1392024/00021277",
//       "district": "Nellore",
//       "registration": "86"
//     },
//     {
//       "station_name": "MS/HSD Sivaragini Filling Station",
//       "address": "S.No: 14-1B1, Yerrabalem, Sullurpet, Chittoor -524121",
//       "coordinates": {
//         "latitude": 13.705579,
//         "longitude": 80.011936
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1392024/00021276",
//       "district": "Chittoor",
//       "registration": "87"
//     },
//     {
//       "station_name": "MSHSD ADHOC Sri Venkateswara Filling Station",
//       "address": "S.No:1600, Gudur, Chittoor - 524101",
//       "coordinates": {
//         "latitude": 14.136943,
//         "longitude": 79.864366
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1192024/00021275",
//       "district": "Chittoor",
//       "registration": "88"
//     },
//     {
//       "station_name": "MS/HSD Rishidar Filling Station",
//       "address": "S.No:714/1, Kanigiri, Prakasam - 523230",
//       "coordinates": {
//         "latitude": 15.411502,
//         "longitude": 79.497447
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/1192024/00021274",
//       "district": "Prakasam",
//       "registration": "89"
//     },
//     {
//       "station_name": "MS/HSD Babu Filling Station-SR Palem",
//       "address": "S.No: 505/2, Surareddypalem, Tangutur, Prakasam - 523272",
//       "coordinates": {
//         "latitude": 15.39944,
//         "longitude": 80.039147
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/1192024/00021273",
//       "district": "Prakasam",
//       "registration": "90"
//     },
//     {
//       "station_name": "MSHSD SBT Filling Station Manubolu",
//       "address": "S.No: 248-13,248-14,248-15,248-18,248-19,248-3, Manubolu, Nellore - 524405",
//       "coordinates": {
//         "latitude": 14.202193,
//         "longitude": 79.875415
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/NE/1192024/00021272",
//       "district": "Nellore",
//       "registration": "91"
//     },
//     {
//       "station_name": "MS/HSD Prasad Filling Station",
//       "address": "S.No: 236/1, Bangarupalem, Chittoor - 517416",
//       "coordinates": {
//         "latitude": 13.189281,
//         "longitude": 78.864289
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1192024/00021271",
//       "district": "Chittoor",
//       "registration": "92"
//     },
//     {
//       "station_name": "MS/HSD Sri Chakra Fuel Station",
//       "address": "S.No: 479/1, 479/2, P.Kothakotta, Puthalapatu, Chittoor- 517124",
//       "coordinates": {
//         "latitude": 13.395982,
//         "longitude": 79.09857
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1192024/00021270",
//       "district": "Chittoor",
//       "registration": "93"
//     },
//     {
//       "station_name": "MS/HSD Vijaya Fuel Station",
//       "address": "S.No: 16-1, Mordhanapalli, Yadhamari, Chittoor - 517001",
//       "coordinates": {
//         "latitude": 13.193723,
//         "longitude": 79.036991
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1192024/00021268",
//       "district": "Chittoor",
//       "registration": "94"
//     },
//     {
//       "station_name": "MS/HSD Vivekananda Filling Station",
//       "address": "S.No: 27/2, Alkuppam, Gangavaram, Chittoor - 517432",
//       "coordinates": {
//         "latitude": 13.194078,
//         "longitude": 78.558657
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/CH/1192024/00021269",
//       "district": "Chittoor",
//       "registration": "95"
//     },
//     {
//       "station_name": "Adhoc Ram Filling Station",
//       "address": "Adhoc Ram Filling Station, S.No 585/A NH-44 Kasepalli,Gooty Peddavaduguru Mandal, Anantapur Dt -515401",
//       "coordinates": {
//         "latitude": 15.110376,
//         "longitude": 77.636921
//       },
//       "capacity": "120 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/27112024/00024047",
//       "district": "Anantapur",
//       "registration": "96"
//     },
//     {
//       "station_name": "Adhoc Royal Filling Station",
//       "address": "Adhoc Royal Filling Station, S.No :151, Karadikonda, Ananthapur Dt , AP-515401",
//       "coordinates": {
//         "latitude": 15.165056,
//         "longitude": 77.675999
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/312025/00024116",
//       "district": "Anantapur",
//       "registration": "97"
//     },
//     {
//       "station_name": "SKF Filling Station",
//       "address": "SKF Filling Station,S.No: 239/1, Chabolu, Nandyal, Kurnool Dt, AP- 518502",
//       "coordinates": {
//         "latitude": 15.418229,
//         "longitude": 78.50966
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/KU/2712025/00024149",
//       "district": "Kurnool",
//       "registration": "98"
//     },
//     {
//       "station_name": "Unnamed Station 99",
//       "address": "S.No: 116/1A1B, Rajupalem Village, Ulavapadu Mandal, Prakasam District, AP -523292",
//       "coordinates": {
//         "latitude": 15.159459,
//         "longitude": 80.007999
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/PR/131 22024/00024081",
//       "district": "Prakasam",
//       "registration": "99"
//     },
//     {
//       "station_name": "Unnamed Station 100",
//       "address": "S.No:75/2, Obulakkapalli, Peddaraveedu, Prakasam, AP - 523320",
//       "coordinates": {
//         "latitude": 15.903599,
//         "longitude": 79.309708
//       },
//       "capacity": "60 KW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/131 22024/00024083",
//       "district": "Prakasam",
//       "registration": "100"
//     },
//   {
//     "station_name": "NRT Center Filling Station",
//     "address": "S.No: 5/406, NRT center, purushothampatnam (v), chilakaluripeta mandal, Guntur Dt, AP-522616",
//     "coordinates": {
//       "latitude": 16.09557003,
//       "longitude": 80.16531699
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/2 7122024/00024108",
//     "district": "Guntur",
//     "registration": "128"
//   },
//   {
//     "station_name": "MPR Oil Filling Station",
//     "address": "S.No:380/1B, savalyapuram(v), savalyapuram mandal, Guntur Dt, AP- 522646",
//     "coordinates": {
//       "latitude": 16.110043,
//       "longitude": 79.822564
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/3 1122024/00024111",
//     "district": "Guntur",
//     "registration": "129"
//   },
//   {
//     "station_name": "Sri Sai Shanmukha Sita Rama Filling Station",
//     "address": "S.No:164, prathipadu (v), prathipadu mandal, Guntur Dt, AP 522019",
//     "coordinates": {
//       "latitude": 16.18673476,
//       "longitude": 80.34145677
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/1 1122024/00024112",
//     "district": "Guntur",
//     "registration": "130"
//   },
//   {
//     "station_name": "Amrutha Enterprises",
//     "address": "S.No:390/1, Lemalle(v), Amaravathi mandal, Guntur Dt, AP- 522016",
//     "coordinates": {
//       "latitude": 16.481049,
//       "longitude": 80.397422
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/3 1122024/00024133",
//     "district": "Guntur",
//     "registration": "131"
//   },
//   {
//     "station_name": "Hyway Fuel Filling Station",
//     "address": "S.No:778/1, Yanamadala (v), Prathipadumandal, Guntur Dt, AP- 522019",
//     "coordinates": {
//       "latitude": 16.24268896,
//       "longitude": 80.32661921
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/2 7122024/00024107",
//     "district": "Guntur",
//     "registration": "132"
//   },
//   {
//     "station_name": "DIVNL Co-op Officer, Penugolanu",
//     "address": "S.No: 555/2, Penugolanu (v), Gampalagudem mandal, Krishna Dt, AP-541401",
//     "coordinates": {
//       "latitude": 16.977028,
//       "longitude": 80.444135
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024143",
//     "district": "Krishna",
//     "registration": "133"
//   },
//   {
//     "station_name": "Sri Sai Roadways",
//     "address": "S.No:115/1A, Jupudi (v), Ibrahimpatnam mandal, Krishna Dt, AP- 521456",
//     "coordinates": {
//       "latitude": 16.604948,
//       "longitude": 80.483693
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024145",
//     "district": "Krishna",
//     "registration": "134"
//   },
//   {
//     "station_name": "Kanchi Radhika Filling Station",
//     "address": "S.No: 468/2B & 468/3, Cheemalapadu (v), A Konduru mandal. KrishnaDt, AP- 521226",
//     "coordinates": {
//       "latitude": 16.9707084,
//       "longitude": 80.6472981
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024144",
//     "district": "Krishna",
//     "registration": "135"
//   },
//   {
//     "station_name": "Sri Lakshmi Oil Traders",
//     "address": "S.No: 224/4, Gudivada (v), Gudivada mandal, Krishna Dt, AP- 521301",
//     "coordinates": {
//       "latitude": 16.4275779,
//       "longitude": 81.0011522
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 512025/00024128",
//     "district": "Krishna",
//     "registration": "136"
//   },
//   {
//     "station_name": "Friends Filling Station",
//     "address": "S.No: 133/2, Narasannapalam (v), Koyyalagudem mandal, WestGodavari Dt, AP-534312",
//     "coordinates": {
//       "latitude": 17.12286645,
//       "longitude": 81.32611251
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2612025/00024146",
//     "district": "WestGodavari",
//     "registration": "137"
//   },
//   {
//     "station_name": "Sankari Filling Station",
//     "address": "S.No: 366/1A, 375/3D, Velagaleru (v), A Konduru mandal, Krishna Dt, AP- 521229",
//     "coordinates": {
//       "latitude": 16.6508595,
//       "longitude": 80.6138967
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 512025/00024129",
//     "district": "Krishna",
//     "registration": "138"
//   },
//   {
//     "station_name": "Madipalli Chalamaiah",
//     "address": "S.No: 22-C-1, Elluru (v), Elluru mandal, West Godavari Dt, AP- 534002",
//     "coordinates": {
//       "latitude": 16.7092084,
//       "longitude": 81.1032034
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2512025/00024130",
//     "district": "WestGodavari",
//     "registration": "139"
//   },
//   {
//     "station_name": "Sanjana Filling Station",
//     "address": "S.No: 87/23, Kattubadipalem (v), G Konduru mandal, Krishna Dt, AP- 521228",
//     "coordinates": {
//       "latitude": 16.651116,
//       "longitude": 80.563903
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024132",
//     "district": "Krishna",
//     "registration": "140"
//   },
//   {
//     "station_name": "ADHOC Sri Datta Ranga Agencies",
//     "address": "S.No: 112/3D, Jagaihpeta (v), Jagaihpeta mandal, Krishna Dt, AP-522001",
//     "coordinates": {
//       "latitude": 16.8582165,
//       "longitude": 80.1960472
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024147",
//     "district": "Krishna",
//     "registration": "141"
//   },
//   {
//     "station_name": "Sri Rajyalakshmi Oil Services",
//     "address": "S.No: 10/5 Perikedu (v), Bapulapadu mandal, Krishna Dt, AP- 521106",
//     "coordinates": {
//       "latitude": 16.61888,
//       "longitude": 80.970617
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024133",
//     "district": "Krishna",
//     "registration": "142"
//   },
//   {
//     "station_name": "Delta Filling Station",
//     "address": "S.No:193/1 Jaganathapuram (v), Poduru mandal, West Godavari Dt, AP- 534122",
//     "coordinates": {
//       "latitude": 16.614887,
//       "longitude": 81.739203
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2612025/000241134",
//     "district": "WestGodavari",
//     "registration": "143"
//   },
//   {
//     "station_name": "Pushpa Premium Fuels",
//     "address": "558-1B, Gunipudi (v), Bhimavaram mandal, West Godavari Dt, AP- 534244",
//     "coordinates": {
//       "latitude": 16.531328,
//       "longitude": 81.539032
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2612025/00024135",
//     "district": "WestGodavari",
//     "registration": "144"
//   },
//   {
//     "station_name": "Omkar Pavana Sai Balaji Fuels",
//     "address": "S.No: 219/2G1, Uppalapadu (v), Kamavarapukota mandal, West Godavari Dt, AP- 534449",
//     "coordinates": {
//       "latitude": 17.0405677,
//       "longitude": 81.2309193
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2612025/00024136",
//     "district": "WestGodavari",
//     "registration": "145"
//   },
//   {
//     "station_name": "Sri Tarakaramanjaneya Filling Station",
//     "address": "S.No: 81/4, Adavinekkalam (v), Agiripalli mandal, Krishna Dt, AP- 521211",
//     "coordinates": {
//       "latitude": 16.653903,
//       "longitude": 80.731131
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/000241478",
//     "district": "Krishna",
//     "registration": "146"
//   },
//   {
//     "station_name": "Coco Athkuru",
//     "address": "S.No: 142/C12, Athkuru (v), G Konduru mandal, Krishna Dt, AP- 521229",
//     "coordinates": {
//       "latitude": 16.6856174,
//       "longitude": 80.6002104
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024137",
//     "district": "Krishna",
//     "registration": "147"
//   },
//   {
//     "station_name": "Shree Veeranjaneya Filling Station",
//     "address": "S.No: 271/4, Kondaparva (v), Visannapeta mandal, Krishna Dt, AP- 521213",
//     "coordinates": {
//       "latitude": 16.907227,
//       "longitude": 80.820898
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024138",
//     "district": "Krishna",
//     "registration": "148"
//   },
//   {
//     "station_name": "Vijaya Durga Filling Station",
//     "address": "S.No: 857/2, Vinukonda (v), Vinukonda mandal, Guntur /Dt, Ap- 522647",
//     "coordinates": {
//       "latitude": 16.0568398,
//       "longitude": 79.7453318
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/2 612025/00024142",
//     "district": "Guntur",
//     "registration": "149"
//   },
//   {
//     "station_name": "Viajayawada Serice Station",
//     "address": "S.No: 4/1, Nandamuri nagar (v), Vijayawada mandal, Krishna Dt, AP- 520015",
//     "coordinates": {
//       "latitude": 16.554263,
//       "longitude": 80.638397
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/2 612025/00024139",
//     "district": "Krishna",
//     "registration": "150"
//   },
//   {
//     "station_name": "WSA Gundagolanu",
//     "address": "S.No: 31/1, Gundugolany (v), Singavaram mandal, West Godavari Dt, AP- 534425",
//     "coordinates": {
//       "latitude": 16.782303,
//       "longitude": 81.22246
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2712025/00024153",
//     "district": "WestGodavari",
//     "registration": "151"
//   },
//   {
//     "station_name": "WSA Lakshminagaram",
//     "address": "S.No: 242/3E1C,242/3F2, 242/3G2,242/3H,242/3K1,242/4B, 242/5A&242/3D1B, Gunnampalli (v), Dwarakatirumala mandal, West Godavari Dt, AP-534425",
//     "coordinates": {
//       "latitude": 16.891222,
//       "longitude": 81.327806
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2612025/00024141",
//     "district": "WestGodavari",
//     "registration": "152"
//   },
//   {
//     "station_name": "Viajaya Oil Filling Station",
//     "address": "Narasaraopeta (v), Narasaraopeta mandal, Guntur Dt, AP- 522601",
//     "coordinates": {
//       "latitude": 16.2383436,
//       "longitude": 80.0430086
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/2 612025/00024131",
//     "district": "Guntur",
//     "registration": "153"
//   },
//   {
//     "station_name": "Sri Dhanalakshmi Oil Corporation",
//     "address": "S.No 1-2 NH-214, Akiveedu (v), Akiveedu mandal, West Godavari, AP -532235",
//     "coordinates": {
//       "latitude": 16.57839,
//       "longitude": 81.36472
//     },
//     "capacity": "60 KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/ 2512025/00024127",
//     "district": "WestGodavari",
//     "registration": "154"
//   },
//   {
//     "station_name": "PRABHUVU FILLING STATION",
//     "address": "VEERAGOTTAM ROAD, NEAR FIRE STATION, PALAKONDA, SRIKAKULAM DIST, ANDHRA PRADESH- 532440",
//     "coordinates": {
//       "latitude": 18.6051,
//       "longitude": 83.7475
//     },
//     "capacity": "30",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2182024/00015725",
//     "district": "SRIKAKULAM",
//     "registration": "38"
//   },
//   {
//     "station_name": "MANOHAR ENTERPRISES",
//     "address": "INDIAN OIL DEALERS, SY NO 375/29 & 375/30, JAMI VILLAGE, VIZIANAGARAM DISTRICT, ANDHRA PRADESH-535250",
//     "coordinates": {
//       "latitude": 18.052569,
//       "longitude": 83.237267
//     },
//     "capacity": "30",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2182024/00015726",
//     "district": "VIZIANAGARAM",
//     "registration": "39"
//   },
//   {
//     "station_name": "S S V V S B FUEL STATION",
//     "address": "SY NO.102-1A, SANKAVARAM MANDALAM, ANNAVARAM, EAST GODAVARI DIST, ANDHRA PRADESH-533406",
//     "coordinates": {
//       "latitude": 17.270131,
//       "longitude": 82.402559
//     },
//     "capacity": "30",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2082024/00015710",
//     "district": "EAST GODAVARI",
//     "registration": "40"
//   },
//   {
//     "station_name": "PALURI VENKATARAMANA",
//     "address": "INDIAN OIL DEALERS, LOCK NO.T1 189, TUNI, EAST GODAVARI DIST, ANDHRA PRADESH- 533401",
//     "coordinates": {
//       "latitude": 17.358763,
//       "longitude": 82.540871
//     },
//     "capacity": "30",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2082024/00015711",
//     "district": "EAST GODAVARI",
//     "registration": "41"
//   },
//   {
//     "station_name": "SWAGAT BENDAPUDI",
//     "address": "NDIAN OIL PETROL PUMP, NH 5 (OLD) ROAD, BENDAPUDI, EAST GODAVARI DIST, ANDHRA PRADESH-533406",
//     "coordinates": {
//       "latitude": 17.25099,
//       "longitude": 82.35489
//     },
//     "capacity": "60",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2182024/00015729",
//     "district": "EAST GODAVARI",
//     "registration": "42"
//   },
//   {
//     "station_name": "KALA AGENCIES",
//     "address": "SY NO.1103/1B, GOWRAPALLEM WARD, ANAKAPALLI BYE-PASS ROAD, LOCK NO.T1 80, VISAKHAPTNAM DIST, ANDHRA PRADESH 531001",
//     "coordinates": {
//       "latitude": 17.675743,
//       "longitude": 83.016899
//     },
//     "capacity": "100-120",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2182024/00015730",
//     "district": "VISAKHAPATNAM",
//     "registration": "43"
//   },
//   {
//     "station_name": "RAKSHAK RETAIL SERVICE STATION",
//     "address": "AP POLICE DEPARTMENT, SY. NO.856/1, MAIN ROAD MURUKONDAPADU VILLAGE, STUARTPURAM, BAPATLA DISTRICT-522317",
//     "coordinates": {
//       "latitude": 15.86635507,
//       "longitude": 80.40562282
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015510",
//     "district": "BAPATLA DISTRICT",
//     "registration": "44"
//   },
//   {
//     "station_name": "ARUNA AGENCIES",
//     "address": "PRATHIPADU V & M, SY NO.769, Lock T1-313/4 DNO:116, ANDHRA PRADESH-522519",
//     "coordinates": {
//       "latitude": 16.177892,
//       "longitude": 80.33029
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015511",
//     "district": "GUNTUR DISTRICT",
//     "registration": "45"
//   },
//   {
//     "station_name": "SANGAM MILK PRODUCER CO. LTD.",
//     "address": "SANGAM DAIRY, SY NOs 27/5 & 27/6, VADLAMUDI, Lock T1-349/50/1 DNO:131, ANDHRA PRADESH-522213",
//     "coordinates": {
//       "latitude": 16.23829,
//       "longitude": 80.560753
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015512",
//     "district": "GUNTUR DISTRICT",
//     "registration": "46"
//   },
//   {
//     "station_name": "NAYAGRA FUEL STATION",
//     "address": "SY.NO.55/3 & 55/4, MAIN ROAD, REPALLE VILLAGE & MANDAL, BAPATLA DISTRICT-522265",
//     "coordinates": {
//       "latitude": 16.0168,
//       "longitude": 80.82177
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015513",
//     "district": "BAPATLA DISTRICT",
//     "registration": "47"
//   },
//   {
//     "station_name": "GUNTUR RURAL POLICE FUEL STATION",
//     "address": "AP POLICE DEPARTMENT, INDIAN OIL DEALERS, SATTENAPALLI, SY NO.200-1B1, GUNTUR DISTRICT-522403",
//     "coordinates": {
//       "latitude": 16.39477,
//       "longitude": 80.151595
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015514",
//     "district": "GUNTUR DISTRICT",
//     "registration": "48"
//   },
//   {
//     "station_name": "G G K RAJU FILLING STATION",
//     "address": "S.NO.392/2, LOCK NO. 22020 /544 NIDAMARRU (V) & MANDAL, ANDHRA PRADESH - 522514",
//     "coordinates": {
//       "latitude": 16.7208,
//       "longitude": 81.4296
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/882024/00015515",
//     "district": "Guntur GODAVARI",
//     "registration": "49"
//   },
//   {
//     "station_name": "SRINIVASA FILLING STATION",
//     "address": "CHILAKALURIPETA, Lock T2- 235/6, DNO:191, ANDHRA PRADESH - 522616",
//     "coordinates": {
//       "latitude": 16.10275,
//       "longitude": 80.169361
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015516",
//     "district": "PALNADU DISTRICT",
//     "registration": "50"
//   },
//   {
//     "station_name": "K.V.R.FILLING STATION",
//     "address": "5-39, ASSESSMENT NO.839, SY No 85, MALLADI VILLAGE, AMARAVTHI MANDAL, GUNTUR DISTRICT - 522020",
//     "coordinates": {
//       "latitude": 16.573139,
//       "longitude": 80.273167
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015517",
//     "district": "GUNTUR DISTRICT",
//     "registration": "51"
//   },
//   {
//     "station_name": "P.JUSTEENAIAH",
//     "address": "INDIRA COLONY BUS STOP, 19-7-87, SY NOs. 534/1 & 534/3, PONNUR ROAD, SANGADIGUNTA, GUNTUR DISTRICT-522124",
//     "coordinates": {
//       "latitude": 16.281358,
//       "longitude": 80.455072
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015518",
//     "district": "GUNTUR DISTRICT",
//     "registration": "52"
//   },
//   {
//     "station_name": "DURGA FILLING STATION",
//     "address": "SY NO. 539/2, DUGGIRALA, Lock T1-327/8 DNO:122 ANDHRA PRADESH-522330",
//     "coordinates": {
//       "latitude": 16.343069,
//       "longitude": 80.627474
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/882024/00015519",
//     "district": "GUNTUR DISTRICT",
//     "registration": "53"
//   },
//   {
//     "station_name": "AMARAVATI PETROLEUMS",
//     "address": "SY NO. 269/2, KORETIPADU Gujjanagundla Centre, Guntur -522007",
//     "coordinates": {
//       "latitude": 16.323924,
//       "longitude": 80.405024
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015522",
//     "district": "GUNTUR DISTRICT",
//     "registration": "54"
//   },
//   {
//     "station_name": "SRI RAMASWAMY FILLING STATION",
//     "address": "GUNTUR, Lock T1-451/2/3, DNO:168, ANDHRA PRADESH - 522006",
//     "coordinates": {
//       "latitude": 16.30901613,
//       "longitude": 80.41840515
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015524",
//     "district": "GUNTUR DISTRICT",
//     "registration": "55"
//   },
//   {
//     "station_name": "SRI LAXMI NARSIMHA FILLING STATION",
//     "address": "SH-89, VINUKONDA MACHERLA ROAD, SY NO.577/B, DURGI VILLAGE & MANDAL PALNADU DISTRICT - 523201",
//     "coordinates": {
//       "latitude": 16.42705837,
//       "longitude": 79.53390245
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015525",
//     "district": "PALNADU DISTRICT",
//     "registration": "56"
//   },
//   {
//     "station_name": "ANJANIPUTHRA FILLING STATION",
//     "address": "SY NO. 270, TUMMALACHERUVU VILLAGE, BRAMHANAPALLI-VEERAPURAM RHS, PIDUGURALLA MANDAL, GUNTUR DISTRICT - 522437",
//     "coordinates": {
//       "latitude": 16.532604,
//       "longitude": 79.808706
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015526",
//     "district": "GUNTUR DISTRICT",
//     "registration": "57"
//   },
//   {
//     "station_name": "SANGAMESWARA FILLING STATION",
//     "address": "PIDUGURALLA, Lock T1-413/4 DNO:153, ANDHRA PRADESH - 522413",
//     "coordinates": {
//       "latitude": 16.44903428,
//       "longitude": 79.91839443
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015527",
//     "district": "GUNTUR DISTRICT",
//     "registration": "58"
//   },
//   {
//     "station_name": "SAGAR FUELS",
//     "address": "SY NO. 898/1, MACHERLA, Lock T2- 261/2, DNO:220, MACHERLA MANDAL, PALNADU DISTRICT -522426",
//     "coordinates": {
//       "latitude": 16.48442862,
//       "longitude": 79.41050656
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/GU/982024/00015531",
//     "district": "PALNADU DISTRICT",
//     "registration": "59"
//   },
//   {
//     "station_name": "LAKSHMI VINAYAKA FILLING STATION",
//     "address": "2/148, MACHILIPATNAM TOWN, KRISHNA DISTRICT-521001",
//     "coordinates": {
//       "latitude": 16.167741,
//       "longitude": 81.118016
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015481",
//     "district": "KRISHNA DISTRICT",
//     "registration": "60"
//   },
//   {
//     "station_name": "ADITYA FILLING STATION",
//     "address": "R.S.228/7, KODURU, KRISHNA DIST AP -521328",
//     "coordinates": {
//       "latitude": 16.008122,
//       "longitude": 81.020309
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015480",
//     "district": "KRISHNA DISTRICT",
//     "registration": "61"
//   },
//   {
//     "station_name": "BROTHERS SERVICE STATION",
//     "address": "INDIAN OIL DEALERS, LOCK NO: T1-18/19/20/21/22, D NO:7, Vijayawada, Krishna, ANDHRA PRADESH",
//     "coordinates": {
//       "latitude": 16.497815,
//       "longitude": 80.65353
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015533",
//     "district": "KRISHNA DISTRICT",
//     "registration": "62"
//   },
//   {
//     "station_name": "PAC RAMASAMY RAJA CENTENARY TRUST",
//     "address": "C/O.RAMCO CEMENTS COLONY, B-3 KUMARASAMY RAJA NAGAR, Chillakallu Village, Jaggayapeta, - 521178",
//     "coordinates": {
//       "latitude": 16.873271,
//       "longitude": 80.1328
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015534",
//     "district": "KRISHNA DISTRICT",
//     "registration": "63"
//   },
//   {
//     "station_name": "VANI FUEL STATION",
//     "address": "NANDIGAMA TOWN, Lock T1-272/3, DNO:100, ANDHRA PRADESH - 521185",
//     "coordinates": {
//       "latitude": 16.76477,
//       "longitude": 80.2807
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015535",
//     "district": "KRISHNA DISTRICT",
//     "registration": "64"
//   },
//   {
//     "station_name": "PILOT SERVICE STATION",
//     "address": "27-37-58, MG ROAD, GOVERNORPET VIJAYAWADA NTR DISTRICT - 520002",
//     "coordinates": {
//       "latitude": 16.50916,
//       "longitude": 80.62446
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015536",
//     "district": "NTR DISTRICT",
//     "registration": "65"
//   },
//   {
//     "station_name": "RUN WAY FILLING STATION",
//     "address": "BANGARAYYA SHOP, CHITTINAGAR, Lock T1-138/9/40, D.NO:47, ANDHRA PRADESH - 520001",
//     "coordinates": {
//       "latitude": 16.528794,
//       "longitude": 80.611271
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015537",
//     "district": "KRISHNA DISTRICT",
//     "registration": "66"
//   },
//   {
//     "station_name": "SRI VENKATESWARA SERVICE STATION",
//     "address": "32-119, OLD BUS STAND, NANDIGAMA VILLAGE & MANDAL, NTR DISTRICT-521185",
//     "coordinates": {
//       "latitude": 16.77895,
//       "longitude": 80.28365
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015538",
//     "district": "NTR DISTRICT",
//     "registration": "67"
//   },
//   {
//     "station_name": "VENKATA SAI RAGHAVA AUTO FUEL",
//     "address": "SY Nos 250/4 & 250/3, TIRUVURU TOWN & MANDAL, TIRUVURU BYPASS, NH30, NTR DISTRICT, ANDHRA PRADESH - 521235",
//     "coordinates": {
//       "latitude": 17.11237,
//       "longitude": 80.61772
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015476",
//     "district": "NTR DISTRICT",
//     "registration": "68"
//   },
//   {
//     "station_name": "SUPRIYA SERVICE STATION",
//     "address": "SY.NO .439/3, MYLAVARAM VILLAGE & MANDAL IBRAHIMPATNAM-TIRUVURU ROAD, NH 30, NTR DISTRICT - 521230",
//     "coordinates": {
//       "latitude": 16.73912,
//       "longitude": 80.63253
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015477",
//     "district": "NTR DISTRICT",
//     "registration": "69"
//   },
//   {
//     "station_name": "VIJETHA FILLING STATION",
//     "address": "SY NO 377, AKONDORU VILLAGE & MANDAL, IBRAHIMPATNAM-TIRUVURU ROAD, NH 30, NTR DISTRICT, AP- 521227",
//     "coordinates": {
//       "latitude": 16.96985,
//       "longitude": 80.6505
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015478",
//     "district": "NTR DISTRICT",
//     "registration": "70"
//   },
//   {
//     "station_name": "VIJAYALAKSHMI ENTERPRISES",
//     "address": "SYNO 230/2, PLOT NO 16, ELURU ROAD, PADAVALAREVU, GUNADALA, NTR DISTRICT, ANDHRA PRADESH - 520005",
//     "coordinates": {
//       "latitude": 16.52451,
//       "longitude": 80.65878
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015475",
//     "district": "NTR DISTRICT",
//     "registration": "71"
//   },
//   {
//     "station_name": "MADURAI MEENAKSHI AGENCIES",
//     "address": "Lock T1-87/8/9 D.NO:28, SY NO 291, GUDIVADA, KRISHNA DISTRICT, ANDHRA PRADESH - 521301",
//     "coordinates": {
//       "latitude": 16.420614,
//       "longitude": 81.00193
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015540",
//     "district": "KRISHNA DISTRICT",
//     "registration": "72"
//   },
//   {
//     "station_name": "GOLDEN FUELS",
//     "address": "Lock T1-338/9, SY NO 587/2B, VELERU VILLAGE, BAPULAPADU MANDAL, KRISHNA DIST, ANDHRA PRADESH - 521110",
//     "coordinates": {
//       "latitude": 16.62744144,
//       "longitude": 80.94273188
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015541",
//     "district": "KRISHNA DISTRICT",
//     "registration": "73"
//   },
//   {
//     "station_name": "SRINIVASA AGENCIES",
//     "address": "SYNO 113/8, KANKIPADU GUDIVADA ROAD, NANDAMURU VILLAGE & VUNGUTUR MANDAL KRISHNA DISTRICT - 521311",
//     "coordinates": {
//       "latitude": 16.445151,
//       "longitude": 80.858993
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/982024/00015542",
//     "district": "KRISHNA DISTRICT",
//     "registration": "74"
//   },
//   {
//     "station_name": "SHAKTHI FILLING STATION",
//     "address": "MAIN ROAD ON NH MANUBOLU VILLAGE & MANDAL SPSR NELLORE DISTRICT - 524405",
//     "coordinates": {
//       "latitude": 14.22456,
//       "longitude": 79.880932
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015544",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "75"
//   },
//   {
//     "station_name": "KRISHNAPATNAM FILLING STATION",
//     "address": "SY.NO.236/1, LOCK NO - D1-343536, PANTAPALEM VILLAGE, NELLORE DIST ANDHRA PRADESH - 524323",
//     "coordinates": {
//       "latitude": 14.25837,
//       "longitude": 80.042913
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015545",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "76"
//   },
//   {
//     "station_name": "SRIRAMA FILLING STATION",
//     "address": "SY.NO.666, MUMBAI ROAD, PADAMATIPALEM VILLAGE, SANGAM MANDAL, SPSR NELLORE DISTRICT - 524306",
//     "coordinates": {
//       "latitude": 14.5734,
//       "longitude": 79.7953
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015546",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "77"
//   },
//   {
//     "station_name": "GPR FILLING STATION",
//     "address": "MAIN ROAD, SY NO 339/C, THODERU VILLAGE, PODALAKUR MANDAL, SPSR NELLORE DISTRICT - 524345",
//     "coordinates": {
//       "latitude": 14.38803,
//       "longitude": 79.74456
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015547",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "78"
//   },
//   {
//     "station_name": "SRI BRAMARAMBIKA FILLING STATION",
//     "address": "INDIAN OIL DEALER, LOCK NO - D1-201, MYPADU ROAD-ALLIPURAM, NELLORE DIST ANDHRA PRADESH - 524002",
//     "coordinates": {
//       "latitude": 14.467909,
//       "longitude": 80.033962
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015548",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "79"
//   },
//   {
//     "station_name": "SRI VENKAIAH SWAMY FILLING STATION",
//     "address": "SURVEY NO 6B, POTTEPALEM VILLAGE, NELLORE RURAL MANDAL, SPSR NELLORE DISTRICT - 524004",
//     "coordinates": {
//       "latitude": 14.469278,
//       "longitude": 79.916451
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/982024/00015549",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "80"
//   },
//   {
//     "station_name": "SRI SRINIVASA FILLING STATION",
//     "address": "SY.NO.382 C & 384 C, LOCK NO - D1-18, BLOCK NO.6, PODALAKURU, NELLORE DISTRICT, ANDHRA PRADESH - 524004",
//     "coordinates": {
//       "latitude": 14.378392,
//       "longitude": 79.730852
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015483",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "81"
//   },
//   {
//     "station_name": "SRINIVASA OIL COMPANY",
//     "address": "INDIAN OIL DELEARS, LOCK NO - D1-62, SY NO 582/1, KANDUKUR, PRAKASAM DT, ANDHRA PRADESH - 523105",
//     "coordinates": {
//       "latitude": 15.22056495,
//       "longitude": 79.91371449
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015485",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "82"
//   },
//   {
//     "station_name": "SRI VENKATA DURGA FILLING STATION",
//     "address": "S.NO.26/2A, BASINENIPALLI VILLAGE, SEETHARAMAPURAM MANDAL, SPSR NELLORE DISTRICT - 524226",
//     "coordinates": {
//       "latitude": 14.969548,
//       "longitude": 79.20957
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015486",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "83"
//   },
//   {
//     "station_name": "SAI QUALITY FILLING STATION ADHOC",
//     "address": "SY NO 25-1A & 26-1, BODDUVARIPALEM VILLAGE, KODAVALUR MANDAL, SPSR NELLORE DISTRICT - 524004",
//     "coordinates": {
//       "latitude": 14.57420773,
//       "longitude": 79.98423839
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015487",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "84"
//   },
//   {
//     "station_name": "ABEED BABAJEE FILLING STATION",
//     "address": "SY NO.133, NANDAVARAM JUNCTION, NANDAVARAM VILLAGE & MARRIPADU MANDAL SPSR NELLORE DISTRICT - 524307",
//     "coordinates": {
//       "latitude": 14.691528,
//       "longitude": 79.483566
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015488",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "85"
//   },
//   {
//     "station_name": "HYNDHAVI FILLING STATION",
//     "address": "MARRIPADU VILLAGE, LOCK NO - D1-293, MARRIPADU VILL, NELLORE DISTRICT, ANDHRA PRADESH - 524312",
//     "coordinates": {
//       "latitude": 14.68894,
//       "longitude": 79.35531
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015489",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "86"
//   },
//   {
//     "station_name": "SRI SAINADH FILLING STATION",
//     "address": "INDIAN OIL DEALERS GUDLUR V & M, PRAKASAM DIST. LOCK NO - D1-209211 ANDHRA PRADESH - 523281",
//     "coordinates": {
//       "latitude": 15.077186,
//       "longitude": 79.900666
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015490",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "87"
//   },
//   {
//     "station_name": "K V N ASSOCIATES",
//     "address": "SY NO.237/5, KANDUKUR VILLAGE & MANDAL PRAKASAM DISTRICT - 523105",
//     "coordinates": {
//       "latitude": 15.219689,
//       "longitude": 79.893648
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015491",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "88"
//   },
//   {
//     "station_name": "SRINIVASA FILLING STATION (L-191)",
//     "address": "INDIAN OIL DEALER LOCK NO - D1-189 SY.NO.191/3 & 192 NELLORE DIST ANDHRA PRADESH - 524312",
//     "coordinates": {
//       "latitude": 14.687505,
//       "longitude": 79.508947
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/NE/882024/00015492",
//     "district": "SPSR NELLORE DISTRICT",
//     "registration": "89"
//   },
//   {
//     "station_name": "PRIME ENERGIES",
//     "address": "D.NO.1-62, NRT ROAD, REVENUE WARD, ADDANKI VILLAGE & MANDAL BAPATLA DISTRICT - 523201",
//     "coordinates": {
//       "latitude": 15.81905654,
//       "longitude": 79.97090576
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015508",
//     "district": "BAPATLA DISTRICT",
//     "registration": "90"
//   },
//   {
//     "station_name": "SRINIVASA SERVICE CENTRE",
//     "address": "446 UPPUTURU VILLAGE PARCHUR MANDAL, PRAKASAM DISTRICT - 523169",
//     "coordinates": {
//       "latitude": 15.9611,
//       "longitude": 80.2802
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015509",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "91"
//   },
//   {
//     "station_name": "KHALNAYAK FILLING STATION",
//     "address": "Sy.No-399/7, Ward-6, VISANNAPETA TOWN & MANDAL, SATTUPALLI ROAD, NTR DISTRICT, ANDHRA PRADESH-521215",
//     "coordinates": {
//       "latitude": 16.9445,
//       "longitude": 80.7874
//     },
//     "capacity": "50-60KW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/KR/682024/00015479",
//     "district": "NTR DISTRICT",
//     "registration": "92"
//   },
//   {
//     "station_name": "SRINIVASA AGENCIES (MRT)",
//     "address": "DNO:224 LOCK T2/ 199/200, MARTURU, ANDHRA PRADESH - 523301",
//     "coordinates": {
//       "latitude": 15.9811,
//       "longitude": 80.1009
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015493",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "93"
//   },
//   {
//     "station_name": "KARGIL HERO HAJI BASHA MEMORIAL IND",
//     "address": "OIL PETROL BUNK, SY.NO.131/1, NEAR SANGHAMITRA HOSPITAL ON NH, PELLURU VILLAGE, ONGOLE MANDAL, PRAKASAM DISTRICT - 523001",
//     "coordinates": {
//       "latitude": 15.471852,
//       "longitude": 80.048689
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015494",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "94"
//   },
//   {
//     "station_name": "SRI HARI FUEL POINT",
//     "address": "INDIAN OIL DEALERS, LOCK NO - D1-19, DARSI, PRAKASAM DT. ANDHRA PRADESH - 523247",
//     "coordinates": {
//       "latitude": 15.7547,
//       "longitude": 79.6727
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015495",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "95"
//   },
//   {
//     "station_name": "RAJA PETROLEUMS",
//     "address": "10-5, PARCHURU ROAD, INKOLLU VILLAGE & MANDAL, BAPATLA DISTRICT - 523167",
//     "coordinates": {
//       "latitude": 15.8355402,
//       "longitude": 80.1957693
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015496",
//     "district": "BAPATLA DISTRICT",
//     "registration": "96"
//   },
//   {
//     "station_name": "THE SUPERINTENDENT",
//     "address": "RAILWAY STATION ROAD, NEAR COLLECTOR HOUSE, ONGOLE CITY, PRAKASAM DISTRICT - 523001",
//     "coordinates": {
//       "latitude": 15.498744,
//       "longitude": 80.051694
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015497",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "97"
//   },
//   {
//     "station_name": "ANJANEYA AGENCY",
//     "address": "BESIDE RIMS HOSPITAL 37-1-410/A, RAM NAGAR 3RD LANE, TRUNK ROAD, ONGOLE, PRAKASAM DISTRICT - 523001",
//     "coordinates": {
//       "latitude": 15.489277,
//       "longitude": 80.047951
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015498",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "98"
//   },
//   {
//     "station_name": "MAMIDI FUEL POINT",
//     "address": "IOCL DLR 9-1-25, CHURCH ROAD, CHIRALA PRAKASAM DIST. ANDHRA PRADESH - 523157",
//     "coordinates": {
//       "latitude": 15.829727,
//       "longitude": 80.360601
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015499",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "99"
//   },
//   {
//     "station_name": "APSRTC FILLING STATION VETAPALEM",
//     "address": "SY.NO.131-12, VETAPALEM VILLAGE, VETAPALEM MANDAL, BAPATLA DISTRICT - 523187",
//     "coordinates": {
//       "latitude": 15.786042,
//       "longitude": 80.310354
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015500",
//     "district": "BAPATLA DISTRICT",
//     "registration": "100"
//   },
//   {
//     "station_name": "MNR PETROLEUM FUELS",
//     "address": "LOCK NO - D1,- 356 THALLUR VILLAGE, SY.NO.539/4, PRAKASAM DIST, ANDHRA PRADESH - 523264",
//     "coordinates": {
//       "latitude": 15.73465,
//       "longitude": 79.885307
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015501",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "101"
//   },
//   {
//     "station_name": "MNR PETROLEUM FUELS",
//     "address": "LOCK NO - D1,- 356 THALLUR VILLAGE, SY.NO.539/4, PRAKASAM DIST, ANDHRA PRADESH - 523264",
//     "coordinates": {
//       "latitude": 15.73465,
//       "longitude": 79.885307
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015501",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "101"
//   },
//   {
//     "station_name": "VISHNU SREE TRADERS",
//     "address": "SY.NO.117/4, BUDAWADA CHIMAKURTHY MANDAL PRAKASAM DISTRICT - 523226",
//     "coordinates": {
//       "latitude": 15.58918,
//       "longitude": 79.806179
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015502",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "102"
//   },
//   {
//     "station_name": "KAVYA FILLING STATION",
//     "address": "PRAKASAM DIST LOCK NO.12034/93 SY No.37/2, Obulakkapalli(V), Peddaraveedu (M), ANDHRA PRADESH - 523333",
//     "coordinates": {
//       "latitude": 15.902616,
//       "longitude": 79.302412
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015503",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "103"
//   },
//   {
//     "station_name": "SRI SAIBALA FILLING STATION PRAKSAM",
//     "address": "INDIAN OIL DEALER LOCK NO. 13011/56, Sy No 131, K.G.ROAD, THRIPURANTHAKAM, PRAKSAM ANDHRA PRADESH - 523326",
//     "coordinates": {
//       "latitude": 16.006217,
//       "longitude": 79.460224
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015504",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "104"
//   },
//   {
//     "station_name": "HANUMA PETROLEUM",
//     "address": "IOC DEALERS LOCK NO - D1-348349, SURVEY NO.557/2A, GIDDALURU, PRAKASAM DIST ANDHRA PRADESH - 523367",
//     "coordinates": {
//       "latitude": 15.336417,
//       "longitude": 78.901881
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015505",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "105"
//   },
//   {
//     "station_name": "PRAVEEN ENTERPRISES",
//     "address": "RACHERLA, SY NO 385, RACHERLA VILLAGE & MANDAL PRAKASAM DISTRICT - 523368",
//     "coordinates": {
//       "latitude": 15.473238,
//       "longitude": 78.969603
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015506",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "106"
//   },
//   {
//     "station_name": "KAMAKSHI THAI FILLING STATION",
//     "address": "INDIAN OIL DEALERS LOCK NO - D1-31 SY.NO.155/2, VIJAYA GOPALAPURAM(V), PRAKASAM DIST, ANDHRA PRADESH - 523108",
//     "coordinates": {
//       "latitude": 15.283552,
//       "longitude": 79.46742
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/PR/882024/00015507",
//     "district": "PRAKASAM DISTRICT",
//     "registration": "107"
//   },
//   {
//     "station_name": "THE DISTRICT MANAGER (APSCSC LTD)",
//     "address": "Indian Oil Dealers, Rs No 201/1, N R P Agraharam, Nh-165, West Godavari, A.P - 534199",
//     "coordinates": {
//       "latitude": 16.5771274,
//       "longitude": 81.4782258
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCIB4:B77/WG/2672024/00015376",
//     "district": "West Godavari",
//     "registration": "108"
//   },
//   {
//     "station_name": "JYOTHI FARM SERVICE",
//     "address": "Indian Oil Dealers, Lock No. 297/37 & 5249 / 37, Devarapalli, Andhra Pradesh - 533313",
//     "coordinates": {
//       "latitude": 17.035403,
//       "longitude": 81.563676
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2672024/00015377",
//     "district": "West Godavari",
//     "registration": "109"
//   },
//   {
//     "station_name": "Sri Ramachandra Traders",
//     "address": "Indian Oil Dealer, Sy No. 160/1, Palakollu Town, West Godavari Dirstrict, A.P - 534260",
//     "coordinates": {
//       "latitude": 16.53710686,
//       "longitude": 81.72489452
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2672024/00015378",
//     "district": "West Godavari",
//     "registration": "110"
//   },
//   {
//     "station_name": "LAKSHMI PADMAVATHI FILLING STATION",
//     "address": "Indian Oil Dealers, S.No.199/2, Medapadu Village, East Godavari, A.P - 534268",
//     "coordinates": {
//       "latitude": 16.510011,
//       "longitude": 81.767603
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2672024/00015379",
//     "district": "West Godavari",
//     "registration": "111"
//   },
//   {
//     "station_name": "Sri Ramachandra Filling Station",
//     "address": "Rsno.127/2a, 127/1h, 127/2b & 127/1i, Vempa Village, Bheemavaram Mandal - 534207",
//     "coordinates": {
//       "latitude": 16.446328,
//       "longitude": 81.570273
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2672024/00015380",
//     "district": "West Godavari",
//     "registration": "112"
//   },
//   {
//     "station_name": "VIJAYA SATYA SURYA AGENCIES",
//     "address": "Indian Oil Dealer, Sy No. 262/8f1d, Vemagiri Village, Kadiyam Mandal, East Godavari District - 533125",
//     "coordinates": {
//       "latitude": 16.92107,
//       "longitude": 81.80339
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2672024/00015381",
//     "district": "East Godavari",
//     "registration": "113"
//   },
//   {
//     "station_name": "K.PAPA REDDY AGENCIES",
//     "address": "Indian Oil Dealers, Pottilanka, Lock No. 8400 / 37,Kadiyam, Andhra Pradesh - 533126",
//     "coordinates": {
//       "latitude": 16.870816,
//       "longitude": 81.815772
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015449",
//     "district": "East Godavari",
//     "registration": "114"
//   },
//   {
//     "station_name": "COCO GOKAVARAM - ADHOC GOLDEN FILLING STATION",
//     "address": "Indian Oil Petrol Pump, Rajamundry Terminal, Gokavaram, East Godavari District - 533286",
//     "coordinates": {
//       "latitude": 17.19859,
//       "longitude": 81.84207
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015450",
//     "district": "East Godavari",
//     "registration": "115"
//   },
//   {
//     "station_name": "RAJUS SERVICE STATION",
//     "address": "Indian Oil Dealers, Tallapudi, Lock No. 11001/93262, Andhra Pradesh - 534341",
//     "coordinates": {
//       "latitude": 17.13089187,
//       "longitude": 81.66042996
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2672024/00015382",
//     "district": "West Godavari",
//     "registration": "116"
//   },
//   {
//     "station_name": "GAYATRI ENTERPRISES",
//     "address": "Indian Oil Dealers, Rs No.34, Plot No.6566, Haripuram, Rajahmundry,A.P - 533105",
//     "coordinates": {
//       "latitude": 17.018927,
//       "longitude": 81.781813
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015451",
//     "district": "East Godavari",
//     "registration": "117"
//   },
//   {
//     "station_name": "SATYADEVA FILLING STATION",
//     "address": "Malikipuram, Lock No. 12024 /544, Sy.No-101-9, Malikipuram, East Godavari District, Andhra Pradesh - 533253",
//     "coordinates": {
//       "latitude": 16.41647,
//       "longitude": 81.810492
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2672024/00015383",
//     "district": "East Godavari",
//     "registration": "118"
//   },
//   {
//     "station_name": "LAKSHMI LOKESH AGENCIES",
//     "address": "Indian Oil Dealers, Lock No.T3 189, Uppada (Aminabada), East Godavari,Andhra Pradesh - 533448",
//     "coordinates": {
//       "latitude": 17.088972,
//       "longitude": 82.344936
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015452",
//     "district": "East Godavari",
//     "registration": "119"
//   },
//   {
//     "station_name": "MITHI FUEL STATION",
//     "address": "Indian Oil Dealer, Sy No 498, Peddapurapadu (V), Karapa (M), East Godavari District, A.P - 533468",
//     "coordinates": {
//       "latitude": 16.8326604,
//       "longitude": 82.1342766
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2672024/00015384",
//     "district": "East Godavari",
//     "registration": "120"
//   },
//   {
//     "station_name": "Singampalli PACS Ltd.",
//     "address": "Indian Oil Dealer, Sy No 152/3, Singampalle Village, Rangampeta Mandal, East Godavari District, A.P - 533343",
//     "coordinates": {
//       "latitude": 17.022351,
//       "longitude": 82.015481
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015390",
//     "district": "East Godavari",
//     "registration": "121"
//   },
//   {
//     "station_name": "LAKSHMANARAJU HIGHWAY SERVICES",
//     "address": "Indian Oil Dealers, Sy.No.117/4, 117/5, 117/3b2, 117/6, 117/7, Pedalavunipalli(V), Nandigam Md, Srikakulam- 532201",
//     "coordinates": {
//       "latitude": 18.680027,
//       "longitude": 84.320363
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/SR/2772024/00015391",
//     "district": "Srikakulam",
//     "registration": "122"
//   },
//   {
//     "station_name": "T.K.R.FILLING STATION",
//     "address": "Indian Oil Dealers, S.No.261/1, Peddapadu, Srikakulam, Andhra Pradesh - 532001",
//     "coordinates": {
//       "latitude": 18.30984496,
//       "longitude": 83.91971432
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/SR/2772024/00015392",
//     "district": "Srikakulam",
//     "registration": "123"
//   },
//   {
//     "station_name": "COCO SALIGRAMAPURAM SP A SRINIVASA",
//     "address": "Indian Oil Petrol Pump, Sy.No.2/1(P), Dondaparthy Extn Ward No 34, Vpt Land, A.P- 530024",
//     "coordinates": {
//       "latitude": 17.73997,
//       "longitude": 83.296086
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2772024/00015393",
//     "district": "Visakhapatnam",
//     "registration": "124"
//   },
//   {
//     "station_name": "COCO KAILASAGIRI-SP BEHARA JAYAKISH",
//     "address": "Indian Oil Petrol Pump, Opp Appu Ghar, Mnvp Colony, Kailasagiri Beach Road, A.P- 530001",
//     "coordinates": {
//       "latitude": 17.743019,
//       "longitude": 83.344105
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2772024/00015394",
//     "district": "Visakhapatnam",
//     "registration": "125"
//   },
//   {
//     "station_name": "BHANU FILLING STATION",
//     "address": "Indian Oil Dealers, Pendurthy Mandal, Andhra Pradesh - 531173",
//     "coordinates": {
//       "latitude": 17.844798,
//       "longitude": 83.257304
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2772024/00015395",
//     "district": "Visakhapatnam",
//     "registration": "126"
//   },
//   {
//     "station_name": "ASHOK ENTERPRISES",
//     "address": "Tarluwada Anandapuram Jn, Visakhapatnam, Andhra Pradesh - 530042",
//     "coordinates": {
//       "latitude": 17.888399,
//       "longitude": 83.342499
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/3072024/00015453",
//     "district": "Visakhapatnam",
//     "registration": "127"
//   },
//   {
//     "station_name": "BHANUTEJA FILLING STATION",
//     "address": "Sy.No.191/1, Gabbada Village, Narsipatnam Mandal, Visakha Dist - 531118",
//     "coordinates": {
//       "latitude": 17.69539889,
//       "longitude": 82.60015021
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2772024/00015396",
//     "district": "Visakhapatnam",
//     "registration": "128"
//   },
//   {
//     "station_name": "M/S VKR.PETRO POINT",
//     "address": "Indian Oil Dealers, S.No. 241/14p, 16p & 17p, Rebaka, Andhra Pradesh - 531126",
//     "coordinates": {
//       "latitude": 17.727681,
//       "longitude": 83.044663
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2772024/00015397",
//     "district": "Visakhapatnam",
//     "registration": "129"
//   },
//   {
//     "station_name": "Sri Chakrapani Agencies",
//     "address": "S.No.57, Chintapalli Village, Chintapalli Mandal, Andhra Pradesh - 531111",
//     "coordinates": {
//       "latitude": 17.864357,
//       "longitude": 82.357106
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/3072024/00015454",
//     "district": "Visakhapatnam",
//     "registration": "130"
//   },
//   {
//     "station_name": "Perumali PACS Ltd,",
//     "address": "Indian Oil Dealer, Sy No: 244/2, Perumali Village, Ther Mandal, Vizianagaram District - 532127",
//     "coordinates": {
//       "latitude": 18.4487074,
//       "longitude": 83.5621784
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015398",
//     "district": "Vizianagaram",
//     "registration": "131"
//   },
//   {
//     "station_name": "Nandigam PACS Ltd",
//     "address": "Sno: 158/2a, Nandigam Pacs Ltd, Nandigam Therlam Mandal, Vizianagaram District - 535124",
//     "coordinates": {
//       "latitude": 18.51393804,
//       "longitude": 83.4903002
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015399",
//     "district": "Vizianagaram",
//     "registration": "132"
//   },
//   {
//     "station_name": "SHIRDI SAIBABA FILLING STATION",
//     "address": "Arikathota (Ramabhadrapuram Jn) Towards Gajapathinagaram(Nh-43 S.No.265/2 To 8, Arikathota (V), A.P- 535579",
//     "coordinates": {
//       "latitude": 18.458955,
//       "longitude": 83.307176
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015400",
//     "district": "Vizianagaram",
//     "registration": "133"
//   },
//   {
//     "station_name": "SRI VENKATESWARA FILLING STN",
//     "address": "Indian Oil Dealers, S.No.252/37, Penubarthi Village, Andhra Pradesh - 535128",
//     "coordinates": {
//       "latitude": 18.27048309,
//       "longitude": 83.51794873
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015401",
//     "district": "Vizianagaram",
//     "registration": "134"
//   },
//   {
//     "station_name": "RK FILLING STATION",
//     "address": "4-171, Akkireddypalem,Lock No.T1 30 Bhpv Postrajapulova, Bhogapuram, Andhra Pradesh - 530012",
//     "coordinates": {
//       "latitude": 17.964584,
//       "longitude": 83.4322
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/3072024/00015455",
//     "district": "Vizianagaram",
//     "registration": "135"
//   },
//   {
//     "station_name": "SRI SATYA SAI SERVICE STATION",
//     "address": "Indian Oil Dealers, Lock No.T1 52, Modavalasa, Vizianagaram Dist, Andhra Pradesh - 531162",
//     "coordinates": {
//       "latitude": 17.964216,
//       "longitude": 83.426949
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015402",
//     "district": "Vizianagaram",
//     "registration": "136"
//   },
//   {
//     "station_name": "TIRUMALA SATYADEV TRADERS",
//     "address": "Vizianagaram To Vizag (Rhs On Nh-43 From 558 Km To 563 Km ), Sy.No.14/1-5, Modavalasa Village, A.P - 531162",
//     "coordinates": {
//       "latitude": 17.98020706,
//       "longitude": 83.41646506
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VZ/2772024/00015403",
//     "district": "Vizianagaram",
//     "registration": "137"
//   },
//   {
//     "station_name": "GOWTHAMI AGRO SERVICE",
//     "address": "Indian Oil Dealers, Pippara Tpg Rd, Pippara, Lock 7622 / 37, Ganapavaram, Andhra Pradesh - 534197",
//     "coordinates": {
//       "latitude": 16.714514,
//       "longitude": 81.54136
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015404",
//     "district": "West Godavari",
//     "registration": "138"
//   },
//   {
//     "station_name": "COCO TADEPALLIGUDEM ADHOC DEEPTHI PETROLEUMS",
//     "address": "Sno.136, Adhoc Deepthi Petroleums Tadepalligudem, West Godavari District, A.P - 534101",
//     "coordinates": {
//       "latitude": 16.816,
//       "longitude": 81.524
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/3072024/00015456",
//     "district": "West Godavari",
//     "registration": "139"
//   },
//   {
//     "station_name": "KARTHIKEYAN FILLING STATION",
//     "address": "Ndian Oil Petrol Pump, R.S.No. 767/1, Penumantra Village, West Godavari, A.P - 534124",
//     "coordinates": {
//       "latitude": 16.6341773,
//       "longitude": 81.6639316
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015405",
//     "district": "West Godavari",
//     "registration": "140"
//   },
//   {
//     "station_name": "Sri Srinivasa Filling Station",
//     "address": "Indian Oil Dealer, Sno: 34/7c, 7d & 7e, Lock No. 11016, Velpur, Tanuku, Andhra Pradesh - 534222",
//     "coordinates": {
//       "latitude": 16.726055,
//       "longitude": 81.674967
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015406",
//     "district": "West Godavari",
//     "registration": "141"
//   },
//   {
//     "station_name": "RAO'S FUEL STATION",
//     "address": "Veeravasaram Village, Nh-214, Wg Dt, Lock No.8396/37, Andhra Pradesh - 534245",
//     "coordinates": {
//       "latitude": 16.537486,
//       "longitude": 81.634349
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015407",
//     "district": "West Godavari",
//     "registration": "142"
//   },
//   {
//     "station_name": "SRI CHANDRASEKHAR SERVICE STATION",
//     "address": "S. No. 219, Kalla Village, Kalla Lock No:110007 / 926, Andhra Pradesh - 534237",
//     "coordinates": {
//       "latitude": 16.538,
//       "longitude": 81.421483
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015408",
//     "district": "West Godavari",
//     "registration": "143"
//   },
//   {
//     "station_name": "LUCKY FILLING STATION",
//     "address": "Indian Oil Dealers, T.S.No.941/2, Palakole, West Godavari District, A.P - 532101",
//     "coordinates": {
//       "latitude": 16.513379,
//       "longitude": 81.740598
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015409",
//     "district": "West Godavari",
//     "registration": "144"
//   },
//   {
//     "station_name": "VENKATESWARA FILLING STATION",
//     "address": "Indian Oil Dealers, Sy No.439/3 & 439/2, Ravulapalem, East Godavari Dist - 533238",
//     "coordinates": {
//       "latitude": 16.697497,
//       "longitude": 81.846941
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015457",
//     "district": "East Godavari",
//     "registration": "145"
//   },
//   {
//     "station_name": "BULLEYYA REDDY'S FILLING STATION",
//     "address": "Indian Oil Dealers, Balabhadrapuram, Biccavole, Lock 11011 / 37, Andhra Pradesh - 533343",
//     "coordinates": {
//       "latitude": 16.958649,
//       "longitude": 82.008733
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015410",
//     "district": "East Godavari",
//     "registration": "146"
//   },
//   {
//     "station_name": "The Jeypore Sugars Co.Ltd",
//     "address": "(Vvs Sugars Emp.Co-Op Stores Ltd) Main Road, Lock No. 21003 / 544, Pangidi Mandal, West Godavari, Andhra Pradesh - 534342",
//     "coordinates": {
//       "latitude": 16.99934,
//       "longitude": 81.665888
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/WG/2772024/00015411",
//     "district": "West Godavari",
//     "registration": "147"
//   },
//   {
//     "station_name": "PADMAJA FILLING STATION",
//     "address": "Ap Paper Mill Road, Rajahmundry, Lock No 12011 / 252, East Godavari Dt, Andhra Pradesh - 533101",
//     "coordinates": {
//       "latitude": 17.030675,
//       "longitude": 81.77529
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015412",
//     "district": "East Godavari",
//     "registration": "148"
//   },
//   {
//     "station_name": "Veeru Agencies",
//     "address": "S.No.687-3,Lock No 11005/ 926, Palivela Village, Kothapeta, Andhra Pradesh - 533223",
//     "coordinates": {
//       "latitude": 16.697246,
//       "longitude": 81.895377
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015413",
//     "district": "East Godavari",
//     "registration": "149"
//   },
//   {
//     "station_name": "SUPERINTENTDENT OF POLICE, RAJAMAHENDRAVARAM",
//     "address": "Indian Oil Dealers,Sy.No.664, Jampeta, Rajamahendravaram,A.P- 533103",
//     "coordinates": {
//       "latitude": 17.00633,
//       "longitude": 81.777147
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015458",
//     "district": "East Godavari",
//     "registration": "150"
//   },
//   {
//     "station_name": "BHASKARA AGENCIES",
//     "address": "Indian Oil Dealers, Morampudi, Lock No.22012/ 544 & 11027 / 256, Sy.No-379/1, Morampudi Junction, Rajahmundry, East Godavari, Andhra Pradesh - 533103",
//     "coordinates": {
//       "latitude": 16.997034,
//       "longitude": 81.800637
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015459",
//     "district": "East Godavari",
//     "registration": "151"
//   },
//   {
//     "station_name": "CENTRAL PRISON - RAJAHMUNDRY",
//     "address": "Sy.No-107/3a, Lalacheruvu Y Junction Road, Superintendent Of Jails, Central Prison, Andhra Pradesh - 533105",
//     "coordinates": {
//       "latitude": 17.0167,
//       "longitude": 81.7937
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015448",
//     "district": "East Godavari",
//     "registration": "152"
//   },
//   {
//     "station_name": "SWATANTRA AGENCIES",
//     "address": "Indian Oil Dealers, Rajahmundry, Lock No. 22011 / 544, Andhra Pradesh - 533105",
//     "coordinates": {
//       "latitude": 17.013412,
//       "longitude": 81.778188
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015414",
//     "district": "East Godavari",
//     "registration": "153"
//   },
//   {
//     "station_name": "COCO RAMDASUPETA-ADHOC BHASKARA AGE",
//     "address": "Indian Oil Petrol Pump, Ramadasupeta, Rajahmundry, A.P- 533105",
//     "coordinates": {
//       "latitude": 17.036886,
//       "longitude": 81.790943
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015415",
//     "district": "East Godavari",
//     "registration": "154"
//   },
//   {
//     "station_name": "SWAMY AUTO CARE",
//     "address": "Indian Oil Dealers, S.No.92/2 & 92/3, Nadakuduru, Andhra Pradesh - 533016",
//     "coordinates": {
//       "latitude": 16.917007,
//       "longitude": 82.207681
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015416",
//     "district": "East Godavari",
//     "registration": "155"
//   },
//   {
//     "station_name": "SRI GAYATRI MANIKANTA AGENCIES",
//     "address": "Indian Oil Dealers, Sivakodu, Razole- Lock No.22024/544, Andhra Pradesh - 533244",
//     "coordinates": {
//       "latitude": 16.462971,
//       "longitude": 81.815678
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015417",
//     "district": "East Godavari",
//     "registration": "156"
//   },
//   {
//     "station_name": "Sri Rama Fuels",
//     "address": "Indian Oil Dealer, Sy No: 36-5 & 36-4-C1, Sivakodu, Razole Mandal, East Godavari- 533244",
//     "coordinates": {
//       "latitude": 16.456182,
//       "longitude": 81.799734
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015460",
//     "district": "East Godavari",
//     "registration": "157"
//   },
//   {
//     "station_name": "VENKAT RAMANN & CO.",
//     "address": "Indian Oil Dealers S.No.277/1, Malkipuram Mandal, Kesanapalli, East Godavari Dist, A.P - 533244",
//     "coordinates": {
//       "latitude": 16.40801,
//       "longitude": 81.893101
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015418",
//     "district": "East Godavari",
//     "registration": "158"
//   },
//   {
//     "station_name": "PRAVEEN VAMSI AGENCIES",
//     "address": "Indian Oil Dealers, S.No.146/3, Appanapalli (V), Mamidikuduru(M), East Godavari - 533247",
//     "coordinates": {
//       "latitude": 16.521977,
//       "longitude": 81.930617
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015419",
//     "district": "East Godavari",
//     "registration": "159"
//   },
//   {
//     "station_name": "RENUKA ENTERPRISES",
//     "address": "R.S.No.342/5, Peddapuram, Lock No. 11022 /926, Samaralakota, Andhra Pradesh - 533437",
//     "coordinates": {
//       "latitude": 17.06351,
//       "longitude": 82.16194
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3072024/00015461",
//     "district": "East Godavari",
//     "registration": "160"
//   },
//   {
//     "station_name": "TIRUMALA AGENCIES",
//     "address": "Indian Oil Dealers, Peddapuram Town, Lock No:13005 /252 & 23002/544, Andhra Pradesh - 533437",
//     "coordinates": {
//       "latitude": 17.080927,
//       "longitude": 82.128613
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015420",
//     "district": "East Godavari",
//     "registration": "161"
//   },
//   {
//     "station_name": "SRI AMRUTHA ENTERPRISES",
//     "address": "Indian Oil Dealers, S.No.162/2b, 162/9c, Anuru, Peddapuram, Andhra Pradesh - 533437",
//     "coordinates": {
//       "latitude": 17.079497,
//       "longitude": 82.14108
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015421",
//     "district": "East Godavari",
//     "registration": "162"
//   },
>>>>>>> fff6d8cc7924fc5f9128777073211aca8aade706

//   {
//     "station_name": "SRI AMRUTHA ENTERPRISES",
//     "address": "Indian Oil Dealers, S.No.162/2b, 162/9c, Anuru, Peddapuram, Andhra Pradesh - 533437",
//     "coordinates": {
//       "latitude": 17.079497,
//       "longitude": 82.14108
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015421",
//     "district": "East Godavari",
//     "registration": "162"
//   },
//   {
//     "station_name": "SATYAVENI FUEL FILLING STATION",
//     "address": "Gandhi Statue To Pithapuram Rd, Near Brown Peta, Samarlakota, Andhra Pradesh - 533440",
//     "coordinates": {
//       "latitude": 17.063784,
//       "longitude": 82.17849
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3172024/00015462",
//     "district": "East Godavari",
//     "registration": "163"
//   },
//   {
//     "station_name": "APSP Fuel Station",
//     "address": "Indian Oil Dealers, Rs.No.15/1, Peddapuram Village, Peddapuram Mandal - 533437",
//     "coordinates": {
//       "latitude": 17.082308,
//       "longitude": 82.079496
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015422",
//     "district": "East Godavari",
//     "registration": "164"
//   },
//   {
//     "station_name": "SREE PRASAD FILLING STATION",
//     "address": "Indian Oil Dealers, Sy No.105/1, D.No.4-1 Rekhavanipalem Village, Tuni Mandal, A.P - 533401",
//     "coordinates": {
//       "latitude": 17.3773,
//       "longitude": 82.5413
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015423",
//     "district": "East Godavari",
//     "registration": "165"
//   },
//   {
//     "station_name": "SRI VENKATA SAI AGENCIES",
//     "address": "Survey No.62/762/8, Kotanandur Village, Andhra Pradesh - 533407",
//     "coordinates": {
//       "latitude": 17.468191,
//       "longitude": 82.502716
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015425",
//     "district": "East Godavari",
//     "registration": "166"
//   },
//   {
//     "station_name": "RAMAKRISHNA FILLING STATION",
//     "address": "Sy.No-841, Near Danvaipeta Ontimamidada, Thondangi Mandal, Andhra Pradesh - 533408",
//     "coordinates": {
//       "latitude": 17.221535,
//       "longitude": 82.47293
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2772024/00015426",
//     "district": "East Godavari",
//     "registration": "167"
//   },
//   {
//     "station_name": "ADITYA AGENCIES",
//     "address": "S.No. 416/1 & 416/3, Yeleshwaram Village, Yeleshwaram Mandal, A.P - 533429",
//     "coordinates": {
//       "latitude": 17.279121,
//       "longitude": 82.107374
//     },
//     "capacity": "100-120kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/3172024/00015463",
//     "district": "East Godavari",
//     "registration": "168"
//   },
//   {
//     "station_name": "SRI SHIRIDI SAI PETROLEUM",
//     "address": "S.No.211/3p, Birusuwada Village, Sompeta Md, Andhra Pradesh - 532216",
//     "coordinates": {
//       "latitude": 18.956109,
//       "longitude": 84.578731
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/SR/2772024/00015427",
//     "district": "Srikakulam",
//     "registration": "169"
//   },
//   {
//     "station_name": "RADHA KRISHNA FILLING STATION",
//     "address": "S.No.252, Chapara Village, Meliaputti Mandal, Srikakulam, Andhra Pradesh - 532284",
//     "coordinates": {
//       "latitude": 18.770626,
//       "longitude": 84.190242
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/SR/2772024/00015428",
//     "district": "Srikakulam",
//     "registration": "170"
//   },
//   {
//     "station_name": "SUPERINTENDENT OF POLICE SRIKAKULAM",
//     "address": "S No.234, Ward No.24, Potti Sriramulu Junction, Srikakulam - 532001",
//     "coordinates": {
//       "latitude": 18.29615,
//       "longitude": 83.8952
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/SR/2772024/00015429",
//     "district": "Srikakulam",
//     "registration": "171"
//   },
//   {
//     "station_name": "Steel City Petro Filling Station",
//     "address": "S.No. 21-4, Agnampudi, Agnampudi, Agnampudi, Visakhapatnam, 531021",
//     "coordinates": {
//       "latitude": 17.688045,
//       "longitude": 83.14166
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2792024/00021291",
//     "district": "Visakhapatnam",
//     "registration": "1"
//   },
//   {
//     "station_name": "Sri Kota sakthi Filling Station",
//     "address": "S.No. 849/2, Nidadavolu, Nidadavolu Mandal, Nidadavolu, West Godavari, 534201",
//     "coordinates": {
//       "latitude": 16.906696,
//       "longitude": 81.66442
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/1672024/00015334",
//     "district": "West Godavari",
//     "registration": "2"
//   },
//   {
//     "station_name": "DSR Energy Station",
//     "address": "S.No. 7-1G, 7-1G-1A, Yerravaram Village, Yellamanchili Mandal, Yerravaram Village, Anakapalli, 531055",
//     "coordinates": {
//       "latitude": 17.637852,
//       "longitude": 82.89995
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/VS/2792024/00021292",
//     "district": "Anakapalli",
//     "registration": "3"
//   },
//   {
//     "station_name": "Sri Balaji Agencies",
//     "address": "S.No.T.S 501/1, (Old T.S.No-70, Ward No-5), Kakinada, Kakinada, Kakinada, Kakinada, 533001",
//     "coordinates": {
//       "latitude": 16.954213,
//       "longitude": 82.23153
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/1672024/00015335",
//     "district": "Kakinada",
//     "registration": "4"
//   },
//   {
//     "station_name": "Sree Suryaprakash Service Station",
//     "address": "S.No. 173/B, Rajahmundry Lalacheruvu National, Lalcheruvu, Rajahmundry, East Godavari, 533103",
//     "coordinates": {
//       "latitude": 17.027302,
//       "longitude": 81.80804
//     },
//     "capacity": "50-60kW",
//     "number_of_chargers": 1,
//     "application_number": "NREDCAP/EVCI/EG/2792024/00021293",
//     "district": "East Godavari",
//     "registration": "5"
//   },
//     {
//       "station_name": "Sri Balaji Agencies",
//       "address": "S.No.T.S 501/1, (Old T.S.No-70, Ward No-5), Kakinada, Kakinada, Kakinada, Kakinada, 533001",
//       "coordinates": {
//         "latitude": 16.954213,
//         "longitude": 82.23153
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1672024/00015335",
//       "district": "Kakinada",
//       "registration": "4"
//     },
//     {
//       "station_name": "Sree Suryaprakash Service Station",
//       "address": "S.No. 173/B, Rajahmundry Lalacheruvu National, Lalcheruvu, Rajahmundry, East Godavari, 533103",
//       "coordinates": {
//         "latitude": 17.027302,
//         "longitude": 81.80804
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2792024/00021293",
//       "district": "East Godavari",
//       "registration": "5"
//     },
//     {
//       "station_name": "Sree S.V.Agencies",
//       "address": "S.No. 338lP39/88-, Peddapuram-Samalkot Road, Peddapuram, Peddapuram, Kakinada, 533437",
//       "coordinates": {
//         "latitude": 17.069449,
//         "longitude": 82.15375
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1672024/00015341",
//       "district": "Kakinada",
//       "registration": "12"
//     },
//     {
//       "station_name": "Srikakulam Ser Stn.",
//       "address": "123, S.No. -234/11, New S.No21/9,21/10,21/11, Pedapadu, Srikakulam Mandal, Peddapadu, Srikakulam, 532001",
//       "coordinates": {
//         "latitude": 18.323172,
//         "longitude": 83.93741
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/SR/2792024/00021295",
//       "district": "Srikakulam",
//       "registration": "13"
//     },
//     {
//       "station_name": "Baalaji Agencies",
//       "address": "S.No.6-8 & 6-9, Kotakki Village, Vizianagaram, Saluru, Parvathipuram Manyam, 535591",
//       "coordinates": {
//         "latitude": 18.510277,
//         "longitude": 83.22103
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/2472024/00015369",
//       "district": "Parvathipuram Manyam",
//       "registration": "14"
//     },
//     {
//       "station_name": "Venkatesawara Petro Products",
//       "address": "S.No. 219/2A2B & 220/1A2, Talluru, Gandepalli, Talluru Village, Kakinada, 533297",
//       "coordinates": {
//         "latitude": 17.157892,
//         "longitude": 82.01782
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/AN/1772024/00015343",
//       "district": "Srikakulam",
//       "registration": "15"
//     },
//     {
//       "station_name": "Sri Lakshmi Narasimha Petro Station",
//       "address": "S.No. 219/1, Tetagunta Village, Tuni, Tetagunta, Kakinada, 533406",
//       "coordinates": {
//         "latitude": 17.302196,
//         "longitude": 82.43532
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1772024/00015344",
//       "district": "Srikakulam",
//       "registration": "16"
//     },
//     {
//       "station_name": "Vizag Automobiles Service Station",
//       "address": "S.No. 167/1,166/2, Paradesipalem, Visakhapatnam, Visakhapatnam, Visakhapatnam, 530040",
//       "coordinates": {
//         "latitude": 17.832658,
//         "longitude": 83.35817
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/2792024/00021296",
//       "district": "Visakhapatnam",
//       "registration": "17"
//     },
//     {
//       "station_name": "Satya Maheswari Agencies",
//       "address": "S.No. 188/11A-1, Bhogapuram, Bhogapuram, Bhogapuram, Vizianagaram, 535216",
//       "coordinates": {
//         "latitude": 18.026718,
//         "longitude": 83.49138
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VZ/25112024/00024043",
//       "district": "Vizianagaram",
//       "registration": "18"
//     },
//     {
//       "station_name": "SNJR Petro Filling Station",
//       "address": "S.No. 1/4A, Thadi Village, Parwada Amandal, Anakapalli, Visakhapatnam, 531019",
//       "coordinates": {
//         "latitude": 17.687017,
//         "longitude": 83.08009
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/VS/4102024/00021297",
//       "district": "Visakhapatnam",
//       "registration": "19"
//     },
//     {
//       "station_name": "JP's Oil Filling Station",
//       "address": "S.No. 7/2B1, Borrampalem Village, Gandepalle, Gandepalli, Kakinada, 533435",
//       "coordinates": {
//         "latitude": 17.138394,
//         "longitude": 81.97283
//       },
//       "capacity": "50-60kW",
//       "number_of_chargers": 1,
//       "application_number": "NREDCAP/EVCI/EG/1772024/00015346",
//       "district": "Kakinada",
//       "registration": "20"
//     },
//   ],
//   };

//   const randomPhone = () =>
//     Math.floor(9000000000 + Math.random() * 1000000000).toString();

//   const stationsArray = evStationsData.ev_stations.map((st, index) => {
//     const portCount = Math.floor(Math.random() * 3) + 2;
//     const ports = Array.from({ length: portCount }).map((_, portIndex) => ({
//       connectorType: portIndex % 2 === 0 ? "CCS2" : "Type 2",
//       billingAmount: 0.0,
//       connectorId: portIndex + 1,
//       "power capacity": 60.0,
//       connectorName: `port-${portIndex + 1}`,
//       "billing units": "kWh",
//       portId: 240 + portIndex + index * 10,
//       statusNotifications: [
//         {
//           statusId: 240 + portIndex + index * 10,
//           lastContactedTime: null,
//           status: portIndex % 2 === 0 ? "Available" : "Charging",
//         },
//       ],
//       powerType: portIndex % 2 === 0 ? "DC" : "AC",
//     }));

//     return {
//       "serial number": `${Math.floor(Math.random() * 9000000) + 1000000}`,
//       "current Type": "AC",
//       stationName: st.station_name,
//       ports,
//       "last heartbeat": Date.now(),
//       stationId: parseInt(st.registration),
//       status: index % 2 === 0 ? "Active" : "Inactive",
//     };
//   });

//   const formatted = evStationsData.ev_stations.map((st, index) => ({
//     managerEmail:
//       `${st.station_name.split(" ")[0].toLowerCase()}@station.com`.replace(
//         /[^a-zA-Z0-9@.]/g,
//         ""
//       ),
//     totalPorts: 4,
//     totalStations: 1,
//     managerPhone: randomPhone(),
//     availablePorts: 2,
//     siteId: parseInt(st.registration),
//     siteName: st.station_name,
//     ownerOrgId: 299,
//     locations: [
//       {
//         address: st.address,
//         latitude: st.coordinates.latitude.toString(),
//         longitude: st.coordinates.longitude.toString(),
//       },
//     ],
//     stations: [stationsArray[index]],
//     managerName: st.station_name.split(" ")[0],
//     ownerId: 0,
//   }));

//   return formatted;
// };

