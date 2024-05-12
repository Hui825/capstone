import React from 'react';
import Main from '../../components/page/Main';
import img1 from "../../assets/images/imagetest/img_data01.png";

import './market.css';

const databaseURL = 'https://python-db-practice-96823-default-rtdb.firebaseio.com';


class Market extends React.Component {

    constructor() {
        super();
        this.state = {
            words: {}
        };

    }

    _get() {
        fetch(`${databaseURL}/전통시장데이터.json`).then(res => {
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
                        <div className="section_whole2">
                        <div className="headerText2">타이틀</div>
                        <div className="InnerText2">{word.시장명}</div>
                        <div className="section__data2">{word.소재지도로명주소}</div>
                        <div className="section__data2">{word.소재지지번주소}</div>
                        </div>
                        </>
                    
                ); 
            })}
            
        </div>

        </Main>
        )
    }

}
export default Market;