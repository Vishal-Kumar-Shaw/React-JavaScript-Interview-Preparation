Aim of the project - 
To understand the use cases of useEffect Hooks in different cicumstances



Project: Productivity Dashboard

Ek **single page dashboard** banega jisme multiple features honge aur har feature me **different type ka `useEffect` use hoga**.

---

# 🎯 Skills Covered

Is project me tu practice karega:

```
useEffect on mount
useEffect on state change
useEffect cleanup
API calls
localStorage
event listeners
timers
derived state
```

---

# 🧩 Feature 1 — Live Digital Clock

### Goal

Real-time clock show karna.

Example UI

```
Current Time

10:42:12 PM
```

### Logic

```
setInterval
useEffect
cleanup
```

Example idea

```javascript
useEffect(() => {

 const timer = setInterval(() => {
   setTime(new Date());
 },1000)

 return () => clearInterval(timer)

},[])
```

Practice:

```
useEffect mount
cleanup
```

---

# 🧩 Feature 2 — Weather API

### Goal

City input do → weather fetch karo.

UI

```
City: [Kolkata]

Temperature: 28°C
Humidity: 70%
```

### Practice

```
API call
useEffect
loading state
```

Example flow

```
city change
↓
useEffect run
↓
API fetch
↓
UI update
```

---

# 🧩 Feature 3 — Persistent Todo List

UI

```
[ Buy milk ] (Add)

• Buy milk
• Learn React
```

### Requirement

Page refresh hone ke baad bhi tasks rahe.

Practice:

```
localStorage read
localStorage write
```

Example idea

```javascript
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])
```

---

# 🧩 Feature 4 — Window Resize Tracker

UI

```
Window Width: 1280
Window Height: 720
```

Practice:

```
event listener
cleanup
```

Example idea

```javascript
useEffect(()=>{

 const handleResize = () => {
   setWidth(window.innerWidth)
 }

 window.addEventListener("resize",handleResize)

 return ()=> window.removeEventListener("resize",handleResize)

},[])
```

---

# 🧩 Feature 5 — Typing Indicator

UI

```
Input: [ Vishal ]

Typing...
```

Agar user typing stop kare 1 second ke liye → message disappear.

Practice:

```
debounce
timer
useEffect
```

---

# 🧩 Final UI Layout

```
---------------------------------

        PRODUCTIVITY DASHBOARD

---------------------------------

CLOCK
10:45:32 PM


WEATHER
City [Kolkata]
Temperature: 28°C


TODO
[ Learn React ] (Add)

• Learn React
• Build Project


WINDOW SIZE
Width: 1280
Height: 720


TYPING
Input: [ Vishal ]

Typing...

---------------------------------
```

---

# 🧱 Suggested Component Structure

```
App
 ├ Clock
 ├ Weather
 ├ Todo
 ├ WindowSize
 └ TypingIndicator
```

---

# 📈 useEffect Types Covered

| Feature    | useEffect Concept |
| ---------- | ----------------- |
| Clock      | mount + cleanup   |
| Weather    | dependency change |
| Todo       | localStorage sync |
| WindowSize | event listener    |
| Typing     | debounce          |

---

# 🏆 Bonus Challenges (Very Important)

Agar tu **serious React developer banna chahta hai** to ye bhi add kar:

### ⭐ Dark Mode

```
useEffect
localStorage
```

---

### ⭐ API Error Handling

```
network fail
show error
```

---

### ⭐ Loading Spinner

```
while API loading
```

---

# 🧠 Interview Benefit

Is project se tu confidently bol sakta hai:

```
I have implemented:
API side effects
event listeners
cleanup functions
state synchronization
```

Companies exactly ye hi puchti hain.



Chalo bhai **`useEffect` ko simple + developer level pe samajhte hain**.
Ye hook bhi **React** me **React 16.8 (2019)** me introduce hua tha.

---

# 1️⃣ Sabse Simple Definition

**useEffect**

> React me side effects handle karne ke liye use hota hai.

---

# 2️⃣ Side Effect kya hota hai?

Side effect matlab **component render ke baad hone wala kaam**.

Example:

```
API call
Timer
Event listener
LocalStorage
DOM manipulation
Logging
```

Ye sab **side effects** hain.

---

# 3️⃣ Syntax

```javascript
useEffect(() => {
   // side effect code
}, [dependencies]);
```

Parts:

```
function → kya kaam karna hai
dependencies → kab run karna hai
```

---

# 4️⃣ Example 1 (Basic)

```javascript
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Rendered");
  });

  return <h1>Hello</h1>;
}
```

Result:

```
Component render
Console → Component Rendered
```

---

# 5️⃣ Example 2 (Run Only Once)

Agar tu chahta hai **component mount hone pe sirf ek baar chale**:

```javascript
useEffect(() => {
   console.log("Run once");
}, []);
```

`[]` = empty dependency array

Meaning:

```
only first render
```

Common use:

```
API call
initial setup
```

---

# 6️⃣ Example 3 (Run when state changes)

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

Matlab:

```
count change → effect run
```

---

# 7️⃣ Example 4 (API Call)

```javascript
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

Real apps me **API calls mostly useEffect me hoti hain**.

---

# 8️⃣ Cleanup Function (Important)

Agar component destroy ho raha hai to cleanup karna padta hai.

Example:

Timer

```javascript
useEffect(() => {

  const timer = setInterval(() => {
    console.log("running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);
```

Flow:

```
Component mount → timer start
Component unmount → timer stop
```

---

# 9️⃣ Lifecycle Mapping

React class lifecycle vs hooks

```
componentDidMount
componentDidUpdate
componentWillUnmount
```

Hooks version:

```
useEffect
```

Ek hi hook se **teeno lifecycle handle ho jate hain**.

---

# 🔟 Visual Flow

```
Component Render
      ↓
DOM Update
      ↓
useEffect Run
```

---

# 1️⃣1️⃣ Common Mistake

❌ Infinite loop

```javascript
useEffect(() => {
  setCount(count + 1);
});
```

Result:

```
render
effect
setState
render
effect
setState
∞
```

---

# 1️⃣2️⃣ Best Interview Definition

> useEffect is a React hook that allows functional components to perform side effects such as data fetching, subscriptions, and DOM updates after rendering.

---

# 🧠 Memory Trick

```
useState → state manage
useEffect → side work manage
```

---

⚡ Agar tu chahe to mai **3 cheeze aur sikha sakta hu jo 90% developers ko nahi pata hoti**:

1️⃣ **React rendering phases (Render vs Commit phase)**
2️⃣ **useEffect vs useLayoutEffect difference**
3️⃣ **Why useEffect runs twice in React Strict Mode**

Ye **React interviews me bahut poocha jata hai**.
