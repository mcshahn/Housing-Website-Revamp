// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './my_requests.css';
import Footer from '../components/footer'
import CardMyRequests from '../components/card_my_requests'
import { useNavigate } from "react-router-dom";

function MyRequestsPage(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/create_request`; 
        navigate(path);
    }

    const [data, setdata] = useState({
        requests: []
    });
 
    // Using useEffect for single rendering
    useEffect(() => {
        fetch("/user_data").then((res) =>
            res.json().then((data) => {
                setdata({
                    requests: data
                });
            })
        );
    }, []);



  return (
    <div class="container">
        <div id="my-requests-label">
            My Requests
        </div>            
            <button id="new-service-button" onClick={routeChange}>
                <span class="button-text">New Service Request</span><span><i class="fa fa-solid fa-plus button-text"></i></span>
            </button>
            <div id="scrollable-container">
            
            {(data.requests.length > 0) ? data.requests.map((requestItem, index)=>(
                <CardMyRequests uid={requestItem.uid} title={requestItem.title} description={requestItem.description} status={requestItem.status} /> 
            )

            ): <div id="no-requests-text">You have no requests! Click on the button above to create a new request!</div>
            }
            </div> 
            <Footer/>
        </div>
  );
}

export default MyRequestsPage;


