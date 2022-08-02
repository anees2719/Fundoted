import React from 'react'
import {Card, Button,Typography,TextField,ImageList} from '@material-ui/core'
import './style.css'
import innovate from '../../../assets/innovate.jpg'
import {useNavigate} from 'react-router-dom'
const Campaign = (campaign) => {
  
  const navigate=useNavigate();
  const backProject=()=>{
    navigate('/login');

  }
  return (
    <section className="container">
      <div className="left">
       
       <img src={innovate} alt=""  />
      </div>

      <div className="right">
        <div className="top">
          <p>Fun and Arts</p>
          <p>30 september 2022</p>
        </div>

        <h1>Title Of the Campaign</h1>

        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores quasi dolorem labore delectus enim in soluta sint voluptates necessitatibus assumenda sequi impedit suscipit ipsa illum quam saepe, minima odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla cum fuga quos vel aliquid deleniti quo animi tempora. Necessitatibus, officiis aliquam. Enim quas, accusantium eaque unde neque voluptatibus rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis ex, ut ea assumenda vel quos nesciunt repudiandae veritatis aut quas, debitis necessitatibus alias non eius, nam ipsam dolor iusto!</h6>
        <div className='stat'>
          <div>
            <h5>No Of Backers :10 </h5>
            <h5>Goal : {20000}</h5>
            <h5>Pledged : {5000}</h5>
          </div>

          <div>
            <button onClick={backProject}>Back Project</button>
          </div>

        </div>
        



      </div>


    </section>
  )
}

export default Campaign