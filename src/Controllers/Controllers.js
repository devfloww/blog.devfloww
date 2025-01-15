// Controller functions

// Imports

// 404 Not found page
export const Return404 = (req, res) => {
    return res.render('notfound')
}

export const Home = (req, res) => {
    return res.render('index')
}