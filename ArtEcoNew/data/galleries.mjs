
// copy(Array.from(document.getElementsByTagName('img')).map((i, item) => {
//
//     return {
//         src: i.getAttribute('src'),
//         attrs: {}
//     };
//
// }).filter(item => item.src.includes('.jpg')))

const items = [
    {
        "src": "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__480.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2021/08/20/14/53/monastery-6560623__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921297__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2016/11/24/20/30/architecture-1857175__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg",
        "attrs": {}
    },
    {
        "src": "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798__340.jpg",
        "attrs": {}
    }
]

export const galleries = [
    { name: 'Byt policistky', items },
    { name: 'Asdljflskdjjf ', items: items.slice().reverse() },
    { name: 'Bsdljflskdjjf ', items: items.slice(2) }
]
