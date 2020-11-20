import React from 'react'
import './Header.css'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
const Header = observer(() =>{

  const filters = [10,20,50]


  return(
    <div className='header'>
      <div className="header__logo"  >
         POKEDEX 
      </div>
      <form  className="header__form">
        <input type="text" className="header__search"/>
        <button className="header__submit" type='submit'>
        <svg width='20' height='20' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512.005 512.005" styles="enableBackground:new 0 0 512.005 512.005;" xmlSpace="preserve">
<g>
	<g>
		<path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
        </button>
        </form>
        <ul className="header__filters">
          {
            filters.map((filter) =>{
          return <li className="header__filters-item" key={filter} onClick={()=> store.testFetchPokemons(filter) }>
              { filter }
          </li>
            })
          }
        </ul>
    </div>
  )
})


export default Header