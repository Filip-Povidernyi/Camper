import { useDispatch } from 'react-redux';
import icons from '../../images/icons.svg'
import styleFilter from './style.module.css'
import { setFilters } from '../../redux/slices/filterSlice';

const FilterForm = () => {

    const dispatch = useDispatch();
	const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const filters = {};

    for (let [name, value] of formData.entries()) {
        if (name in filters) {
            if (Array.isArray(filters[name])) {
                filters[name].push(value);
            } else {
                filters[name] = [filters[name], value];
            }
        } else {
            filters[name] = value;
        }
    }

    dispatch(setFilters(filters));
};

const equipment = [
	{ icon:  "icon-ac", name: "airConditioner", value: "AC" },
	{ icon: "icon-transmission", name: "transmission", value: "Automatic" },
	{ icon: "icon-kitchen", name: "kitchen", value: "Kitchen" },
	{ icon:  "icon-tv", name: "TV", value: "TV" },
	{ icon: "icon-wc", name: "shower", value: "Shower/WC" },
];
    
const type = [
	{ icon: "icon-alcove", name: "form", value: "Van" },
	{ icon: "icon-alcove", name: "form", value: "Fully Integrated" },
	{ icon: "icon-alcove", name: "form", value: "Alcove" },
];

   
    return (
        <aside className={styleFilter.container}>
			<form onSubmit={handleSearch}>
				<label className={styleFilter.label}>
			        Location
			        <input
				        name="location"
				        className={styleFilter.input}
                        placeholder="City"
			        />
			        <svg className={styleFilter.mappin} width="18" height="20">
                      <use href={`${icons}#icon-mappin`}></use>
                    </svg>
		        </label>
				<div>
                    <h3 className={styleFilter.title}>Filters</h3>
                    <div>
			            <h4 className={styleFilter.titleEq}>"Vehicle equipment"</h4>
			            <hr className={styleFilter.divider} />
                    </div>
                    <div className={styleFilter.fieldset}>
                        <ul className={styleFilter.list}>
                            {equipment.map((filter) => (
                                <li className={styleFilter.item}>
			                        <label className={styleFilter.labelItem}>
			                        	<svg className="iconEqp" width="32" height="32">
                                          <use href={`${icons}#${filter.icon}`}></use>
                                        </svg>
			                        	<input
			                        		className="visially-hidden"
			                        		name={filter.name}
			                        		type='checkbox'
			                        		value={filter.value}
                                            id={filter.name}
			                        	/>
			                        	{filter.value}
			                        </label>
		                        </li>
				        
			                ))}
		                </ul>
				    </div>
                </div>
                <div>
                    <div>
			            <h4 className={styleFilter.titleEq}>Vehicle type</h4>
			            <hr className={styleFilter.divider} />
                    </div>
                    <div className={styleFilter.fieldset}>
                        <ul className={styleFilter.list}>
                            {type.map((filter) => (
                                <li className={styleFilter.item}>
			                        <label className={styleFilter.labelItem}>
			                        	<svg className="iconType" width="40" height="28">
                                          <use href={`${icons}#${filter.icon}`}></use>
                                        </svg>
			                        	<input
			                        		className="visially-hidden"
			                        		name={filter.name}
			                        		type='radio'
			                        		value={filter.value}
                                            id={filter.value}
			                        	/>
			                        	{filter.value}
			                        </label>
		                        </li>
				        
			                ))}
		                </ul>
				    </div>
                </div>
                <button className={styleFilter.btn} type='submit'>Search</button>
			</form>
		</aside>
    );
};

export default FilterForm;


