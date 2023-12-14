import math

print ('Vamos conferir o seno cosseno e a tângente de um triângulo! ')

an = float(input('Digite um valor para o ângulo: '))
sen = (math.sin (math.radians(an)))
cos = (math.cos (math.radians(an)))
tan = (math.tan (math.radians(an)))

print ('O ângulo {:.2f} em seno desse triângulo é {:.2f}, seu cosseno {:.2f} e sua tangente {:.2f}'. format (an, sen, cos, tan))
