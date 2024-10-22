export function sayHello(name) {
    return `Hello, ${name}!`;
}

export const PI = 3.14159;

export const calcValues = (a, b) => {
  const sum = a + b
  const sub = a - b
  const div = a / b
  const mult = a * b

  return {sum, sub, div, mult}
}
