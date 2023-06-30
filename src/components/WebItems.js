import React from 'react';

const WebItems = ({ id, first_name, avatar }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: '18rem', marginTop: '50px'}}>
        <span className="position-absolute top-0 start-100 translate-middle badge badge-lg badge-secondary rounded-circle bg-dark" 
        style={{ width: '30px', height: '30px', fontSize: '14px', textAlign: 'center',}}>
          {id}
          <span className="visually-hidden"></span>
        </span>
        <div className="card-image" style={{ border: '2px solid black', borderRadius: '18px', padding: '20px' }}>
          <img src={avatar} className="card-img-top" style={{ borderRadius: '10%' }} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: 'center' }}>
            {first_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WebItems;
