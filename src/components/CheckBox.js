function CheckBox({ label, onFilter }) {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => {
                    if (onFilter) onFilter(label);
                }}
                className="mr-2"
            />
            <label>{label}</label>
        </div>
    );
}
export default CheckBox;