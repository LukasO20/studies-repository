#Analise de Triângulo v2.0
print('a partir dos segmentos, vamos analisar a forma geomêtrica. o triângulo')
l1 = float(input('Digite o primeiro segmento do triânguilo: '))
l2 = float(input('Digite o segundo segmento: '))
l3 = float(input('Digite o terceiro segmento: '))
if l1 < l2 + l3 and l2 < l3 + l1 and l3 < l2 + l1:
    print('As medidas citadas, {}, {} e {} podem formar o triângulo '.format(l1,l2,l3), end='')
    if l1 == l2 == l3:
        print('EQUILÁTERO!')
    elif l1 != l2 != l3 != l1:
        print('ESCALENO!')
    else:
        print('ISÓCELES!')
else:
    print('Os segmentos informados não formam um tipo de triângulo :/')