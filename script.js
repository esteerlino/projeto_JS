let listaCarros = [
    {
        "nome": "718 Boxster",
        "img": "assets/images/porsche-718-Boxster.webp",
        "descricao": "Os modelos 718 foram construídos para quem vive com esportividade total. Eles são carros esportivos de motor central que combinam o espírito esportivo do lendário Porsche 718 com o carro esportivo do futuro – e levam tudo isso para as ruas do mundo. Com um objetivo: trazer prazer ao dia a dia."
    },
    {
        "nome": "911 Carrera",
        "img": "assets/images/porsche-911-Carrera.webp",
        "descricao": "Quando o contato com a pista se torna mais importante. Quando a redução de cada quilo promete mais agilidade. Então chega-se ao ponto em que o espírito esportivo assume o controle. O 911 Carrera T é um compromisso com o purismo. Uma renúncia consciente. Para maior prazer ao dirigir."
    },
    {
        "nome": "911 Turbo Cabriolet",
        "img": "assets/images/porsche-911-Turbo-Cabriolet.webp",
        "descricao": "Nossos engenheiros gostam de se referir a ele como o carro esportivo mais perfeito de todos. Extremamente esportivo e, ao mesmo tempo, confortável e irrestritamente apto para o uso diário. Os modelos 911 Turbo seguem de forma consistente este caminho."
    },
    {
        "nome": "Cayenne E Hybrid",
        "img": "assets/images/porsche-Cayenne-E-Hybrid.webp",
        "descricao": "Hoje no escritório, amanhã no campo ou no circuito de corrida – o Cayenne proporciona prazer de dirigir em qualquer tipo de terreno, aliado ao design típico da Porsche."
    },
    {
        "nome": "Cayenne S Coupé",
        "img": "assets/images/porsche-Cayenne-S-Coupé.webp",
        "descricao": "Algo especial surge quando nos esforçamos por mais juntos. O ponto de partida ideal para isso: o Cayenne Turbo E-Hybrid Coupé. Ele combina o conforto exclusivo e a agilidade esportiva de um turbo com a eficiência de um híbrido plug-in."
    },
    {
        "nome": "Macan 4 Electric",
        "img": "assets/images/porsche-Macan-4-Electric.webp",
        "descricao": "Seja nas grandes metrópoles ou nas cidades em ascensão: o Macan totalmente elétrico sente-se em casa onde quer que a vida pulsa. Onde a individualidade é muito importante. E onde todos têm a chance de se reinventar."
    },
    {
        "nome": "Macan S",
        "img": "assets/images/porsche-Macan-S.webp",
        "descricao": "Novo Macan T: destaque nos aspectos em que os outros se perdem na multidão. Jovem, dinâmico e urbano, com equipamentos de série completos, características de design exclusivas do modelo e, é claro, o tradicional desempenho Porsche."
    },
    {
        "nome": "Panamera Turbo S E-Hybrid",
        "img": "assets/images/porsche-Panamera-Turbo-S-E-Hybrid.webp",
        "descricao": "Quer seja como Panamera ou Panamera Sport Turismo – a silhueta e as proporções são inconfundivelmente Porsche. Atlético, firme, com vincos claramente delineados e músculos fortes."
    },
    {
        "nome": "Taycan Turbo",
        "img": "assets/images/porsche-Taycan-Turbo.webp",
        "descricao": "Totalmente elétrico, o novo Taycan GTS agrega agora emoções ainda mais intensas à experiência de direção Porsche. É quase impossível obter mais fascinação com 3 letras."
    }
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
            <div class="col-md-4">
            <div class="card m-2">
                <img src= "${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onCLick = "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div> 
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i
        class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i
        class="bi bi-brightness-high-fill"></i>`;
    }
}