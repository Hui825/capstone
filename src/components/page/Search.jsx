import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [ LoginForm, setLoginForm ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(LoginForm);
        if(LoginForm){
            navigate(`/search/${LoginForm}`);
            setLoginForm('');
        }
    }

    return (
        <div id='search'>
            <div className='search__inner'>
                <input 
                    type='search' 
                    name='searchInput' 
                    id='searchInput' 
                    autoComplete='off'
                    className='search__input'
                    placeholder='정보를 검색해주세요!'
                    onChange={e => setLoginForm(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search