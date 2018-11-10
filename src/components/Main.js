import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/article_surf.jpg'
import pic02 from '../images/article_montain.jpg'
import pic03 from '../images/article_building.jpg'
import pic04 from '../images/article_books.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="liberdade" className={`${this.props.article === 'liberdade' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">A Verdadeira Liberdade</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Você só se torna verdadeiramente livre se tiver liberdade financeira, pois não terá que vender seu maior ativo por dinheiro, que é o seu tempo. 
             Isso não significa que necessariamente deixará de trabalhar, apesar de ter essa possibilidade. Significa que poderá decidir 
             baseado em seu propósito e alinhado aos seus valores pessoais e não somente pelo dinheiro.</p>
          <p>Dessa forma, o dinheiro passa a ser consequencia de exercer uma atividade alinhada com seus valores pessoais e própositos de vida. 
            Isso te leva ao equilíbrio e a probabilidade de uma vida abuntante e significativa inclusive financeiramente aumenta exponencialmente.</p>
          <p>Comece agora, <a href="http://bit.ly/formula-riqueza"  target="_blank">clique aqui</a> e conheça a verdadeira Fórmula da Riqueza.</p>
          {close}
        </article>

        <article id="coaching" className={`${this.props.article === 'coaching' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Coaching</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Indicado para quem quer desenvolver sua inteligência financeira racional e emocional, tomando consciência do estado financeiro 
            atual, através do tratamento das causas de disfunções financeiras, crenças financeiras limitantes, identificando os fatores que te autossabotam, levando 
            a definição do estado financeiro desejado, pois se não soubermos onde queremos chegar, qualquer caminho serve.</p>
            <p>Durante o processo é criado um pano de ação baseado no estabelecimento de metas e objetivos de forma neurologicamente corretas, 
            contendo um passo a passo concreto e equilibrado de como chegar no seu estado financeiro desejado. O processo é totalmente 
            individualizado pois as causas dos desequilibrios financeiros são resuldados pessoais das experiências de cada individuo.</p>
          <p>Comece agora, <a href="http://bit.ly/psicologia-do-dinheiro"  target="_blank">clique aqui</a> e comece sua jornada rumo a uma vida financeira livre e abundante.</p>
          
          {close}
        </article>

        <article id="mentoring" className={`${this.props.article === 'mentoring' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Mentoria</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="sobre" className={`${this.props.article === 'sobre' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contato" className={`${this.props.article === 'contato' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contato</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main