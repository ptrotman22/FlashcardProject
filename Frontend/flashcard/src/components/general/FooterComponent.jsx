import React from 'react'

function FooterComponent(){
    return (
        <footer className="footer">
        <div id="copyright">
            <p>&copy; Copyright 2020. All Rights Reserved. </p><br></br>
            <p><a href="mailto:ptrotman22@gmail.com">ptrotman22@gmail.com</a></p>
        </div>
        
        <div>
        <p>Connect with us:</p>
        <p>
        <a href="https://www.facebook.com"><img src="public/fblogo.png" alt="Facebook logo"></img></a>
        <a href="https://www.twitter.com"><img src="public/twitterlogo.png" alt="Twitter logo"></img></a>
        </p>
        </div>
        </footer>
    )
}

export default FooterComponent