function CheckBox({ label, value, onFilter, checkedOption, setCheckedOption }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checkedOption === value}
                    className="mr-2"
                    onClick={() => {
                        if (checkedOption === value) {
                            setCheckedOption(null); 
                            onFilter(null);
                        } else {
                            setCheckedOption(value);
                            onFilter(value);
                        }
                    }}
                />
                {label}
            </label>
        </div>
    );
}
export default CheckBox;
