import React from 'react';
import styles from './Project1.css';
import Loadable from 'react-loadable';
import Spinner from '../../../Spinner/Spinner';
import ProceedAnchor from '../../../Utilities/proceedAnchor/proceedAnchor';
const project1 = () => {
    const Gif = Loadable({
        loader: () => import('./GifGame2048'),
        loading: () => Spinner,
        delay: 10,
        });

    return (
        <div className= {styles.Project1}>
            <div style={{height:'100%',width:'100%'}}>
                <Gif />
            </div>
            <article className= {styles.Article}>
                <h2>2048 Game Ultra</h2>
                <ProceedAnchor href='https://my-2048-game-with-react.firebaseapp.com/' />
                
                <p>This project was developed to put the knowledge and skills I've learned into practice
                <br/>Inspired by the <a target="_blank" rel="noopener noreferrer" href='http://2048game.com/'>original game</a>, I've developped my own game logic from scratch using the JavaScript library React.js</p> 
                <p><b>Development State : </b> Version 3.0 Released! </p>
            </article>
        </div>
    );
}

export default project1;

