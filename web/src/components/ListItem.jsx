import React from 'react';

const ListItem = ({image, username}) => (
    <tr>
        <td><img src={image}/></td>
        <td>{username}</td>
        <td><a href="#">&#x2717;</a></td>
    </tr>
);

export default ListItem;