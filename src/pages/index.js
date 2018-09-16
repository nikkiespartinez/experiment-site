import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Nikki's sweet attempt at learning React</h1>
        <p>Let's see how long she lasts. Until she gives up front-end again ;)</p>
          <div className="Description">
            <h2>An Experimental Web Project By <a href="https://nikkiespartinez.com/">Nikki Espartinez</a></h2>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="154.066"><g><defs><linearGradient id="idYHJWlpBMqg834860001" gradientTransform="rotate(-90, 0.5, 0.5)"><stop offset="0" stop-color="#FF4C74" stop-opacity="1"></stop><stop offset="1" stop-color="hsl(332, 100%, 37%)" stop-opacity="1"></stop></linearGradient></defs><path fill="url(#idYHJWlpBMqg834860001)" stroke="#FFFFFF">
              <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="7s" values="M 0 46.066 C 0 46.066 76 -19.934 158 6.066 C 240 32.066 280 144.066 440 86.066 C 600 28.066 690 -21.934 810 62.066 C 930 146.066 1080 76.066 1118 38.066 C 1156 0.066 1310 -25.934 1362 46.066 C 1414 118.066 1536 76.066 1536 76.066 L 1536 154.066 L 0 146.066 Z;

              M 0 43.063 C 0 43.063 100 129.063 220 129.063 C 340 129.063 376 23.063 512 43.063 C 648 63.063 716 139.063 858 129.063 C 1000 119.063 1054 -28.937 1178 5.063 C 1302 39.063 1482 45.063 1482 111.063 C 1482 177.063 1482 200.063 1482 200.063 L 0 189.063 Z;

              M 14 104 C 14 104 152 28 246 42 C 340 56 350 122 440 122 C 530 122 560 66 622 66 C 684 66 722 0 828 0 C 934 0 1002 66 1078 66 C 1154 66 1296 20 1348 20 C 1400 20 1490 22 1490 66 C 1490 110 1490 146 1490 146 L 0 146 L 0 104 Z
            
            "/>
            </path>
            </g> 
          </svg>
        </div>
        <div className="Cards">
        <h2> Don't know yet what this is </h2>
        <Card 
            title= "Nikki Espartinez"
            text= "Test Experiment"
            image={require('../images/wallpaper-01.png')}/>
        </div>
      </div>
  </div>
)

export default IndexPage
