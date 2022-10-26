import "./Home.css"

const Home = () => {

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var textBodyClassName = "";
    var playNowText = "Play now >>";
    if(isSafari){
        textBodyClassName = `disclaimer-text-body safari-font`;
    }
    else{
        textBodyClassName = `disclaimer-text-body other-browser-font`;
    }

    const onPlayNowHandler = () => {

    }



    return (
        <div className="home">
            <div className="home-disclaimer-text-box">
                <p className={textBodyClassName}>Hey bird,<br/>
                We believe that one's birthday should be so excited that they forget the pain of getting old. 
                This is a small project which helps you go on a roller coaster ride and the dopamine rush will make your day. 
                Beware, the clues may surprise you !!<br/><br/>
                <span className="play-now" onClick={onPlayNowHandler}>{playNowText}</span></p>
            </div>
        </div>
    );
}

export default Home;

