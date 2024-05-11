import React from 'react'

import './Market.css'

import { festivalText } from '../../data/market.js';
import Main from '../../components/page/Main.jsx';


const Market = () => {
    

    return (
    <>
        <Main>

          <section id='festival'>
            <div className='title'>전통시장칸 테스트용!</div>
            <div className="section__inner">
                {festivalText.map((section, key) => (
                    <div className="section__data" key={key}>
                                <h2>내용</h2>
                                    <img src={section.img} alt={section.title} />
                                        <h2>{section.title}</h2>
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


export default Market;