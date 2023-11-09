import React,{ useState} from "react";

export default function PostData(){
    const[data,setData]=useState({
        "Movie_Id": '',
        "Movie_Name": '',
        "Theatre_Id": '',
        "Rating":'',
    });
    const handleInputChange=event=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        });
    };
    
    const handleSubmit=event=>{
        event.preventDefault();
        console.log('data after submit',data)
        fetch('https://localhost:44387/api/Movies',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(Response=>Response.json())
        .then(data=>{
            console.log('Success:',data);
            setData({
                MovieId:'',
                MovieName:'',
                TheatreId:'',
                Rating:''
            })
         })
         .catch(error=>{
            console.log('Error:',error)
         })
    }

    return(
        <form onSubmit={handleSubmit}>           
             <div className="form-group">
                <label htmlFor="id">MovieId</label>
                <input type="text" name="Movie_Id"
                value={data.MovieId} className="form-control"
                onChange={handleInputChange}></input>
            </div> 
            <div className="form-group">
                <label htmlFor="Moviename">MovieName</label>
                <input type="text" name="Movie_Name"
                value={data.MovieName} className="form-control"
                onChange={handleInputChange}></input>
            </div>
             <div className="form-group">
                <label htmlFor="Theatre Id">TheatreId</label>
                <input type="text" name="Theatre_Id"
                value={data.TheatreId} className="form-control"
                onChange={handleInputChange}></input>
            </div> 
            <div className="form-group">
                <label htmlFor="Rating">Rating</label>
                <input type="text" name="Rating"
                value={data.Rating} className="form-control"
                onChange={handleInputChange}></input>
            </div> 

            <div className="add-movie">
                <button type="submit" className="btn btn-success"> Add Movie</button>
            </div>
        </form>
    )
}
