import { useDispatch, useSelector } from "react-redux";
import { filtersValue } from "../redux/consts";
import { setFilterValue } from "../redux/reducers/filterSlice";
import { selectFilter } from "../redux/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);
  const handleChange = (e) => {
    console.log(e.target.id);
    dispatch(setFilterValue(e.target.id));
  };
  return (
    <div className="col-auto">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id={filtersValue.all}
          checked={selectedFilter === filtersValue.all}
          // onChange={() => dispatch(selectFilter('all'))}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor={filtersValue.all}>
          All
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id={filtersValue.active}
          checked={selectedFilter === filtersValue.active}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor={filtersValue.active}>
          Active
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id={filtersValue.completed}
          checked={selectedFilter === filtersValue.completed}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor={filtersValue.completed}>
          Compleated
        </label>
      </div>
    </div>
  );
}
