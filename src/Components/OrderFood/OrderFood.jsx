import Cover from "../Shared/Cover";
import orderimg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useData from "../../Hooks/useData";
import { useParams } from 'react-router-dom';

import RetrunCard from "../ReturnCard/RetrunCard";


const OrderFood = () => {

    const categories =["salad","pizza","soup","dessert","drinks"]
    const{title} =useParams();

    const innitialindex=categories.indexOf(title)

    const [tabIndex,settabindex] =useState(innitialindex)

  
console.log(title)


    const [menus] =useData();

 
    const dessert = menus.filter(menu=>menu.category === "dessert")
    const pizza = menus.filter(menu=>menu.category === "pizza")
    const salad = menus.filter(menu=>menu.category === "salad")
    const soup = menus.filter(menu=>menu.category === "soup")
    const drinks = menus.filter(menu=>menu.category === "drinks")


    return (
        <div>
            <Cover bgimg={orderimg} title={"Order food"} description={"Would you like to try a dish"}></Cover>

<Tabs defaultIndex={tabIndex} onSelect={(index) => settabindex(index)}>
    
<div className="flex justify-center my-5">
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZAA</Tab>
    <Tab>SOUP</Tab>
    <Tab>DESSERT</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  </div>
  <TabPanel>
       <RetrunCard itema={dessert}></RetrunCard>
    

  </TabPanel>
  <TabPanel> <RetrunCard itema={pizza}></RetrunCard></TabPanel>
  <TabPanel><RetrunCard itema={salad}></RetrunCard></TabPanel>
  <TabPanel><RetrunCard itema={soup}></RetrunCard></TabPanel>
  <TabPanel><RetrunCard itema={drinks}></RetrunCard></TabPanel>
</Tabs>

            
        </div>
    );
};

export default OrderFood;