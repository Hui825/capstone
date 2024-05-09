import React from 'react'

import { FesdText } from '../../data/festival.js'
import { Link } from 'react-router-dom'

const Fesd = () => {
    return (
        <section id='fesd'>
            <h2>페스티벌 테스트용 섹션</h2>
            <div className="section__inner">
                {FesdText.map((section, key) => (
                    <div className="section" key={key}>
                        <div className="section__thumb play__icon">
                            <Link to={`/section/${section.sectionId}`}>
                                <img src={section.img} alt={section.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Fesd