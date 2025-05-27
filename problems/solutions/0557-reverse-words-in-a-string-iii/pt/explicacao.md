# Explicação

O problema pede para inverter cada palavra em uma string, mantendo a ordem das palavras.

Por exemplo:
- Entrada: `"Let's take LeetCode contest"`
- Saída: `"s'teL ekat edoCteeL tsetnoc"`

---

## Visão Geral da Solução

Veja o que essa solução faz:

1. Inicializa dois ponteiros: `l` e `r` em 0.
2. Inicializa uma string vazia `res` para armazenar as palavras invertidas.
3. Itera pela string usando `r`:
   - Se `s[r]` não é espaço, incrementa `r`.
   - Se `s[r]` é espaço, inverte a palavra de `l` até `r` (inclusive) e adiciona em `res`.
   - Move os ponteiros para a próxima palavra: incrementa `r` e define `l = r`.
4. Após o loop, ainda há a última palavra para inverter (pois não termina com espaço). Inverte essa substring e adiciona em `res`.
5. Adiciona um espaço extra em `res` para garantir que a última palavra seja invertida corretamente.
6. Retorna `res[1:]` para remover o espaço extra no início.

---

## Detalhes Importantes

- **Por que `res += s[l:r + 1][::-1]`?**
  - Inverte a palavra (de `l` até `r`) e inclui o espaço no final para que a próxima inversão comece após o espaço.

- **Tratamento da última palavra:**
  - Como o loop termina antes de inverter a última palavra, fazemos isso separadamente invertendo `s[l:r + 2]` e adicionando em `res`.

---

## Complexidade

- **Complexidade de Tempo:** O(N), pois percorre a string uma vez.
- **Complexidade de Espaço:** O(N), já que cria uma nova string.

---

## Melhorias

Embora essa solução funcione, ela fica um pouco confusa por adicionar um espaço extra e cortar no final. Uma abordagem alternativa seria:
- Dividir a string pelos espaços.
- Inverter cada palavra.
- Juntar tudo de volta com espaços.

Exemplo:
```python
def reverseWords(s: str) -> str:
    return " ".join(word[::-1] for word in s.split(" "))
