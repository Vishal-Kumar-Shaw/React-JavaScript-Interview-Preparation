Requirements - 

Goal
useState use karke ek interactive dashboard banana jisme multiple states ho.

multiple useState
state updates
conditional rendering
array state
derived state


1️⃣ Features
App me ye cheeze honi chahiye:
Counter Section
  Increase button
  Decrease button
  Reset button
User Section
  Name input
  Age input
  Show profile button
Todo Section
  Add task
  Delete task
  Show total tasks


  


  -------------------------------------------------
                SMART DASHBOARD
-------------------------------------------------


------------------ COUNTER ----------------------

                Count: 0

        [  + Increase  ]   [  - Decrease  ]

                 [ Reset ]

-------------------------------------------------


------------------ PROFILE ----------------------

        Name :  [______________]

        Age  :  [______________]

              [ Show Profile ]


        ---------------------------
        |  Name: Vishal           |
        |  Age : 25               |
        ---------------------------

-------------------------------------------------


------------------- TODO ------------------------

        Task : [____________________]  [ Add ]



        -------------------------------
        |  • Learn React          ❌  |
        |  • Build Mini Project   ❌  |
        |  • Go to Gym            ❌  |
        -------------------------------


            Total Tasks : 3

-------------------------------------------------


Bhai ek **mini project deta hu jo `useState` ko solid bana dega**.
Ye real company type ka small feature hai jo tu **1–2 ghante me bana sakta hai**.

---

# 🧩 Mini Project: Smart Counter Dashboard

Technology: **React**

## 🎯 Goal

`useState` use karke ek **interactive dashboard** banana jisme multiple states ho.

Isme tu practice karega:

* multiple `useState`
* state updates
* conditional rendering
* array state
* derived state

---

# 1️⃣ Features

App me ye cheeze honi chahiye:

### Counter Section

* Increase button
* Decrease button
* Reset button

### User Section

* Name input
* Age input
* Show profile button

### Todo Section

* Add task
* Delete task
* Show total tasks

---

# 2️⃣ UI Structure

```
App
 ├ Counter Section
 │   ├ count
 │   ├ + button
 │   ├ - button
 │   ├ reset
 │
 ├ Profile Section
 │   ├ name input
 │   ├ age input
 │   ├ show profile
 │
 ├ Todo Section
     ├ input task
     ├ add task
     ├ list tasks
     ├ delete
```

---

# 3️⃣ States Required

Minimum **6–7 states use karne hain**

Example:

```javascript
const [count, setCount] = useState(0);
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [showProfile, setShowProfile] = useState(false);
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
```

---

# 4️⃣ Functional Requirements

### Counter

```
Increase → +1
Decrease → -1
Reset → 0
```

---

### Profile

Button click pe show ho

```
Name: Vishal
Age: 25
```

---

### Todo

Add task

```
Buy milk
Learn React
Go to gym
```

Delete task

---

# 5️⃣ Example Output

```
Counter
Count: 3
[ + ] [ - ] [ Reset ]

Profile
Name: Vishal
Age: 25
[Show Profile]

Todo
[ Learn React ] (Add)

• Learn React ❌
• Build project ❌
```

---

# 6️⃣ Bonus Challenges (Important)

Agar tu **real React developer banna chahta hai** to ye add kar:

### ⭐ Challenge 1

Disable decrement if count = 0

---

### ⭐ Challenge 2

Show message

```
"Too many tasks!" if tasks > 5
```

---

### ⭐ Challenge 3

Show task counter

```
Total Tasks: 4
```

---

### ⭐ Challenge 4

Press **Enter key → add task**

---

# 7️⃣ Learning Outcome

Is project se tu seekhega:

```
multiple useState
array state update
controlled inputs
conditional rendering
events
```

---

# 8️⃣ Interview Connection

Ye same logic use hota hai:

* dashboards
* forms
* todo apps
* admin panels

Isliye companies poochti hain:

```
Build a Todo app
Build counter
Build form state
```

---

✅ Agar tu bole to mai next level assignment bhi de sakta hu:

**"React useState + useEffect mini project (Real Company Level)"**

Usme banayenge:

```
Notes App
LocalStorage persistence
Search
Filter
Dark Mode
```

Ye **React interview killer project hota hai.** 😎
