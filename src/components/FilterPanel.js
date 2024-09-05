import React, {useState} from "react";
import CheckBox from './CheckBox';


function FilterPanel({ handleOrderByFilter, handleTypeFilter }) {
    const [checkedOptionType, setCheckedOptionType] = useState(null)
    const [checkedOptionOrder, setCheckedOptionOrder] = useState(null)

    return (
        <div className="flex-col justify-center align-center p-4">
            <div>
                <h3>Type</h3>
                <CheckBox setCheckedOption={setCheckedOptionType} checkedOption={checkedOptionType} label='Person' value='people' onFilter={handleTypeFilter}/>
                <CheckBox setCheckedOption={setCheckedOptionType} checkedOption={checkedOptionType} label='Event' value='events' onFilter={handleTypeFilter}/>
                <CheckBox setCheckedOption={setCheckedOptionType} checkedOption={checkedOptionType} label='Place' value='places' onFilter={handleTypeFilter}/>
            </div>
            <div>
                <h3>Order</h3>
                <CheckBox setCheckedOption={setCheckedOptionOrder} checkedOption={checkedOptionOrder} label='Likes' value='likes' onFilter={handleOrderByFilter}/>
                <CheckBox setCheckedOption={setCheckedOptionOrder} checkedOption={checkedOptionOrder} label='Creation Date' value='creation_date' onFilter={handleOrderByFilter}/>
                <CheckBox setCheckedOption={setCheckedOptionOrder} checkedOption={checkedOptionOrder} label='Random' value='random' onFilter={handleOrderByFilter}/>
            </div>
        </div>
    );
}

export default FilterPanel;
