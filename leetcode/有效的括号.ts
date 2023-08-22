function isValid(s: string): boolean {
  const stack: string[] = [];
  const list = s.split("");

  while (list.length > 0) {
    const m = list.shift();

    if (m === "(" || m === "[" || m === "{") {
      stack.push(m);
    } else {
      const n = stack.pop();
      if (m === ")" && n !== "(") {
        return false;
      }
      if (m === "]" && n !== "[") {
        return false;
      }
      if (m === "}" && n !== "{") {
        return false;
      }
    }
  }

  return stack.length <= 0;
}
