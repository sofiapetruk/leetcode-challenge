# 21. Combinar Duas Listas Encadeadas Ordenadas – Explicação da Solução

## Abordagem: Iteração com Ponteiros (Abordagem Iterativa)

Essa solução mescla duas listas encadeadas já ordenadas em uma nova lista também ordenada, utilizando uma abordagem **iterativa com ponteiros**. Ela constrói a nova lista um nó por vez, comparando os valores dos nós nas duas listas de entrada e sempre anexando o menor valor ao final da lista resultante.

---

## Lógica do Algoritmo:

1.  **Nó "Dummy" (Sentinela)**
    * Um nó "dummy" (`new_list`) é criado no início. Este nó não contém um valor real da lista, mas serve como um ponto de partida conveniente. Isso elimina a necessidade de tratar o caso do primeiro nó de forma especial.
    * Um ponteiro `tail` (cauda) é inicializado para apontar para o nó "dummy". Este `tail` sempre rastreará o último nó da nossa lista combinada, onde o próximo nó será anexado.

2.  **Iteração Principal (`while list1 and list2`)**
    * O algoritmo entra em um loop que continua enquanto **ambas** as listas de entrada (`list1` e `list2`) ainda tiverem nós para serem processados.
    * **Comparação e Anexo**:
        * Dentro do loop, os valores dos nós atuais de `list1` e `list2` são comparados (`list1.val` vs. `list2.val`).
        * Se o valor de `list1` for menor (`list1.val < list2.val`):
            * O nó atual de `list1` é anexado ao final da nossa lista combinada (`tail.next = list1`).
            * O ponteiro `list1` avança para o próximo nó na sua lista original (`list1 = list1.next`).
        * Caso contrário (se o valor de `list2` for menor ou igual):
            * O nó atual de `list2` é anexado ao final da nossa lista combinada (`tail.next = list2`).
            * O ponteiro `list2` avança para o próximo nó na sua lista original (`list2 = list2.next`).
    * **Atualização do `tail`**: Após anexar um nó, o ponteiro `tail` é movido para o nó que acabou de ser adicionado (`tail = tail.next`). Isso garante que `tail` esteja sempre pronto para o próximo anexo.

3.  **Anexando os Nós Restantes**
    * Quando o loop principal termina, uma das listas (`list1` ou `list2`) está vazia. A outra lista (se não estiver vazia) ainda contém nós que precisam ser adicionados à lista combinada.
    * Como as listas originais já estão ordenadas, e todos os elementos já processados são menores ou iguais aos restantes, podemos simplesmente anexar o resto da lista não vazia.
    * `if list1: tail.next = list1`: Se `list1` ainda tiver nós, o restante de `list1` é anexado diretamente ao final da lista combinada.
    * `elif list2: tail.next = list2`: Se `list2` ainda tiver nós (e `list1` estiver vazia), o restante de `list2` é anexado.

4.  **Retorno do Resultado**
    * `return new_list.next`: Finalmente, o método retorna `new_list.next`. Como `new_list` é o nó "dummy" inicial, `new_list.next` é o verdadeiro cabeçalho da lista encadeada combinada e ordenada. Se ambas as listas originais eram vazias, `new_list.next` será `None`, que é o resultado correto.

---

## Exemplo Passo a Passo:

Para `list1 = [1,2,4]` e `list2 = [1,3,4]`:

1.  **Configuração Inicial**
    * `new_list = ListNode()` (valor 0, next=None)
    * `tail = new_list`
    * `list1` aponta para 1
    * `list2` aponta para 1

2.  **Iteração**

    * **1ª Passagem:**
        * `list1.val` (1) é **igual** a `list2.val` (1). A condição `list1.val < list2.val` é falsa.
        * Anexa `list2` a `tail.next`: `new_list.next` aponta para `[1 (de list2)]`.
        * `list2` avança para `3`.
        * `tail` avança para o nó `[1 (de list2)]`.
        * Lista combinada: `[1]`

    * **2ª Passagem:**
        * `list1.val` (1) é **menor** que `list2.val` (3).
        * Anexa `list1` a `tail.next`: `tail.next` (que aponta para 1) agora aponta para `[1 (de list1)]`.
        * `list1` avança para `2`.
        * `tail` avança para o nó `[1 (de list1)]`.
        * Lista combinada: `[1, 1]`

    * **3ª Passagem:**
        * `list1.val` (2) é **menor** que `list2.val` (3).
        * Anexa `list1` a `tail.next`: `tail.next` (que aponta para 1) agora aponta para `[2 (de list1)]`.
        * `list1` avança para `4`.
        * `tail` avança para o nó `[2 (de list1)]`.
        * Lista combinada: `[1, 1, 2]`

    * **4ª Passagem:**
        * `list1.val` (4) é **maior** que `list2.val` (3).
        * Anexa `list2` a `tail.next`: `tail.next` (que aponta para 2) agora aponta para `[3 (de list2)]`.
        * `list2` avança para `4`.
        * `tail` avança para o nó `[3 (de list2)]`.
        * Lista combinada: `[1, 1, 2, 3]`

    * **5ª Passagem:**
        * `list1.val` (4) é **igual** a `list2.val` (4). A condição `list1.val < list2.val` é falsa.
        * Anexa `list2` a `tail.next`: `tail.next` (que aponta para 3) agora aponta para `[4 (de list2)]`.
        * `list2` avança para `None`.
        * `tail` avança para o nó `[4 (de list2)]`.
        * Lista combinada: `[1, 1, 2, 3, 4]`

    * O loop `while` termina porque `list2` é `None`.

3.  **Anexando Restantes**
    * `if list1:` (list1 aponta para 4, então é True)
    * `tail.next = list1`: O nó `[4 (de list2)]` agora aponta para o nó `[4 (de list1)]`.
    * `list1` é `None`.

4.  **Resultado**
    * Retorna `new_list.next`, que é a lista `[1,1,2,3,4,4]`.

---

### Complexidade

* **Complexidade de Tempo**: $O(m + n)$, onde $m$ é o número de nós em `list1` e $n$ é o número de nós em `list2`. Isso porque cada nó de ambas as listas é visitado e anexado à nova lista exatamente uma vez.
* **Complexidade de Espaço**: $O(1)$. A solução não usa espaço adicional proporcional ao tamanho das listas de entrada para armazenamento (além do espaço para a própria nova lista, que é a saída). Os nós existentes são "emendados" juntos; nenhum novo nó é criado.

---