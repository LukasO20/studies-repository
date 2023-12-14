#Bases numéricas
numero = int(input('Digite um número aqui, vamos fazer a conversão de bases: '))
base1 = bin(numero)
base2 = oct(numero)
base3 = hex(numero)
#menu
print ('''Escolha uma das bases...
[ 1 ] - BINÁRIO
[ 2 ] - OCTAL
[ 3 ] - HEXADECIMAL''')
opcoes = int(input('Eu escolhi... '))
if opcoes == 1:
    print('Você converteu para Binário, o número inteiro {} para binário é {}'.format(numero,base1[2:]))
    print('Obrigado por usar o programa :D Tenha um ótimo dia.')
elif opcoes == 2:
    print('Você converteu para Octal, o número inteiro {} para octal é {}'.format(numero,base2[2:]))
    print('Obrigado por usar o programa :D Tenha um ótimo dia.')
elif opcoes == 3:
    print('Você converteu para a base Hexadecimal, o número inteiro {} para hexadecimal é {2:}'.format(numero,base3[2:]))
    print('Obrigado por usar o programa :D Tenha um ótimo dia.')
elif opcoes != 1 and 2 or 3:
    print('Essa opção escolhida não existe :/ Tente novamente.')
