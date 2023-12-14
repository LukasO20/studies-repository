import time
import random
# Jodo da Advinhação v2.0
print('''
#####################################
#                                   #
#  Como você está? Sou eu De Novo!  #
#       Agora na versão 2.0         #
#     Vou Pensar em um número,      #
#     Você tem que Adivinhar !      #
#   Só pode Adivinhar de 0 a 10     #
#                                   #
#####################################
''')
tentativas = 0
jogador = int(input('Pensou no número? Digite aqui: '))
print('Estou pensando... Calma!')
time.sleep(2)
pc = [0,1,2,3,4,5,6,7,8,9,10]
pcescolhe = random.choice(pc)
while jogador != pcescolhe:
    tentativas += 1
    print('Você perdeu ! Eu pensei no {} e você no {} com {} tentativas!). Tente Novamente!'.format(pcescolhe,jogador,tentativas))
    time.sleep(1)
    jogador = int(input('Revanche, Digite o número: '))
tentativas += 1
print('Parabéns, você Venceu! Eu pensei no {} e você no {} com {} tentativas!)'.format(pcescolhe,jogador,tentativas))
