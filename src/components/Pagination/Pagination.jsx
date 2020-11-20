import React from 'react'
import './Pagination.css'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'

const Pagination = observer(() =>{

  const portionSize = store.limitOnPage;
  let pageLinks = [];

  for(let i = 1; i <= store.countOfPokemons; i++){
    pageLinks.push(i)
  }

  let [portionNumber, setPortionNumber] = React.useState(1);
  let portionCount = Math.ceil(store.countOfPokemons / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const onPageChanged = (pageNumber) => {
    store.changePage(pageNumber);
  };

  const prevPage = () =>{
    setPortionNumber(portionNumber - 1)
    store.prevPage()  
  };

  const nextPage =() =>{
    setPortionNumber(portionNumber + 1)
    store.nextPage()
  }


  return(
    <div className='pagination'>
       {portionNumber > 1 && (
          <button
            className="pagination__btn pagination__btn-prev"
            onClick={ prevPage}
          >
            prev
          </button>
        )}
      <ul className="pagination__list">
        {pageLinks
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <li
                key={p}
                onClick={(e) => onPageChanged(p)}
                className="pagination__item pagination__btn-next"
              >
                {p}
              </li>
            );
          })}
      </ul>
      {portionCount > portionNumber && (
          <button
            className="pagination__btn"
            onClick={nextPage}
          >
            next
          </button>
        )}
    </div>
  )
})


export default Pagination;