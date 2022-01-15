import React from 'react';

const UserDetails = ({user, getUserId}) => {

    const {id, name, username, email, address, phone, website, company} = user;
    return (
        <div>
            {id}. {name} {username}
            <br/> email - {email}
            <br/> address: street - {address.street}
            <br/> suite - {address.suite}
            <br/> city - {address.city}
            <br/> zipcode - {address.zipcode}
            <br/> address geo: lat - {address.geo.lat}
            <br/> lng - {address.geo.lng}
            <br/> phone - {phone}
            <br/> website - {website}
            <br/> company name: - {company.name}
            <br/> catchPhrase - {company.catchPhrase}
            <br/> bs - {company.bs}
            <button onClick={()=>getUserId(id)}>Post</button>

        </div>
    );
};

export default UserDetails;