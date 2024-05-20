import styleForm from './style.module.css';

const ModalForm = () => {
	return (
		<>
			<h3 className={styleForm.title}>Book your campervan now</h3>
			<p className={styleForm.subtitle}>
				Stay connected! We are always ready to help you.
			</p>
			<form className={styleForm.form}>
				<label
					className="visially-hidden"
					htmlFor="name">
					Name
				</label>
				<input
					className={styleForm.input}
					id="name"
					type="text"
					name="name"
					placeholder="Name"
					required
				/>
				<label
					className="visially-hidden"
					htmlFor="email">
					Email
				</label>
				<input
					className={styleForm.input}
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					required
				/>
				<label
					className="visially-hidden"
					htmlFor="date">
					Date
				</label>
				<input
					className={styleForm.input}
					id="date"
					type="date"
					name="date"
					placeholder="Booking date"
					required
				/>
				<label
					className="visially-hidden"
					htmlFor="comment">
					Comment
				</label>
				<textarea
					className={styleForm.textarea}
					placeholder="Comment"
					id="comment"
					name="comment"
				/>
				<div>
					<button className={styleForm.btn} type="submit">Send</button>
				</div>
			</form>
		</>
	);
}

export default ModalForm;