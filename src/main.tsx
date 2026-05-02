import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Providers from './app/providers'
import { router } from './app/router'
import { startCmsKeepAlive } from './lib/cmsAxios'
import '@fontsource/mona-sans/400.css'
import '@fontsource/mona-sans/600.css'
import './styles/globals.css'

startCmsKeepAlive()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
)
