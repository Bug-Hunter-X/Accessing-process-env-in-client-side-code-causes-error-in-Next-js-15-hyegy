```javascript
// pages/about.js

export async function getServerSideProps(context) {
  const myVar = process.env.MY_VARIABLE; 
  return {
    props: {
      myVar: myVar // Pass the variable to the component
    },
  };
}

export default function About({ myVar }) {
  console.log(myVar);
  return (
    <div>
      <h1>About page</h1>
      <p>MY_VARIABLE: {myVar}</p>
    </div>
  );
}
```