# Maior e menor sequência de peso
print('Quantos KG você tem O.O ?')
maior = 0
menor = 0
for kgs in range(1,6):
    kg = float(input('Quantos KG tem a {}° Pessoa? KG '.format(kgs)))
    if kgs == 1:
        maior = kg
        menor = kg
    else:
        if kg > maior:
            maior = kg
        if kg < menor:
            menor = kg
print('A pessoa de maior peso foi {}Kgs'.format(maior))
print('A pessoa de menor peso foi de {}Kgs'.format(menor))