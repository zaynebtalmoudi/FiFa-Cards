
import { Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap/dist/react-bootstrap';
import './player.css';


export default function Player({ frontImg, name = "Player name", team = "Team Name", nationality = "No natioanality", jerseyNumber = "XX", age = "XX", image = "no-face.png", teamFlg, flag }) {

    return (
        <>
            <Card style={{ borderColor: 'transparent' }} className="flip-card" >
                <div className='flip-card-inner' >

                    {/* FRONT CARD */}
                    <div className='flip-card-front' >

                        {/* Background Image */}
                        <img src={require('./images/gold.png')} alt='gold' style={{ width: '100%', height: '100%', }} className='card-bg' />

                        {/* Full Player Image */}
                        <div className='Player-image-container' >
                            <Card.Img className='full-player-image' src={require(`./images/${frontImg}`)} alt='FrontImg' />
                        </div>

                    </div>

                    {/* BACK CARD */}
                    <div className="flip-card-back" >

                        {/* Background Image */}
                        <img src={require('./images/gold.png')} alt='gold' style={{ width: '100%', height: '100%', }} className='card-bg' />

                        <div className='details-container'>

                            {/* Card Top  */}
                            <div className='card-top'>

                                {/* Vertical  Part*/}
                                <div className='flags-container'>

                                    < div className='number'>{jerseyNumber} </div>

                                    < div className='national-flag'>
                                        <Card.Img src={require(`./images/${flag}`)} style={{ width: "100%", height: "100%", borderRadius: "none" }} />
                                    </div>

                                    < div className='team-flag'>
                                        <img src={require(`./images/${teamFlg}`)} alt='teamFalg' />
                                    </div>

                                </div>

                                {/* Profile IMAGE */}
                                < div className='profile-image-container'>
                                    <Card.Img className='profile-image' src={require(`./images/${image}`)} alt='FrontImg' style={{ width: "100%", height: "100%" }} />
                                </div>
                            </div>

                            {/* CARD CENTER */}
                            <div className='card-center'>
                                <div className='name'>{name}</div>
                            </div>

                            {/* CARD BOTTOM */}
                            <div className='card-bottom' >

                                <div className='col1'>
                                    < div className='age'>Age </div>
                                    < div className='nation'>Nationality</div>
                                    < div className='team'> Team </div>
                                </div>
                                {/* Vertical Divider */}
                                <div className='ver-divider'></div>
                                <div className='col2'>
                                    <div>{age}</div>
                                    <div>{nationality}</div>
                                    <div>{team}</div>
                                </div>
                            </div>
                            {/* Horizontal Divider */}
                            <div className='hor-divider'></div>
                        </div>
                    </div>
                </div>
            </Card>
        </>


    )
}




