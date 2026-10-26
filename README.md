# Dev Stack Builder

Dev Stack Builder helps developers explore technologies and choose tools for a project. Users can add technologies to their stack, remove them, and see their selected tools in one place.

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Main Features

1. **Explore Technologies:** View technology icons, names, descriptions, categories, difficulty levels, and ratings in responsive cards.
2. **Build Your Stack:** Add one technology from each category. The selected card becomes disabled.
3. **Manage Your Stack:** Remove one technology or clear the full stack. Toast messages show these actions.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It helps us describe the page UI clearly.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores data that can change and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores data in a component. I used it to keep the selected technologies and the data-loading Promise.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders and is often used for tasks such as fetching data. I did not use `useEffect` for this project. I used React's `use()` with `Suspense` to read the JSON-fetching Promise and show a loading message while it is pending.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows UI only when a condition is true. I used it to show the empty-stack message when no technologies are selected and to show the Remove All button only when the stack has items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. A child can call a function passed in props to ask the parent to update its state. In this project, `TechnologyCards` and `YourStack` use the `selectedTechnologies` data and `setSelectedTechnologies` function from `App`.