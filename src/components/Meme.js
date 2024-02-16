import React from "react"
export default function Meme(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const[allmemes,setAllMemes]=React.useState([])
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            setAllMemes(data.data.memes)
        })
    },[])
    function addImage(){
        const randomIndex=Math.floor(Math.random()*allmemes.length)
        const url=allmemes[randomIndex].url
        setMeme(function(prev){
            return {
                ...prev,randomImage:url
            }
        })
    }
    function handleChange(e){
        setMeme(function(prev){
            return {
                ...prev,[e.target.name]:e.target.value
            }
        })
    }
    return (
        <main>
            <div className="memes">
            <div className="meme--inputs">
    <input onChange={handleChange} type="text" id="input1" name="topText" placeholder="Shut Up"></input>
    <input onChange={handleChange} type="text" id="input2" name="bottomText" placeholder="And Take My Money"></input>
    </div>
    <div className="meme-Image-button">
    <button onClick={addImage} className="meme--button">Get a new meme image  🖼</button>
    </div>
            </div>
    <div className="meme-Image">
    <img src={meme.randomImage} className="meme--image"></img>
    <h2 className="meme--text top">{meme.topText}</h2>
    <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
        </main>
    )
}