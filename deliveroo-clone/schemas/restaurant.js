export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
    name:"name",
    type:"string",
    title:"Restaurant name",
    validation:(Rule)=>Rule.required()
   },{
    name:"image",
    type:"image",
    title:"Image of the restaurant"
   },
   {
    name:"lat",
    type:"number",
    title:"Latitude of the Restaurant"
   },
   {
    name:"long",
    type:"number",
    title:"Longitude of the Restaurant"
   },
   {
    name:"address",
    type:"string",
    title:"Resstaurant adreess",
    validation:(Rule)=>Rule.required()
   },{
    name:"rating",
    type:'number',
    title:"Enter the rating from (1-5 stars)",
    validation:(Rule)=>Rule.required().min(1).max(5).error("Please enter a value between 1 and 5")
   },{
    name:"type",
    title:"Category",
    validation:(Rule)=>Rule.required(),
    type:"reference",
    to:[{type:"category"}],
   },{
    name:"dishes",
    type:'array',
    title:"Dishes",
    of:[{type:"referance",to:[{type:"dish"}]}]
   }
  ],

 
}
