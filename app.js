//pessoas
const pessoas = [

    //ana elisa

    {
        nome: "Ana Elisa",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/ana_elisa1.jpeg", "images/ana_elisa2.jpeg", "images/ana_elisa3.jpeg", "images/ana_elisa4.jpeg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/66YywMJbAgzQrGkFKjnSsK"
    },

    //eduardo
    
    {
        nome: "Eduardo",
        frase: "Sua dose diária de tormento",
        fotos: ["images/eduardo1.jpg", "images/eduardo2.jpeg", "images/eduardo3.jpg", "images/eduardo4.jpg"],
        carta: `PARABENS LAISSS!!
                
                te desejo tudo do bom e do melhor, muita saúde, dinheiro, amores que não sejam doidos. 
                aiai oq mais eu poderia falar pra minha melhor amiga né?
                queria muuito te agradecer por todos os momentos que passamos juntos, acho que sou o seu amigo mais "recente" do grupo mas eu sinto que somos amigos há anos, saiba que sou eternamente grato pela nossa amizade, por todos os seus VÁRIOS ensinamentos, conselhos, por todo o apoio, as memórias que criamos juntos, os momentos felizes, tristes, de brigas, de risos, por toda a compreensão com meus defeitos/manias.
                Espero que continue sendo essa mulher(🤏) tão sorridente, animada, companheira, amiga e carinhosa (as vezes), você tem um dom de iluminar qualquer ambiente que você entra (literalmente) e deixa o clima tão agradável. Como te falei naquele dia no carro, acredito que vc ainda não tem ideia do quão sortudas as pessoas são por terem a Laís na vida delas e só é triste quem ainda não teve a chance de te conhecer. (Eclesiastes 6-14)
                Estarei aqui pra tudo o que você precisar, um ombro pra chorar, uma resenha pra espairecer, uma companhia pra desabafar, enfim qualquer coisa
                Eu te amo muito muito. amo nossas brincadeiras de autistas, nossas brigas de irmão. 
                um beijo pra ti, nível 2🤣 <3`,
        musica: "https://open.spotify.com/embed/track/5zCJvrT3C7cIfHsR5iG95l"
    },

    // giovana

    {
        nome : "Giovana",
        frase: "Quem sempre esteve comigo",
        fotos: ["images/IMG-20260326-WA0062.jpg", "images/IMG-20260326-WA0062.jpg", "images/IMG-20260326-WA0062.jpg"
            ,"images/IMG-20260326-WA0062.jpg" 
        ],
        carta: `asda`,
        musica: "https://open.spotify.com/embed/track/7e3XFd0hFNPvisBMDxLKrc"
    },
    
    //igor

    {
        nome: "Igor",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },
    
    //joao

    {
        nome: "Joao Pedro",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/joao_pedro1.jpeg", "images/joao_pedro2.jpeg", "images/joao_pedro3.jpeg", "images/joao_pedro4.jpeg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    // Lara 

    {
        nome: "Lara",
        frase: "A sua amiga mais cuiuda",
        fotos: ["images/lara1.jpeg", "images/lara2.jpeg", "images/lara3.jpeg", "images/lara4.jpeg"],
        carta: `feliz aniversário, laisoca!!! 
                muita saúde, paz, conquistas e boas memórias nesse novo ciclo, que Deus te abençoe imensamente e que Nossa Senhora esteja sempre ao seu lado.
                você é especial demais na minha vida e sabe disso, obrigada por cada momento ao seu lado, cada piada interna, sou grata até mesmo por cada real que você já me fez gastar recentemente com festa e show :) a vida é muito mais divertida ao seu lado! obrigada por tudo, conta comigo sempre <3 
                continue sendo essa mulher tão iluminada que você é, literalmente. te amoooo`,
        musica: "https://open.spotify.com/embed/track/4f7phfIoOpIhSI8tIK11f6"
    },
    
    //marilia

    {
        nome: "Marilia",
        frase: "Minha filha mais nova que mais amo.",
        fotos: ["images/marilia1.jpeg", "images/marilia2.jpeg", "images/marilia3.jpeg", "images/marilia4.jpeg"],
        carta: `Querida Laís, 
                Você há 19 anos vc me fez mãe pela segunda vez, uma mãe um pouquinho, um pacotinho de algodão de tão branquinha que vc veio. Como eu te amei e te amo e te amarei. Você é a sábia do nosso trizal ( eu, Ana e Laís). Mas é também a mais emburradeira, a mais velhinha, mas que eu amo até isso em você. 
                Eu amo os seus defeitos, as suas qualidades, as suas rabujices, o seu companheirismo, a sua honestidade, o seu caráter, a sua seriedade. Peço a Deus todos os dias que mantenha você em segurança, com saúde e que te dê uma vida feliz, minha filha. 
                Saiba que apesar de todos os tropeços e quedas estarei com você para te erguer e apoiar, pois meu amor é infinito e incondicional. Trilhe seu caminho buscando sempre o bem, o amor ao próximo, a pureza de coração, a bondade e acima de tudo a luz de Deus. Te amo mais que o infinito.`,
        musica: "https://open.spotify.com/embed/track/5qqabIl2vWzo9ApSC317sa"
    },

    //natalia

    {
        nome: "Natalia",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    }

    
    
];

let slideAtual = 0;

function atualizarTela(){
    const pessoa = pessoas[slideAtual];

    document.getElementById("nome").innerText = pessoa.nome;
    document.getElementById("frase").innerText = pessoa.frase;
    document.getElementById("spotify").src = pessoa.musica;

    const link = document.getElementById("abrir-spotify");
    link.href = pessoa.musica
    .replace("embed/track/", "track/")
    .replace("open.spotify.com", "open.spotify.com");

    const container = document.getElementById("fotos");
    container.innerHTML = "";

    pessoa.fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto;
        img.onclick = () => abrirImagem(foto);
        container.appendChild(img);
    });
}

function mudarSlide(direcao){
    slideAtual += direcao;

    if(slideAtual < 0){
        slideAtual = pessoas.length - 1;
    }

    if(slideAtual >= pessoas.length){
        slideAtual = 0;
    }

    atualizarTela();
}

function abrirPopup() {
  console.log("clicou");
  document.getElementById("popup-carta").style.display = "flex";
  document.getElementById("texto-carta").innerText = pessoas[slideAtual].carta;
}

function fecharPopup() {
  document.getElementById("popup-carta").style.display = "none";
}

function abrirImagem(src){
    const vizualizador = document.getElementById("vizualizador");
    const img = document.getElementById("img-ampliada");

    img.src = src;
    vizualizador.style.display = "flex";

}

function fecharImagem(){
    document.getElementById("vizualizador").style.display = "none"
}





window.onload = atualizarTela;
