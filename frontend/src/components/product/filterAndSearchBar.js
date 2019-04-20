import React, {Component} from 'react'
import {connect} from "react-redux";
import {itemsToShow} from '../../actions/filterActions'
import {toggleSelectProduct} from "../../actions/productActions";

class FilterAndSearchBar extends Component {
  state = {
    selectedAll: false
  };

  componentDidMount() {
    this.props.dispatch(itemsToShow(1))
  }

  componentWillUnmount() {
    this.props.dispatch(itemsToShow(1))
  }

  changeItemsValue = (e) => {
    this.props.dispatch(itemsToShow(e.target.value))
  };

  handleSelectAll = () => {
    this.setState(prevState =>
      ({selectedAll: !prevState.selectedAll}), () =>
      this.props.renderedProductsID.map(id =>
        this.props.dispatch(toggleSelectProduct({
          id: id,
          bool: this.state.selectedAll
        }))));
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignItem: 'center',
        height: 50,
        border: '2px solid #999',
        borderRadius: 15
      }}
      >
        <div style={{placeItems: 'start'}}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={this.state.selectedAll}
            onChange={this.handleSelectAll}
          />
          <label>Select All</label>
        </div>
        <div style={{marginLeft: 20}}>
          <label>Items</label>
          <select
            name="itemToRender"
            style={{marginLeft: 5}}
            onChange={this.changeItemsValue}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100000">All</option>
          </select>
        </div>
        <div style={{marginLeft: 20}}>
          <label>Categories</label>
          <select name="itemToRender" style={{marginLeft: 5}}>
            <option value="">Select Category</option>
            <option value="20">20</option>
            <option value="20">50</option>
            <option value="20">100</option>
          </select>
        </div>
        <div style={{marginLeft: 20}}>
          <button type='button' className="btn btn-info btn-sm">Exp</button>
        </div>
        <div style={{marginLeft: 20}}>
          <label>Filter by</label>
          <select name="itemToRender" style={{marginLeft: 5}}>
            <option value="in stock">in stock</option>
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
          </select>
        </div>
        <div style={{marginLeft: 20}}>
          <span role="img" aria-label="search">&#128270;</span>
          {/*<span role="img" aria-label="search">&#128269;</span>*/}
          <input type="text" placeholder={'Product name ...'}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const renderedProductsID = state.filterReducer.renderedProductsID;
  return {renderedProductsID}
};

export default connect(mapStateToProps)(FilterAndSearchBar)