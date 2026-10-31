const incrementCounter = (l, k) => {
  console.log(l)
  console.log(k)
  const c = l?.[k] ?? 0; 
  return { ...l, [k]: c + 1 };
}

export { incrementCounter }