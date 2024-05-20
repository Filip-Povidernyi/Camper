import styleCharac from './style.module.css'

const VehicleCharac = ({ form, length, width, height, tank, consumption }) => {
    return (
        <div className={styleCharac.container}>
            <div>
			    <h4 className={styleCharac.title}>Vehicle details</h4>
			    <hr className={styleCharac.divider} />
            </div>
			<table className={styleCharac.table}>
				<tbody>
					<tr>
						<td>Form</td>
                        <td className={styleCharac.values}>{form}</td>
					</tr>
					<tr>
						<td>Length</td>
                        <td className={styleCharac.values}>{length}</td>
					</tr>
					<tr>
						<td>Width</td>
                        <td className={styleCharac.values}>{width}</td>
					</tr>
					<tr>
						<td>Height</td>
						<td className={styleCharac.values}>{height}</td>
					</tr>
					<tr>
						<td>Tank</td>
						<td className={styleCharac.values}>{tank}</td>
					</tr>
					<tr>
						<td>Consumption</td>
						<td className={styleCharac.values}>{consumption}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default VehicleCharac