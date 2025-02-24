```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export function MyComponent(){
  return <p>Hello from MyComponent!</p>;
}
```