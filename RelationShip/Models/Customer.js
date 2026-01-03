const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationshiptDemo');
}
const orderSchema = new Schema({
  item:String,
  price:Number,
});

const Order= mongoose.model('Order', orderSchema);

const customerSchema= new Schema({
  name:String,
  orders:[
    {
      types:mongoose.Schema.Types.ObjectId,
      ref:'Order'
    },
  ],
})


const Customer= mongoose.model('Customer', customerSchema);

const addCustomer=async()=>{
  let cust1=new Customer({
    name:"Ram",
  });

  let order1=await Order.findOne({item:"Burger"});
  let order2=await Order.findOne({item:"Pizza"});

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result=await cust1.save();
  console.log(result);
};

addCustomer();

// const addOrders= async()=>{
//   let res=await Order.insertMany([
//     {item:"Samosa", price:20},
//     {item:"Burger", price:50},
//     {item:"Pizza", price:200},
//   ]);
//   console.log(res);
// }

// addOrders();