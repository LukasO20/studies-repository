frase = str(input('Digite uma frase aqui: ')).strip().upper()
print ('A letra "A" aparece {} vezes'.format (frase.count('A')))
print ('A primeira vez em que o "A" aparece é na posição {}'.format (frase.find('A')+1))
print ('E na ultima vez o "A" aparece na posição {} (com espaços)'.format (frase.rfind('A')+1))
