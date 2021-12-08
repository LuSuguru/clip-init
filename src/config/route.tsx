import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Main = lazy(() => import('@/pages/main'))

export default [
  {
    path: '/',
    element: <Main />
  }
] as RouteObject[]
