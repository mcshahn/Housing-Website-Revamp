// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './my_requests.css';
import Footer from '../components/footer'
import CardMyRequests from '../components/card_my_requests'
import { useNavigate } from "react-router-dom";

function MyRequestsPage(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/dorm_selection`; 
        navigate(path);
    }

    const [data, setdata] = useState({
        // title: "",
        // description: "",
        // status: "",
        requests_1:{title: "",
        description: "",
        status: ""},
        requests_2:{title: "",
        description: "",
        status: ""},
        requests_3:{title: "",
        description: "",
        status: ""},
    });
 
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/user_data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    requests_1: data[0],
                    requests_2: data[1],
                    requests_3: data[2],
                    // title: data.title,
                    // description: data.description,
                    // status: data.status
                });
                // console.log(data);
            })
        );
        // console.log(data);
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
            <CardMyRequests title={data.requests_1.title} description={data.requests_1.description} status={data.requests_1.status} />
            <CardMyRequests title={data.requests_2.title} description={data.requests_2.description} status={data.requests_2.status} />
            <CardMyRequests title={data.requests_3.title} description={data.requests_3.description} status={data.requests_3.status} />
            </div> 
            <Footer/>
        </div>
  );
}

export default MyRequestsPage;


