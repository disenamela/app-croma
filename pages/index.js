import Head from 'next/head'
import { useEffect, useState } from 'react';
import Heading from '../adapters/Headings';

import logo from '../public/logo-app.png';
import { createRangeColor, getContrastText } from '../utils/colors';
import styled from 'styled-components';
import { ColorPicker, useColor } from 'react-color-palette';

export default function Home() {
	const defaultColor = '#9d61ff'

	const [form, setForm] = useState({
		color: defaultColor,
	})

	// useColor for color picker
	const [color, setColor] = useColor("hex", defaultColor)

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


	const handleChangeColor = (selectedColor) => {
		setColor(selectedColor)
		setForm( (prevState) => ({ ...prevState, color: selectedColor.hex }) )
	}

	const colorKeys = [
		50,
		100,
		200,
		300,
		400,
		500,
		600,
		700,
		800,
		900,
	]

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

					{/* <div className='row'>
						<div className='col'>
							<label htmlFor="">Color</label>
							<input type="text" name='color' placeholder='#FFFFFF' value={form.color} onChange={handleInputChange} />
						</div>
					</div> */}
					<div className='row'>
						<div className='col'>
							<ColorPicker width={300} height={228} color={color} onChange={handleChangeColor} hideHSV />
						</div>
					</div>

				</SideBar>

				<section id="results">
					<div className="container-sm">
						{results &&
							<>
								<h2 className='mb-2'>Color principal</h2>
								<PalleteContainer>
									<ColorStep
										color={results.default}
									/>
								</PalleteContainer>
								<h2 className='mt-4 mb-2'>Paleta</h2>
								<PalleteContainer>
									{colorKeys.map( (key) => (
										<ColorStep
											className='__colorStep'
											key={key}
											name={key}
											color={results[key]}
										/>
									))}
								</PalleteContainer>
							</>
						}
					</div>
				</section>

			</main>
		</>
	)
}

const ColorContainer = styled.div`
	background: ${({color})=>color};
	color: ${({contrastColor})=>contrastColor};
	padding: 1rem;
	min-width: 4rem;
	display: flex;
`

const PalleteContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.75rem;
	border: solid 1px rgba(0,0,0,.1);
	& ${ColorContainer}:first-child {
		border-top-right-radius: 0.75rem;
		border-top-left-radius: 0.75rem;
	}
	& ${ColorContainer}:last-child {
		border-bottom-right-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;
	}
`

const ColorName = styled.div`
	padding-right: 1rem;
`

const ColorStep = ({className, name, color}) => {
	const contrastColor = getContrastText(color)
	return  (
		<ColorContainer
			className={className}
			color={color}
			contrastColor={contrastColor}
		>
			<ColorName>
				{name}
			</ColorName>
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