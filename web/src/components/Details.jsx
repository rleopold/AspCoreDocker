import React from 'react';


const Details = ({name, username, email}) => (
        <div className="details">
            <p>{name.title} {name.first} {name.last}</p>
            <p>{email}</p>
        </div>
);

export default Details;
