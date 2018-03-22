import React from 'react';

export default () => 
    <div>
        <section id="three" className="wrapper align-center">
				<div className="inner">
					<div className="flex flex-2">
						<article>
							<div className="image article-image round" style={{backgroundImage:`url('images/people reading.jpg')`}}>
								<img src="images/people reading.jpg" alt="people reading" />
							</div>
							<header>
								<h3>Rainer Maria Rilke</h3>
							</header>
							<p>"Ah how good it is to be among people who are reading!"</p>
							<footer>
								<a href="#" className="button">View stories</a>
							</footer>
						</article>
						<article>
							<div className="image article-image round" style={{backgroundImage:`url('images/write your story.jpg')`}}>
								<img src="images/write your story.jpg" alt="write your story" />
							</div>
							<header>
								<h3>Write Story Now!</h3>
							</header>
							<p>If you can tell stories, create characters<br />devise incidents and have sinerity and passion<br />it doesn't matter a damn how you write</p>
							<footer>
								<a href="#" className="button">Write your Own Story Now!</a>
							</footer>
						</article>
					</div>
				</div>
			</section>

    </div>