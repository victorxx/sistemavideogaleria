let indexe = 0;
const limiteporvez = 1;
const resultado = document.getElementById('video');
const botao = document.getElementById('btn');
let contador = 0;
const videos = [
  // seus links de vídeos aqui
  "https://www.youtube.com/embed/8YS0OTL4YkA?si=WCsVA-OEGu7WKJ0j",

];

function criaIframe(src, width = 300, height = 300) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.width = width;
  iframe.height = height;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  return iframe;
}

botao.onclick = function () {
  let final = indexe + limiteporvez;

  for (; indexe < final && indexe < videos.length; indexe++) {
    contador++;

    // cria e adiciona o vídeo
    let iframe = criaIframe(videos[indexe]);
    resultado.appendChild(iframe);

    if (contador === 4) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://sistema01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://sistema01.pages.dev/" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
      
    } 

    if (contador === 5) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://conteudo01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://conteudo01.pages.dev/" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
      contador=0;
    } 

    if (contador === 1) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://uteis01.pages.dev/servicobancario" width="350" height="250" frameborder="0" allowfullscreen></iframe>
        <a href="https://uteis01.pages.dev/servicobancario" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
    
    } 
    
    else if (contador === 2) {
      // Anúncio para contador 2 (diferente do 1)
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://encurtadorko.pages.dev/" width="350" height="500" frameborder="0" allowfullscreen></iframe>
        <a href="http://www.espiritosanto-es.com.br/cloudflare" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          CONFERIR 2
        </a>

      `;
      resultado.appendChild(div);
       // reseta contador depois do 2
    }
  }

  if (indexe >= videos.length) {
    botao.disabled = true;
    botao.textContent = 'Chegamos no limite já';
  }
};
