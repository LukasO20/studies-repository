# Progressão Aritmética
print ('DEZ_TERMOS_DE_UMA_PA')
primeiro = int(input('Digite o primeiro termo: '))
razão = int(input('Razão? '))
décimo = primeiro + (10 - 1) * razão
for pa in range (primeiro, décimo + razão, razão):
    print('{} '.format(pa), end='→ ')
print('FINALIZADO :)')
