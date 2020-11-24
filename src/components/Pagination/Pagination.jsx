import React from 'react'
import './Pagination.css'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import classNames from 'classnames'
const Pagination = observer(() =>{

  const portionSize = 5;
  let pageLinks = [];
  for(let i = 1; i <= Math.ceil(store.countOfPokemons / store.limitOnPage); i++){
    pageLinks.push(i)
  }

  let [portionNumber, setPortionNumber] = React.useState(1);
  let portionCount = Math.ceil(store.countOfPokemons / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  const onPageChanged = (pageNumber) => {
    store.changeCurrentPage(pageNumber)
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
       
       {portionNumber > 1 && store.pokemons.length >= 1 && (
          <button
            className="pagination__btn pagination__btn-prev"
            onClick={prevPage}
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
                onClick={() => onPageChanged(p)}
                className={classNames("pagination__item",{
                  "pagination__item--selected": store.currentPage === p,
                })}>
                {p}
              </li>
            );
          })}
      </ul>
      { (portionCount / 10) > portionNumber && store.pokemons.length >= 1 && (
          <button
            className="pagination__btn pagination__btn-next"
            onClick={nextPage}
          >
            next
          </button>
        )}
      
    </div>
  )
      
})


export default Pagination;