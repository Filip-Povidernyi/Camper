import { useDispatch } from 'react-redux';
import icons from '../../images/icons.svg'
import styleFilter from './style.module.css'
import { resetFilters, setFilters } from '../../redux/slices/filterSlice';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const FilterForm = () => {

	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		location: '',
		equipment: {
			airConditioner: false,
			transmission: false,
			kitchen: false,
			TV: false,
			shower: false,
		},
		form: '',
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFormData((prevState) => ({
				...prevState,
				equipment: {
					...prevState.equipment,
					[name]: checked,
				},
			}));
	};

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(setFilters(formData));
	};

	const handleReset = () => {
		setFormData({
			location: '',
			equipment: {
				airConditioner: false,
				transmission: false,
				kitchen: false,
				TV: false,
				shower: false,
			},
			form: '',
		});
		dispatch(resetFilters());
	}

const equipments = [
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
						type='text'
						name="location"
						value={formData.location}
						className={styleFilter.input}
						onChange={handleChange}
                        placeholder="City"
			        />
			        <svg className={styleFilter.mappin} width="18" height="20">
                      <use href={`${icons}#icon-mappin`}></use>
                    </svg>
		        </label>
				<div>
                    <h3 className={styleFilter.title}>Filters</h3>
                    <div>
			            <h4 className={styleFilter.titleEq}>Vehicle equipment</h4>
			            <hr className={styleFilter.divider} />
                    </div>
                    <div className={styleFilter.fieldset}>
                        <ul className={styleFilter.list}>
                            {equipments.map((filter) => (
                                <li className={styleFilter.item} key={nanoid()}>
			                        <label className={styleFilter.labelItem}>
			                        	<svg className="iconEqp" width="32" height="32">
                                          <use href={`${icons}#${filter.icon}`}></use>
                                        </svg>
			                        	<input
			                        		className="visially-hidden"
			                        		name={filter.name}
			                        		type='checkbox'
											value={filter.value}
											checked={formData.equipment[filter.name]}
											onChange={handleCheckboxChange}
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
                                <li className={styleFilter.item} key={nanoid()}>
			                        <label className={styleFilter.labelItem}>
			                        	<svg className="iconType" width="40" height="28">
                                          <use href={`${icons}#${filter.icon}`}></use>
                                        </svg>
			                        	<input
			                        		className="visially-hidden"
			                        		name={filter.name}
			                        		type='radio'
											value={filter.value}
											checked={formData.form === filter.value}
											onChange={handleChange}
                                            id={filter.value}
			                        	/>
			                        	{filter.value}
			                        </label>
		                        </li>
				        
			                ))}
		                </ul>
				    </div>
				</div>
				<div className={styleFilter.buttons}>
					<button className={styleFilter.btn} type='submit'>Search</button>
					<button className={styleFilter.btnReset} type='button' onClick={handleReset}>Reset filter</button>
				</div>
			</form>
		</aside>
    );
};

export default FilterForm;


