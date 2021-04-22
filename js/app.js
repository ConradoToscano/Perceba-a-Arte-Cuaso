$('.slider-principal').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false
});
	
  function enterMap() {
    var x = document.getElementById('entrada')
  x.style.display = "none";
  x.classList.remove("landing");
  x.classList.add("menu")
  var y = document.getElementById('enter')
  y.style.display = "none";
};

function toggleWindow(id) {
  var x = document.getElementById(id);

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    var windows = document.querySelectorAll('.janela');
    Array.prototype.forEach.call(windows, function(element,index) {
      if (element.id != id) {
        element.style.display = 'none';
      }
    });
  }
  
}

function toggleWindow2(id) {
  var x = document.getElementById(id);

    x.style.display = "block";
    var windows = document.querySelectorAll('.window');
    Array.prototype.forEach.call(windows, function(element, index) {
      if (element.id != id) {
        element.style.display = 'none';
      }
    });
  
  
}

//MAP BOX

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-46.726,-23.562],
  rotate: 20.8,
  zoom: 14,
  maxZoom: 22,
  minZoom: 13,
  hash: true
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
  
  
  map.addSource('obras', {
     type: 'vector',
     url: OBRAS_TILESET
  });

  // Add a layer showing the places.
map.addLayer({
  'id': 'obras',
  'type': 'symbol',
  'source': 'obras',
  'source-layer': OBRAS_LAYER,
  });

  map.setLayoutProperty('obras','icon-image', 'verde' )
  

  map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
        'paint': {
        'fill-extrusion-color': '#bcbcbc',
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': [
        'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          16, 0.95
        ]
      }
    },
    
  )
});

//CONTEUDO OBRAS


var names = ['Monumento a Armando Sales de Oliveira',
'Evolução',
'Homenagem a Ernesto de Souza Campos',
'Marco da Eterna Amizade entre Brasil e Japão',
'Homenagem a Júlio de Mesquita Filho',
'Relógio Solar',
'Sem título 1',
'Sem título 2',
'Sem título 3',
'Auriga I',
'Canto II',
'Catedral',
'O Quadrado, o Círculo e o Disco Fragmentado',
'Perfis',
'Ultramarino',
'Sem título 4',
'Vitória de Samothrace',
'Torre do Relógio',
'Memorial aos Perseguidos do Regime Militar',
'A Construção',
'Lugar com Arco',
'ECA',
'Árvore',
'Sem título 5',
'Politécnica',
'Sem título 6',
'Palas Atena ou Agora',
'Monumento a Ramos de Azevedo',
'Coluna Civilizatória',
'Marco Comemorativo dos 30 anos do Instituto de Física',
'A Missão',
'Monumento à Liberdade',
'Fita de Moebius',
'Homenagem a Ana Rosa Kucinski'] 

var propobras = [['1977',	'Bronze/Concreto',	'Bruno Giorgi'],
['2004',	'Ferro',	'Erasmo de Magalhaes Castro e Tolosa'],
['1982',	'Bronze/Concreto/Granito',	'Luis Morrone'],
['1997',	'Aço inoxidável',	'Tomie Ohtake'],
['1969',	'Bronze/Granito',	'Caetano Fraccaroli'],
['1985',	'Aço',	'Caetano Fraccaroli'],
['1988',	'Ferro',	'Ester Grinspum'],
['1985',	'Aço',	'Amílcar Castro'],
['1988',	'Ferro',	'Maurício Bentes'],
['1995',	'Bronze',	'Horst Kohler'],
['1992',	'Aço',	'Eliane Prolik'],
['1991',	'Ferro',	'Luiz Hermano'],
['1994',	'Aço',	'Emanoel Araújo'],
['1978',	'Ferro',	'Simon Benetton'],
['1999',	'Aço',	'Tomie Ohtake'],
['1990',	'Massa Asfáltica/Ferro',	'Márcia Pastore'],
['1967',	'Aço inoxidável',	'Caciporé Torres'],
['1973',	'Concreto',	'Elisabeth Nobiling/Rino Levi'],
['2011',	'Concreto',	'-'],
['-',	'Aço inoxidável',	'Caciporé Torres'],
['2000',	'Concreto',	'Norma Grinberg'],
['2000',	'Metal',	'Erasmo de Magalhães Castro de Tolosa'],
['2003',	'Aço inoxidável',	'Caciporé Torres'],
['2008',	'Metal',	'Tomie Ohtake'],
['1998',	'Metal',	'Erasmo de Magalhães Castro de Tolosa'],
['1994',	'Aço Corten',	'José Resende'],
['1994',	'Granito/Aço Corten',	'Denise Milan/Ary Rodrigo Perez'],
['1934',	'Granito/Bronze',	'Galileo Emendabili'],
['2007',	'Materiais Diversos',	'Márcia Macul/Sergio Prado'],
['-',	'Alumínio',	'-'],
['1997',	'-',	'Erasmo de Magalhães Castro de Tolosa'],
['1993',	'Fibra de Vidro',	'Caetano Fraccaroli'],
['-',	'Concreto',	'Caetano Fraccaroli'],
['2014',	'-',	'Kimi Nii'],

]



  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  var element = document.getElementById("obrasDropdown");
  element.classList.toggle("show");
  

}

// Close the dropdown menu if the user clicks outside of itn
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//Criar o Dropdown

for (var i=0; i<names.length; i++) {

  if (document.getElementById("list") != null) {

  var dropdown = document.getElementById("obrasDropdown");
  var imagem = document.getElementById("imgjanelaobra");
  var list = document.getElementById("list");
  var row = document.createElement("LI");

  row.innerHTML = names[i]
  row.classList.add('dropdown-item')
  row.setAttribute("onclick","selectObra('" + names[i] + "');")
  list.appendChild(row)

  } else {

  var dropdown = document.getElementById("obrasDropdown");
  var list = document.createElement("UL");
  var header = document.createElement("LI");
  var row = document.createElement("LI");

    list.id = "list"

  row.innerHTML = names[i]
  row.classList.add('dropdown-item')
  row.setAttribute("onclick","selectObra('" + names[i] + "');")
  list.appendChild(row)
  dropdown.appendChild(list)
  }
}

function conteudojanela(id){
  
  var DatadeCriação = propobras[id-1][0];;
  var Material = propobras[id-1][1];
  var Artista = propobras[id-1][2];
  var Nome = names[id-1]

  var imgjanela = document.getElementById("imgjanelaobra");
  imgjanela.innerHTML = 
    '<a  title="Saber Mais" href="./Diretórios/Obras/' + id + '-' + Nome + '.html"> <img class="iconinfo" src="./img/info.png"> <img class="imgjanela" src="./img/popups/obras/' + id +'.jpg"></a>'+
    '<div class="Descrição">' +
    '<p><a class="tag"> Artista: </a>'+ Artista + '</p>' +
    '<p><a class="tag"> Data de Criação: </a>'+ DatadeCriação + '</p>' +
    '<p><a class="tag"> Material: </a>'+ Material + '</p>' +
    '</div>' 
    



  console.log((id+1) + '-' + Nome)
}




function selectObra(obra) {

  var element = document.getElementById("obrasDropdown");
  var i = names.indexOf(obra, 0)
  var el1 = document.getElementById("obrasDropdownButton");
  el1.innerHTML= names[i];
  var a = i+1
  
 if (names[i].length > 20) {element.style.top = "55px" }
 else {element.style.top = "37px" }
 
 conteudojanela(a)

}

map.on('click', 'obras', function (e) {
  toggleWindow2('JANELAOBRAS')
  var id = e.features[0].properties.id;
  var idlayer = e.features[0].layer.id;
  var a = id - 1;
  var el1 = document.getElementById("obrasDropdownButton");
  conteudojanela (id)
  console.log(id)
  el1.innerHTML= names[a];
});


// Create a popup, but don't add it to the map yet.


var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: true
});
     
function addPopup(e) {
   
  map.getCanvas().style.cursor = 'pointer';
  
  var coordinates = e.lngLat;
  var Nome = e.features[0].properties["-Nome"];
  var id = e.features[0].properties.id;
  var idlayer = e.features[0].layer.id;
  
  //var features = map.queryRenderedFeatures(e.point);
  
  if (idlayer === 'obras') {groupIndex = 0};
  if (idlayer === 'museus') {groupIndex = 1};
  if (idlayer === 'predios') {groupIndex = 2};
  
  //console.log(features)
  
  var description = '<div class="name">' + Nome + '</div>' +
  '<div ><img class="imgpopup" src="./img/popups/obras/' + id +'.jpg" onclick="selectObra(' + id + ')")></div>'
        
      
  popup.setLngLat(coordinates)
  popup.setHTML(description)
  popup.addTo(map)
  
  if (Nome.length > 20) {popup._content.style.borderBottomWidth = "38px" }
  else {popup._content.style.borderBottomWidth = "22px" }
  
  popup._content.style.borderColor = ESTILO[groupIndex].color
  
  if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-bottom')) {
  popup._tip.style.borderTopColor = ESTILO[groupIndex].color
  }
  if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-top')) {
  popup._tip.style.borderBottomColor = ESTILO[groupIndex].color
  }
  if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-right')) {
  popup._tip.style.borderLeftColor = ESTILO[groupIndex].color
  }
  if (popup._tip.offsetParent.className.includes('mapboxgl-popup-anchor-left')) {
  popup._tip.style.borderRightColor = ESTILO[groupIndex].color
  }
  
  popup.addTo(map)
}
  
map.on('touchstart', 'obras', function(e) {
  addPopup(e);
})
  
map.on('mousemove', 'obras', function(e) {
  addPopup(e);
  //map.setLayoutProperty(e.features[0].layer.id,'icon-size', 2 );
});
  
map.on('mouseleave', 'obras', function() {
  map.getCanvas().style.cursor = '';
  popup.remove();
  //map.setLayoutProperty(e.features[0].layer.id,'icon-size', 2);
  
});
  
  
