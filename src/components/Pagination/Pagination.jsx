import React from 'react'
import './Pagination.css'

const Pagination = () =>{
  return(
    <div class='pagination'>
      <a class='pagination__btn'>Prev</a>
      <ul className="pagination__list">
        <li className="pagination__item">1</li>
        <li className="pagination__item">2</li>
        <li className="pagination__item">3</li>
        <li className="pagination__item">4</li>
        <li className="pagination__item">5</li>
      </ul>
      <a class='pagination__btn'>Next</a>
    </div>
  )
}


export default Pagination;