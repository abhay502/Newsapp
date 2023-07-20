import React, { useEffect, useState } from 'react'
import axios from 'axios';


function FetchData() {

    const [data, setData] = useState("")

    const fetchData = async () => {
        await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=31c0bbca715841f18f18d08e77eb802d"
        ).then((res) => {
            setData(res?.data?.articles)

        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='conatiner m-5'>
            <h3><u>TOP HEADLINES</u></h3>
            <div className="container d-flex justify-content-center align-items-center flex-column my-3">
                {data ? (
                    data.map((items) => (
                        <React.Fragment key={items.id}>
                            <div className='container my-3 p-3 ' style={{boxShadow:"2px 2px 10px silver",borderRadius:"10px"}} >
                            <h5>{items?.title}</h5>
                            <img src={items?.urlToImage} alt='Image not found'  className='img-fluid' style={{width:"auto",height:"300px",objectFit:"cover"}}/>
                            <p>{items?.content}</p>
                            <a href={items?.url} target='blank'>View More</a>
                            </div>
                        </React.Fragment>
                    ))
                ) : (
                    "Loading......."
                )}
            </div>
        </div>
    )
}

export default FetchData