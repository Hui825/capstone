import React from 'react';
import Main from '../../components/page/Main';

import fes01 from "../../assets/images/imagetest/img_data01.png";
import fes02 from "../../assets/images/imagetest/img_data02.png";
import fes03 from "../../assets/images/imagetest/img_data03.png";
import fes04 from "../../assets/images/imagetest/img_data04.png";
import fes05 from "../../assets/images/imagetest/img_data05.png";
import fes06 from "../../assets/images/imagetest/img_data06.png";
import fes07 from "../../assets/images/imagetest/img_data07.png";
import fes08 from "../../assets/images/imagetest/img_data08.png";
import fes09 from "../../assets/images/imagetest/img_data09.png";
import fes10 from "../../assets/images/imagetest/img_data10.png";
import fes11 from "../../assets/images/imagetest/img_data11.png";

import './festival.css';

const databaseURL = 'https://python-db-practice-96823-default-rtdb.firebaseio.com/';


class Festival extends React.Component {

    constructor() {
        super();
        this.state = {
            words: {}
        };

    }

    _get() {
        fetch(`${databaseURL}/지역축제정보데이터.json`).then(res => {
            if(res.status != 200 ){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words => this.setState({words: words}));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.words != this.state.words;
    }
    componentDidMount() {
        this._get();
    }
    render() {
        return ( 

<Main>
    
            <div>
            
            {Object.keys(this.state.words).map(id => {
                const word = this.state.words[id];
                
                return (
                    
                        <>
                        <div className="section_fes">
                        <div className="headerText">{word.축제명}</div>
                        <div className="Text">더보기▶</div>
                        
                        <div className="InnerText">{word.개최기간}</div>
                      
                        <div className="section__data">{word.축제유형}</div>
                        </div>
                        </>        
                ); 
            })}
            
        </div>

        </Main>
        )
    }

}
export default Festival;