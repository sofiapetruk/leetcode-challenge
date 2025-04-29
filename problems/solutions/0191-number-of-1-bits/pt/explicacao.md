# Como resolver o problema #191 Número de Bits 1

Primeiramente, você precisa pensar nos passos.
Você pode estar pensando "certo, mas como faço isso?"
Bem, cada pessoa tem uma maneira de fazer isso, mas acredito que a melhor é comentar PASSO A PASSO o que você precisa fazer com base na descrição do problema, por exemplo:

```typescript
// 1. Transformar em Binário
// 2. Obter a quantidade binária 1
```

Legal! Agora vamos começar a pensar no código.

### 1. Crie uma variável para converter o número para binário e separar os zeros no parâmetro 'n':

```typescript
var number: string = (n >>> 0).toString(2).replaceAll("0", "");
```

### 2. Converta a sequência de caracteres em um número:

```typescript
var stringToNumber: number = parseInt(number);
```

### 3. Execute um loop e incremente a variável local 'i' na variável 'stringToNumber':

```typescript
for (let i = 0; i <= number.length; i++) {
  stringToNumber = i;
}
```

### 4. Retorne o valor de stringToNumber:

```typescript
return stringToNumber;
```

:D
