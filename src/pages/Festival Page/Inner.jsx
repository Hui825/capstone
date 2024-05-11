import React from 'react'

import './Inner.css';
import '../../data/festival.js';



import { festivalText } from '../../data/festival.js';
import Main from '../../components/page/Main.jsx';


const Inner= () => {
    

    return (
    <>
        <Main>

          <section id='festival'>
            <div className='title'>방문할 전통시장을 찾아보세요!</div>
            <div className="section__inner">
                {festivalText.map((section, key) => (
                    <div className="section_whole" key={key}>
                                <div className='headerText'>내용</div>
                                 <div className='image_locate'>
                                    <img src={section.img}/>
                                    </div>

                                <div className='image_locate'>
                                    <img src={section.img}/>
                                    </div>

                                    <div className='headerText2'>{section.title}</div>

                                    <div className='headerText3'>섹션4</div>
                                    <div className='InnerText'>타이틀용</div>
                                        <h2>{section.date}</h2>
                                        <h2>{section.locate}</h2>
                                        <h2>섹션3</h2>
                                    
                    
                    </div>      
                      
                ))}
            </div>
        </section>

        </Main>
    </>
  )
}


export default Inner;