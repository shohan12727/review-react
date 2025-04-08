
import './App.css'
import List from './List';

function App() {
    
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian"
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Classic"
    }
  ];

  const cars = [
    {
      id: 4,
      title: "Corolla",
      author: "Toyota",
      year: 2021,
      genre: "Sedan"
    },
    {
      id: 5,
      title: "Model S",
      author: "Tesla",
      year: 2022,
      genre: "Electric"
    },
    {
      id: 6,
      title: "Mustang",
      author: "Ford",
      year: 2020,
      genre: "Sports"
    },
    {
      id: 7,
      title: "X5",
      author: "BMW",
      year: 2019,
      genre: "SUV"
    },
    {
      id: 8,
      title: "Civic",
      author: "Honda",
      year: 2023,
      genre: "Sedan"
    }
  ];
  
  

  return (
    <>

     <List items={books} category="List of Books"></List> 
     <List items={cars} category="List of Cars"></List>
    </>
  )
}

export default App
