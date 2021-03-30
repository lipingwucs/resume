import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import Resume from './Resume';



render(<Resume />, document.getElementById('root'));
