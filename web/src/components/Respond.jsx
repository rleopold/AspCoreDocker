import React from 'react';

const Respond = ({accept, reject}) => (
    <div className="respond">
        <a href="#" onClick={reject} className="no">&#x2717;</a>
        <a href="#" onClick={accept} className="yes">&#x2713;</a>
    </div>
);

export default Respond;