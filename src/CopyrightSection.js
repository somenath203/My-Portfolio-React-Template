import React from 'react';

const Copyright = ({createdBy}) => {
  return (
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; {createdBy} 2022</small>
      </div>
    </div>
  );
};

export default Copyright;
