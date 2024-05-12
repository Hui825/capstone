import React from 'react';
import Main from '../../components/page/Main';

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
        fetch(`${databaseURL}/주차장정보데이터.json`).then(res => {
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
                        <div className="headerText">타이틀</div>
                        <div className="InnerText">{word.관리기관명}</div>
                        <div className="section__data">{word.주차장명}</div>
                        <div className="section__data">{word.운영요일}</div>
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