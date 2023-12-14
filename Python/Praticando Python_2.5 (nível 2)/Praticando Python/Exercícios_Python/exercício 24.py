cidade = str(input('Digite um nome de uma cidade em letra maiscúla (ex: São Paulo): ')).strip()

result =  cidade[:5].upper() == 'SANTO'

print ('A sua cidade possuí "Santo ?" {}'.format (result))