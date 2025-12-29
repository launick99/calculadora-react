export default function KeyPad({ handleClick, handleClear, handleCalculate }) {
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('(')}>(</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick(')')}>)</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('%')}>%</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger w-100 mb-2" title='All Clear' onClick={() => handleClear()}>AC</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(7)}>7</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(8)}>8</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(9)}>9</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('/')}>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(4)}>4</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(5)}>5</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(6)}>6</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('*')}>x</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(1)}>1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(2)}>2</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(3)}>3</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('-')}>-</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick(0)}>0</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light w-100 mb-2" onClick={() => handleClick('.')}>.</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-success w-100 mb-2" onClick={() => handleCalculate()}>=</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('+')}>+</button>
                </div>
            </div>
        </div>
    )
}
