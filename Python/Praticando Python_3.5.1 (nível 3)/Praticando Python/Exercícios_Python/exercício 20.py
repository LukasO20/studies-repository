import random

primeiro = input('Digite o nome do seu grupo aqui: ')
segundo = input('Digite o nome do seu grupo aqui: ')
terceiro = input('Digite o nome do seu grupo aui: ')
quarto = input('Digite o nome do seu grupo aqui: ')

selecionados = [primeiro, segundo, terceiro, quarto]
randomizar = random.shuffle(selecionados)

print ('A ordem de apresentação será; ')
print (selecionados)