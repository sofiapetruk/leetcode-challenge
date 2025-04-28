## 🧠 Lógica da Solução - Fibonacci

Essa solução resolve o problema do número de Fibonacci de forma **iterativa**, ou seja, usando um laço de repetição ao invés de recursão.

### 💡 Ideia principal:

A lógica se baseia na própria definição da sequência de Fibonacci:  
**cada número é a soma dos dois anteriores**. Então, o algoritmo começa com os dois primeiros valores da sequência (0 e 1) e vai atualizando os próximos valores até chegar no número desejado.

### 🔄 Como funciona:

- Começamos com os dois primeiros números da sequência: `0` e `1`.
- A cada repetição, somamos os dois últimos números para obter o próximo.
- Depois atualizamos esses dois valores: o mais recente vira o anterior, e o novo resultado vira o atual.
- Esse processo se repete até chegar na posição `n`.

### ✅ Vantagens:

- É eficiente: evita chamadas recursivas e cálculos repetidos.
- Funciona bem para valores de `n` pequenos e médios, especialmente dentro do limite de `0 <= n <= 30`.

---

#### Solucionador

- [Vítor](https://github.com/euvitorti)