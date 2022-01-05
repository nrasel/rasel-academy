import React from 'react'
import './Academy.css'
import bookList from '../../images/books.png'
import routine from '../../images/routine.png'
import memberList from '../../images/man.png'
import mentor from '../../images/mentorship.png'
import meeting from '../../images/meet.png'
import attendence from '../../images/morning-routine.png'
import memberReview from '../../images/customer-satisfaction.png'
import TimeZone from '../../components/TimeZone/Timezone'

function componentName() {
    return (
        <div>
            <div className="container mt-5 main-background">
            <div>
               <div className="row ">
                    <div className="col-md-4">
                        <a href='#' style={{textDecoration:'none',color:'black'}} className='text-end d-flex mt-3 icon-font-size'><i class="fas fa-long-arrow-alt-left"></i></a>
                    </div>
                    <div className="col-md-4">
                        <h4 className='mt-3'>Rasel Academy</h4>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
               </div>

               <div className="row">
               <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div style={{backgroundColor:'#f9c4c4',borderRadius:'5px'}} class="h-100">
                        <img src={bookList} class="card-img-top mt-3 w-25 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Book List</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(125 207 207)',borderRadius:'5px'}} class="h-100">
                        <img src={routine} class="card-img-top mt-3 w-25 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Routine</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(237 237 237)',borderRadius:'5px'}} class="h-100">
                        <img src={memberList} class="card-img-top mt-3 w-25 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Member List</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(245 245 245)',borderRadius:'5px'}} class="h-100">
                        <img src={mentor} class="card-img-top w-25 mt-3 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Mentor</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(247 247 247)',borderRadius:'5px'}} class="h-100">
                        <img src={meeting} class="card-img-top w-25 mt-3 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Meeting</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(251 251 251)',borderRadius:'5px',boxShadow:'1px 1px 3px grey'}} class="h-100">
                            <div style={{borderBottom:'2px solid red',width:'70%',borderRadius:'none',margin:'auto',paddingTop: '18px'}}>
                            <img src={attendence} class="card-img-top w-25 mt-3 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Attendence</h5>
                        </div>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div style={{backgroundColor:'rgb(255 213 213)',borderRadius:'5px'}} class="h-100">
                        <img src={memberReview} class="card-img-top w-25 mt-3 mx-auto" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Member Review</h5>
                        </div>
                        </div>
                    </div>
                    </div>
               </div>
               <TimeZone/>
            </div>
            </div>
        </div>
    )
}

export default componentName
