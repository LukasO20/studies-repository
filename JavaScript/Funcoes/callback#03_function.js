// Para console.log do Browser - callback
document.getElementsByTagName('body')[0].onclick = function (e){
    this.style.background = 'black'
    console.log('Mudei a cor do background da sua página para preto...')
}