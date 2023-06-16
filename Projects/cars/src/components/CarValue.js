import { useSelector } from "react-redux";

function CarValue() {

  const totalcost = useSelector(({ car: { searchTerm, cars } }) => {
    const filtercars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let cost = 0
    filtercars.forEach(car => { cost += car.cost })
    return cost
  });
  return (
    <div className="car-value">
      Total Cost: $ {totalcost}

    </div>
  );
}

export default CarValue;
