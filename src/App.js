import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import './App.css';
import Navbar from "./Navbar";

const App = () => {
  const [users, setUsers] = useState([]);
  console.log("heheeh",users)
  const [loading, setLoading] = useState(false);
  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber + usersPerPage;
  
  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setUsers(res.data);
      setLoading(false);
      console.log('I got this',res)
    };

    fetchPosts();
  }, []);

  const displayUsers =users.slice(pagesVisited,pagesVisited + usersPerPage)
  
  .map((user) => {
      
      return (
        <div className="cards">

            <div className="image">
                <img src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"/>
            </div>

            <div className="title">
              <h3>{user.userId}</h3>
            </div>

             
          
            <div className="desc">

            <h3 className="head">{user.title}</h3>
            <button className="but"> Read More!!</button>
          
            </div>

        </div> 
 
        )
      
    });
    const pageCount = Math.ceil(users.length / usersPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

  
  

  return (
    <div className='container mt-5'>
      <Navbar/>npm
      {displayUsers}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> 

     </div>  
    
   
  ); 
};

export default App;
