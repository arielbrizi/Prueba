# calculadora

Módulo con las cuatro operaciones aritméticas básicas.

## Uso

```js
import { add, subtract, multiply, divide } from './src/calculator.js';

add(1, 1);        // 2
subtract(5, 3);   // 2
multiply(3, 4);   // 12
divide(10, 2);    // 5
divide(1, 0);     // lanza Error('Division by zero')
```

`divide` lanza `Error('Division by zero')` cuando el divisor es `0`, en lugar de
devolver `Infinity` o `NaN`.

## Tests

```sh
npm test
```

Usa el runner nativo de Node (`node --test`), sin dependencias externas.
