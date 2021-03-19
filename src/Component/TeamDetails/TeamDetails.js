import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faFlagCheckered, faFutbol, faMars, faBlog} from '@fortawesome/free-solid-svg-icons'
import male from '../../male.png'
import female from '../../female.png'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const TeamDetails = () => {

    const { teamID } = useParams()
    const [Teams, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamID])
    const { strTwitter, strYoutube, strWebsite, strDescriptionEN, strCountry, strGender, strSport, strTeam, strStadiumDescription, strStadium, intFormedYear } = Teams
    console.log(Teams);
    let TeamPicture;
    if (strGender === 'Male') {
        TeamPicture = <img src={male} alt="" className="TeamPicture" />
    } else {
        TeamPicture = <img src={female} alt="" className="TeamPicture" />
    }

    return (
        <div className="TeamDetails-Container">
            <div className="TeamDetails-Banner">
                <h1 style={{ padding: '30px', color: 'white', textAlign: 'center', fontSize: '2em' }}>
                    <img src={Teams.strTeamLogo} alt="" />
                </h1>
            </div>
            <div>
                <div className="container TeamDetails">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-11 col-sm-11 mx-3" style={{ color: 'white' }}>
                            <h1>{strTeam}</h1>
                            <h4><FontAwesomeIcon className="icon-color" icon={faMapMarkedAlt} /> Founded :1 January {intFormedYear}</h4>
                            <h4><FontAwesomeIcon className="icon-color" icon={faFlagCheckered} /> Country :{strCountry}</h4>
                            <h4><FontAwesomeIcon className="icon-color" icon={faFutbol} /> Sports Type :{strSport}</h4>
                            <h4> <FontAwesomeIcon className="icon-color" icon={faMars} /> Gander :{strGender}</h4>
                        </div>
                        <div className="col-lg-5 col-md-11 col-sm-11 align-self-center p-4 mx-3">
                            {TeamPicture}
                        </div>
                    </div>
                </div>
                <div className="TeamDescription container my-2 rounded-1">
                    <h2>Team : {strTeam}</h2>
                    <p>{strDescriptionEN}</p>
                    <br /><br />
                    <h2>Stadium : {strStadium}</h2>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="social-icon">
                    <a href={strWebsite} ><FontAwesomeIcon className="social-icon-details" style={{color: '#0b893a'}} icon={faBlog} /></a>
                    <a href={strTwitter} ><FontAwesomeIcon className="social-icon-details" style={{color: '#00acee'}} icon={faTwitter} /></a>
                    <a href={strYoutube} ><FontAwesomeIcon className="social-icon-details" style={{color: '#FF0000'}} icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;