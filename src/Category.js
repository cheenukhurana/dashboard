import React, { useState } from 'react'

function Category(props)
{

    const [data,setData] = useState("");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      

    fetch("https://api.spacexdata.com/v3/"+props.match.params.id,requestOptions)
    .then(res=>res.text())
    .then(data=>{
       setData(data);
    })
    .catch(error => console.log('error', error));

    return (
        <div>
            {data}
        </div>
    );
}

export default Category;