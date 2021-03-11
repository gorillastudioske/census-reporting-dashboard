import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { fetchCollection } from "./reducers/populationSlice";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SVGIcons from './components/SVGIcons';

class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    await this.props.fetchCollection('data/knbs/2009/population.json')
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <SVGIcons />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  fetchCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(App)