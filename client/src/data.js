export const allThreads =[
    {
        id: 1,
        title: 'first thread',
        slug: 'first-thread',
        author: 'John',
        date: '19/07/1988',
        views: 124,
        comments: [
            {id:1, content: 'commentOne', author:'John', date: '19/07/1988', likes: 9},
            {id:2, content: 'commentTwo', author:'Sam', date: '19/07/1988', likes: 9},
            {id:3, content: 'commentThree', author:'Jane', date: '19/07/1988', likes: 9},
        ]
    },
    {
        id: 2,
        title: 'second thread',
        slug: 'second-thread',
        author: 'Sam',
        date: '19/07/1988',
        views: 95,
        comments: [
            {id:1, content: 'commentOne', author:'Sam', date: '19/07/1988', likes: 9},
            {id:2, content: 'commentTwo', author:'Jane', date: '19/07/1988', likes: 9},
            {id:3, content: 'commentThree', author:'John', date: '19/07/1988', likes: 9},
        ]
    },
    {
        id: 3,
        title: 'third thread',
        slug: 'third-thread',
        author: 'Jane',
        date: '19/07/1988',
        views: 88,
        comments: [
            {id:1, content: 'commentOne', author:'Jane', date: '19/07/1988', likes: 9},
            {id:2, content: 'commentTwo', author:'Sam', date: '19/07/1988', likes: 9},
            {id:3, content: 'commentThree', author:'John', date: '19/07/1988', likes: 9},
        ]
    },
]