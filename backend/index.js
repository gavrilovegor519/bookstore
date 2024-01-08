const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017/'

const express = require('express')
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const {secret} = require('./config')
const User = require('./models/User')
const Product = require('./models/Product')

const app = express()

const generateAccessToken = (id, login) => {
    const payload = {
        id, login
    }

    return jsonwebtoken.sign(payload, secret, {expiresIn: '24h'})
}

app.use(cors())
app.use(express.json())

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body
    const user = new User({login, password, email})

    try {
        await user.save()
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка!'
            })
            .status(500)

            return;
        }

        //duplicate key
        if (err && err.code === 11000) {
            res.json({
                message: 'Попытка создания дубликата!'
            })
            .status(400)
            console.error('Попытка создания дубликата!')

            return;
        }
    }

    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    let user;

    try {
        user = await User.findOne({login})
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка!'
        })
        .status(500)

        return;
    }

    if (!user) {
        return res.status(400).json({message: 'Пользователь не найден!'})
    }
    if (user.password !== password) {
        return res.status(400).json({message: 'Неверный логин или пароль!'})
    }
    const jwtToken = generateAccessToken(user._id, user.login)

    res.json({
        message: 'Вы успешно вошли на сайт!',
        token: jwtToken
    })
})

app.get('/products', async (req, res) => {
    let products;

    try {
        products = await Product.find()
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка!'
        })
        .status(500)

        return;
    }

    res.json({
        data: products
    })
})

const start = async () => {
    try {
        await mongoose.connect(URLDB)
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()