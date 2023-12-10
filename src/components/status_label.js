import './status_label.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck} from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-regular-svg-icons'


export default function StatusLabel({iconName, status}){
    console.log(iconName)
    return (
        <div class="status-label">
        <div class="label-shape">
          
           
              
            {
                {
                    "not_started":  <div class="not-started-label-content">
                                <div class="status-dot-wrapper">
                                <div class="not-started-status-dot"></div>
                                </div>
                                <div class="not-started-label-text">{status}</div>
                                </div>,
                    "in_progress":  <div class="in-progress-label-content">
                                <div class="status-dot-wrapper">
                                <div class="in-progress-status-dot"></div>
                                </div>
                                <div class="in-progress-label-text">{status}</div>
                                </div>,
                    "resolved": <div class="resolved-label-content">
                                <div class="status-dot-wrapper">
                                <FontAwesomeIcon icon={faCheck} class="icon"/>
                                </div>
                                <div class="resolved-label-text">{status}</div>
                                </div>
                    ,
                }[iconName]
        }
        
             
         
        </div>
      </div>


        
    );
}