import React from 'react';
import '../AllTeam/AllTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const cardStyle = { width: '90%', margin: '0 auto', padding: '10px' }
const AllTeam = (props) => {
    const { strTeam, strSport, strTeamLogo, idTeam } = props.team
    // console.log(props.team);
    const history = useHistory()
    const HandleTeamDetails = (teamID) => {
        console.log(teamID, "clicked");
        const url = `/teams/${teamID}`
        history.push(url)
    }
    return (
        <div className="container" style={cardStyle}>
            <div className="Team-card text-center">
                <div className="Team-logo">
                    <img src={strTeamLogo} alt="" />
                </div>
                <h2 style={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'bold' }}>{strTeam}</h2>
                <p>Sport Type : {strSport}</p>
                <button className="Explore-btn my-4" onClick={() => HandleTeamDetails(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default AllTeam;