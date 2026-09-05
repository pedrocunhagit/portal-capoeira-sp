/* ============================================================
   PORTAL: Capoeira e valentia em São Paulo — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- MENU HAMBÚRGUER (mobile) ---
  var toggle = document.querySelector('.menu-toggle');
  var navUl  = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', function () {
      navUl.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', navUl.classList.contains('aberto'));
    });
  }

  // --- ACESSIBILIDADE: tamanho de fonte ---
  var body = document.body;
  var btnsFont = document.querySelectorAll('.btn-fonte');
  btnsFont.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btnsFont.forEach(function (b) { b.classList.remove('ativo'); });
      body.classList.remove('fonte-g', 'fonte-gg');
      var nivel = btn.dataset.nivel;
      if (nivel === 'g')  { body.classList.add('fonte-g');  btn.classList.add('ativo'); }
      if (nivel === 'gg') { body.classList.add('fonte-gg'); btn.classList.add('ativo'); }
      if (nivel === 'n')  { btn.classList.add('ativo'); }
      salvarPref();
    });
  });

  // --- ACESSIBILIDADE: alto contraste ---
  var btnContraste = document.getElementById('btn-contraste');
  if (btnContraste) {
    btnContraste.addEventListener('click', function () {
      body.classList.toggle('alto-contraste');
      btnContraste.classList.toggle('ativo');
      salvarPref();
    });
  }

  // --- ACESSIBILIDADE: daltonismo ---
  var btnDalton = document.getElementById('btn-daltonismo');
  if (btnDalton) {
    btnDalton.addEventListener('click', function () {
      body.classList.toggle('daltonismo');
      btnDalton.classList.toggle('ativo');
      salvarPref();
    });
  }

  // --- RESTAURAR PREFERÊNCIAS salvas ---
  var prefs = JSON.parse(localStorage.getItem('a11y') || '{}');
  if (prefs.contraste)  { body.classList.add('alto-contraste'); if (btnContraste) btnContraste.classList.add('ativo'); }
  if (prefs.daltonismo) { body.classList.add('daltonismo');     if (btnDalton)    btnDalton.classList.add('ativo'); }
  if (prefs.fonte === 'g')  { body.classList.add('fonte-g');  var bg = document.querySelector('[data-nivel=g]');  if(bg)  bg.classList.add('ativo'); }
  if (prefs.fonte === 'gg') { body.classList.add('fonte-gg'); var bgg = document.querySelector('[data-nivel=gg]'); if(bgg) bgg.classList.add('ativo'); }

  // --- HERO: imagem rotativa (apenas imagens históricas) ---
  rotacionarHero();

  // --- GOOGLE TRANSLATE: inicializar ---
  // O widget é carregado via callback googleTranslateElementInit definido abaixo
});

function salvarPref() {
  var body = document.body;
  localStorage.setItem('a11y', JSON.stringify({
    contraste:  body.classList.contains('alto-contraste'),
    daltonismo: body.classList.contains('daltonismo'),
    fonte: body.classList.contains('fonte-gg') ? 'gg' : body.classList.contains('fonte-g') ? 'g' : 'n'
  }));
}

// --- HERO: apenas imagens históricas (sem fotos pessoais) ---
var imagensHero = [
  'img/hero/Rugendas_capoeira_RJ.jpg',
  'img/hero/ChristianoJr_aprendizagem-capoeira-1865.jpg',
  'img/hero/Negros_lutando.jpg',
  'img/hero/Rugendas_prancha27_Sao-Salvador.jpg',
  'img/hero/chamberlain.jpg',
  'img/hero/Militao_bras_FOTO_034-baixa.jpg',
  'img/hero/mapa_1878_reproduz_novo-milenio_marcado.jpg'
];

var citacoesHero = [
  { texto: '\u201cAqui \u00e9 a capoeira, esp\u00e9cie de dan\u00e7a f\u00edsica, de evolu\u00e7\u00f5es atrevidas e guerreiras, cadenciada pelo tambor do Congo.\u201d', fonte: 'Charles Ribeyrolles, Brazil Pittoresco, 1859' },
  { texto: '\u201cOs negros t\u00eam ainda um outro folguedo guerreiro, muito mais violento, a capoeira: dois campe\u00f5es se precipitam um contra o outro, procurando dar com a cabe\u00e7a no peito do advers\u00e1rio.\u201d', fonte: 'Johann Moritz Rugendas, Viagem pitoresca atrav\u00e9s do Brasil, 1835' },
  { texto: '\u201cToda a pessoa, que nas Pra\u00e7as, ruas, casas publicas, ou em qualquer outro logar tambem publico, praticar ou exercer o jogo denominado = de capoeiras = (...) sendo captiva ser\u00e1 preza, e entregue ao seo Senhor.\u201d', fonte: 'C\u00e2mara Municipal de S\u00e3o Paulo, Postura de 14 de janeiro de 1833' }
];

function rotacionarHero() {
  var imgEl   = document.getElementById('hero-img');
  var textoEl = document.getElementById('hero-texto');
  var fonteEl = document.getElementById('hero-fonte');
  if (!imgEl) return;
  var i = Math.floor(Math.random() * imagensHero.length);
  var c = Math.floor(Math.random() * citacoesHero.length);
  imgEl.src = imagensHero[i];
  imgEl.alt = 'Imagem hist\u00f3rica da pesquisa sobre capoeira em S\u00e3o Paulo';
  if (textoEl) textoEl.textContent = citacoesHero[c].texto;
  if (fonteEl) fonteEl.textContent = '\u2014 ' + citacoesHero[c].fonte;
}

// --- GOOGLE TRANSLATE ---
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    includedLanguages: 'en,es',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}
