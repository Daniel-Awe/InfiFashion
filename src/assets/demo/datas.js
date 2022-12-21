let DemoDatas = {};

DemoDatas.users = [
    {
        id: "0",
        avatar: "https://images.unsplash.com/photo-1583674392771-2abf6be75965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw1fHxoZWFkJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjY5MzYzODc0&ixlib=rb-4.0.3&q=80&w=1080",
        name: "Artem",
        region: "俄罗斯",
        tags: ["已实名认证", "会中文", "定制", "提供面料资源", "活跃"]
    },
    {
        id: "1",
        avatar: "https://images.unsplash.com/photo-1612459284970-e8f027596582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw2Mnx8aGVhZCUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTcwODA3MA&ixlib=rb-4.0.3&q=80&w=1080",
        name: "Tenaj",
        region: "塔桑尼亚",
        tags: ["已实名认证", "会英文", "定制", "自主品牌设计", "活跃"]
    },
    {
        id: "2",
        avatar: "https://images.unsplash.com/photo-1577806934037-32d94e326e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0fHxoZWFkJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjY5MzYzODc0&ixlib=rb-4.0.3&q=80&w=1080",
        name: "YOKA时尚精选",
        region: undefined,
        tags: []
    }
]


DemoDatas.teams = [
    {
        id: "0",
        get leader() { return DemoDatas.users[0] },
        introduce: "From 2017 I have my own business.or this last two years I have a big data base of relationships with fresh businessmen,good friends,partners from Russia.Europe and China,who would like to find opportunities in different countries...",
        picture: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0OXx8Y2xvdGhpbmclMjBmYWJyaWN8ZW58MHx8fHwxNjY5Mzg4NTIy&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "1",
        get leader() { return DemoDatas.users[1] },
        introduce: "What is Fashion?To most people fashion is more like how you dress and appear physically...but I like to define fashion as a way of expressing...",
        picture: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxM3x8Y2xvdGhlcyUyMHxlbnwwfHx8fDE2NjkzNzYwMDM&ixlib=rb-4.0.3&q=80&w=1080",
    }
]

DemoDatas.articles = [
    {
        id: "0",
        title: "干货 | 2022服饰流行趋势完全解读",
        date: "2022/03/17",
        get author() { return DemoDatas.users[2] },
        agree: 145,
        collect: 99,
        comment: 123,
        share: 23,
        picture: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwzfHxmYXNoaW9ufGVufDB8fHx8MTY2OTM4NzY2MQ&ixlib=rb-4.0.3&q=80&w=1080",
    }
]

DemoDatas.home = {
}

DemoDatas.forum = {
    slideshow: {
        pictures: [
            "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwzMXx8Y29tbXVuaWNhdGlvbnxlbnwwfHx8fDE2Njk3MDU0NTM&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=0&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29vcGVyYXRpb258fHx8fHwxNjcxNDIwMzI2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1530099486328-e021101a494a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=0&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVhbXx8fHx8fDE2NzE0MjAzODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        ]
    }
}

export default DemoDatas;