var LocsAv2 = [
  {
    lat: -34.4630772,
    lon: -58.523874,
    title: 'Buenos Aires',
    html: [
      '<h3>Buenos Aires</h3>',
      '<p>Email: <a href="mailto:ventas@creacionesreales.com">ventas@creacionesreales.com</a></p>',
    ].join(''),
      icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
      animation: google.maps.Animation.DROP
      },
      {
      lat: -34.5554648,
      lon: -58.4858055,
      title: 'Revendedora, Barrio Belgrano, CABA',
      html: [
      '<h3>Clara Migliaro</h3>',
      '<p>Email: <a href="mailto:mclaramigliaro@gmail.com">mclaramigliaro@gmail.com</a></p>',
      '<p>Whatsapp: <a href="whatsapp://send?text=Hola! Me interesan los productos de Creaciones Reales&phone=+5491131951636">+54 9 11 3195 1636</a></p>',
    ].join(''),
    icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
    animation: google.maps.Animation.DROP
  },
  {
    lat: -34.4434179,
    lon: -58.7556165,
    title: 'Pilar',
    html: [
      '<h3>Noelia Brizuela</h3>',
      '<p>Email: <a href="mailto:estudionohabrizuela@gmail.com">estudionohabrizuela@gmail.com</a></p>',
      '<p>Whatsapp: <a href="whatsapp://send?text=Hola! Me interesan los productos de Creaciones Reales&phone=+5491163921900">+54 9 11 6392 1900</a></p>',
    ].join(''),
      icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
      animation: google.maps.Animation.DROP
      },
      {	
      lat: -32.3446997,
      lon: -65.2057556,
      title: 'Santa Rosa de Conlara',
      html: [
      '<h3>Santa Rosa de Conlara</h3>',
      '<p>Silvia Bello</p>',
      '<p>Whatsapp: <a href="whatsapp://send?text=Hola! Me interesan los productos de Creaciones Reales&phone=+5492664700908">+54 9 266 470 0908</a></p>',
      '<p>Email: <a href="mailto:silviacarinabello@hotmail.com">silviacarinabello@hotmail.com</a></p>',
    ].join(''),
    icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
    animation: google.maps.Animation.DROP
  },
  {	
    lat: -40.1390821,
    lon: -71.3346401,
    title: 'San Martín de los Andes',
    html: [
      '<h3>San Martín de los Andes</h3>',
      '<p>María Miranda</p>',
      '<p>Whatsapp: <a href="whatsapp://send?text=Hola! Me interesan los productos de Creaciones Reales&phone=+5492944247958">+54 9 294 424 7958</a></p>',
      '<p>Email: <a href="mailto:juli@smandes.com.ar">juli@smandes.com.ar</a></p>',
    ].join(''),
      icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
      animation: google.maps.Animation.DROP
      },
      {	
      lat: -29.7853834,
      lon: -58.0767604,
      title: 'Curuzú Cuatiá',
      html: [
      '<h3>Curuzú Cuatiá</h3>',
    ].join(''),
    icon: 'https://cdn.shopify.com/s/files/1/2589/1182/files/point-google-maps-creaciones-reales.png?9140860135343985624',
    animation: google.maps.Animation.DROP
  }
];

new Maplace({
  locations: LocsAv2,
  map_div: '#gmap-menu',
  controls_type: 'dropdown',
  controls_cssclass: 'form-control',
  controls_on_map: false,
  view_all_text: 'Ver Todos',
  styles: {
    'Creaciones Reales': [
      {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": 7
          },
          {
            "lightness": 19
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#ffffff"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#ffffff"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 100
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": -52
          },
          {
            "lightness": -10
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": -93
          },
          {
            "lightness": 31
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": -93
          },
          {
            "lightness": -2
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": -52
          },
          {
            "lightness": -10
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": 10
          },
          {
            "lightness": 69
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#c79c60"
          },
          {
            "saturation": -78
          },
          {
            "lightness": 67
          },
          {
            "visibility": "simplified"
          }
        ]
      }
    ]
  }

}).Load();