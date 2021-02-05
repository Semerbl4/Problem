import React from 'react';

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import cn from 'classnames'

import * as actions from '../../actions'

import tabsStyle from './Tabs.module.scss';

const Tabs = ({tabCheap, cheap, notCheap}) => { 

  const tabCheapCn = cn(tabsStyle['tabs-buttons'], {
    [tabsStyle['tabs-buttons_selected']]: tabCheap,
  })

  const tabNotCheapCn = cn(tabsStyle['tabs-buttons'], {
    [tabsStyle['tabs-buttons_selected']]: !tabCheap,
  })

  // console.log(tabsStyle)

  // const getCheapTabClass = (tabCheap) => {
  //   if (tabCheap) {
  //     return 'tabs-buttons .tabs-buttons_selected'
  //   }
  //   return 'tabs-buttons'
  // }

  // const getNotCheapTabClass = (tabCheap) => {
  //   if (tabCheap) {
  //     return 
  //   }
  //   return 'tabs-buttons .tabs-buttons_selected''tabs-buttons'
  // }

  return (
  <div className={tabsStyle['tabs-container']}>
    <button className={tabsStyle[tabCheapCn]} type="button" onClick={cheap}>
      САМЫЙ ДЕШЁВЫЙ, {tabCheap}
    </button>
    <button className={tabsStyle[tabNotCheapCn]} type="button" onClick={notCheap}>
      САМЫЙ БЫСТРЫЙ
    </button>
  </div>
)
}

Tabs.propTypes = {
  tabCheap: PropTypes.bool.isRequired,
  cheap: PropTypes.func.isRequired,
  notCheap: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  tabCheap: state.tabCheap,
})

export default connect(mapStateToProps, actions)(Tabs);
