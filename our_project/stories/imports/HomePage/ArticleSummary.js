import React from 'react'

export default ({ image='images/no-image.svg', title='No Title', alt='No image description', children=<p>no description</p> }) =>
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