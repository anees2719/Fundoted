import React, { useEffect, useState } from 'react'
import {Container,TextField,Button,Typography,Box,Grid,Paper} from "@material-ui/core"
import useStyle from './discover'
import axios from 'axios'
import FileBase64 from 'react-file-base64'
import {useSelector,useDispatch} from 'react-redux'
import image from '../../assets/innovate.jpg'
import {createCampaign} from '../../actions/index.js'

const Discover = ({currentId,setCurrentId}) => {
  const classes=useStyle()
  const dispatch=useDispatch()
  const [campaign,setCampaign]=useState({userId:'',catogary:'',title:'',author:'',discription:'',goal:'',days:'',image:''});
  const updatedBook=useSelector((state)=>currentId?state.books.find((book)=>book._id===currentId) :null)

  
  const clear=()=>{
    //setCurrentId(0);
    setCampaign({userId:'',catogary:'',title:'',author:'',discription:'',goal:'',days:'',image:''})
  }
  
  const handleSubmit=async()=> {
    dispatch(createCampaign(campaign))    
  }
  return (

    <div className={classes.container}>
      <div className={classes.left}>
        <h2 style={{color: "green", textAlign:'center'}}>Bring your creative project to life.</h2>
        <img src={image} alt=""  className={classes.image}/>
        <h5 style={{color: "green", textAlign:'center'}}>We see Fundoted as a home for creative minds and a wonderful platform; where people who believe, respect, and see the vision can support an idea and make it a reality.</h5>
        

      </div>
      
      <div className={classes.right}>
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h3" color='primary' className={classes.title} >Create   Your   Campaign</Typography>
          <TextField name="title" variant="outlined" label="Catogary" fullWidth value={campaign.catogary} onChange={(e) => setCampaign({ ...campaign, catogary: e.target.value })} />
          <TextField name="author" variant="outlined" label="Title" fullWidth value={campaign.title} onChange={(e) => setCampaign({ ...campaign, title: e.target.value })} />
          <TextField name="discription" variant="outlined" label="Author" fullWidth value={campaign.author} onChange={(e) => setCampaign({ ...campaign, author: e.target.value })} />
          <TextField name="price" variant="outlined" label="Goal required in Pkr" fullWidth value={campaign.goal} onChange={(e) => setCampaign({ ...campaign, goal: e.target.value })} />
          <TextField name="price" variant="outlined" label="No of days " fullWidth value={campaign.days} onChange={(e) => setCampaign({ ...campaign, days: e.target.value })} />
          <TextField name="price" variant="outlined" label="Discription" fullWidth  multiline rows={4} value={campaign.discription} onChange={(e) => setCampaign({ ...campaign, discription: e.target.value })} />
          
          <FileBase64 value={campaign.image} label='Select an image' onDone={({base64})=>setCampaign({...campaign,image:base64})}  />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
          <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
        </form>
      </Paper>
      </div>s
    </div>
    
  )
}

export default Discover
