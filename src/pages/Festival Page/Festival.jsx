import React from 'react'

import './festival.css';
import '../../data/festival.js';



import { festivalText } from '../../data/festival.js';
import Main from '../../components/page/Main.jsx';


const Festival= () => {
    

    return (
    <>
        <Main>

          <section id='festival'>
          <div className='title'>축제칸 테스트용!</div>
            <div className="section__inner">
                {festivalText.map((section, key) => (
                    <div className="section__data" key={key}>
                                <div className='headerText'>내용</div>
                                    <img src={section.img} alt={section.title} />
                                    <div className='InnerText'>{section.title}</div>
                                        <h2>{section.date}</h2>
                                        <h2>{section.locate}</h2>
                                    
                    
                    </div>          
                ))}
            </div>
        </section>

        </Main>
    </>
  )
}


export default Festival;