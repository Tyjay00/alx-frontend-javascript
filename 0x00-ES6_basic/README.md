# JavaScript ES6 Basic

## 0. Const or let?

- `0-constants.js`
  - Contains functions to demonstrate the use of `const` and `let`.
  - `taskFirst()` instantiated variables using `const`.
  - `taskNext()` instantiated variables using `let`.
  - Execution example:
    ```
    bob@dylan:~$ cat 0-main.js
    import { taskFirst, taskNext } from './0-constants.js';

    console.log(`${taskFirst()} ${taskNext()}`);
    bob@dylan:~$ npm run dev 0-main.js 
    I prefer const when I can. But sometimes let is okay
    ```

## 1. Block Scope

- `1-block-scoped.js`
  - Modifies variables inside the `taskBlock` function to avoid overwriting inside the conditional block.
  - Execution example:
    ```
    bob@dylan:~$ cat 1-main.js
    import taskBlock from './1-block-scoped.js';

    console.log(taskBlock(true));
    console.log(taskBlock(false));
    bob@dylan:~$ npm run dev 1-main.js 
    [ false, true ]
    [ false, true ]
    ```

## 2. Arrow functions

- `2-arrow.js`
  - Rewrites a standard function using ES6's arrow syntax.
  - Execution example:
    ```
    bob@dylan:~$ cat 2-main.js
    import getNeighborhoodsList from './2-arrow.js';

    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
    bob@dylan:~$ npm run dev 2-main.js 
    [ 'SOMA', 'Union Square', 'Noe Valley' ]
    ```

## 3. Parameter defaults

- `3-default-parameter.js`
  - Condenses the internals of a function to one line using default parameter values.
  - Execution example:
    ```
    bob@dylan:~$ cat 3-main.js
    import getSumOfHoods from './3-default-parameter.js';

    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));
    bob@dylan:~$ npm run dev 3-main.js 
    142
    56
    41
    ```

## 4. Rest parameter syntax for functions

- `4-rest-parameter.js`
  - Modifies a function to return the number of arguments passed using rest parameter syntax.
  - Example:
    ```
    bob@dylan:~$ cat 4-main.js
    import returnHowManyArguments from './4-rest-parameter.js';

    console.log(returnHowManyArguments("one"));
    console.log(returnHowManyArguments("one", "two", 3, "4th"));
    bob@dylan:~$ npm run dev 4-main.js 
    1
    4
    ```

## 5. The wonders of spread syntax

- `5-spread-operator.js`
  - Uses spread syntax to concatenate arrays and a string.
  - Execution example:
    ```
    bob@dylan:~$ cat 5-main.js
    import concatArrays from './5-spread-operator.js';

    console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
    bob@dylan:~$ npm run dev 5-main.js 
    [ 'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o' ]
    ```

## 6. Take advantage of template literals

- `6-string-interpolation.js`
  - Rewrites a return statement using template literals.
  - Execution example:
    ```
    bob@dylan:~$ cat 6-main.js
    import getSanFranciscoDescription from './6-string-interpolation.js';

    console.log(getSanFranciscoDescription());
    bob@dylan:~$ npm run dev 6-main.js 
    As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
    ```

## 7. Object property value shorthand syntax

- `7-getBudgetObject.js`
  - Modifies a function to use object property value shorthand syntax.
  - Execution example:
    ```
    bob@dylan:~$ cat 7-main.js
    import getBudgetObject from './7-getBudgetObject.js';

    console.log(getBudgetObject(400, 700, 900));
    bob@dylan:~$ npm run dev 7-main.js 
    { income: 400, gdp: 700, capita: 900 }
    ```

## 8. No need to create empty objects before adding in properties

- `8-getBudgetCurrentYear.js`
  - Rewrites a function to use ES6 computed property names on the budget object.
  - Execution example:
    ```
    bob@dylan:~$ cat 8-main.js
    import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

    console.log(getBudgetForCurrentYear(2100, 5200, 1090));
    bob@dylan:~$ npm run dev 8-main.js 
    { 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
    ```

## 9. ES6 method properties

- `9-getFullBudget.js`
  - Rewrites a function to use ES6 method properties in the fullBudget object.
  - Execution example:
