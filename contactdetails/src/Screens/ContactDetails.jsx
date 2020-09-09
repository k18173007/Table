import React from 'react'

export const Patients = [
    {
      id: 1,
      patientName: "Ramesh",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 1,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 2,
      patientName: "Suresh",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 2,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 3,
      patientName: "Ram",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 3,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 4,
      patientName: "Shyam",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 4,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 5,
      patientName: "Hari",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 5,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 6,
      patientName: "Nishant",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 6,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
    {
      id: 7,
      patientName: "Ujjawal",
      case: "Accident",
      patientAge: 20,
      guardianMobileNo: 9898989898,
      plevel: 5,
      driverId: 7,
      permission: false,
      active: true,
      polyline: "123",
      driverLocation: "123",
      destinationLocation: "123",
      time:"5:00",
      requestTime:"4:00",
      hospitalName: "Trauma Center",

    },
  ];
  
  export const Hospitals = [
    {
      id: 1,
      hospitalName: "Trauma Center",
      hospitalCode: "TCVNS21005",
      password: "123",
      hospitalLocation: "123",
      hospitalAddress: "Banaras Hindu University, Varanasi, UP, 221005",
      contact: 9898656565,
      email: "abc@abc.com",
    },
    {
      id: 2,
      hospitalName: "SundarLal",
      hospitalCode: "SLVNS21005",
      password: "123",
      hospitalLocation: "123",
      hospitalAddress: "Banaras Hindu University, Varanasi, UP, 221005",
      contact: 9898656565,
      email: "abc@abc.com",
    },
  ];
  
  export const Drivers = [
    {
      id: 1,
      DriverName: "Rajini",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 2,
      DriverName: "Nithish",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 3,
      DriverName: "Sudeep",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 4,
      DriverName: "Rajini",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 5,
      DriverName: "Saikiran",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 6,
      DriverName: "Harish",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 7,
      DriverName: "Ravi",
      driverContact: 9898989899,
      hospitalId: 1,
      driverLicense: "123",
    },
    {
      id: 8,
      DriverName: "Rajini",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 9,
      DriverName: "Nithish",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 10,
      DriverName: "Sudeep",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 11,
      DriverName: "Rajini",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 12,
      DriverName: "Saikiran",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 13,
      DriverName: "Harish",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
    {
      id: 14,
      DriverName: "Ravi",
      driverContact: 9898989899,
      hospitalId: 2,
      driverLicense: "123",
    },
  ];
  


export const Request=[

    {
        id:1,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:2,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:3,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:4,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:4,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:4,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:4,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },
    {
        id:4,
        ReqTime:"06:30",
        Time:"13-8",
        DriverName:"Krishna",
        HospitalName:"Troma Center",
        PatientCase:"Heart Attack",
        PatientName:"Ankit",
        level:4
    },


]


export const Save=[
  

    // {
    //     id:1,
    //     ReqTime:"06:30",
    //     Time:"13-8",
    //     DriverName:"Krishna",
    //     HospitalName:"Troma Center",
    //     PatientCase:"Heart Attack",
    //     PatientName:"Ankit",
    //     level:4
    // },
    

]


export const Granted=[

    
    

]
export const Rejected=[

   

]
export const Details=[

    {
        
    },
    

]

export const Patient=[
  {
    id: 1,
    patientName: "Ramesh",
    case: "Accident",
    patientAge: 20,
    guardianMobileNo: 9898989898,
    plevel: 5,
    driverId: 1,
    permission: false,
    active: true,
    polyline: "123",
    driverLocation: "123",
    destinationLocation: "123",
    time:"5:00",
    requestTime:"4:00",
      hospitalName: "Trauma Center",

  },
]
export const Hospital=[
  {
    id: 2,
    hospitalName: "SundarLal",
    hospitalCode: "SLVNS21005",
    password: "123",
    hospitalLocation: "123",
    hospitalAddress: "Banaras Hindu University, Varanasi, UP, 221005",
    contact: 9898656565,
    email: "abc@abc.com",
  },
]
export const Driver=[
  {
    id: 8,
    DriverName: "Rajini",
    driverContact: 9898989899,
    hospitalId: 2,
    driverLicense: "123",
  },
]

export const items=[
  
]