import Head from 'next/head'
import { useEffect, useState } from 'react';
import Heading from '../adapters/Headings';

import logo from '../public/logo-typescale.png';
import { createRangeColor, getContrastText } from '../utils/colors';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

export default function Home() {
	const [form, setForm] = useState({
		color: '#00ff00',
		baseSize: 15,
		ratio: 1.200,
		fontFamily: 'Open Sans',
		previewText: 'Lorem ipsum dolor sit ammet',
	})

	const [results, setResults] = useState(null)
	
	const calcResults = ( data ) => {
		let newResults = createRangeColor(data.color)
		setResults(newResults);
	}
	
	useEffect( () => {
		if (form) {
			calcResults(form);
		}
	}, [form])

	const handleInputChange = ( e ) => {
		setForm( (prevState) => ({ ...prevState, [e.target.name]: e.target.value }) )
	}
	const handlePickerChange = ( selected ) => {
		if(selected.rgb.a !== 1) {
			// alpha
			const c = selected.rgb
			const color = `rgba(${c.r},${c.g},${c.b},${c.a})`
			setForm( (prevState) => ({ ...prevState, color }) )
		} else {
			setForm( (prevState) => ({ ...prevState, color: selected.hex }) )
		}
	}

	console.log(results);
	const arrayResults = !!results ? Object.entries(results) : [] 
	console.log(arrayResults);

	return (
		<>
			<Head>
				{Heading()}
			</Head>

			<main className="mainLayout">
				<SideBar>
					<header className="border-b pb-2 mb-4">
						<a href="/" className="logo"><img src={logo} alt="Diseñamela.com" /></a>
					</header>

					{/* <div className="row">
						<div className="col-auto">
							<label htmlFor="">Base Size</label>
							<input type="number" name={'baseSize'} step={1} value={form.baseSize} className="text-center" style={{ width: '5rem' }} onChange={handleInputChange} />
						</div>
						<div className="col-auto">
							<label htmlFor="unitx">Units</label>
							<select name={'units'} value={form.units} onChange={handleInputChange}>
								<option value="px">Px</option>
								<option value="pt">Pt</option>
							</select>
						</div>
					</div> */}

					{/* <div className="row">
						<div className="col">
							<label htmlFor="fontFamily">Font Family</label>
							<select name={'fontFamily'} value={form.fontFamily} onChange={handleInputChange}>
								<option value="Arial">Arial</option>
							</select>
						</div>
					</div> */}

					<div className='row'>
						<div className='col'>
							<label htmlFor="">Color</label>
							<input type="text" name='color' placeholder='#FFFFFF' value={form.color} onChange={handleInputChange} />
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<ChromePicker
								className='__picker'
								color={form.color}
								onChangeComplete={handlePickerChange}
							/>
						</div>
					</div>

				</SideBar>

				<section id="results">
					<div className="container-fluid">
						<div className="__textPreview">
							{arrayResults.map( ([key, v]) => (
								<ColorStep
									color={v}
								/>
							 ) )}
						</div>
					</div>
				</section>

			</main>
		</>
	)
}

const ColorContainer = styled.div`
	background: ${({color})=>color};
	color: ${({contrastColor})=>contrastColor};
`

const ColorStep = ({color}) => {
	const contrastColor = getContrastText(color)
	return  (
		<ColorContainer
			color={color}
			contrastColor={contrastColor}
		>
			{color}
		</ColorContainer>
	)
}

export function SideBar(props) {
	return (
		<div className="sideBar px-5 p-4 shadow-lg">
			{props.children}
		</div>
	)
}