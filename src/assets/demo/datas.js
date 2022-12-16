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
    }
]


DemoDatas.teams = [
    {
        id: "0",
        get leader() { return DemoDatas.users[0] },
        picture: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0OXx8Y2xvdGhpbmclMjBmYWJyaWN8ZW58MHx8fHwxNjY5Mzg4NTIy&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "1",
        get leader() { return DemoDatas.users[1] },
        picture: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxM3x8Y2xvdGhlcyUyMHxlbnwwfHx8fDE2NjkzNzYwMDM&ixlib=rb-4.0.3&q=80&w=1080",
    }
]

export default DemoDatas;