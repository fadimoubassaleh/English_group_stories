import React from 'react';

export default () => 
    <div>
        
    <footer id="footer">
    <div className="about">

    <h3>About Us</h3>

    <p> We are a public service company that offers horror stories to people everywhere. We encourage them to read and share their stories and exchange expiriences. Feel free to send us your feedback below!</p>
    </div>
                    <div className="inner">

                        <h3>Contact Us</h3>

                        <form action="#" method="post">

                            <div className="field half first">
                                    <label htmlfor="name">Full Name</label>
                                <input name="name" id="name" type="text" placeholder="Full Name"/>
                            </div>
                            <div className="field half">
                                <label htmlfor="email">Email</label>
                                <input name="email" id="email" type="email" placeholder="Email"/>
                            </div>
                            <div className="field">
                                <label htmlfor="message">Message</label>
                                <textarea name="message" id="message" rows="6" placeholder="Enter Message Here"></textarea>
                            </div>
                            <ul className="actions">
                                <li><input value="Send Message" className="button alt" type="submit"/></li>
                            </ul>
                            <a target="_blank" title="find us on Facebook" href="http://www.facebook.com/PLACEHOLDER"><img alt="follow me on facebook" src="//login.create.net/images/icons/user/facebook_40x40.png" border="0" id= "fb" /></a>
                            <a target="_blank" title="follow me on instagram" href="http://www.instagram.com/PLACEHOLDER"><img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border="0" id="insta" /></a>
                            <a target="_blank" title="follow me on twitter" href="http://www.twitter.com/PLACEHOLDER"><img alt="follow me on twitter" src="//login.create.net/images/icons/user/twitter_40x40.png" border="0" id="twitter" /></a>
                        </form>
                    </div>
                </footer>
    </div>
