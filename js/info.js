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

var dets = [['(?)',	'Estátua pedestre',	'Praça Reinaldo Porchat, entrada da Portaria 1 do campus.',	'Estátua pedestre de Armando de Salles de Oliveira (São Paulo, SP, 1887 – São Paulo, SP, 1945). Engenheiro formado pela Escola Politécnica, casou-se com Raquel de Mesquita, filha de Júlio de Mesquita, dono do jornal O Estado de São Paulo, assumindo a presidência da sociedade logo após a falência do sogro3. Foi nomeado por Getúlio Vargas como interventor do estado paulista, em 1933. No ano seguinte, assinou o decreto de fundação da USP Candidatou-se à presidência, em 1937, recebendo apoio de grupos oposicionistas a Vargas. Após a instituição do Estado Novo, exilou-se na França, Estados Unidos e Argentina, retornando ao Brasil apenas em 1945. A estátua se apresenta olhando para frente, na direção da Portaria 1, com braços levemente afastados do corpo, e pés alinhados com os ombros. O homenageado encontra-se vestindo toga universitária, lisa e pouco detalhada. Apresenta também traços fisionômicos pouco trabalhados. Encontra-se sobre base de cor clara, composta por três módulos: superior, central e inferior. As laterais do módulo superior avançam até próximas às mãos da estátua, encostando levemente em sua mão direita. Há inscrição em alto relevo na parte frontal do módulo superior da base, com o nome do homenageado – Armando de Salles Oliveira- porém constata-se a ausência de algumas letras. Encontra-se tambémuma placa de material não identificado no canto superior do módulo central.',	'Bruno Giorgi (1905, Mococa – 1993, Rio de Janeiro) | 1977.',	'A estátua é feita em bronze e o pedestal, em concreto. A técnica de fabricação da peça é desconhecida',	'466',	'180',	'100',	'266',	'205',	'140',	'Bom | Regular',	'a estátua apresenta regiões com pátina esverdeada. Há manchas de sujeira no contorno das letras ausentes no alto relevo frontal. Apresenta desgaste das juntas de acabamento entre as placas do revestimento, pelas quais é possível visualizar material esfarelável não identificado. Fissuras no módulo superior podem ser verificadas, logo abaixo dos pés da estátua.',	'Doação oficial do governador Paulo Egydio Martins à USP, em 1977.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Jardim interno da Escola de Educação Física e Esporte da USP (EEFE)',	'Trata-se de uma obra composta por sete cilindros vazados, de cor alaranjada, agrupados em torno do tubo central, fixo no chão. Cada tubo representa uma década de aniversário da EEFE.',	'Erasmo Magalhães Castro de Tolosa (? – 2018) | 2004',	'Os cilindros são de ferro, pintados, interligados por solda e parafusos.',	'540',	'102',	'90',	'',	'',	'',	'Bom',	'a escultura está suja, com marcas de oxidação do ferro, principalmente no interior dos tubos cilíndricos.',	'Doação da fábrica Jacto de Pompéia.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Herma',	'Praça Prof. Rubião Meira, próximo ao Centro de Práticas Esportivas da USP (CEPEUSP)',	'Herma de Ernesto de Souza Campos (Campinas, SP, 1882 – São Paulo, SP, 1970). Engenheiro politécnico, médico e embaixador, formou-se pela Escola Politécnica e pela Faculdade de Medicina de São Paulo. Durante o governo de Armando de Salles de Oliveira, foi um dos idealizadores e articuladores da criação do campus universitário do Butantã, além de dirigir as faculdades de medicina e de filosofia, ciências e letras da USP4. Foi nomeado, em 1946, como Ministro da Educação e Saúde Pública no governo do general Eurico Gaspar Dutra. Sob sua gestão novas universidades foram criadas no Paraná, na Bahia, em Pernambuco, São Paulo, Rio de Janeiro e Rio Grande do Sul, recebendo os títulos de Diretor e Professor Honorário nessas instituições. Atuou também na área diplomática, exercendo as funções de embaixador especial do Brasil na Colômbia,no Equador, no Chile, na Argentina e no Uruguai. A escultura apresenta traços fisionômicos fiéis ao homenageado, que se encontra vestindo paletó, camisa e gravata. A base é composta por três módulos de planta quadrada. Na parte frontal do módulo superior, sobre placa pichada, encontram-se informações sobre o homenageado.A lateral esquerda do módulo superior encontra-se sem o revestimento de granito rosa. Ao lado esquerdo da herma, encontra-se assinatura do autor – L.Morrone.','Luís Morrone (1906, São Paulo –1998, São Paulo) | 1982.',	'A herma é feita em bronze, assentada sobre pedestal de concreto revestido por granito rosa polido. Não há informações sobre as técnicas da confecção.',	'70',	'62',	'58',	'170',	'80',	'80',	'Regular | Ruim',	'a herma apresenta regiões com manchas de sujeira e pátina esverdeada. Há mancha escura sobre seu rosto, que aparenta ser ação de vândalos. A base encontra-se com revestimento em granito rosa incompleto na lateral esquerda, que se destacou pelo assentamento 14 inadequado da placa. Há problemas quanto ao assentamento do revestimento visto que o material se encontra instável.',	'Encomenda da reitoria da USP por ocasião da comemoração do centenário de nascimento do homenageado, em 1982.',	'Permanente no campus desde sua instalação'],
['(?)',	'Escultura abstrata',	'Praça Prof. Jorge Americano, próximo à Casa de Cultura Japonesa.',	'a escultura é composta por dois semicírculos dobrados ao meio, formando ¼ de círculo, instalados diretamente sobre o solo. A obra foi inaugurada pelo casal de imperadores japonês Akihito e Michiko ao visitarem o campus, em 1997.',	'Tomie Ohtake (1913, Kyoto, Japão – 2015, São Paulo) | 1997',	'a escultura é feita de material desconhecido revestido em aço inoxidável. As chapas estão soldadas entre si, além de apresentar parafusos alinhados na vertical em algumas regiões',	'494',	'(?)',	'732',	'',	'',	'',	'Regular',	'a escultura encontra-se riscada e pichada na sua face principal, voltada para a Casa de Cultura Japonesa. Apresenta-se suja e com manchas de umidade, principalmente no encontro entre as chapas de aço.',	'(?)',	'Permanente no campus, desde 1997.'],
['(?)',	'Cabeça',	'Praça do Relógio Solar.',	'Cabeça de Júlio de Mesquita Filho (São Paulo, SP, 1892 – São Paulo, SP, 1969). Em 1904, aos doze anos, foi enviado à Europa para finalizar seus estudos, iniciados na Escola Caetano de Campos5. Ao retornar ao Brasil, formou-se em Direito pela Faculdade de Direito de São Paulo, iniciando sua vida política ainda quando estudante universitário. Enquanto advogado, defendeu a concessão de reinvindicações trabalhistas da época. Paralelamente à profissão, trabalhou no jornal, O Estado de São Paulo, propriedade do seu pai, Júlio de Mesquita. Participou do movimento revolucionário de 1932, atuando no vale do Paraíba. Derrotado, foi preso e exilado em Lisboa, deixando a direção do jornal entregue a seu cunhado, Armando de Salles Oliveira. Durante o exílio, dedicou-se a estruturar seu projeto de construção de uma universidade em São Paulo, sendo considerado um de seus fundadores. A cabeça apresenta expressões da personalidade do homenageado (LOURENÇO, 1997), e encontra-se apoiada sobre base quadripartite.',	'Caetano Fraccaroli (1911, Verona, Itália – 1987, São Paulo) | 1969.',	'A cabeça é feita em bronze, assentada sobre pedestal quadripartite de granito branco e cinza sem polimento. O conjunto está assentado sobre base de concreto.',	'58',	'40',	'45',	'170',	'77',	'77',	'Ruim | Ruim',	'a obra encontra-se suja e pichada: há lágrimas no rosto do homenageado, que se supõe não fazer parte da escultura, além de intervenções no pedestal, como pichações e colagens. Algumas partes da cabeça, como nariz e orelhas, se encontram ocupadas por ovos e ninhos de pequenos insetos. As duas placas que existiam fixadas na obra, conforme visto em levantamentos anteriores, já não se encontram no local.',	'A sugestão da homenagem partiu do ex-reitor da USP, Luís Antonio da Gama e Silva, sendo apresentada ao Conselho Universitário. A escultura foi vencedora de concurso público, em 1969.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Praça do Relógio Solar',	'Ponteiro branco confeccionado em chapas metálicas, apresentando um vão que liga um tronco de pirâmide de base triangulara a outro bloco de mesmo formato, porém que se encontra apoiado sobre a menor aresta da base. O entorno possui acabamento em mosaico, formando linhas de marcação do horário solar, datas de equinócios e solstícios, além de signos zodiacais. A escultura foi implantada seguindo orientações técnicas do Instituto Astronômico e Geofísico da USP. A sua utilização se dá pela observação da projeção da sombra do ponteiro sobre o mosaico. Há uma placa afixada na lateral esquerda da obra:',	'Caetano Fraccaroli (1911, Verona, Itália – 1987, São Paulo) sob supervisão da profa. Vera Pallamin | 1985.',	'O ponteiro é composto por chapas de aço metalizado em alumínio, assentado sobre fundação em concreto.',	'600',	'312',	'1387',	'',	'',	'',	'Regular | Ruim',	'a escultura encontra-se pichada, possui sinais de oxidação e crescimento de fungos, além de apresentar escorrimento na sua parte frontal. Há recortes inutilizados no vão da escultura, onde possivelmente seriam instaladas luzes para iluminação. Há elemento se destacando da base, na região interna do vão, onde também se verifica o desenvolvimento de colmeias de insetos, configurando riscos de acidentes aos usuários. O mosaico do entrono apresenta crescimento de vegetação entre os fragmentos de rocha, além de destacamentos',	'Solicitação direta do ex-reitor da USP, Hélio Guerra Vieira, sendo a encomenda entregue em 1985.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Peça de grupo escultórico',	'Rua da Praça do Relógio, próximo à Editora da USP (EdUSP)',	'trata-se de um objeto cilíndrico, com raio crescente da fundação até próximo à borda, onde volta a diminuir. A obra fez parte de um grupo escultórico, chamado O Duplo e o Tempo, constituído pela peça e por um desenho sobre papel aches.',	'Ester Grinspum ( 1955, Recife - ) | 1988.',	'A peça é feita de ferro soldado.',	'350',	'250',	'',	'',	'',	'',	'Regular - Péssimo',	'a superfície encontra-se oxidada, com aparecimento de líquens, pichações e ovos de insetos. Desenvolve-se vegetação na parte oca da obra.',	'Doação ao MAC por Sara e Salomão Grinspum, realizada em junho de 1990.',	'XX Bienal Internacional de São Paulo (Pavilhão Ciccillo Matarazzo -Pavilhão da Bienal, out-1989) Aquisições e Doações Recentes (MAC; jun-1990) Permanente no campus desde agosto de 1990.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente à EdUSP',	'chapa circular recortada e dobrada, compondo formas diversificadas de acordo com o local de observação. Internamente, apresenta cortes retos e angulosos. A obra faz parte da coleção de obras geométricas abstratas do autor, possuindo assinatura atrás da chapa metálica, próximo à base.',	'Amílcar de Castro (1920, Paraisópolis – 2002, Belo Horizonte) | 1985.',	'A peça é feita utilizando o corte e a dobra de chapa circular de aço. Encontra-se assentada sobre base de concreto.',	'110',	'250',	'',	'',	'',	'',	'Regular',	'a escultura apresenta conservada em sua forma, não havendo sinais de desgaste. Porém, encontra-se oxidada, além de apresentar riscos e pichações na superfície. Sob a peça encontra-se caixa de luz embutida na base de assentamento, porém sem fiação.',	'Obra adquirida pela reitoria da USP, entre os meses de outubro e dezembro de 1988.',	'Aquisições e Doações Recentes (MAC; jun1990) Exposta no campus de janeiro de 1989 a dezembro de 2018'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, próximo á EdUSP',	'Peça cilíndrica oca que apresenta trinca vertical proposital ao longo do seu comprimento, com borda superior seccionada transversalmente de forma irregular. Originalmente, apresentava lâmpada fluorescente em seu interior, propondo o contraste entre materiais foscos e brilhantes.',	'Maurício Bentes (1958, Rio de Janeiro – 2003, Rio de Janeiro) | 1988',	'a escultura é feita em ferro pintado com tinta asfáltica, e encontra-se instalada diretamente no solo.',	'540',	'100',	'',	'',	'',	'',	'Regular',	'a obra apresenta-se incompleta, pelo fato de as lâmpadas internas não funcionarem. Imagens de Lourenço (1997) mostram que a obra foi deslocada do seu local original. Há evidentes sinais de oxidação, além da presença de colagens sobre a superfície da obra.',	'Doação pela São Marcos Minas S/A Condutores Elétricos, por meio da Associação dos Amigos do MAC (AAMAC), ao MAC, realizada em março de 1989',	'Liberdade (Galeria de Arte Ipanema; mai1988) 3x3: 3 artistas, 3 dimensões (Casa de Cultura Laura Alvim; dez-1988) Aquisições e Doações Recentes (MAC; jun1990) A Sedução dos Volumes (MAC; out-1992) Permanente no campus desde setembro de 1993.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente à EdUSP',	'A escultura é composta por três barras cilíndricas ocas, duas rodas e alguns detalhes em bronze. A barra apoiada sobre o solo apresenta coroa em sua extremidade e placa no meio do seu comprimento. Ela liga as duas rodas e serve de suporte para as demais barras. Estas se encontram posicionadas na vertical e conectadas na sua extremidade mais alta, a um detalhe que lembra a letra T, a. Originalmente, a barra com a coroa é a que ficava na vertical, enquanto que as demais, apoiadas sobre o solo.',	'Horst Kohlem (? Alemanha - ? | 1995-96',	'escultura em bronze cujas partes estão montadas e parafusadas.',	'250',	'123',	'248',	'',	'',	'',	'Péssimo',	'a obra está posicionada diferente do original, além de estar quebrada na ligação das barras com as rodas, motivo que talvez justifique o seu posicionamento diferenciado. Além disso, encontra-se suja e pichada.',	'Doação de Jens Olesen e Klaus Stoeckmann ao MAC, em setembro de 1997.',	'Permanente no campus desde setembro de 1997.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Trata-se de uma escultura composta por superfícies planas dobradas, formando uma composição de vazios e formas geométricas. Por um lado, apresenta estrutura plana quadrada, com abertura vertical que se inicia do solo e chega até a metade da altura da chama. Na vista oposta, apresenta as dobras, que adentram ao volume, e coincidem com a abertura posterior.',	'Eliane Prolik (1960, Curitiba - ) | 1992',	'a escultura é feita em aço, com formato obtido pela dobra e corte das chapas. Não foi observada marca de solda',	'245',	'241',	'241',	'',	'',	'',	'Regular',	'a obra apresenta sinais evidentes de oxidação, além de estar pichada em uma de suas faces.',	'Doação pelo artista ao MAC, em junho de 1994.',	'permanente no campus desde junho de 1994.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Escultura é constituída por arames dobrados, unidos de modo a formar uma estrutura semelhante a um arco. Cada nível é composto por uma estrutura que lembra o símbolo de infinito. Conforme ganha altura, o símbolo se desfaz, permanecendo apenas duas elipses, que vão convergindo até o topo da obra, onde se encontram e formam um arco',	'Luiz Hermano (1954, Preaoca - ) | 1991',	'a obra é feita com barras dobradas de ferro, ligadas por arame e por solda.',	'230',	'260',	'128',	'',	'',	'',	'Péssima',	'a obra se apresenta incompleta: formas amarelas presentes no projeto original, que se localizavam dentro dos arcos, sobre o solo, não existem mais. Há sinais evidentes de oxidação, além da presença de lixo no local onde estariam as peças faltantes.',	'Encontrava-se em regime de concordato por um período de cinco anos, contados a partir de 1993. Desconhece-se a atual situação.',	'XXI Bienal Internacional de São Paulo (Pavilhão Ciccillo Matarazzo - Pavilhão da Bienal; set-1991) A Sedução dos Volumes (MAC; out-1992) Permanente no campus desde abril de 1994'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Peça composta por chapas de aço recortadas em diferentes figuras geométricas: quadrado, com um círculo interno; um anel e um círculo dobrado irregularmente. Encontram-se agrupadas, produzindo formas diversas dependendo do posicionamento do observador. Há assinatura do autor próximo à base de concreto. A obra encontra-se assentada em chapa metálica.',	'Emanoel Araújo (1940, Santo Amaro da Purificação - ) | 1994',	'a escultura é feita em aço dobrado, apresentando solda nas ligações.',	'254',	'241',	'92',	'',	'',	'',	'Regular',	'a obra encontra-se pichada e com sinais evidentes de oxidação',	'Doação pela ATAL (Aero Termo Acústica Ltda), em julho de 1994.',	'Permanente no campus desde julho de 1994.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Trata-se de uma chapa dobrada, em cuja região central foram feitos recortes filiformes. Estes, também dobrados, formam pontas que sobressaem do plano original, dando sensação de ritmo e movimento à obra.',	'Simon Benetton (1933, Treviso, Itália – 2016, Treviso, Itália) | 1978',	'escultura feita em ferro recortado e dobrado, instalada em suporte cujo eixo era móvel.',	'300',	'109',	'60',	'',	'',	'',	'Bom',	'obra apresenta sinais evidentes de oxidação.',	'Doação pelo artista ao MAC, em novembro de 1992.',	'XXI Bienal Internacional de São Paulo (Pavilhão Ciccillo Matarazzo - Pavilhão da Bienal; set-1991) A Sedução dos Volumes (MAC; out-1992) Permanente no campus desde 1993.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Trata-se de uma escultura tubular, branca, formada por curvas geradas pela dobra do material. A escultura se encontra livre no espaço, com suas extremidades fincadas no solo, associando a liberação e o enraizamento, próprios da tradição artística japonesa.',	'Tomie Ohtake (1913, Kyoto, Japão – 2015, São Paulo) | 1999',	'o tubo da escultura é feito em aço. Sua forma foi obtida pela dobra do material.',	'',	'11,8',	'',	'',	'',	'',	'Bom',	'a escultura apresenta-se suja, com crescimento de líquens, sinais de oxidação, e escorrimento. O revestimento branco está descascando ao longo de toda a superfície.',	'Encomenda à artista pelo MAC, em 1999',	'Permanente no campus desde junho de 1994.'],
['(?)',	'Artes visuais – Escultura – Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA)',	'Paralelepípedos de material asfáltico sobrepostos, sugerindo um contraste entre o asfalto e a vegetação do seu entorno.',	'Márcia Pastore (1964, Sâo Paulo - ) | 1990.',	'A peça é feita com massa asfáltica que preenche um suporte metálico em ferro.',	'51',	'235',	'230',	'',	'',	'',	'Regular',	'a obra apresenta-se invadida pela vegetação, com o crescimento de gramíneas e líquens sobre a placa de asfalto',	'Doação pela artista ao MAC, em abril de 1994.',	'III Bolsa Emile Eddé de Artes Plásticas (MAC; out-1990) A Sedução dos Volumes (MAC; out-1992) Permanente no campus desde abril de 1994.'],
['(?)',	'Escultura abstrata',	'Rua da Praça do Relógio, em frente ao edifício Espaço das Artes da Escola de Comunicação e Artes (ECA',	'Trata-se de uma peça composta por placas de aço inoxidável, soldadas entre si. As marcas da soldagem entre as chapas são aparentes, características do autor. O volume inferior é delimitado por superfícies curvas, apresentando alguns elementos cilíndricos que brotam da estrutura. O volume superior é composto majoritariamente por cilindros abertos ou fechados, e uma grande estrutura prismática sobressalente na parte posterior. Apresenta-se assentada sobre base de concreto.',	'Caciporé Torres (1935, Araçatuba – ) | 1967',	'a escultura é feita de chapas recortadas de aço inoxidável, dobrada e soldadas umas às outras, e está assentada sobre base de concreto.',	'300',	'260',	'230',	'',	'',	'',	'Bom',	'a obra não apresenta sinais evidentes de manifestações patológicas, porém encontra-se suja e com acúmulo de água em sua base.',	'Doação da Roche Produtos Químicos e Farmacêuticos S/A ao MAC, em maio de 2000.',	'Permanente no campus desde maio de 2000.'],
['(?)',	'Grupo escultórico',	'Praça do Relógio',	'A escultura é composta por duas chapas paralelas, ligadas por travamentos de escada até o topo. Em sua base encontra-se um espelho d’água circular, e no topo, o relógio. As superfícies das placas estão ilustradas por desenhos em baixo e alto relevo, que representam o mundo da fantasia (filosofia, artes plásticas; música, dança e teatro; ciências econômicas; ciências sociais; poesia) e o mundo da realidade (matemática; ciências geológicas; física; ciências biológicas; química; astronomia). A praça onde se localiza é pavimentada com mosaico português, onde se lê a inscrição:No Universo da Cultura, o Centro está em toda a parte.Conforme citação do prof. João Roberto Leme Simões, em Lourenço (1997), a localização da torre no centro da CUASO demonstra o desejo dos idealizadores de que esta fosse um marco de orientação física e espiritual da USP. As badaladas do seu relógio ditariam o ritmo universitário, marcando as horas de trabalho e descanso.',	'Elisabeth Nobiling (1902, São Vicente – 1975, São Paulo) e Rino Levi (1901, São Paulo – 1965, Lençóis) | 1973',	'a escultura é feita em concreto armado, com entorno feito em mosaico português.',	'5000',	'1000',	'',	'',	'',	'',	'Bom',	'a torre apresenta pichações e marcas de umidade ao longo da ponte que atravessa o espelho d’água até sua entrada. Encontra-se suja e com descascamento do revestimento. Apresenta também marcas de oxidação de armadura, que se encontra exposta.',	'Doação da colônia portuguesa em São Paulo à universidade, que remonta ao início dos anos 50.',	'Permanente no campus, desde inauguração.'],
['(?)',	'Memorial',	'Praça do Relógio',	'trata-se de uma escultura monolítica de concreto em ziguezague, cercada por terreno coberto por pedregulho. Nos planos verticais frontais, apresentam trechos da Declaração Universal dos Direitos Humanos e da Declaração sobre a proteção de todas as pessoas contra os desaparecimentos forçados, além dos nomes dos membros da comunidade uspiana homenageados pelo memorial, vítimas do regime militar. A obra foi idealizada pelo Núcleo de Estudos da Violência da Universidade (NEV) e faz parte do projeto Direito à Memória e à Verdade da Secretaria de Direitos Humanos da Presidência da República (SDH/PR)7.',	'-',	'a obra é constituída por placas de concreto, com inscrições em letras metálicas.',	'',	'',	'',	'',	'',	'',	'Bom',	'o memorial apresenta em bom estado, porém nota-se a ausência de letras nos nomes dos homenageados. Uma placa fixada no último mural encontra-se ilegível.',	'',	'Permanente no campus, desde inauguração.'],
['(?)',	'Escultura abstrata',	'Travessa J, em frente ao edifício da Reitoria',	'trata-se de uma obra composta por elementos metálicos e outros pintados de vermelho. Uma moldura vermelha agrupa poliedros não convexos dos mais diversos formatos, além de cilindros e chapas.',	'Caciporé Torres (1935, Araçatuba – ) | (?)',	'a escultura é feita de aço inoxidável polido, pintado provavelmente com tinta automotiva. As chapas são dobradas e soldadas umas às outras.',	'',	'',	'',	'',	'',	'',	'Bom',	'apesar de se apresentar suja e com manifestação de aranhas, a obra apresenta-se bem conservada sem manifestações patológicas graves.',	'a obra foi instalada no local em 2018, porém desconhece-se como foi incorporada.',	'exposta no campus desde o segundo semestre de 2017.'],
['(?)',	'Grupo escultórico',	'Av. Prof. Lúcio Martins Rodrigues, em frente ao edifício da ECA',	'trata-se de uma obra composta por dois volumes: o primeiro destaca-se pelo seu tamanho, apresentando forma discoidal, com uma abertura no seu interior. O segundo encaixa-se na abertura do primeiro. A ideia e primeiros esboços do modelo da obra se encontram na tese de doutorado, defendida pela artista, na própria ECA8. Em uma placa na escultura maior está escrito:',	'Norma Grinberg (1951, Cochabamba, Colómbia - ) | 2000',	'',	'650',	'930',	'',	'386',	'310',	'',	'Regular',	'apresenta escorrimentos evidentes em praticamente toda sua extensão. A superfície encontrase suja e com problemas de umidade na base, além de apresentar fissuras.',	'a obra foi doada à ECA pela autora em 2000.',	'exposta no campus desde 2000.'],
['(?)',	'Escultura abstrata',	'Avenida prof. Lúcio Martins Rodrigues, em frente ao edifício da ECA',	': trata-se de uma obra composta por um arco inclinado, que lembra uma lua crescente, e três anéis inscritos dentro deste. Dois anéis encontram-se na vertical, e o terceiro, inclinado e encostado no arco. Segundo o prof. Victor Aquino9, professor da ECA, a escultura, se vista de cima, forma a sigla “ECA”.',	'Erasmo Magalhães Castro de Tolosa (? – 2018) | 2000',	'as formas geométricas são feitas em estruturas ocas de metal revestido por tinta branca.',	'304',	'269',	'',	'',	'403',	'',	'Bom',	'a obra apresenta-se suja, com marcas de oxidação nos locais onde há falhas no revestimento.',	'a obra foi doada pelo artista, sendo inaugurada em 23 de fevereiro de 2000.',	'permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Avenida prof. Lúcio Martins Rodrigues, em frente ao edifício da ECA.',	'trata-se de uma obra vertical, composta por dois volumes principais: um metálicos e outro vermelho. O primeiro consiste num arranjo de placas e cilindros soldados, cujo topo se divide em duas partes. O segundo possui a forma de uma pirâmide invertida avermelhada. A assinatura do autor encontra-se na base – Caciporé.',	'Caciporé Torres (1935, Araçatuba – ) | 2003',	'a obra é feita de aço inoxidável com pintura automotiva em algumas partes. As chapas e cilindros são soldadas, característica das obras do artista.',	'600',	'250',	'200',	'',	'',	'',	'Regular',	'a pirâmide invertida apresenta revestimento descascado e, no topo da obra, há o crescimento de vegetação.',	'a obra foi doada pelo artista, sendo inaugurada em 23 de fevereiro de 2000.',	'permanente no campus desde sua instalação'],
['(?)',	'Escultura abstrata',	'Jardim externo da Faculdade de Economia, Adminsitração e Contabilidade da USP (FEA)',	'Trata-se de uma fita metálica ondulada, com uma face vermelha, e a outra, prateada. Remete à ligação dos alunos com a FEA e à união da comunidade feana. Temse também que a expressão de movimento da escultura remete ao processo de transformação de cada aluno, da graduação à saída da instituição10.',	'Tomie Ohtake (1913, Kyoto, Japão – 2015, São Paulo) | 2008',	'a escultura é feita de chapas de metal dobrado e revestido por tinta vermelha.',	'',	'',	'',	'',	'',	'',	'Regular',	'A principal manifestação patológica é descascamento do revestimento vermelho, com maior intensidade nas superfícies externas da escultura. Há também bolhas, riscos e marcas de escorrimento de água. As beiradas das chapas possuem pontos de oxidação do material.',	'Concebida para encerrar as festividades do 60º aniversário da FEA, a escultura foi viabilizada pela doação financeira de alunos, ex-alunos, funcionários e professores, além das empresas Crédit Suisse e Osram.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Jardim interno do edifício da Administração da Escola Politécnica da USP (Poli)',	'trata-se de uma obra circular metálica, de pequenas dimensões, que apresenta recorte interno praticamente simétrico. Encontra-se instalada sobre base de concreto, sobre a qual encontra-se uma onde lê-se: Politécnica A roda representa a roda do progresso, a pesquisa incessante e o ensino qualificado; A base corresponde à base sólida do conhecimento acumulado; O centro da roda, o espaço vazio, representa o símbolo da Poli, a Minerva, em busca dos sonhos, projetos e realizações. Autor: Erasmo Magalhães de Castro Tolosa 24 de agosto de 1998',	'Erasmo Magalhães Castro de Tolosa (? – 2018) | 1998',	'a escultura é feita de metal recortado, com acabamento irregular. A base é feita em concreto revestido com tinta branca.',	'80',	'83',	'',	'',	'',	'',	'Regular',	'a obra apresenta sinais evidentes de oxidação, além de estar suja',	'Doação do artista.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Atrás do Prédio do Biênio da Poli',	'Trata-se de uma obra composta por chapa metálica apoiada sobre o solo. Ao se lançar para cima, a chapa se divide em duas no ar, curvando-se em direção ao solo, porém sem tocá-lo. A estrutura encontra-se apoiada por escoras metálicas abaixo da curvatura. Os cabos de aço utilizados originalmente para sustentação encontram-se sem função estrutural.',	'José Resende (1945, São Paulo - ) | 1994',	'a escultura é feita com chapa de aço corten recortada e dobrada.',	'365',	'365',	'1295',	'',	'',	'',	'Péssimo',	'a obra apresenta sinais de oxidação em sua superfície, além de crescimento de líquens e musgos. Na parte inferior da curvatura, encontram-se teias e ninhos de aranhas. Na base, há uma de árvore crescendo entre as chapas.',	'Encomenda da Poli patrocinada pela empresa Rhodia, construída na Metalurgia Garra, com fundações executadas pela Construtora Monteiro Machado.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Grupo escultórico',	'Lateral do Prédio da Engenharia Civil da Poli',	'O conjunto é composto por uma planta retangular em pedra, remetendo à planta dos templos gregos, com posicionamento das colunas e da estátua da deusa grega Atena. Em uma extremidade, cravado no piso, encontra-se uma peça metálica cujo formato corresponde ao elmo da deusa, em tamanho real. Abaixo desta, tem-se um púlpito com placa afixada onde se lê::60 Centenário da Escola Politécnica da Universidade de São Paulo (1893-1993) PALAS ATENA Deusa de tantas divindades e sabedoria, símbolo dos politécnicos em sua versão romana, Minerva, surge aqui representada por seu capacete de aço. Na base, em granito, a projeção do Partenon, moradia e templo da Deusa. Denise Milan Ary Rodrigo Perez Arte Engenharia Patrocinadores: Método Engenharia S/A – Cosipa Companhia Siderúrgica Paulista Marbom Mármore Comércio e Indústria Ltda. – Simagram Sindicato da Indústria do Mármore e Granito do Estado de São Paulo – Votorantim S/A Indústria – Alufer S/A Estruturas Metálicas – Engesonda Engenharia de Solos e Fundações Ltda. – Ricardo França - Calculista',	'Denise Milan (1954, São Paulo - ) e Ary Rodrigo Perez (1954, Goiânia - ) | 1994',	'a praça é feita com granito bege e preto de Mauá, e o elmo, de aço corten. As peças da praça foram recortadas e assentadas sobre fundação de estacas. O elmo é confeccionado por duas peças paralelas, com 1 polegada de espessura recortadas e soldadas nas bordas, a uma terceira chapa, com 1/4 de polegada.',	'650',	'650',	'1400',	'',	'',	'',	'Péssimo',	'o revestimento da praça está quebrado em vários pontos, além de estar sujo e manchado. A escultura apresenta-se oxidada, porém, segundo Lourenço (1997), é uma característica da obra pensada na sua concepção.',	'Encomenda da Escola Politécnica.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Grupo Escultórico',	'Praça Ramos de Azevedo',	'Trata-se de um grupo escultórico composto por uma base retangular em pedra, ornada por 6 esculturas em bronze e 8 colunas dóricas em rocha, que sustentam uma escultura em bronze de um cavalo alado. As esculturas da base são: quatro figuras femininas representando a Escultura, a Pintura, a Arquitetura e a Engenharia; um grupo de figuras masculinas, representando o trabalho dos construtores; uma escultura que retrata Ramos de Azevedo. A escultura do topo representa o progresso – representado pelo cavalo alado, símbolo da imaginação, montado por uma figura masculina – e a vitória – figura feminina que se encontra nas mãos do homem sobre o cavalo. Há inscrições em baixo relevo nas laterais onde se lê:62 ARS LONGA VITA BREVIS FRANCISCO DE PAVLA RAMOS DE AZEVEDO QVI AB ANNO MDCCCLXXIX AD MCMXXVII VSQUE VIVIDA INGENII ACIE INSTAVRANDAE PAVLIANAE METROPOLI AD ARCHITECTONICAS RATIONES STRENVE AD LABORAVIt AGE QUOD AGIS MONVMENTVM HOC AERE POPVLI COLLATO AMICI COLLEGAEQVE POSVERE ANNO DOMINI MCMXXXIV',	'Galileo Emendabili (1898, Ancona, Itália – 1974, São Paulo | 1934',	'a base e as colunas são de granito cinza e as esculturas, de bronze. Os trabalhos em rocha foram realizados pela firma dos Irmãos Incerpi, e a fundição e moldagem das esculturas, na oficina de bronze do Liceu de Artes e Ofícios.',	'2370',	'410',	'758',	'',	'',	'',	'Regular',	'a escultura encontra-se suja, com marcas evidentes de escorrimento e acúmulo de fuligem e poeira.',	'doada pela “Comissão PróMonumento a Ramos de Azevedo” à Prefeitura de São Paulo11, que decidiu instalar o monumento na CUASO.',	'Avenida Tiradentes, 141 e 173, Praça da Luz nº2 (em frente ao edifício do Liceu de Artes e Ofícios, 1934 - 1967) Permanente no campus desde 1973.'],
['(?)',	'Escultura abstrata',	'Praça do Oceanográfico',	'Trata-se de obra vertical, com base cilíndrica em taipa. No topo, possui chapa galvanizada e vários CD’s envolvidos por plástico, além de garrafas PET amarradas, localizados sobre a base de terra batida. Segundo sua autora, o projeto desenvolve uma alternativa barata e ecológica para a construção de casas populares e espaços públicos12',	'Márcia Macul (?) e Sérgio Prado (?) | 2007',	'a obra é confeccionada com diversos materiais: taipa, garrafas PET, CD’s e chapa galvanizada. Não foram encontradas informações de como a estrutura foi feita.',	'680',	'',	'',	'',	'',	'',	'Regular',	'algumas garrafas PET estão se destacando da estrutura e fragmentos de plásticos estão se desprendendo do topo da escultura.',	'Doação dos autores e do Centro de Estudos de Construções Sustentáveis da FAU USP, para simbolizar a participação da universidade no evento Lixo Zero = Arquitetura Sustentável.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Travessa E, na entrada da Ala I do Edifício principal do Instituto de Física da USP (IF)',	'Trata-se de uma cápsula de alumínio que foi retirada do aparelho de Van de Graaff. A obra original consistia em duas cápsulas de tamanhos diferentes.',	'',	'a peça de alumínio é formada por chapas dobradas e soldadas.',	'325',	'',	'',	'',	'',	'',	'Péssimo',	'Além de amassadas e sujas, a obra está incompleta',	'As cápsulas foram retiradas do equipamento de Van de Graaff pertencente ao Instituto de Física para serem utilizadas como marco.',	'Permanente no campus desde sua instalação'],
['(?)',	'Escultura abstrata',	'Em frente à emergência do Hospital Universitário (HU)',	'trata-se de uma obra formada pela união de três fitas espiraladas. Segundo Perrotti (2010), a escultura representa o progresso harmônico da missão do hospital.',	'Erasmo Magalhães Castro de Tolosa (? – 2018) | 1997',	'',	'310',	'450',	'370',	'',	'',	'',	'Bom',	'a obra não apresenta manifestação patológica grave. Encntra-se suja, com muitas marcas de escorrimento.',	'Doação do artista ao HU.',	'Permanente no campus desde sua instalação.'],
['(?)',	'Escultura abstrata',	'Av. Prof. Lineu Prestes, em frente aos leitos do HU',	'trata-se de uma versão do autor à famosa escultura grega Vitória de Samotrácia, exposta no Museu do Louvre. A obra apresenta busto feminino com contornos suaves, e dois prolongamentos, lembrando asas, lançados para trás. Na parte da trás, existe um sulco profundo nos pés da escultura, onde se encontra o nome do autor e o ano de concepção da obra – Fraccaroli 1958.',	'Caetano Fraccaroli (1911, Verona, Itália – 1987, São Paulo) | 1993',	'a peça é feita de resina com fibra de vidro.',	'400',	'',	'',	'',	'',	'',	'Bom',	'A obra não apresenta manifestação patológica grave: encontra-se apenas suja',	'solicitada pelo supervisor do Hospital Universitário, Dr. Erasmo Tolosa, à profa. Vera Pallamin.',	'Permanente no campus desde sua instalação'],
['(?)',	'Escultura abstrata',	'Rua Cipotânea, em praça atrás do Instituto de Ciências Biomédicas III da USP',	'Trata-se de uma obra anelar em concreto, cuja forma a define como objeto não orientável, ou seja, objeto do qual é impossível determinar onde começa e termina, o que está dentro e fora.',	'Caetano Fraccaroli (1911, Verona, Itália – 1987, São Paulo) | (?)',	'a obra é feita em concreto.',	'523',	'440',	'92',	'',	'',	'',	'Regular',	'a obra apresenta acúmulo visível de sujeira na parte superior, além de marcas de escorrimentos em sua superfície. Na sua lateral, encontra-se colado um dispositivo de controle de turno dos seguranças',	'',	'Permanente no campus desde sua instalação.'],
['(?)',	'Memorial',	'Marquise do Instituto de Química',	'Trata-se de uma memorial cuja forma lembra uma flor, apresentando três camadas de pétalas. No pedestal, revestido de granito preto polido, há uma placa com os dizeres: Homenagem do Instituto de Química da USP a Ana Rosa Kucinski Professora Sequestrada e Morta pela Ditadura 12/01/1942 – (desaparecida em 22/04/1974) Que sua lembrança inspire as futuras gerações a lutar, como ela, contra os que tentam sufocar a liberdade. Abril de 2014 Na lateral, encontra-se assinatura da artista e o ano – Kimi Nii 2014.',	'Kimi Nii ( 1945, Hiroshima, Japão - ) | 2014',	'',	'',	'',	'',	'',	'',	'',	'Bom',	'a obra encontra-se protegida por marquise, não apresentando manifestações patológicas graves.',	'',	'Permanente no campus desde sua inauguração.'],
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
    /* '<div class="acordion-item">'+
         '<div class="C acordion-item-header">'+
             '<div class=" acordion-item-header-content">'+
                 'AUTOR'+
             '</div>'+
         '</div>'+
         '<div class="acordion-item-body">' +
             '<div id="autor" class="acordion-item-body-content">'+
             '</div>'+
         '</div>'+
     '</div>'+*/
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
  '<li><em>Instituição Responsável:</em> </li>'+ dets[i][0] +
  '<li><em>Classificação:</em>  </li>'+ dets[i][2] + 
  '<li><em>Localização:</em>  </li>'+ dets[i][1] +
  '<li><em>Resumo descritivo e iconografia:</em>  </li>'+ dets[i][3] +
  '<li><em>Autor e data de produção:</em>'+  dets[i][4] +  '</li>'

  ficha.innerHTML=
  '<li><em>Material e técnica construtiva:</em>   </li>'+ dets[i][5] +
  '<li><em>Dimensões (Estátua | Base)</em><br>' +
  'Altura (cm):' + dets[i][6] + '|' + dets[i][9] + '<br>' +
  'Largura (cm):' + dets[i][7] + '|' + dets[i][10] + '<br>' +
  'Profundidade (cm):' + dets[i][8] + '|' + dets[i][11] + '<br>' +
  '<li><em>Conservação: </em><br>' +
  'Estado:' + dets[i][12] + '<br>'+
  'Especificações:'+ dets[i][13] + '</li>'+
  '<li><em>Incorporação:</em> </li>'+ dets[i][14] +
  '<li><em>Exposições:</em> </li>'+ dets[i][15] 

 /*autor.innerHTML=
  '<li><em>Bruno Giorgi</em></li>'+
  '<ul class="autordesc">'+
  '<li><img class="fotoautor" src="../../img/autores/brunogiorgi.jpg"></li>'+
  '<li></li>'+
  '</ul>'*/
  
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

