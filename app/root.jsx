import Nav from "./HomePage/Navigation";
import Filter from "./HomePage/Filter";
import Postings from "./HomePage/Postings";
import Creator from "./HomePage/Creators";
  
export default function App() {
    return (
        <div>
        <Nav/>
        <Filter/>
        <Postings/>
        <Creator/>
        </div>
    );
  }