import React from 'react';
import ArticleSummary from './ArticleSummary'

export default () => 
    <div>
        <section id="three" className="wrapper align-center">
				<div className="inner">
					<div className="flex flex-2">
						<ArticleSummary title="Rainer Maria Rilke" image="images/people reading.jpg" alt="people reading">
							<p>"Ah how good it is to be among people who are reading!"</p>
						</ArticleSummary>
						<ArticleSummary title="Write Story Now!" image="images/write your story.jpg" alt="write your story">
							<p>If you can tell stories, create characters<br />devise incidents and have sinerity and passion<br />it doesn't matter a damn how you write</p>
						</ArticleSummary>
						<ArticleSummary title="My Title" image="images/people reading.jpg">
							<h1>A big description</h1>
							<p>You should set up a credential helper to avoid getting asked for credentials every time VS Code talks to your Git remotes. ... So, let turn on the credential helper so that Git will save your password in memory for some time. ... git remote set-url origin </p>
						</ArticleSummary>
						<ArticleSummary title="B" image="images/people reading.jpg"/>
					</div>
				</div>
			</section>

    </div>