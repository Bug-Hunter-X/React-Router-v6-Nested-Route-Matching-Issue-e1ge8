```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will never match because it's nested under a route that already matches /about */}
        <Route path="/about/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }
function Contact() { return <div>Contact</div> }
export default App;
```