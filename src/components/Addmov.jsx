import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmov = () => {
    var [movie,setmovies]= useState({
        MovieName:"",
        Director:"",
        Language:"",
        gener:"",
        Realease:""
        

    })

    const handler = (e) => {
        const{name,value} = e.target
        setmovies({... movie,[name]:value})
        console.log(movie)
    }
    const savedata = (e) => {
    console.log("Button Clicked")
    axios.post("http://localhost:8080/movies/",movie)
    .then(response=>{
        alert("Added")
    })
    .catch(error=>{
        alert("Failed")
    })
    }

  return (
    <div>
      <Typography variant='h3'>Add movies</Typography><br></br>
      <TextField name='id' variant='standard' label="ID" onChange={handler} value={movie.id}> </TextField><br></br><br></br>
      <TextField name='name' variant='standard' label="Name" onChange={handler} value={movie.name}> </TextField><br></br><br></br>
      <TextField name='year' variant='outlined' label="Year" onChange={handler} value={movie.year}>name</TextField><br></br><br></br>
      <TextField name='gener' variant='outlined' label="Gener" onChange={handler} value={movie.gener}>grade</TextField><br></br><br></br>
      <TextField name='rating' variant='outlined' label="Rating" onChange={handler} value={movie.rating}>grade</TextField><br></br><br></br>
      <TextField name='director' variant='outlined' label="Director" onChange={handler} value={movie.director}>grade</TextField><br></br><br></br>
      <TextField name='producer' variant='outlined' label="Producer" onChange={handler} value={movie.producer}>grade</TextField><br></br><br></br>
      <TextField name='cast' variant='outlined' label="Cast" onChange={handler} value={movie.cast}>grade</TextField><br></br><br></br>
      <Button variant='contained' onClick={savedata}>SUBMIT</Button>
    </div>
  )
}


export default Addmov