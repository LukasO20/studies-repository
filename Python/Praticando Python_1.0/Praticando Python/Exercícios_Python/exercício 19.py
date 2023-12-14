import random

print ('Você escolido vai ter que apagar a louza! ')

primeiro = input('Digite seu nome, Sr.Primeiro(a): ')
segundo = input('Digite seu nome, Sr.Segundo(a): ')
terceiro = input('Digite seu nome, Sr.Terceiro(a): ')
quarto = input('Digite seu nome, Sr.Quarto(a): ')

alvo =  [primeiro, segundo, terceiro, quarto]
azarado = random.choice(alvo)

print ('Quem apagará a louza é o (a) {} !'. format (azarado))