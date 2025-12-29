import './App.css'

function App() {
    return (
        <>
            <div className="card p-0" style={{ maxWidth: "600px" }}>
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control w-25" />
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">(</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">)</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">%</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-danger w-100 mb-2" title='All Clear'>AC</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">7</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">8</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">9</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">/</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">4</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">5</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">6</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">x</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">1</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">2</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">3</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">-</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">0</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light w-100 mb-2">.</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success w-100 mb-2">=</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-secondary w-100 mb-2">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
