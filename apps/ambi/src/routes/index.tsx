import type { RouteDefinition } from 'solid-app-router'
import { useRoutes } from 'solid-app-router'
import type { JSX } from 'solid-js'
import { lazy } from 'solid-js'

const ROUTES: RouteDefinition[] = [
  {
    component: lazy(async () => await import('@sunner/ambi/pages/login')),
    path: '/login',
  },
  {
    component: lazy(async () => await import('@sunner/ambi/pages/dashboard')),
    path: '/dashboard',
  },
  {
    component: lazy(async () => await import('@sunner/ambi/pages/_error/404')),
    path: '/*',
  },
]

export default function AppRoutes(): JSX.Element {
  const Routes = useRoutes(ROUTES)

  return <Routes />
}
