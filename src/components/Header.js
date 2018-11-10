import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className=""><img src={logo} alt="" /></span>
            
        </div>
        <div className="content">
            <div className="inner">
                <h2>Liberdade Financeira é uma questão de escolha</h2>
                <p></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('liberdade')}}>Liberdade</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('coaching')}}>Coaching</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('mentoring')}}>Mentoria</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('sobre')}}>Sobre</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contato')}}>Contato</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
