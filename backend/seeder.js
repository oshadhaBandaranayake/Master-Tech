import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import product from './data/products.js'
import User from './DataModules/userModel.js'
import Product from './DataModules/productModel.js'
import Order from './DataModules/orderModel.js'
import connectDB from './DBsetting/db.js'


dotenv.DBsetting()
connectDB()

const importData = async () => {
    try {
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()

       const createUsers = await User.insertMany(users)

       const adminUser = createUsers[0]._id

        const sampleProducts = product.map(product => {
            return{...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {

       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
    
        console.log(`Data Destroyed !`.red.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}