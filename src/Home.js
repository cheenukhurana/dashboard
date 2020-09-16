import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles/Home.css'


function CategoryCount(props)
{
    const [count,setCount] = useState(0);

    function linkValue(name)
    {
        let linkString = "/category/"+name;
        return linkString
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      

    fetch("https://api.spacexdata.com/v3/"+props.name,requestOptions)
    .then(res=>res.text())
    .then(data=>{
        let length = JSON.parse(data).length;
        if(!length && data.length)
            length = 1;
        setCount(length)
    })
    .catch(error => console.log('error', error));

    return (
        <div>
            <div className="category-count">
                <div className="name-div"><Link to={linkValue(props.name)}>{props.name}</Link></div>
                <div className="count-div">{count}</div>
            </div>
        </div>
    );
}


function Home()
{
    return (
        <div>
            <CategoryCount name="capsules" />
            <CategoryCount name="cores" />
            <CategoryCount name="dragons" />
            <CategoryCount name="history" />
            <CategoryCount name="landpads" />
            <CategoryCount name="launches" />
            <CategoryCount name="launchpads" />
            <CategoryCount name="missions" />
            <CategoryCount name="payloads" />
            <CategoryCount name="rockets" />
            <CategoryCount name="roadster" />
            <CategoryCount name="ships" />
        </div>
    )
}

export default Home;