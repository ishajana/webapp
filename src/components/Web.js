import React, { useEffect, useState } from 'react';
import WebItems from './WebItems';

const Web = () => {
  const [data, setData] = useState([]);

  //const [page, setPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url1 = `https://reqres.in/api/users?page=1`;
        const url2 = `https://reqres.in/api/users?page=2`;

        const response1 = await fetch(url1);
        const parsedData1 = await response1.json();

        const response2 = await fetch(url2);
        const parsedData2 = await response2.json();

        console.log(parsedData1);
        console.log(parsedData2);

        const combinedData = [...parsedData1.data, ...parsedData2.data];
        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div style={{width: '100%'}}>
      <div>
    <form onSubmit={handleSearchSubmit} style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search for people..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ height: '30px', width: '50%' }}
      />
      
    </form>
    </div>

    <div className="container">
      <div className="row">

      {data.filter((element)=> {
      if(searchQuery === ""){
        return element;
      }
      else if(element.first_name.toLowerCase().includes(searchQuery.toLowerCase())){
        return element;
      }
    })
    .map((element)=> {
      return(
        <div className="col-md-4" key={element.id}>
          <WebItems id={element.id} first_name={element.first_name} avatar={element.avatar} />
        </div>
      )
    })}

      </div>

    </div>

    </div>
  );
};

export default Web;
