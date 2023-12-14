# Simulador de Caixa Eletrônico
print('\33[1;34m='*30)
print('Bem vindo-(a) ao CashBank')
print('\33[1;34m='*30)
saldo = int(input('Digite um valor para sacar: R$'))
total = saldo
cédula = 100
totcédula = 0
while True:
    if total >= cédula:
        total -= cédula
        totcédula += 1
    else:
        if totcédula > 0:
            print(f'\33[1;32mTotal de {totcédula} cédulas de R${cédula}')
        if cédula == 100:
            cédula = 50
        elif cédula == 50:
            cédula = 25
        elif cédula == 25:
            cédula = 10
        elif cédula == 10:
            cédula = 5
        elif cédula == 5:
            cédula = 1
        totcédula = 0
        if total == 0:
            break
print(f'Os valores informados completam R${saldo}')
print('\33[1;34m='*50)
print('Saque realizado com sucesso ! CashBank Agradece!')
print('\33[1;34m='*50)