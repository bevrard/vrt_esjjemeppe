var APP_DATA = {
  "scenes": [
    {
      "id": "0-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.23266996377220828,
        "pitch": 0.1515404645004299,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.289369739551474,
          "pitch": 0.15173931764860882,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.655023746846922,
          "pitch": 0.04873287950528038,
          "title": "Frigo",
          "text": "Ce frigo est un super réfrigérateur.<div>Un choix optimisé avec un congélateur.</div>"
        }
      ]
    },
    {
      "id": "1-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0682684219008358,
          "pitch": 0.18907354072580773,
          "rotation": 0,
          "target": "0-cuisine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5636928685776628,
          "pitch": 0.10391042713955656,
          "title": "Martin",
          "text": "5 ans !!! C'est notre ainé !"
        }
      ]
    }
  ],
  "name": "Maison",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
