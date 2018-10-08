
export const menuItem = [
    { menuIcon:'fas fa-home', menuString: 'Home', link: ''  },
    { menuIcon:'fas fa-chart-bar', menuString: 'Page1', link: 'page1', children:[
        { menuIcon:'fas fa-child', menuString: 'Child1', link: 'child1' },
        { menuIcon:'fas fa-child', menuString: 'Child2', link: 'child2', children:[
            { menuIcon:'fas fa-child', menuString: 'Sub Child1', link: 'child1' }
        ] },
    ]  },
    { menuIcon:'fas fa-chart-bar', menuString: 'Page2', link: 'page2' },
    
]

