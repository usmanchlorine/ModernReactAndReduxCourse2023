
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";



function CarForm() {

  const name = useSelector(state => state.form.name)
  const cost = useSelector(state => state.form.cost)
  const dispatch = useDispatch()
  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value))

  }


  const handleChangeCost = (event) => {

    dispatch(changeCost(parseInt((event.target.value)) || ""))

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addCar({
      name: name,
      cost: cost,

    }))
    dispatch(changeCost(""))
    dispatch(changeName(""))
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">
        Car Registration
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name: </label>
            <input className="input is-expanded" value={name} onChange={handleChangeName}></input>

          </div>

          <div className="field">
            <label className="label">Cost: </label>
            <input className="input is-expanded" type="number" value={cost} onChange={handleChangeCost}></input>

          </div>


          <div className="field">
            <button type="submit" className="button is-link">Submit</button>
          </div>

        </div>
      </form>
    </div>
  )
}
export default CarForm;