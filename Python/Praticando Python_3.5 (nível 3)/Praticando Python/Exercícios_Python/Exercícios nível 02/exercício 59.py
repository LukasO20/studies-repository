import time
# Calculadora
print('--- Operações Matemáticas ---')
num1 = int(input('Primeiro número: '))
num2 = int(input('Segundo número: '))
operador = 0
while operador != 8:
    print('''####################
[ 1 ] Somar
[ 2 ] Subtrair 
[ 3 ] Multiplicar
[ 4 ] Dividir
[ 5 ] Maior número
[ 6 ] Menor número
[ 7 ] Nova operação
[ 8 ] Sair
####################''')
    time.sleep(2)
    operador = int(input('Opção escolhida... '))
    if operador == 1:
        soma = num1 + num2
        print('{} + {} é igual a {}'.format(num1,num2,soma))
    elif operador == 2:
        subtrair = num1 - num2
        print('{} - {} é igual a {}'.format(num1,num2,subtrair))
    elif operador == 3:
        multi = num1 * num2
        print('{} x {} é igual a {}'.format(num1,num2,multi))
    elif operador == 4:
        divisao = num1 / num2
        print('{} dividido por {} é igual a {}'.format(num1,num2,divisao))
    elif operador == 5:
        if num1 > num2:
            maior = num1
        else:
            maior = num2
        print('Entre {} e {} o MAIOR é {}'.format(num1,num2,maior))
    elif operador == 6:
        if num1 < num2:
            menor = num1
        else:
            menor = num2
        print('Entre {} e {} o MENOR é {}'.format(num1,num2,menor))
    elif operador == 7:
        time.sleep(2)
        num1 = int(input('Primeiro número: '))
        num2 = int(input('Segundo número: '))
    elif operador == 8:
        print('Finalizando...')
        time.sleep(2)
    else:
        print('Operação Inválida, tente novamente!')
print('Obrigado por usar o Aplicativo :)')