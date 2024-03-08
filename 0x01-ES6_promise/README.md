#### 0. Promise Basics

**File: 0-promise.js**

```javascript
// 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
```

#### 1. Resolving and Rejecting Promises

**File: 1-promise.js**

```javascript
// 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

#### 2. Handling Resolved and Rejected Promises

**File: 2-then.js**

```javascript
// 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

#### 3. Handling Multiple Successful Promises

**File: 3-all.js**

```javascript
// 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

#### 4. Simple Resolved Promise

**File: 4-user-promise.js**

```javascript
// 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

#### 5. Rejecting Promises

**File: 5-photo-reject.js**

```javascript
// 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

#### 6. Handling Multiple Promises

**File: 6-final-user.js**

```javascript
// 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

#### 7. Load Balancer

**File: 7-load_balancer.js**

```javascript
// 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
```

#### 8. Error Handling with try-catch

**File: 8-try.js**

```javascript
// 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
```

#### 9. Handling Errors in a Queue

**Files: 9-try.js and 9-main.js**

```javascript
// 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
```

#### 10. Async/Await

**File: 100-await.js**

```javascript
// 100-main.js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
```
