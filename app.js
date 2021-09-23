// ? Task:Detect Dark Mode


// Solution 1

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode) // Result: True or False

// ! Explanation: Check if a user's device is in dark mode with the following code.
