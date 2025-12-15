import { useState } from "react";

const btnCls = "px-4 py-2 m-2 bg-blue-500 text-white rounded";

export default function Counter({
  initial = 0,
  message = "Counter",
}: {
  initial?: number,
  message?: string,
}) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button className={btnCls} onClick={() => setCount(count + 1)}>Increment</button>
      <button className={btnCls} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
