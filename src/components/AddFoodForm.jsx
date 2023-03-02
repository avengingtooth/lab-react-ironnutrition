import { Input } from 'antd';

function AddFoodForm(props){
    let newFood = {name: '', image: '', calories: '', servings: ''}
    return(
        <form onSubmit={event => {event.preventDefault()}}>
            <Input type="text" onChange={newFoodName => {newFood['name'] = newFoodName.target.value}}/>
            <Input type="text" onChange={newFoodImage => {newFood['image'] = newFoodImage.target.value}}/>
            <Input type="number" onChange={newFoodCalories => {newFood['calories'] = newFoodCalories.target.value}}/>
            <Input type="number" onChange={newFoodServings => {newFood['servings'] = newFoodServings.target.value}}/>
            <button onClick={() => {
                props.setFoods([...props.foods, newFood])
            }}>Create</button>
        </form>
    )
}

export default AddFoodForm