

export default function Greet({ age }: { age: number }) {
  if(age < 18) {
    return <h1>You are a minor.</h1>;
  } else {
    return <h1>You are an adult.</h1>;
  }
}