import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.car.searchTerm);
  const carList = useSelector(state => {
    return state.car.cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  const cars = carList.map(car => {
    return (
      <div key={car.id} className="panel is-container-fluid is-flex  " style={{ gap: '2.5rem' }}>
        <p style={{ fontSize: '32px' }}>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => dispatch(removeCar(car))}>
          Delete
        </button>

      </div>
    )
  })

  return (
    <div>
      {cars}

    </div>
  )
}

export default CarList;
