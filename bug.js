```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause the error because it is not exported */}
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
function MyComponent(){
  return <p>Hello from MyComponent!</p>;
}
```