import Player from './Player';
import PData from './playersData';



const PlayerList = () => {

        const PlayersArray = PData.map(el => {
                return (
                        <Player
                                name={el.name}
                                team={el.team}
                                nationality={el.nationality}
                                jerseyNumber={el.jerseyNumber}
                                image={el.image} age={el.age}
                                teamFlg={el.teamFlg}
                                flag={el.flag}
                                frontImg={el.frontImg} />
                )
        })
        return (

                <div className='d-flex justify-content-around flex-wrap'>
                        {PlayersArray}
                </div>

        )
};

export default PlayerList;