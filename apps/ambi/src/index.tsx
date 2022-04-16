/* @refresh reload */
import { render } from 'solid-js/web'

import App from '@sunner/ambi/App'

const root = window.document.getElementById('root')

if (root) render(() => <App />, root)
