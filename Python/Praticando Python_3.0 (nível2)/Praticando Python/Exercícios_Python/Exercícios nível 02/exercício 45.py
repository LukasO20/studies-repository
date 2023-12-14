import random
#Jokenpô!
print('Vamos jogar Jokenpô? Não me culpe se eu ganhar.')
print('''Escolha...
[ 1 ] - Pedra
[ 2 ] - Papel 
[ 3 ] - Tesoura''')
pedra = 1
papel = 2
tesoura = 3
pc = [1,2,3]
pcescolhe = random.choice(pc)
euescolho = int(input('Eu escolhi... '))
if pcescolhe == 1 and euescolho == 2:
    print('O Computador jogou: Pedra, O Jogador jogou: Papel')
    print('Parabéns, você venceu, eu perdi :/')
elif pcescolhe == 3 and euescolho == 1:
    print('O Computador Jogou: Tesoura, o Jogador: Pedra')
    print('Parabéns, você venceu!')
elif pcescolhe == 2 and euescolho == 3:
    print('O Computador jogou: Papel, o Jogador: Tesoura')
    print('Parabéns, eu perdi, você venceu!') 
elif euescolho == 1 and pcescolhe == 2:
    print('O Computador jogou: Papel, o Jogador: Pedra')
    print('Eu venci hahaha! Você perdeu!')
elif euescolho == 2 and pcescolhe == 3:
    print('O Computador jogou: Tesoura, o Jogador: Papel')
    print('Eu venci, muhahaha! O jogador perdeu!')
elif euescolho == 3 and pcescolhe == 1:
    print('O Computador escolheu: Pedra, o Jogador: Tesoura')
    print('Eu venci, não desista! Jogador perdeu!')
elif pcescolhe == 1 and euescolho == 1 or pcescolhe == 2 and euescolho == 2 or pcescolhe == 3 and euescolho == 3:
    print('O Computador também jogou o mesmo!')
    print('EMPATE!')
else:
    print('OPS!, Opção Inválida!')
