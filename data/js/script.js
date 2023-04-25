let film_img = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PDycBrF3srLlWQGofRGyvgHaFj%26pid%3DApi&f=1&ipt=3ebfab95f0093ab54c675f62a9b5d5702b849f6e2c00b358736673fa2552802c&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.b_pCQzS8apwwESI3cCSkJwHaEj%26pid%3DApi&f=1&ipt=a003eb03ba4bfb809352ad697e2162169a478f2e63b703512da7d39c75eaecd8&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.739K6060caiF9VQq9tGB8wHaEK%26pid%3DApi&f=1&ipt=81d4f7158acc44df61b694ca6e2011f4cc2ee3211fa267689a6f4c34cf0dfbe1&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4hv8GMgJ7c4VhVEXJjPyUwHaFZ%26pid%3DApi&f=1&ipt=c937b35eba3dfede5fbb0dc10b9e0f2e3f474af704f5cc8ef99e6f1dec41c377&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CFCcQ1RPFrot4Yg76Na6VgHaFj%26pid%3DApi&f=1&ipt=1245d541e2a715dc0dc3c2e1b6db0ef00cd280f47b5b53108413c15e2bc71a79&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bfMdkMqrWk4BTwykbn_OPgHaIY%26pid%3DApi&f=1&ipt=b69c5c1ae7c999840ac1f2bccdb4d910f09bc95a3736ac286231465f188c32e8&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2aYqn5tZZV4L-qntEvmXFQHaEH%26pid%3DApi&f=1&ipt=e78130985d8e75f74bca0299302f876c5770cd5c10ab3b3415784db9730b621b&ipo=images'
]
let film_name = ['Bob Esponja', '101 Dalmatas', 'Raya e o Dragão', 'Frozen', 'Mário Bros.', 'Minions', 'O Poderoso Chefinho',];
let film_color = ['yellow', 'black', 'blue', '#DBF1FD', 'red', 'yellow', '#0099d8']
let film_count = [];

for(i = 0; i < 7; i++) {
    var VOT_EL = `<div class="vot" id="${i}"><img src="${film_img[i]}" id="img_${i}"><div class="cou"><a id="cou_${i}">0</a></div></div>`
    $('.container').prepend(VOT_EL);
    film_count.push(0);
}

document.querySelectorAll('.vot').forEach(function(item) {
    item.addEventListener('click', function() {
        film_count[item.id] += 1;
        document.getElementById(`cou_${item.id}`).innerHTML = film_count[item.id];
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
            text: "Resultado Votação Do Filme"
        }
    }
});