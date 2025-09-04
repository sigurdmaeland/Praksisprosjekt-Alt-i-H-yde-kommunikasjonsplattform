import React, { useState, useEffect } from 'react';
import '../css/status.css';

const API_URL = 'http://localhost:4000/api/status';

const categories = ['Alle', 'UX', 'Design', 'Backend', 'Møter', 'Planlegging'];

const Status = () => {
	const [selectedCategory, setSelectedCategory] = useState('Alle');
	const [expanded, setExpanded] = useState({});
	const [updates, setUpdates] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [form, setForm] = useState({
		category: categories[1],
		title: '',
		description: '',
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Hent statuskort fra backend
	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setUpdates(data);
				setLoading(false);
			})
			.catch(() => {
				setError('Kunne ikke hente statuskort.');
				setLoading(false);
			});
	}, []);

	const filteredUpdates =
		selectedCategory === 'Alle'
			? updates
			: updates.filter((update) =>
				update.categories.map((c) => c.toLowerCase()).includes(selectedCategory.toLowerCase())
			);

	const handleToggle = (id) => {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (!form.title.trim() || !form.category.trim() || !form.description.trim()) return;
		const newUpdate = {
			date: new Date().toLocaleDateString('no-NO'),
			title: form.title,
			categories: [form.category],
			summary: form.title,
			details: form.description,
		};
		try {
			const res = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUpdate),
			});
			if (!res.ok) throw new Error('Kunne ikke lagre.');
			const saved = await res.json();
			setUpdates((prev) => [saved, ...prev]);
			setShowForm(false);
			setForm({ category: categories[1], title: '', description: '' });
		} catch {
			setError('Kunne ikke lagre statuskort.');
		}
	};

	return (
		<div className="status-bg">
			<div className="status-container">
				<h2 className="status-title">Status</h2>
				{error && <div style={{color:'#c00',marginBottom:'1rem'}}>{error}</div>}

				{/* Kategori-filter */}
				<div className="status-filter">
					{categories.map((cat) => (
						<button
							key={cat}
							className={`status-filter-btn${selectedCategory === cat ? ' selected' : ''}`}
							onClick={() => setSelectedCategory(cat)}
						>
							{cat}
						</button>
					))}
				</div>

				{!showForm && (
					<div className="status-create-btn-container">
						<button
							style={{
								padding: '0.38rem 1.1rem',
								borderRadius: '16px',
								background: '#2ecc71',
								color: '#fff',
								border: 'none',
								fontWeight: 700,
								fontSize: '0.98rem',
								cursor: 'pointer',
								boxShadow: '0 2px 8px rgba(46,204,113,0.08)',
								letterSpacing: '0.01em',
								display: 'inline-flex',
								alignItems: 'center',
								gap: '0.5em',
							}}
							onClick={() => setShowForm(true)}
						>
							<span style={{fontSize:'1.2em',fontWeight:800}}>+</span> Nytt innlegg
						</button>
					</div>
				)}
				{showForm && (
					<form onSubmit={handleFormSubmit} style={{
						background: '#f8fafc',
						border: '1.5px solid #e3e8f0',
						borderRadius: '1.2rem',
						padding: '2rem',
						marginBottom: '2rem',
						maxWidth: 500,
						marginLeft: 'auto',
						marginRight: 'auto',
						boxShadow: '0 2px 12px rgba(44,82,130,0.07)'
					}}>
						<div style={{ marginBottom: '1.2rem' }}>
							<label htmlFor="category" style={{ fontWeight: 600, marginRight: 8 }}>Kategori:</label>
							<select
								id="category"
								name="category"
								value={form.category}
								onChange={handleFormChange}
								style={{ padding: '0.4rem 1rem', borderRadius: 8, border: '1px solid #b6c6e3', fontSize: '1rem' }}
							>
								{categories.slice(1).map((cat) => (
									<option key={cat} value={cat}>{cat}</option>
								))}
							</select>
						</div>
						<div style={{ marginBottom: '1.2rem' }}>
							<label htmlFor="title" style={{ fontWeight: 600, marginRight: 8 }}>Tittel:</label>
							<input
								id="title"
								name="title"
								type="text"
								value={form.title}
								onChange={handleFormChange}
								style={{ width: '100%', padding: '0.4rem 1rem', borderRadius: 8, border: '1px solid #b6c6e3', fontSize: '1rem' }}
								required
							/>
						</div>
						<div style={{ marginBottom: '1.2rem' }}>
							<label htmlFor="description" style={{ fontWeight: 600, marginRight: 8 }}>Beskrivelse:</label>
							<textarea
								id="description"
								name="description"
								value={form.description}
								onChange={handleFormChange}
								style={{ width: '100%', minHeight: 80, padding: '0.4rem 1rem', borderRadius: 8, border: '1px solid #b6c6e3', fontSize: '1rem' }}
								required
							/>
						</div>
						<div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
							<button
								type="button"
								onClick={() => setShowForm(false)}
								style={{
									background: '#eee',
									color: '#23272f',
									border: 'none',
									borderRadius: 8,
									padding: '0.6rem 1.2rem',
									fontWeight: 600,
									fontSize: '1rem',
									cursor: 'pointer',
								}}
							>
								Avbryt
							</button>
							<button
								type="submit"
								style={{
									background: '#2ecc71',
									color: '#fff',
									border: 'none',
									borderRadius: 8,
									padding: '0.6rem 1.2rem',
									fontWeight: 700,
									fontSize: '1rem',
									cursor: 'pointer',
								}}
							>
								Opprett
							</button>
						</div>
					</form>
				)}
				{loading ? (
					<div style={{textAlign:'center',color:'#888',marginTop:'2rem'}}>Laster statuskort...</div>
				) : filteredUpdates.length === 0 ? (
					<div className="status-no-updates">Ingen statuskort enda.</div>
				) : (
					<div className="status-updates">
						{filteredUpdates.map((update) => (
							<div className="status-update-section" key={update.id}>
								<div className="status-card-header">
									<div className="status-tags">
										{update.categories.map((cat) => (
											<span className="status-tag" key={cat}>{cat}</span>
										))}
									</div>
									<span className="status-date">{update.date}</span>
								</div>
								<h3>{update.title}</h3>
								<p>{update.summary}</p>
								{update.details && (
									<button className="status-showmore" onClick={() => handleToggle(update.id)}>
										{expanded[update.id] ? 'Vis mindre' : 'Vis mer'}
									</button>
								)}
								{expanded[update.id] && (
									<div style={{marginTop:'0.5rem',color:'#23272f'}}>{update.details}</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Status;
