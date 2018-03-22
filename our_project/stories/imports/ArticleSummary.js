import React from 'react'

export default ({image,title,alt,children}) =>
    <article>
        <div title={alt} className="image article-summary-image round" style={{ backgroundImage: `url('`+image+`')` }}>
            <img src={image} alt={alt} />
        </div>
        <header className='article-summary-header'>
            <h3>{title}</h3>
        </header>
        <div className='article-summary-body'>
            {children}
        </div>
        <footer className="article-summary-footer">
            <a href="#" className="button">View stories</a>
        </footer>
    </article>