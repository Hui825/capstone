import React from 'react';
import './festival.css';

import { festivalText } from '../../data/festival.js';
import Main from '../../components/page/Main.jsx';


const Festival = () => {

    return (
    <>
        <Main>

          <section id='festival'>
            <h2>축제칸 테스트용!</h2>
            <div className="section__inner">
                {festivalText.map((section, key) => (
                    <div className="section" key={key}>
                        <div className="section__thumb">
                                <h2>내용</h2>
                                <img src={section.img} alt={section.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        </Main>
    </>
  )
}


export default Festival;

