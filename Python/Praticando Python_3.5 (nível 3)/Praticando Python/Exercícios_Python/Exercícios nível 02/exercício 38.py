#Comparando números
primeiro = int(input('Digite um número inteiro: '))
segundo = int(input('Digite outro número: '))
print('Vamos compara-los agora...')
if primeiro > segundo:
    print('O 1° número: {} é maior do que o 2° número: {}'.format(primeiro,segundo))
elif segundo > primeiro:
    print('O 2° número {} é maior do que o 1° número: {}'.format(segundo,primeiro))
else:
    print('Ambos os números tem o mesmo valor :D')