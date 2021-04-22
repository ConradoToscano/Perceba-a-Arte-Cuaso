$('.slider-info').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    adaptiveHeight: true,
    variableWidth: true
  });



// Infos

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

function conteudo(i){

  var Preenchimento = document.getElementById("Preenchimento");

  Preenchimento.innerHTML= 
  '<div id="titulo">'+  
  '</div>'+
  '<div class="acordion">'+
     '<div class="acordion-item">'+
         '<div class="A acordion-item-header">'+
             '<div class=" acordion-item-header-content">'+
                 'DETALHES'+
             '</div>'+
         '</div>'+
         '<div class="acordion-item-body">'+ 
             '<div id="detalhes" class="acordion-item-body-content">'+
             '</div>'+
         '</div>'+
     '</div>'+
     '<div class="acordion-item">'+
         '<div class="B acordion-item-header">'+
             '<div class=" acordion-item-header-content">'+
                 'FICHA TÉCNICA'+
             '</div>'+
         '</div>'+
         '<div class="acordion-item-body">' +
             '<div id="ficha" class=" acordion-item-body-content">'+
             '</div>'+
         '</div>'+
     '</div>'+
     '<div class="acordion-item">'+
         '<div class="C acordion-item-header">'+
             '<div class=" acordion-item-header-content">'+
                 'AUTOR'+
             '</div>'+
         '</div>'+
         '<div class="acordion-item-body">' +
             '<div id="autor" class="acordion-item-body-content">'+
             '</div>'+
         '</div>'+
     '</div>'+
 '</div>'+


  '<div class="final">'+
      '<ul>'+
          '<li><img src="../../img/logos/fau.png" height="90px" ></li>'+
          '<li><img src="../../img/logos/prceu-cpc.png" height="90px"></li>'+
          '<li><img src="../../img/logos/videofau.png" height="90px"></li>'+
          '<li><p class="credito" >Todas as imagens utilizadas são o resultado do trabalho do fotógrafo Júlio César Bazanini</p></li>'+
          '<li><a  href="../../index.html" onclick="enterMap()"><img class="logofinal" src="../../img/cutlogo.png"></a></li>'+
          '<li><p id="proximaobra"></li>'+
          '<li><p id="antobra"></li>'+

      '</ul>'+
  '</div>'



  var titulo = document.getElementById("titulo");

  titulo.innerHTML='<h1>' +names[i] +'</h1>'

  var detalhes = document.getElementById("detalhes");
  var ficha = document.getElementById("ficha");
  var autor = document.getElementById("autor");

  detalhes.innerHTML=
  '<li><em>Instituição Responsável:</em> </li>'+
  '<li><em>Classificação:</em>  </li>'+
  '<li><em>Localização:</em>  </li>'+
  '<li><em>Resumo descritivo e iconografia:</em>  </li>'+
  '<li><em>Autor e data de produção:</em>'+ propobras[i][2]+' | '+ propobras[i][0]+  '</li>'

  ficha.innerHTML=
  '<li><em>Material e técnica construtiva:</em>   </li>'+
  '<li><em>Dimensões (Estátua | Base)</em><br>'+
  'Altura (cm): 466 | 266<br>'+
  'Largura (cm): 180 | 205<br>'+
  'Profundidade (cm): 100 | 140 </li>'+
  '<li><em>Conservação </em>'+
  'Estado: <br>'+
  'Especificações: </li>'+
  '<li><em>Incorporação:</em> </li>'+
  '<li><em>Exposições:</em> </li>'

  autor.innerHTML=
  '<li><em>Bruno Giorgi</em></li>'+
  '<ul class="autordesc">'+
  '<li><img class="fotoautor" src="../../img/autores/brunogiorgi.jpg"></li>'+
  '<li></li>'+
  '</ul>'
  
  var x = i + 2
  var proximaobra = document.getElementById("proximaobra");
  proximaobra.innerHTML= '<a href="../Obras/' + x + '-' + names[i+1] + '.html"> <img class="prox" src="../../img/popups/obras/' + x +'.jpg"></a>'

  var antobra = document.getElementById("antobra");
  antobra.innerHTML= '<a href="../Obras/' + i + '-' + names[i-1] + '.html"> <img class="ant" src="../../img/popups/obras/' + i +'.jpg"></a>'





    const acordionitemheader = document.querySelectorAll(".acordion-item-header");

  acordionitemheader.forEach(acordionitemheader => {
    acordionitemheader.addEventListener("click", event => {
      acordionitemheader.classList.toggle("active");
    })
  })

}

