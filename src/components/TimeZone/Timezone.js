import React, { Component } from 'react'
import Select from 'react-select'
import './TimeZone.css'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function componentName() {
    return (
        <div className='mt-5 pt-5'>
           
            

            <div className="row text-start">
            <h5 className='text-start'>Saturday</h5>
            <div className="col-md-2">
                <p className='mt-3'>1St Attendence Time</p>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>




            <div className="row text-start">
            <h5 className='text-start'>Sunday</h5>
            <div className="col-md-2">
                <p className='mt-3'>1St Attendence Time</p>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>

            <div className="row text-start">
            <h5 className='text-start'>Monday</h5>
            <div className="col-md-2">
                <h6 className='mt-3'>1St Attendence Time</h6>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>


            <div className="row text-start">
            <h5 className='text-start'>Tuesday</h5>
            <div className="col-md-2">
                <p className='mt-3'>1St Attendence Time</p>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>




            <div className="row text-start">
            <h5 className='text-start'>Wednesday</h5>
            <div className="col-md-2">
                <p className='mt-3'>1St Attendence Time</p>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>


            <div className="row text-start">
            <h5 className='text-start'>Thursday</h5>
            <div className="col-md-2">
                <p className='mt-3'>1St Attendence Time</p>
            </div>
                <div className="col-md-4">
                    <div className='d-flex mt-3 position-relative align-items-center justify-content-center'>
                    <select class="form-select w-75" aria-label="Default select example">
                        <option selected>12:15 PM</option>
                        <option value="1">1:25 PM</option>
                        <option value="2">2:35 PM</option>
                        <option value="3">3:45 PM</option>
                    </select>
                    <span className='clock-bg'><i class="far fa-clock"></i></span>
                    </div>
                </div>
                
                <div className="col-md-6">
                        <div className="row mt-3">
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <label className='title-height' htmlFor="">Subject Name</label>
                            </div>
                            <div className="col-md-9">
                                <input className='cost-field form-control w-25' type="text" />
                            </div>
                        </div> 
                </div>
            </div>

            <div className='text-end'>
            <button style={{backgroundColor:'red'}} className='create-btn btn text-white mb-4'>Create Now</button>
            <button  className='btn btn-outline-danger ms-3 mb-4'>Cancel</button>
            </div>


        </div>
    )
}

export default componentName
