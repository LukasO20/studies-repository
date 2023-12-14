# Soma de Impares
print('Confira a soma de todos os valores de múltiplos de 3')
soma = 0
count = 0
for tres in range(1, 501, 2):
    if tres % 3 == 0:
        soma = soma + tres
        count = count + 1
print('A soma de todos os {} valores é : {}'.format(count,soma))