import React from 'react';
import DashboardView from './Dashboard.view.js';
// import {
//   getSuppliersCount,
//   getCustomersCount,
//   getProductsCount,
//   getExTaxSales,
//   getIncTaxSales,
//   getYestExTaxSales
// } from "../../../Server/DashboardActions";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    // getSuppliersCount: () => {
    //   dispatch(getSuppliersCount());
    // },
    // getCustomersCount: () => {
    //   dispatch(getCustomersCount());
    // },
    // getProductsCount: () => {
    //   dispatch(getProductsCount());
    // },
    // getExTaxSales: () => {
    //   dispatch(getExTaxSales());
    // },
    // getIncTaxSales: () => {
    //   dispatch(getIncTaxSales());
    // },
    // getYestExTaxSales: () => {
    //   dispatch(getYestExTaxSales());
    // }
  };
};

const MapStateToProps = (state) => {
  return {
    suppliersCount: state.DashboardReducer.suppliersCount,
    customersCount: state.DashboardReducer.customersCount,
    productsCount: state.DashboardReducer.productsCount,
    exTaxSales: state.DashboardReducer.exTaxSales,
    incTaxSales: state.DashboardReducer.incTaxSales,
    yestExTaxSales: state.DashboardReducer.yestExTaxSales,
  };
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getSuppliersCount();
    this.props.getCustomersCount();
    this.props.getProductsCount();
    this.props.getExTaxSales();
    this.props.getIncTaxSales();
    this.props.getYestExTaxSales();
  }

  render() {
    return (
      <DashboardView
        suppliersCount={this.props.suppliersCount}
        customersCount={this.props.customersCount}
        productsCount={this.props.productsCount}
        exTaxSales={this.props.exTaxSales}
        incTaxSales={this.props.incTaxSales}
        yestExTaxSales={this.props.yestExTaxSales}
      />
    );
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(Dashboard);
