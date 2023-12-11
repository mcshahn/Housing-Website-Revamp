import './status_label.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'


export default function StatusLabel({iconName, status}){
    // console.log(iconName)
    return (
        <div class="status-label">
        <div class="label-shape">
            {
                {
                    "not_started":  <div class="not-started-label-content">
                                <div class="status-dot-wrapper">
                                <div class="not-started-status-dot"></div>
                                </div>
                                <div class="not-started-label-text">Not Started</div>
                                </div>,
                    "in_progress":  <div class="in-progress-label-content">
                                <div class="status-dot-wrapper">
                                <div class="in-progress-status-dot"></div>
                                </div>
                                <div class="in-progress-label-text">In Progress</div>
                                </div>,
                    "resolved": <div class="resolved-label-content">
                                <div class="status-dot-wrapper">
                                <FontAwesomeIcon icon={faCheck} class="icon"/>
                                </div>
                                <div class="resolved-label-text">Resolved</div>
                                </div>
                    ,
                }[iconName]
        }
        
             
         
        </div>
      </div>


        
    );
}