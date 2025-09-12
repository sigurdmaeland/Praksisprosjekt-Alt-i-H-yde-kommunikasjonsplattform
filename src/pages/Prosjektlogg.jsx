// Kopi av tidligere Status.jsx, nå Prosjektlogg.jsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import '../css/status.css';

const SUPABASE_URL = 'https://sbolhmfhslbwnqpqblfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNib2xobWZoc2xid25xcHFibGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5ODEyODYsImV4cCI6MjA3MjU1NzI4Nn0.iYAVhXuJBd8CNrarQxTRdmWAjd9wdumUqxJiwMVBEnM';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const categories = ['Alle', 'UX', 'Design', 'Backend', 'Møter', 'Planlegging'];

const Prosjektlogg = () => {
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

	// Hent prosjektlogg-oppføringer fra Supabase
	const fetchStatusUpdates = () => {
		setLoading(true);
		supabase
			.from('status')
			.select('*')
			.order('id', { ascending: false })
			.then(({ data, error }) => {
				if (error) {
					setError('Kunne ikke hente statuskort.');
					setLoading(false);
				} else {
					setUpdates(data);
					setLoading(false);
				}
			});
	};

	useEffect(() => {
		fetchStatusUpdates();
	}, []);

	const filteredUpdates =
		selectedCategory === 'Alle'
			? updates
			: updates.filter((update) =>
				(update.categories || '').toLowerCase().includes(selectedCategory.toLowerCase())
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
			date: new Date().toISOString().slice(0, 10),
			title: form.title,
			categories: form.category,
			details: form.description,
		};
		try {
			const { error } = await supabase.from('status').insert([newUpdate]);
			if (error) throw error;
			fetchStatusUpdates();
			setShowForm(false);
			setForm({ category: categories[1], title: '', description: '' });
		} catch {
			setError('Kunne ikke lagre statuskort.');
		}
	};

	return (
		<div className="status-bg">
			<div className="status-container">
				<h2 className="status-title">Prosjektlogg</h2>
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
							<span style={{fontSize:'1.2em',fontWeight:800}}>+</span> Ny logg
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
					<div style={{textAlign:'center',color:'#888',marginTop:'2rem'}}>Laster logg...</div>
				) : filteredUpdates.length === 0 ? (
					<div className="status-no-updates">Ingen logg enda.</div>
				) : (
					<div className="status-updates">
						{filteredUpdates.map((update) => (
							<div
								className={`status-update-section${expanded[update.id] ? ' expanded' : ''}`}
								key={update.id}
								style={{ transition: 'min-height 0.3s, box-shadow 0.2s', minHeight: expanded[update.id] ? 180 : 120 }}
							>
								<div className="status-card-header">
									<div className="status-tags">
										{Array.isArray(update.categories)
											? update.categories.map((cat) => (
												<span className="status-tag" key={cat}>{cat}</span>
											))
											: update.categories
												? <span className="status-tag">{update.categories}</span>
												: null}
									</div>
									<span className="status-date">{update.date}</span>
								</div>
								<h3>{update.title}</h3>
								{update.details && (
									<button
										className="status-showmore"
										onClick={() => handleToggle(update.id)}
										style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
									>
										{expanded[update.id] ? 'Vis mindre' : 'Vis mer'}
									</button>
								)}
								{expanded[update.id] && update.details && (
									<div style={{marginTop:'0.5rem',color:'#23272f',whiteSpace:'pre-line'}}>{update.details}</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Prosjektlogg;
