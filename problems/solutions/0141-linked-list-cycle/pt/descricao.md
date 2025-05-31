# 141. Linked List Cycle (Fácil)

Dada `head ', o chefe de uma lista vinculada, determine se a lista vinculada tem um
ciclo nele.

Há um ciclo em uma lista vinculada se houver algum nó na lista que possa
Seja alcançado novamente seguindo continuamente o ponteiro `Next '.Internamente,
`pos 'é usado para denotar o índice do nó que o ponteiro` próximo' da cauda é
conectado a.** Observe que `pos 'não é passado como um parâmetro **.

Retorne `true` _ Se houver um ciclo na lista vinculada_.Caso contrário, retorne
`false`.

## Exemplo 1:

! [] (https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)



Entrada: Head = [3,2,0, -4], pos = 1
Saída: true
Explicação: Há um ciclo na lista vinculada, onde a cauda se conecta ao 1º nó (Indexado 0).


## Exemplo 2:

! [] (https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)



Entrada: Head = [1,2], POS = 0
Saída: true
Explicação: Há um ciclo na lista vinculada, onde a cauda se conecta ao 0º nó.


## Exemplo 3:

! [] (https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)



Entrada: Head = [1], POS = -1
Saída: false
Explicação: Não há ciclo na lista vinculada.


## restrições

* O número de nós na lista está no intervalo `[0, 104]`.
* `-105 <= node.val <= 105`
*`POS` é` -1` ou um índice válido ** na lista vinculada.

** Acompanhe: ** Você pode resolvê -lo usando a memória `o (1)` (ou seja, constante)?
