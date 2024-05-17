import screenshot from "../assets/github_logo.png"
function Resume(){
    return(
        <div>
            <h3>Check out my <a href = {screenshot} download>resume.</a></h3>
                <h1>Front End Topics</h1>

                <ul className="resumelist">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>

                <h1>Back End Topics</h1>
                
                <ul className="resumelist">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySql</li>
                </ul>
        </div>
    )
}
export default Resume