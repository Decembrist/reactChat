import React from 'react'
import {render} from 'react-dom'
import Chat from './components/Chat'
import ws from './util/ws'
import './style.css'

window.ws = ws;
localStorage.removeItem('auth');

render(<Chat />, document.getElementById('container'));