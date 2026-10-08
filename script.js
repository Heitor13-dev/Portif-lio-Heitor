
function DarkMode(){
        let dark = document.querySelector("#inputDark");
        document.body.classList.toggle("light-mode");
        
        if (dark.checked){
            document.querySelector(".logo").src = "Logo_Heitor2.png";
            document.querySelector(".card-front img").src = "Minhaft_2.png"; 
            document.querySelector(".logo2").src = "Logo_Heitor2.png";
        }
        else {
            document.querySelector(".logo").src = "Logo_Heitor.png";
            document.querySelector(".card-front img").src = "Minhaft.png";
            document.querySelector(".logo2").src = "Logo_Heitor.png";
        }
    }
    

    function mascara_telefone()
    {
        var tel = document.getElementById("telefone").value 
        console.log(tel)
    
        tel=tel.slice(0,20)
    
        console.log(tel)
    
        var tel_formatado = document.getElementById("telefone").value
        if (tel_formatado[0] != "+")
        {
            if(tel_formatado[0]!=undefined)
            {
                document.getElementById("telefone").value="+"+tel_formatado[0];
            }
        }
    
        if (tel_formatado[3] != " ")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3) +" "+tel_formatado[3];
    
                }
            }
    
            if (tel_formatado[4] != "(")
                {
                    if(tel_formatado[4]!=undefined)
                    {
                        document.getElementById("telefone").value=tel_formatado.slice(0,4) +"("+tel_formatado[4];
                    }
                }
    
                if (tel_formatado[7] != ")")
                    {
                        if(tel_formatado[7]!=undefined)
                        {
                            document.getElementById("telefone").value=tel_formatado.slice(0,7) +")"+tel_formatado[7];
                        }
                    }
    
                    if (tel_formatado[8] != " ")
                        {
                            if(tel_formatado[8]!=undefined)
                            {
                                document.getElementById("telefone").value=tel_formatado.slice(0,8) +" "+tel_formatado[8];
                            }
                        }
    
    
                        if (tel_formatado[10] != " ")
                            {
                                if(tel_formatado[10]!=undefined)
                                {
                                    document.getElementById("telefone").value=tel_formatado.slice(0,10) +" "+tel_formatado[10];
                                }
                            }
    
                            if (tel_formatado[15] != "-")
                                {
                                    if(tel_formatado[15]!=undefined)
                                    {
                                        document.getElementById("telefone").value=tel_formatado.slice(0,15) +"-"+tel_formatado[15];
                                    }
                                }
    
    
    
    
    
    }


    const textos = [
    `Olá! Meu nome é Heitor Carmo e sou estudante da área de Tecnologia da Informação, sempre buscando aprender, desenvolver novas habilidades e transformar ideias em soluções.`,

    `Tenho interesse por programação, desenvolvimento web e tecnologia, áreas nas quais venho aprimorando meus conhecimentos por meio de estudos e projetos práticos. Gosto de entender como as coisas funcionam e de buscar maneiras de melhorar aquilo que estou desenvolvendo.`,

    `Sou uma pessoa dedicada, curiosa, responsável e com facilidade para aprender. Acredito que cada projeto é uma oportunidade de adquirir novos conhecimentos, superar desafios e evoluir profissionalmente.`,

    `Meu objetivo é continuar crescendo na área de tecnologia, desenvolver projetos cada vez melhores e construir uma carreira baseada em aprendizado, criatividade e evolução constante.`,

    `Este portfólio reúne um pouco do que venho aprendendo e desenvolvendo ao longo da minha trajetória.`
];

const elementos = [
    document.getElementById("texto1"),
    document.getElementById("texto2"),
    document.getElementById("texto3"),
    document.getElementById("texto4"),
    document.getElementById("texto5")
];

let paragrafoAtual = 0;
let letraAtual = 0;

function escrever() {

    if (paragrafoAtual >= textos.length) {
        return;
    }

    const textoAtual = textos[paragrafoAtual];
    const elementoAtual = elementos[paragrafoAtual];

    elementoAtual.classList.add("cursor");

    if (letraAtual < textoAtual.length) {

        elementoAtual.textContent += textoAtual.charAt(letraAtual);
        letraAtual++;

        setTimeout(escrever, 30);

    } else {

        elementoAtual.classList.remove("cursor");

        paragrafoAtual++;
        letraAtual = 0;

        setTimeout(escrever, 10);
    }
}

escrever();

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.id = "chuva-codigo";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  const caracteres = "01{}[]()<>/\\;=+-*#$%&|!?:".split("");

  let largura = 0;
  let altura = 0;
  let tamanho = 16;
  let colunas = 0;
  let gotas = [];
  let cor = "#19E67A";
  let ultimoQuadro = 0;
  let temporizador;

  function lerCor() {
    const valor = getComputedStyle(document.body).getPropertyValue("--destaque").trim();
    cor = valor || "#19E67A";
  }

  function novaGota(aleatoria) {
    return {
      linha: aleatoria ? -Math.floor(Math.random() * (altura / tamanho)) : 0,
      velocidade: 0.25 + Math.random() * 0.35,
      acumulado: 0,
      ativa: Math.random() < 0.55
    };
  }

  function ajustar() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    largura = window.innerWidth;
    altura = window.innerHeight;

    canvas.width = largura * dpr;
    canvas.height = altura * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    tamanho = largura < 640 ? 14 : 16;
    colunas = Math.floor(largura / tamanho);

    gotas = Array.from({ length: colunas }, function () {
      return novaGota(true);
    });
  }

  function desenhar() {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
    ctx.fillRect(0, 0, largura, altura);

    ctx.globalCompositeOperation = "source-over";
    ctx.font = tamanho + 'px "Courier New", monospace';
    ctx.fillStyle = cor;

    for (let i = 0; i < colunas; i++) {
      const gota = gotas[i];

      if (!gota.ativa) {
        if (Math.random() < 0.004) gota.ativa = true;
        continue;
      }

      gota.acumulado += gota.velocidade;

      if (gota.acumulado < 1) continue;

      gota.acumulado -= 1;

      if (gota.linha >= 0) {
        const letra = caracteres[Math.floor(Math.random() * caracteres.length)];
        ctx.fillText(letra, i * tamanho, gota.linha * tamanho);
      }

      gota.linha++;

      if (gota.linha * tamanho > altura && Math.random() > 0.96) {
        gotas[i] = novaGota(false);
      }
    }
  }

  function repetir(tempo) {
    requestAnimationFrame(repetir);

    if (document.hidden) return;
    if (tempo - ultimoQuadro < 50) return;

    ultimoQuadro = tempo;
    desenhar();
  }

  const observador = new MutationObserver(function () {
    lerCor();
    ctx.clearRect(0, 0, largura, altura);
  });

  observador.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  observador.observe(document.body, { attributes: true, attributeFilter: ["class"] });

  window.addEventListener("resize", function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(ajustar, 200);
  });

  lerCor();
  ajustar();
  requestAnimationFrame(repetir);
})();

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.id = "particulas-cursor";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const maxParticulas = 60;
  const maxCircuitos = 30;
  const distanciaLigacao = 80;
  const distanciaCursor = 110;
  const passo = 16;

  const particulas = [];
  const circuitos = [];

  let largura = 0;
  let altura = 0;
  let rgb = { r: 25, g: 230, b: 122 };
  let mouseX = null;
  let mouseY = null;
  let ultimoX = null;
  let ultimoY = null;
  let percorrido = 0;
  let ultimoTempo = null;
  let rodando = false;
  let temporizador;

  function lerCor() {
    const valor = getComputedStyle(document.body).getPropertyValue("--destaque").trim();
    const achou = /^#?([0-9a-f]{6})$/i.exec(valor);
    const hex = achou ? achou[1] : "19E67A";

    rgb = {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }

  function cor(alfa) {
    return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + alfa + ")";
  }

  function ajustar() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    largura = window.innerWidth;
    altura = window.innerHeight;

    canvas.width = largura * dpr;
    canvas.height = altura * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function criarParticula(x, y) {
    particulas.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      raio: 1 + Math.random() * 1.2,
      idade: 0,
      duracao: 900 + Math.random() * 700
    });

    if (particulas.length > maxParticulas) particulas.shift();
  }

  function criarCircuito(x, y) {
    const angulo = Math.floor(Math.random() * 8) * (Math.PI / 4);
    const giro = (Math.random() < 0.5 ? -1 : 1) * (Math.random() < 0.5 ? Math.PI / 4 : Math.PI / 2);
    const trecho1 = 14 + Math.random() * 22;
    const trecho2 = 10 + Math.random() * 18;

    const p1 = {
      x: x + Math.cos(angulo) * trecho1,
      y: y + Math.sin(angulo) * trecho1
    };

    const p2 = {
      x: p1.x + Math.cos(angulo + giro) * trecho2,
      y: p1.y + Math.sin(angulo + giro) * trecho2
    };

    circuitos.push({
      pontos: [{ x: x, y: y }, p1, p2],
      idade: 0,
      duracao: 800 + Math.random() * 600
    });

    if (circuitos.length > maxCircuitos) circuitos.shift();
  }

  function desenharCircuito(c) {
    const vida = 1 - c.idade / c.duracao;
    const progresso = Math.min(1, c.idade / 200);
    const a = c.pontos[0];
    const b = c.pontos[1];
    const d = c.pontos[2];
    const s1 = Math.min(1, progresso * 2);

    ctx.strokeStyle = cor(0.7 * vida);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(a.x + (b.x - a.x) * s1, a.y + (b.y - a.y) * s1);

    if (progresso > 0.5) {
      const s2 = (progresso - 0.5) * 2;
      ctx.lineTo(b.x + (d.x - b.x) * s2, b.y + (d.y - b.y) * s2);
    }

    ctx.stroke();

    if (progresso >= 1) {
      ctx.beginPath();
      ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function quadro(tempo) {
    if (ultimoTempo === null) ultimoTempo = tempo;

    const dt = Math.min(tempo - ultimoTempo, 50);
    ultimoTempo = tempo;

    ctx.clearRect(0, 0, largura, altura);

    for (let i = particulas.length - 1; i >= 0; i--) {
      const p = particulas[i];

      p.idade += dt;
      p.x += p.vx * (dt / 16);
      p.y += p.vy * (dt / 16);

      if (p.idade >= p.duracao) particulas.splice(i, 1);
    }

    for (let i = circuitos.length - 1; i >= 0; i--) {
      circuitos[i].idade += dt;

      if (circuitos[i].idade >= circuitos[i].duracao) circuitos.splice(i, 1);
    }

    ctx.lineWidth = 1;

    for (let i = 0; i < particulas.length; i++) {
      const a = particulas[i];
      const vidaA = 1 - a.idade / a.duracao;

      for (let j = i + 1; j < particulas.length; j++) {
        const b = particulas[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < distanciaLigacao) {
          const vidaB = 1 - b.idade / b.duracao;
          const alfa = 0.35 * Math.min(vidaA, vidaB) * (1 - dist / distanciaLigacao);

          ctx.strokeStyle = cor(alfa);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (mouseX !== null) {
        const dx = a.x - mouseX;
        const dy = a.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < distanciaCursor) {
          ctx.strokeStyle = cor(0.3 * vidaA * (1 - dist / distanciaCursor));
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < particulas.length; i++) {
      const p = particulas[i];
      const vida = 1 - p.idade / p.duracao;

      ctx.fillStyle = cor(0.8 * vida);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < circuitos.length; i++) {
      desenharCircuito(circuitos[i]);
    }

    if (particulas.length > 0 || circuitos.length > 0) {
      requestAnimationFrame(quadro);
    } else {
      rodando = false;
      ultimoTempo = null;
      ctx.clearRect(0, 0, largura, altura);
    }
  }

  function iniciar() {
    if (rodando) return;

    rodando = true;
    requestAnimationFrame(quadro);
  }

  window.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;

    mouseX = e.clientX;
    mouseY = e.clientY;

    if (ultimoX === null) {
      ultimoX = mouseX;
      ultimoY = mouseY;
      return;
    }

    percorrido += Math.hypot(mouseX - ultimoX, mouseY - ultimoY);
    ultimoX = mouseX;
    ultimoY = mouseY;

    if (percorrido < passo) return;

    percorrido = 0;
    criarParticula(mouseX, mouseY);

    if (Math.random() < 0.45) criarCircuito(mouseX, mouseY);

    iniciar();
  });

  document.addEventListener("mouseleave", function () {
    mouseX = null;
    mouseY = null;
    ultimoX = null;
    ultimoY = null;
  });

  window.addEventListener("resize", function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(ajustar, 200);
  });

  const observador = new MutationObserver(lerCor);

  observador.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  observador.observe(document.body, { attributes: true, attributeFilter: ["class"] });

  lerCor();
  ajustar();
})();