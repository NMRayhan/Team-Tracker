import React, { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';
import './Home.css';

const Home = () => {

    const [Teams, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
        <div className="AllTeam-container">
            <div className="homeBanner">
                <h1 style={{ padding: '90px', color: 'white', textAlign:'center', fontSize:'2em' }}>Team-Discover</h1>
            </div>
            <div className="row align-items-center justify-content-start AllTeam-container" style={{width:'80%', margin:'0 auto'}}>
                {
                    Teams.map(team => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 my-1">
                                <AllTeam team={team}></AllTeam>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;