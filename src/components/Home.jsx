import RedirBtn from './RedirBtn';

const Home = () => {
    return (
        <>
            <RedirBtn title="About" redir="/About" btnClass="homeMenu" />
            <RedirBtn title="Tutorial" redir="/Tutorial" btnClass="homeMenu" />
            <RedirBtn title="Play" redir="/Play" btnClass="homeMenu" />
            <RedirBtn title="Load" redir="/Load" btnClass="homeMenu" />
        </>
    )
};

export default Home;