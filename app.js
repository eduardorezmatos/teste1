//pessoas
const pessoas = [

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
    
    //eduardo
    
    {
        nome: "Eduardo",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível !",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    //joao

    {
        nome: "Joao Pedro",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    //igor

    {
        nome: "Igor",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    //natalia

    {
        nome: "Natalia",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    //marilia

    {
        nome: "Marilia",
        frase: "A pessoa que sempre traz paz",
        fotos: ["images/foto3.jpg", "images/foto4.jpg"],
        carta: "Você é incrível!",
        musica: "https://open.spotify.com/embed/track/ID2"
    },

    //ana elisa

    {
        nome: "Ana Elisa",
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
  console.log("clicou"); // 🔥 teste
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
