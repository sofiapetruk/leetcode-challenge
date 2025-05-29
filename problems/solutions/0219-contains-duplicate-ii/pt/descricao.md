# 219. Contains Duplicate II (Fácil)

Dada uma matriz inteira `nums` e um número inteiro` k`, return `true` _ se houver
Dois ** índices distintos ** _`i` _and_`j` _ na matriz tais que_`nums [i] ==
Nums [j] `_and_`abs (i - j) <= k`.

## Exemplo 1:



Entrada: nums = [1,2,3,1], k = 3
Saída: true


## Exemplo 2:



Entrada: nums = [1,0,1,1], k = 1
Saída: true


## Exemplo 3:



Entrada: nums = [1,2,3,1,2,3], k = 2
Saída: false


## restrições

* `1 <= nums.Length <= 105`
* `-109 <= nums [i] <= 109`
* `0 <= k <= 105`
