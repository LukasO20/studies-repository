print('Caro funcionário, vamos conferir seu novo salário.')
salario = float(input('Digite seu salário atual aqui: R$'))
tipo1 = salario + ((salario/100) *10)
tipo2 = salario + ((salario/100) *15) 
if salario >= 1250.00:
    print('Você recebeu um aumento de 10% seu novo salário é R${:.2f}'.format(tipo1))
else: 
    print('Você recebeu um aumento de 15% seu novo salário é R${:.2f}'.format(tipo2))