// https://codepen.io/JFeremy/post/switch-language-button-js

var english = document.getElementById('en_click'),
    spanish = document.getElementById('es_click'),
    en_txt = document.querySelectorAll('#en'),
    es_txt = document.querySelectorAll('#es'),
    nb_en = en_txt.length;
    nb_es = es_txt.length,

spanish.addEventListener('click', function() {
    langue(spanish,english);
}, false);

english.addEventListener('click', function() {
    langue(english,spanish);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Español'){
        afficher(es_txt, nb_es);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(es_txt, nb_es);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(englisb,spanish);
}
init();