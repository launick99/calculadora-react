export default function Display({ value, result }) {
    return (
        <div className="card-header">
            <div className="input-group">
                <input type="text" className="form-control w-75" value={value} readOnly />
                <input type="text" className="form-control w-25" value={result} disabled />
            </div>
        </div>
    )
}