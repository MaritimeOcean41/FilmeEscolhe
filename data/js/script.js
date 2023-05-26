let film_img = [
    'data/images/avatar.jpg',
    'data/images/coraline.jpg',
    'data/images/doisirmao.jpg',
    'data/images/hamburguer.jpg',
    'data/images/mario.jpg',
    'data/images/pop.jpg',
    'data/images/raya.jpg',
]
let film_name = ['AVATAR O CAMINHO DA ÁGUA', 'CORALINE', 'DOIS IRMÃOS', 'TA CHOVENDO HAMBURGUER 2', 'MÁRIO BROS.', 'TUDO POR UM POP STAR', 'RAYA E O ÚLTIMO DRAGÃO'];
let film_color = ['yellow', 'black', 'blue', '#DBF1FD', 'red', 'yellow', '#0099d8']
let film_count = [];
let vote_sou = new Audio("vote_sound.ogg");

for(i = 0; i < 7; i++) {
    var VOT_EL = `<div class="vot" id="${i}"><img src="${film_img[i]}" id="img_${i}"><div class="cou"></div></div>`
    $('.container').prepend(VOT_EL);
    film_count.push(0);
}

document.querySelectorAll('.vot').forEach(function(item) {
    item.addEventListener('click', function() {
        film_count[item.id] += 1;
        vote_sou.play();
        console.log(item.id);
    })
})

$('.res').on('click', function(e) {
    $('.container').css('display', 'none')
    $('.result').css('display', 'block');
});

const result_graf = new Chart("result_graf", {
    type: "bar",
    data: {
        labels: film_name,
        datasets: [{
            backgroundColor: film_color,
            data: film_count
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "RESULTADO DA VOTAÇÃO DO FILME"
        }
    }
});
