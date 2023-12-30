import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import { About, Apartments, BlogDetail, Blogs, Contact, DubaiAreaDetail, DubaiAreas, DubaiDeveloperDetail, DubaiDevelopers, DubaiFacts, DubaiProjects, GuideRenting, GuideSelling, GuideTo, Home, InvestDubai, InvestIn, Land, LatestProjects, LuxuryProjects, Map, NotFound, Penthouse, Privacy, ProjectDetail, SellProperty, Townhouse, Villa, WhyDubai } from '../pages'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Login from '../pages/dashboard/Login'

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'dubai-developers',
            element: <DubaiDevelopers />,
          },
          {
            path: 'dubai-developer-detail',
            element: <DubaiDeveloperDetail />,
          },
          {
            path: 'sell-your-property',
            element: <SellProperty />,
          },
          {
            path: 'privacy-policy',
            element: <Privacy />,
          },
          {
            path: 'blogs',
            element: <Blogs />,
          },
          {
            path: 'blog-details',
            element: <BlogDetail />,
          },
          {
            path: 'map',
            element: <Map />,
          },
          {
            path: 'dubai-areas',
            element: <DubaiAreas />,
          },
          {
            path: 'dubai-area-detail',
            element: <DubaiAreaDetail />,
          },
          {
            path: "explore/why-dubai",
            element: <WhyDubai />,
          },
          {
            path: "explore/invest-in-dubai-real-estate",
            element: <InvestDubai />,
          },
          {
            path: "explore/dubai-fact-numbers",
            element: <DubaiFacts />,
          },
          {
            path: "explore/guide-to-off-plan",
            element: <GuideTo />,
          },
          {
            path: "explore/why-invest-in-off-plan",
            element: <InvestIn />,
          },
          {
            path: "explore/guide-on-renting",
            element: <GuideRenting />,
          },
          {
            path: "explore/guide-on-selling",
            element: <GuideSelling />,
          },
          {
            path: 'dubai-projects',
            element: <DubaiProjects />,
          },
          {
            path: 'latest-projects',
            element: <LatestProjects />,
          },
          {
            path: 'luxury-projects',
            element: <LuxuryProjects />,
          },
          {
            path: 'apartments',
            element: <Apartments />,
          },
          {
            path: 'villa',
            element: <Villa />,
          },
          {
            path: 'penthouse',
            element: <Penthouse />,
          },
          {
            path: 'townhouse',
            element: <Townhouse />,
          },
          {
            path: 'land',
            element: <Land />,
          },
          {
            path: 'project-detail',
            element: <ProjectDetail />,
          },
       
          
        ],
    }
    , {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element:<Dashboard/>
            },
            {
                path: 'login',
                element: <Login />,
            }
        ]
    }
]
 )
