export function cn(...inputs: any[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    const type = typeof input;

    if (type === 'string' || type === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) classes.push(inner);
    } else if (type === 'object') {
      for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
