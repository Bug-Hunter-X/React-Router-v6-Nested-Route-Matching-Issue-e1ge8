```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />
        {/*Alternative solution using path parameters*/}
        <Route path="/about/:section" element={<AboutSection />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }

function About() { 
  return (
    <div>About
      <Link to="contact">Contact</Link>
    </div>
  );
}

function Contact() { return <div>Contact</div> }

function AboutSection(){
  let {section} = useParams();
  return(
    <div>About Section:{section}</div>
  );
}
export default App;
```