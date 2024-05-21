
function CheckBoxOption(props) {
    // eslint-disable-next-line react/prop-types
    const { value } = props;
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} id={value} />
            <label className="form-check-label" htmlFor={value} >
                {value}
            </label>
        </div>
    )
}

export default CheckBoxOption;