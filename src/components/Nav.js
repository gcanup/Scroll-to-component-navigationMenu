import React, { Component } from 'react';
import './Nav.css';
import  Test  from './Test';
import scrollToComponent from 'react-scroll-to-component';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }

  render() {
    return (
      <div className='main'>
        <nav className="navbar navbar-expand-lg navbar-inverse">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav">
          <li><a onClick={this.scrollToTopWithCallback}>Go To Violet</a></li>
          <li><a onClick={() => scrollToComponent(this.Indigo, {  duration: 500, ease:'inExpo'})}>Go To Indigo</a></li>
          <li><a onClick={() => scrollToComponent(this.Blue, {  duration: 500, ease:'inCirc'})}>Go To Blue</a></li>
          <li><a onClick={() => scrollToComponent(this.Green, { duration: 500, ease:'inExpo'})}>Go To Green</a></li>
          <li><a onClick={() => scrollToComponent(this.Yellow, { duration: 500, ease:'inCirc'})}>Go To Yellow</a></li>
          <li><a onClick={() => scrollToComponent(this.Orange, { duration: 500, ease:'in<li>Circ'})}>Go To Orange</a></li>
          <li><a onClick={() => scrollToComponent(this.Red, { duration: 500})}>Go To Red</a></li>
          </ul>
          </div>
          </ nav>
        <section className='violet' ref={(section) => { this.Violet = section; }}>Violet</section>
        <section className='indigo' ref={(section) => { this.Indigo = section; }}>Indigo</section>
        <section className='blue' ref={(section) => { this.Blue = section; }}><Test /></section>
        <section className='green' ref={(section) => { this.Green = section; }}>Green</section>
        <section className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
        <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
        <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
        <b>Inspired By <a href="https://hopechen1028.github.io/hopechen.me/" target="_blank">Hope</a> with Love and Peace</b>
      </div>
    )
  }
}

export default Nav;