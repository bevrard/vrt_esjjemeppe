var APP_DATA = {
  "scenes": [
    {
      "id": "0-cour",
      "name": "Cour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.386978699514854,
        "pitch": -0.2646821991814612,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.5302913691336464,
          "pitch": -0.056341281155049217,
          "rotation": 0,
          "target": "2-terrain-de-foot"
        },
        {
          "yaw": -0.14668759715726054,
          "pitch": -0.0582934444455212,
          "rotation": 0,
          "target": "1-jardin-des-maternelles"
        },
        {
          "yaw": 1.3651696553710444,
          "pitch": -0.06527871484338021,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-jardin-des-maternelles",
      "name": "Jardin des Maternelles",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3524836977897028,
          "pitch": -0.11747072070050635,
          "rotation": 0,
          "target": "17-entre-maternelle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terrain-de-foot",
      "name": "Terrain de foot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2229239020680573,
          "pitch": -0.035895732553013815,
          "rotation": 0,
          "target": "5-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.127157090326346,
          "pitch": 0.05786659254339277,
          "rotation": 0,
          "target": "0-cour"
        },
        {
          "yaw": -0.01776275583084619,
          "pitch": 0.024417656123510767,
          "rotation": 0,
          "target": "4-toilettes-filles"
        },
        {
          "yaw": -0.24793742669729468,
          "pitch": 0.0021526677064329647,
          "rotation": 4.71238898038469,
          "target": "8-couloir"
        },
        {
          "yaw": 0.6072577787971998,
          "pitch": -0.5529700445625707,
          "rotation": 5.497787143782138,
          "target": "18-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-toilettes-filles",
      "name": "Toilettes filles",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02442151834211259,
          "pitch": 0.07533433945924628,
          "rotation": 0,
          "target": "5-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6177951160844941,
          "pitch": 0.014479954695968189,
          "rotation": 0,
          "target": "6-toilettes-garons"
        },
        {
          "yaw": -0.4231240433047603,
          "pitch": 0.0886919482059465,
          "rotation": 0,
          "target": "2-terrain-de-foot"
        },
        {
          "yaw": 2.7876324245579527,
          "pitch": 0.13851611127100938,
          "rotation": 0,
          "target": "7-salle-polyvalente"
        },
        {
          "yaw": 1.945298152698939,
          "pitch": 0.11138056755315162,
          "rotation": 0,
          "target": "4-toilettes-filles"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-toilettes-garons",
      "name": "Toilettes garçons",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-salle-polyvalente",
      "name": "Salle polyvalente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0558453347780734,
          "pitch": 0.006517695236434307,
          "rotation": 0,
          "target": "5-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -2.8128329813062773,
        "pitch": 0.09639306476903897,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -3.000769517428072,
          "pitch": 0.023563725298089366,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -2.7705793146510853,
          "pitch": 0.06969037379106169,
          "rotation": 1.5707963267948966,
          "target": "9-p2-p3"
        },
        {
          "yaw": -0.11740749033683429,
          "pitch": 0.014950691041470066,
          "rotation": 4.71238898038469,
          "target": "13-p1-p2"
        },
        {
          "yaw": 0.05635878049340448,
          "pitch": 0.031420242920436436,
          "rotation": 4.71238898038469,
          "target": "15-m3"
        },
        {
          "yaw": 0.09788797552477213,
          "pitch": -0.15565748709709837,
          "rotation": 0,
          "target": "17-entre-maternelle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-p2-p3",
      "name": "P2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-p5-p6",
      "name": "P5 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.963401940548298,
          "pitch": 0.008243121397596198,
          "rotation": 0,
          "target": "18-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-p3-p4",
      "name": "P3 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7955931580831539,
          "pitch": -0.051074398293772916,
          "rotation": 0,
          "target": "18-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-etude",
      "name": "Etude",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-p1-p2",
      "name": "P1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-m2",
      "name": "M2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9365657381505912,
          "pitch": 0.08323543202087258,
          "rotation": 0,
          "target": "17-entre-maternelle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-m3",
      "name": "M3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.769238721371538,
          "pitch": 0.1092018980663827,
          "rotation": 0,
          "target": "8-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-m1",
      "name": "M1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22415409410501397,
          "pitch": 0.05530750021758024,
          "rotation": 0,
          "target": "17-entre-maternelle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entre-maternelle",
      "name": "Entrée maternelle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.643686350202067,
          "pitch": 0.16130194958881638,
          "rotation": 4.71238898038469,
          "target": "16-m1"
        },
        {
          "yaw": -1.106823134154732,
          "pitch": 0.02422605092610297,
          "rotation": 1.5707963267948966,
          "target": "0-cour"
        },
        {
          "yaw": -1.5621257367153945,
          "pitch": -0.044371543726256846,
          "rotation": 0,
          "target": "8-couloir"
        },
        {
          "yaw": -1.7071121880036983,
          "pitch": 0.16702965726273433,
          "rotation": 4.71238898038469,
          "target": "15-m3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-etage",
      "name": "Etage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.114525489424693,
          "pitch": -0.06155186320877348,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -2.9756478009908367,
          "pitch": -0.08177349860485172,
          "rotation": 1.5707963267948966,
          "target": "12-etude"
        },
        {
          "yaw": 0,
          "pitch": -0.06430796562825947,
          "rotation": 4.71238898038469,
          "target": "11-p3-p4"
        },
        {
          "yaw": -0.3137790011132999,
          "pitch": 0.28047918514479875,
          "rotation": 4.71238898038469,
          "target": "10-p5-p6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ecole Saint-Joseph ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
