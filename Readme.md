React hooks were introduced in **React v16.8 (2019)**.
Below is a **complete list of official React hooks with their release version and year** (including newer hooks up to React 19 era).

---

# 1️⃣ Core Hooks (React 16.8 – 2019)

| Hook                  | Release Version | Year | Purpose                      |
| --------------------- | --------------- | ---- | ---------------------------- |
| `useState`            | 16.8            | 2019 | Manage component state       |
| `useEffect`           | 16.8            | 2019 | Handle side effects          |
| `useContext`          | 16.8            | 2019 | Access context value         |
| `useReducer`          | 16.8            | 2019 | Complex state management     |
| `useCallback`         | 16.8            | 2019 | Memoize functions            |
| `useMemo`             | 16.8            | 2019 | Memoize computed values      |
| `useRef`              | 16.8            | 2019 | Access DOM or persist value  |
| `useImperativeHandle` | 16.8            | 2019 | Customize ref instance value |
| `useLayoutEffect`     | 16.8            | 2019 | Runs before browser paint    |
| `useDebugValue`       | 16.8            | 2019 | Debug custom hooks           |

---

# 2️⃣ Additional Hooks (React 18 – 2022)

| Hook                   | Release Version | Year | Purpose                               |
| ---------------------- | --------------- | ---- | ------------------------------------- |
| `useId`                | 18.0            | 2022 | Generate unique IDs for accessibility |
| `useTransition`        | 18.0            | 2022 | Mark updates as non-urgent            |
| `useDeferredValue`     | 18.0            | 2022 | Defer rendering value                 |
| `useSyncExternalStore` | 18.0            | 2022 | Subscribe to external store safely    |
| `useInsertionEffect`   | 18.0            | 2022 | Inject styles before layout           |

---

# 3️⃣ React Server / Concurrent Hooks (React 18+)

| Hook             | Version            | Year | Purpose                      |
| ---------------- | ------------------ | ---- | ---------------------------- |
| `use`            | 18+ / experimental | 2023 | Await promises in components |
| `useOptimistic`  | 18.3 / 19          | 2024 | Optimistic UI updates        |
| `useFormStatus`  | 18.3 / 19          | 2024 | Form submission status       |
| `useFormState`   | 18.3 / 19          | 2024 | Form state management        |
| `useActionState` | 19                 | 2024 | Manage server actions        |

---

# 4️⃣ React DOM Hooks (React 19)

| Hook            | Version | Year | Purpose               |
| --------------- | ------- | ---- | --------------------- |
| `useFormStatus` | 19      | 2024 | Track form submission |
| `useFormState`  | 19      | 2024 | Manage form state     |

---

# 5️⃣ Summary

Total official hooks (React + React DOM)

| Category                | Count         |
| ----------------------- | ------------- |
| Core Hooks              | 10            |
| React 18 Hooks          | 5             |
| React 19 / Server Hooks | 5             |
| **Total**               | **~20 hooks** |

---

# 6️⃣ Hooks Categories (Interview Trick)

Interviewers often divide hooks into:

### State Hooks

* `useState`
* `useReducer`

### Effect Hooks

* `useEffect`
* `useLayoutEffect`
* `useInsertionEffect`

### Performance Hooks

* `useMemo`
* `useCallback`
* `useDeferredValue`
* `useTransition`

### Ref Hooks

* `useRef`
* `useImperativeHandle`

### Other Hooks

* `useContext`
* `useDebugValue`
* `useId`
* `useSyncExternalStore`

### Server / Modern Hooks

* `use`
* `useOptimistic`
* `useFormStatus`
* `useFormState`
* `useActionState`

---

✅ **Interview Tip**

Most companies expect you to know **these 8 hooks deeply**:

```
useState
useEffect
useContext
useReducer
useMemo
useCallback
useRef
useLayoutEffect
```
