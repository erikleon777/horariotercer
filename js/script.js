document.addEventListener("DOMContentLoaded", function () {
    // Datos de las materias
    const materias = {
        "MED301": { nombre: "MED 301 - FISIOPATOLOGÍA", grupos: 4, subgrupos: 1 },
        "MED304": { nombre: "MED 304 - INFECTOLOGÍA Y MEDICINA TRADICIONAL", grupos: 4, subgrupos: 5 },
        "CIR305": { nombre: "CIR 305 - CIRUGÍA I", grupos: 4, subgrupos: 5 },
        "MED302": { nombre: "MED 302 - SEMIOLOGÍA GENERAL", grupos: 6, subgrupos: 5 },
        "MED303": { nombre: "MED 303 - FARMACOLOGÍA Y TERAPÉUTICA MÉDICA", grupos: 6, subgrupos: 4 },
        "SAP300": { nombre: "SAP 300 - SALUD PÚBLICA III", grupos: 3, subgrupos: 1 }
    };

    // Horarios específicos para cada materia, grupo y subgrupo
        const horariosMaterias = {
        "MED301": { // Código de la materia
            "A1": { 
                "Lunes": ["19:45 - 20:30", "20:30 - 21:15"], 
                "Jueves": ["19:45 - 20:30", "20:30 - 21:15"], 
            },
          "B1": { 
                "Lunes": ["21:15 - 22:00", "22:00 - 22:45"],
                "Jueves": ["21:15 - 22:00", "22:00 - 22:45"],
         },
        "C1": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Jueves": ["13:45 - 14:30", "14:30 - 15:15"], 
        },
        "D1": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"],
                "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],
        },
  },
        "MED304": { // Código de la materia
            "A1": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],
               }, 
            "A2": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],
               },
             "A3": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Martes": ["08:30 - 09:15", "09:15 - 10:00"],         
},
            "A4": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],             },   
            "A5": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15", "08:30 - 09:15", "09:15 - 10:00"],
 },             
             "B1": { 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
                "Lunes": ["07:00 - 07:45", "07:45 - 08:30"],
               },   
             "B2": { 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],
                },   
             "B3": { 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"],
                }, 
             "B4": { 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "07:00 - 07:45", "07:45 - 08:30"],
                }, 
             "B5": { 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
                "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
                }, 
             "C1": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],             
               },
          "C2": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30", "08:30 - 09:15", "09:15 - 10:00"],
               },
          "C3": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],
               },
          "C4": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],
               },
          "C5": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Viernes": ["08:30 - 09:15", "09:15 - 10:00"],
               },
          "D1": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],             
            },
          "D2": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Martes": ["08:30 - 09:15", "09:15 - 10:00"],             },
          "D3": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],               },
          "D4": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
                "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],               },
          "D5": { 
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15", "08:30 - 09:15", "09:15 - 10:00"],
          },
           },
            "CIR305": { // Código de la materia
            "A1": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"],
            },
            "A2": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"],   
             },
            "A3": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],
               },
            "A4": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"], 
               },
            "A5": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Viernes": ["15:15 - 16:00",
        "16:00 - 16:45"], 
              },
            "B1": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],
              },
            "B2": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45", "07:00 - 07:45", "07:45 - 08:30"],
               },
            "B3": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45"],
            "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],  
              },
            "B4": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45"],
            "Martes": ["07:00 - 07:45", "07:45 - 08:30"],  
              },
            "B5": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45"],
            "Jueves": ["07:00 - 07:45", "07:45 - 08:30"],  
              },
            "C1": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
            },
            "C2": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
            "Jueves": ["15:15 - 16:00", "16:00 - 16:45"],   
              },
            "C3": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
            },
            "C4": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["16:45 - 17:30", "17:30 - 18:15"],
            },
            "C5": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["15:15 - 16:00", "16:00 - 16:45"],
            },
            "D1": { 
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "08:30 - 09:15", "09:15 - 10:00"],
            },
            "D2": { 
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
            "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],
              },
            "D3": { 
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
              },
            "D4": { 
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
            "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],
              },
            "D5": { 
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00"],
              },
           },
            "MED302": { // Código de la materia
            "A1": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Sábado": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30"],
            },
            "A2": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Martes": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30"], 
             },
            "A3": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Sábado": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"], 
               },
            "A4": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30"],
               },
            "A5": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Viernes": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30"],
              },
            "B1": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
            "Viernes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
              },
            "B2": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
            "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
               },
            "B3": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"], 
              },
            "B4": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
              },
            "B5": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45"],
            "Viernes": ["11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45"],

              },
            "C1": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
            "Lunes": ["15:15 - 16:00",
        "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
            },
            "C2": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
            "Martes": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],  
              },
            "C3": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
            "Jueves": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],  
            },
            "C4": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
            },
            "C5": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
      },          
            "D1": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
            },
            "D2": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
              },
            "D3": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "D4": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
              },
            "D5": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
         },
            "E1": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
            },
            "E2": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Sábado": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "E3": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "E4": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
              },
            "E5": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
         },
            "F1": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
            },
            "F2": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
            "Sábado": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
              },
            "F3": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
            "Sábado": ["09:15 - 10:00","10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45"],
              },
            "F4": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
            "Viernes": ["18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],
              },
            "F5": { 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],
         },
           },
            "MED303": { // Código de la materia
            "A1": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"], 
          },
            "A2": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30", "15:15 - 16:00", "16:00 - 16:45"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],
           },
            "A3": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30", "10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],   
           },
            "A4": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],   
           },
            "B1": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Martes": ["07:00 - 07:45", "07:45 - 08:30"],
              },
            "B2": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Jueves": ["07:00 - 07:45", "07:45 - 08:30"],
               },
            "B3": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45", "16:45 - 17:30", "17:30 - 18:15"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
               },
            "C1": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["16:45 - 17:30", "17:30 - 18:15"],
              },
            "C2": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "C3": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["15:15 - 16:00", "16:00 - 16:45"],  
             },
            "D1": { 
            "Miércoles": ["11:30 - 12:15", "12:15 - 13:00"],
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"], 
              },
            "D2": { 
            "Miércoles": ["11:30 - 12:15", "12:15 - 13:00"],
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "10:00 - 10:45", "10:45 - 11:30"],
               },
            "D3": { 
            "Miércoles": ["11:30 - 12:15", "12:15 - 13:00"],
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "11:30 - 12:15", "12:15 - 13:00"], 
               },
            "E1": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["16:45 - 17:30", "17:30 - 18:15"], 
              },
            "E2": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "E3": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["15:15 - 16:00", "16:00 - 16:45"],
               },
            "F1": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["16:45 - 17:30", "17:30 - 18:15"], 
                },
            "F2": { 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
           },
            "SAP300": { // Código de la materia
            "A1": { 
            "Miércoles": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
              },
              "B1": { 
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"],
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],
          },
              "C1": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],     
          }, 
        }
        
        // ... (resto de los horarios de las materias)
    };

    // Textos personalizados para cada materia, grupo y subgrupo
    const textosPersonalizados = {
        "MED301": {
            "A1": "Dr. Aguilar",
	        "B1": "Dr. Aguilar",
            "C1": "Dra. Maida Vargas",
            "D1": "Dr. Dorado",
            // Agrega más textos para otros grupos y subgrupos
        },
        "MED304": {
            "A1": "Invitado",
            "A2": "Invitado",
            "A3": "Invitado",
            "A4": "Invitado",
            "A5": "Invitado",
	        "B1": "Dr. Saavedra",
	        "B2": "Dr. Saavedra",
            "B3": "Dr. Saavedra",
	        "B4": "Dr. Saavedra",
	        "B5": "Dr. Saavedra",
	        "C1": "Dr. Saavedra",
	        "C2": "Dr. Saavedra",
            "C3": "Dr. Saavedra",
	        "C4": "Dr. Saavedra",
	        "C5": "Dr. Saavedra",
            "D1": "Invitado",
            "D2": "Invitado",
            "D3": "Invitado",
            "D4": "Invitado",
            "D5": "Invitado",
            // Agrega más textos para otros grupos y subgrupos
},
        "CIR305": {
            "A1": "Dr. Coronado",
            "A2": "Dr. Coronado",
            "A3": "Dr. Coronado",
            "A4": "Dr. Coronado",
            "A5": "Dr. Coronado",
	        "B1": "Dr. Aguilar",
	        "B2": "Dr. Aguilar",
            "B3": "Dr. Aguilar",
	        "B4": "Dr. Aguilar",
	        "B5": "Dr. Aguilar",
	        "C1": "Dr. Reinerio Vargas",
	        "C2": "Dr. Reinerio Vargas",
            "C3": "Dr. Reinerio Vargas",
	        "C4": "Dr. Reinerio Vargas",
	        "C5": "Dr. Reinerio Vargas",
            "D1": "Dr. Aguilar",
            "D2": "Dr. Aguilar",
            "D3": "Dr. Aguilar",
            "D4": "Dr. Aguilar",
            "D5": "Dr. Aguilar",
            // Agrega más textos para otros grupos y subgrupos
},
        "MED302": {
            "A1": "Dr. Terrazas",
            "A2": "Dr. Terrazas",
            "A3": "Dr. Terrazas",
            "A4": "Dr. Terrazas",
            "A5": "Dr. Terrazas",
	        "B1": "Dr. Arce",
	        "B2": "Dr. Arce",
            "B3": "Dr. Arce",
	        "B4": "Dr. Arce",
	        "B5": "Dr. Arce",
	        "C1": "Dra. Panozo",
	        "C2": "Dra. Panozo",
            "C3": "Dra. Panozo",
	        "C4": "Dra. Panozo",
	        "C5": "Dra. Panozo",
            "D1": "Invitado",
            "D2": "Invitado",
            "D3": "Invitado",
            "D4": "Invitado",
            "D5": "Invitado",
            "E1": "Invitado",
            "E2": "Invitado",
            "E3": "Invitado",
            "E4": "Invitado",
            "E5": "Invitado",
            "F1": "Dr. Anzoategui",
            "F2": "Dr. Anzoategui",
            "F3": "Dr. Anzoategui",
            "F4": "Dr. Anzoategui",
            "F5": "Dr. Anzoategui",
},
        "MED303": {
            "A1": "Dr. Von Borries",
            "A2": "Dr. Von Borries",
            "A3": "Dr. Von Borries",
            "A4": "Dr. Von Borries",
	        "B1": "Dr. Von Borries",
	        "B2": "Dr. Von Borries",
            "B3": "Dr. Von Borries",
	        "C1": "Dra. Dajer Erika",
	        "C2": "Dra. Dajer Erika",
            "C3": "Dra. Dajer Erika",
            "D1": "Dra. Dajer Erika",
            "D2": "Dra. Dajer Erika",
            "D3": "Dra. Dajer Erika",
            "E1": "Invitado",
            "E2": "Invitado",
            "E3": "Invitado",
            "F1": "Invitado",
            "F2": "Invitado",
            "F3": "Invitado",
            // Agrega más textos para otros grupos y subgrupos
},
        "SAP300": {
            "A1": "Dr. Sánchez",
	        "B1": "Dr. Méndez",
            "C1": "Dra. Zambrana",
 
            // Agrega más textos para otros grupos y subgrupos

            // Agrega más textos para otros grupos y subgrupos

        },
        // Agrega más materias y sus textos personalizados
    };

    // Horarios disponibles
    const horarios = [
        "07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00",
        "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00",
        "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00",
        "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00",
        "22:00 - 22:45"
    ];

    // Días de la semana (incluyendo Sábado)
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Elementos del DOM
    const seleccionMaterias = document.getElementById("seleccionMaterias");
    const botonMostrarHorario = document.getElementById("mostrarHorario");
    const tabla = document.getElementById("horario");

    // Generar checkboxes para seleccionar materias
    for (const codigo in materias) {
        const materia = materias[codigo];

        // Crear contenedor para la materia
        const contenedorMateria = document.createElement("div");
        contenedorMateria.classList.add("contenedor-materia");

        // Checkbox para la materia
        const labelMateria = document.createElement("label");
        const checkboxMateria = document.createElement("input");
        checkboxMateria.type = "checkbox";
        checkboxMateria.value = codigo;
        checkboxMateria.id = `materia-${codigo}`;
        checkboxMateria.addEventListener("change", function () {
            actualizarGrupos(codigo);
        });
        labelMateria.appendChild(checkboxMateria);
        labelMateria.appendChild(document.createTextNode(materia.nombre));
        contenedorMateria.appendChild(labelMateria);

        // Contenedor para grupos y subgrupos
        const contenedorGrupos = document.createElement("div");
        contenedorGrupos.id = `grupos-${codigo}`;
        contenedorGrupos.style.display = "none"; // Ocultar inicialmente
        contenedorMateria.appendChild(contenedorGrupos);

        seleccionMaterias.appendChild(contenedorMateria);
    }

    // Función para actualizar los grupos de una materia seleccionada
    function actualizarGrupos(codigo) {
        const contenedorGrupos = document.getElementById(`grupos-${codigo}`);
        const checkboxMateria = document.getElementById(`materia-${codigo}`);

        if (checkboxMateria.checked) {
            contenedorGrupos.innerHTML = ""; // Limpiar grupos anteriores

            const materia = materias[codigo];
            for (let i = 0; i < materia.grupos; i++) {
                const grupo = String.fromCharCode(65 + i); // A, B, C, ...

                // Checkbox para el grupo
                const labelGrupo = document.createElement("label");
                const checkboxGrupo = document.createElement("input");
                checkboxGrupo.type = "checkbox";
                checkboxGrupo.value = grupo;
                checkboxGrupo.id = `grupo-${codigo}-${grupo}`;
                checkboxGrupo.addEventListener("change", function () {
                    actualizarSubgrupos(codigo, grupo);
                });
                labelGrupo.appendChild(checkboxGrupo);
                labelGrupo.appendChild(document.createTextNode(`Grupo ${grupo}`));
                contenedorGrupos.appendChild(labelGrupo);

                // Contenedor para subgrupos
                const contenedorSubgrupos = document.createElement("div");
                contenedorSubgrupos.id = `subgrupos-${codigo}-${grupo}`;
                contenedorSubgrupos.style.display = "none"; // Ocultar inicialmente
                contenedorGrupos.appendChild(contenedorSubgrupos);
            }

            contenedorGrupos.style.display = "block"; // Mostrar grupos
        } else {
            contenedorGrupos.style.display = "none"; // Ocultar grupos si la materia no está seleccionada
        }
    }

    // Función para actualizar los subgrupos de un grupo seleccionado
    function actualizarSubgrupos(codigo, grupo) {
        const contenedorSubgrupos = document.getElementById(`subgrupos-${codigo}-${grupo}`);
        const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

        if (checkboxGrupo.checked) {
            contenedorSubgrupos.innerHTML = ""; // Limpiar subgrupos anteriores

            const materia = materias[codigo];
            for (let j = 1; j <= materia.subgrupos; j++) {
                const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...

                // Checkbox para el subgrupo
                const labelSubgrupo = document.createElement("label");
                const checkboxSubgrupo = document.createElement("input");
                checkboxSubgrupo.type = "checkbox";
                checkboxSubgrupo.value = subgrupo;
                checkboxSubgrupo.id = `subgrupo-${codigo}-${grupo}-${j}`;
                labelSubgrupo.appendChild(checkboxSubgrupo);
                labelSubgrupo.appendChild(document.createTextNode(subgrupo)); // Solo el código del subgrupo
                contenedorSubgrupos.appendChild(labelSubgrupo);
            }

            contenedorSubgrupos.style.display = "block"; // Mostrar subgrupos
        } else {
            contenedorSubgrupos.style.display = "none"; // Ocultar subgrupos si el grupo no está seleccionado
        }
    }

    // Función para generar la tabla de horarios
    function generarTabla() {
        tabla.innerHTML = ""; // Limpiar tabla

        // Crear fila de días
        const filaDias = document.createElement("tr");
        filaDias.appendChild(document.createElement("th")); // Celda vacía para los horarios
        dias.forEach(dia => {
            const th = document.createElement("th");
            th.textContent = dia;
            filaDias.appendChild(th);
        });
        tabla.appendChild(filaDias);

        // Crear filas de horarios
        horarios.forEach(horario => {
            const fila = document.createElement("tr");
            const th = document.createElement("th");
            th.textContent = horario;
            fila.appendChild(th);

            dias.forEach(dia => {
                const td = document.createElement("td");

                let contenido = "";
                let horariosCruzados = []; // Para detectar horarios cruzados

                for (const codigo in materias) {
                    const materia = materias[codigo];
                    const checkboxMateria = document.getElementById(`materia-${codigo}`);

                    if (checkboxMateria.checked) {
                        for (let i = 0; i < materia.grupos; i++) {
                            const grupo = String.fromCharCode(65 + i); // A, B, C, ...
                            const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

                            if (checkboxGrupo.checked) {
                                for (let j = 1; j <= materia.subgrupos; j++) {
                                    const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...
                                    const checkboxSubgrupo = document.getElementById(`subgrupo-${codigo}-${grupo}-${j}`);

                                    if (checkboxSubgrupo.checked) {
                                        // Verificar si hay horarios específicos para este subgrupo y día
                                        const horariosEspecificos = horariosMaterias[codigo]?.[subgrupo]?.[dia];
                                        if (horariosEspecificos && horariosEspecificos.includes(horario)) {
                                            contenido += `<strong>${materia.nombre}</strong><br>`;
                                            contenido += `${subgrupo}<br>`; // Solo el código del subgrupo

                                            // Agregar texto personalizado si existe
                                            const textoPersonalizado = textosPersonalizados[codigo]?.[subgrupo];
                                            if (textoPersonalizado) {
                                                contenido += `${textoPersonalizado}<br>`;
                                            }

                                            horariosCruzados.push({ materia: materia.nombre, subgrupo });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Si hay más de un horario cruzado, destacar en rojo
                if (horariosCruzados.length > 1) {
                    td.style.backgroundColor = "#ffcccc"; // Fondo rojo
                    contenido = horariosCruzados.map(h => `<strong>${h.materia}</strong><br>${h.subgrupo}`).join("<br>");
                }

                td.innerHTML = contenido;
                fila.appendChild(td);
            });

            tabla.appendChild(fila);
        });
    }

    // Event listener para el botón "Mostrar/Ocultar Horario"
    botonMostrarHorario.addEventListener("click", function () {
        generarTabla();
    });

    // Generar tabla inicial vacía
    generarTabla();
});