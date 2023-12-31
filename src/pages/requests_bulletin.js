
import React, { useState, useEffect } from "react";
import './requests_bulletin.css';
import Footer from '../components/footer'
import CardBulletin from '../components/card_bulletin'
import { useNavigate } from "react-router-dom";

function RequestsBulletin(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/dorm_selection`; 
        navigate(path);
    }
    const routeNewRequest = ()=>{
        let path = '/create_request' 
        navigate(path);
    }

    const [dorm, setDorm] = useState("NA")

    useEffect(() => {
        // Retrieve the uni value from localStorage when the component mounts
        const storedDorm = localStorage.getItem('dorm_name');
        if (storedDorm) {
          setDorm(storedDorm);
        }
      }, []);
    

    const [data, setdata] = useState({
        requests: []
    });
 
    useEffect(() => {
        fetch("/all_requests").then((res) =>
            res.json().then((data) => {
                setdata({
                    requests: data
                });
            })
        );
    }, []);
   
  return (
    <div class="container">
    <div id="change-hall-div"><span id="hall-label">{dorm}</span><span><button onClick={routeChange}>Change</button></span></div>
        <div id="request-bulletin-label">
            Requests Bulletin
        </div>            
        <div id="sub-header">
            <span>
                <button id="new-service-button">
                    <span class="button-text" onClick={routeNewRequest}>New Service Request</span>
                    <span><i class="fa fa-solid fa-plus button-text"></i></span>
                </button>
            </span>
        </div>
            <div id="scrollable-container" >
            
            {data.requests.map((requestItem, index)=>(
                <CardBulletin key={index} uid={requestItem.uid} title={requestItem.title} description={requestItem.description} status={requestItem.status} numEchoes={requestItem.echo}/> 
            )

            )}
            </div> 
            <Footer/>
        </div>
  );
}

export default RequestsBulletin;


