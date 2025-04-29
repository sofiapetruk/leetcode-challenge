# How to solve the problem #191 Number of 1 Bits

At first, you need to think on the steps.
You might thinking "right, but how do I do it?"
Well, each person have a way to do this, but I believe that the best one is comment STEP BY STEP what you need to do based on description of the problem, e.g.:

```typescript
// 1. Transform in Binary
// 2. Take the quantity binary 1
```

Nice! Now let's start thinking about the code.

### 1. Create a variable to convert the number to binary and split the zeros in parameter 'n':

```typescript
var number: string = (n >>> 0).toString(2).replaceAll("0", "");
```

### 2. Convert the sequence of characteres to number:

```typescript
var stringToNumber: number = parseInt(number);
```

### 3. Do a loop and increments de local variable 'i' into variable 'stringToNumber':

```typescript
for (let i = 0; i <= number.length; i++) {
  stringToNumber = i;
}
```

### 4. Return the value of stringToNumber:

```typescript
return stringToNumber;
```

:D
