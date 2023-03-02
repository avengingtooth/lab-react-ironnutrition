// src/App.js
import './App.css';
import foodsDb from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App () {
  const [foods, setFoods] = useState([...foodsDb])
  const [formVisibility, toggleForm] = useState(false)
  const [searchRequirements, updateSearch] = useState('')
  return (
    <div className="App">
      { 
        formVisibility 
        ? <>
            <AddFoodForm toggleForm={toggleForm} setFoods={setFoods} foods={foods}></AddFoodForm>
            <button onClick={() => {toggleForm(false)}}>Hide Form</button>
          </>
        : <button onClick={() => {toggleForm(true)}}>Add New Food</button>
      }
      <label>
        Search
        <input type="text" onChange={search => {updateSearch(search.target.value.toLowerCase())}}/>
      </label>
      <div className='foodList'>
        {
          foods
          // .filter(verifyFoodName => {
          //   verifyFoodName.name.slice(0, searchRequirements) == searchRequirements
          // })
          .map(curFood => {
            if (curFood.name.toLowerCase().includes(searchRequirements)){
              return(         
                <FoodBox key={curFood.name} food ={curFood} setFoods={setFoods} foods={foods}></FoodBox>
              )
            }
            else{
              return <></>
            }
          })
        }
      </div>
    </div>
  )
}
export default App;