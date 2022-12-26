export default [
    {
        id: "admin",
        type: "merchant",
        avatar: "https://images.unsplash.com/photo-1670381225856-997d3eea46df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=0&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTg4MDgzNA&ixlib=rb-4.0.3&q=80&w=1080",
        name: "管理员",
        region: undefined,
        tags: ["系统"],
        password: "123456",
        score: 3
    },
    {
        id: "inform",
        type: "system",
        avatar: require("@/assets/pictures/system/system_icon.png"),
        name: "系统通知",
        region: undefined,
        tags: ["系统"],
        password: "123456",
        score: 3
    },
    {
        id: "trade",
        type: "system",
        avatar: require("@/assets/pictures/system/trade_icon.png"),
        name: "交易提醒",
        region: undefined,
        tags: ["系统"],
        password: "123456",
        score: 3
    },
    {
        id: "0",
        type: "talent",
        avatar: "https://images.unsplash.com/photo-1583674392771-2abf6be75965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw1fHxoZWFkJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjY5MzYzODc0&ixlib=rb-4.0.3&q=80&w=1080",
        name: "Artem",
        region: "俄罗斯",
        tags: ["已实名认证", "会中文", "定制", "提供面料资源", "活跃"],
        introduce: "From 2017 I have my own business.or this last two years I have a big data base of relationships with fresh businessmen,good friends,partners from Russia.Europe and China,who would like to find opportunities in different countries...",
        picture: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0OXx8Y2xvdGhpbmclMjBmYWJyaWN8ZW58MHx8fHwxNjY5Mzg4NTIy&ixlib=rb-4.0.3&q=80&w=1080",
        password: "123456",
        score: 3,
        resources: [{
            cover: require("../img/cotton.png"),
            url: undefined
        }, {
            cover: require("../img/pehorka.png"),
            url: undefined
        }],
        stat: {
            example: 12,
            comment: 10,
            fans: 321,
            attention: 100
        }
    },
    {
        id: "1",
        type: "talent",
        avatar: "https://images.unsplash.com/photo-1612459284970-e8f027596582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw2Mnx8aGVhZCUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTcwODA3MA&ixlib=rb-4.0.3&q=80&w=1080",
        name: "Tenaj",
        region: "塔桑尼亚",
        tags: ["已实名认证", "会英文", "定制", "自主品牌设计", "活跃"],
        introduce: "What is Fashion?To most people fashion is more like how you dress and appear physically...but I like to define fashion as a way of expressing...",
        picture: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxM3x8Y2xvdGhlcyUyMHxlbnwwfHx8fDE2NjkzNzYwMDM&ixlib=rb-4.0.3&q=80&w=1080",
        password: "123456",
        score: 3,
        resources: [{
            cover: "https://img.js.design/assets/img/6386ff3caedbf352c475b39a.jpg#92f8584462b589ee882693fe00795617",
            url: undefined
        }, {
            cover: "https://img.js.design/assets/img/638700836be1dbaba7d84b6f.jpg#21792cb2c4cb9128fcdd55c766d34c03",
            url: undefined
        }],
        stat: {
            example: 23,
            comment: 12,
            fans: 261,
            attention: 170
        }
    },
    {
        id: "2",
        type: "talent",
        avatar: "https://images.unsplash.com/photo-1577806934037-32d94e326e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0fHxoZWFkJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjY5MzYzODc0&ixlib=rb-4.0.3&q=80&w=1080",
        name: "YOKA时尚精选",
        region: undefined,
        tags: [],
        password: "123456",
        score: 3
    },
    {
        id: "3",
        type: "talent",
        avatar: "https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxfHxoZWFkJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjY5NjA0NDU5&ixlib=rb-4.0.3&q=80&w=1080",
        name: "田小花",
        region: undefined,
        tags: [],
        password: "123456",
        score: 3
    },
    {
        id: "4",
        type: "merchant",
        avatar: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxNnx8aGVhZCUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTQ1MDUxMQ&ixlib=rb-4.0.3&q=80&w=1080",
        name: "衣之家服饰",
        region: undefined,
        tags: ["已实名认证", "有工商执照", "企业"],
        password: "123456",
        score: 5
    },
    {
        id: "5",
        type: "talent",
        avatar: "https://images.unsplash.com/photo-1524550158212-33f2ff985344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0Mnx8aGVhZCUyMHBvcnRyYWl0fGVufDB8fHx8MTY3MDY1Njc0Mw&ixlib=rb-4.0.3&q=80&w=1080",
        name: "Taylor",
        region: undefined,
        tags: ["已实名认证", "服装设计师"],
        password: "123456",
        score: 5
    }
]