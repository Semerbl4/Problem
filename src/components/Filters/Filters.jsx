import React from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import filtersStyle from './Filters.module.scss';


import * as actions from '../../actions'

// eslint-disable-next-line no-shadow
const Filters = ({checkAll, check0, check1, check2, check3,
   all, none, one, two, three }) => {

    const getClass = (chk) => {
      if (chk) {
        return 'filters__visible-checked'
      }
      return 'filters__visible-check'
    }
      

   return (
  <form className={filtersStyle.filters}>
    <fieldset className={filtersStyle.filters__set}>
      <legend className={filtersStyle['filters__set-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" onClick={all} />
        <span className={filtersStyle[getClass(checkAll)]} />
        <p>Все</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" onClick={none}/>
        <span className={filtersStyle[getClass(check0)]} />
        <p>Без пересадок</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" onClick={one}/>
        <span className={filtersStyle[getClass(check1)]} />
        <p>1 пересадка</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" onClick={two}/>
        <span className={filtersStyle[getClass(check2)]} />
        <p>2 пересадки</p>
      </label>
      <label className={filtersStyle['filters__check-label']}>
        <input className={filtersStyle['filters__hidden-box']} type="checkbox" name="all" id="" onClick={three}/>
        <span className={filtersStyle[getClass(check3)]} />
        <p>3 пересадки</p>
      </label>
    </fieldset>
  </form>
)
}

Filters.propTypes = {
 checkAll: PropTypes.bool.isRequired,
 check0: PropTypes.bool.isRequired,
 check1: PropTypes.bool.isRequired,
 check2: PropTypes.bool.isRequired,
 check3: PropTypes.bool.isRequired,
 all: PropTypes.func.isRequired,
 none: PropTypes.func.isRequired,
 one: PropTypes.func.isRequired,
 two: PropTypes.func.isRequired,
 three: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  checkAll: state.filter.checkAll,
  check0: state.filter.check0,
  check1: state.filter.check1,
  check2: state.filter.check2,
  check3: state.filter.check3, 
  })


export default connect(mapStateToProps , actions)(Filters);
