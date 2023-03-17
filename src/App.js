// Pedro Castaneda
// 03-15-2023
// Description: In this assignment we are taking the design from fronendmentor.io and with our current skillset in React we are to build this out for both desktop and mobile.
// Peer Review by Amar Mann: Really good work. Website looks pretty much spot on to the prototype we were given. Good attention to detail and solving for things like the toggle being reversed, the IG border being rounded while a gradient, and the rounded corners on the background rectangle. Responsiveness is perfect and how I'd imagine a production website to be at every width level from desktop to mobile. Dark mode is seamless and matches the prototype. Same with the hover effects
// On the code side, really good use of props to make your components super versatile. And great use of css variables to make your dark mode implementation super efficient and easy to follow. Big fan of all the built-in bootstrap classes you used, seems like you're getting Bootstrap down really well. Really good use of the built in bootstrap classes to handle most of the responsiveness. The classNames you used for the columns work perfectly well but Bootstrap for React does have that alternative formatting you may want to look into. Not sure if it matters entirely which one use 

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div>
        <div className='topBg'>

        </div>
        <Dashboard />
    </div>
  );
}

export default App;
