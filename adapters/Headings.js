export default function Heading(pageTitle = '', desc = '', image = '', url = '') {
	const lang = 'ES';
	const preview = '/logo-disenamela.png';
	const statics = [
		<meta charset="utf-8" />,
		<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />,
		<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />,
		<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />,
		<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />,
		<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />,
		<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />,
		<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />,
		<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />,
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />,
		<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />,
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />,
		<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />,
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />,
		<link rel="manifest" href="/favicon/manifest.json" />,
		<meta name="msapplication-TileColor" content="#ffffff" />,
		<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />,
		<meta name="theme-color" content="#ffffff" />,
		<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#9D61FF" />,
		<meta name="msapplication-TileColor" content="#da532c" />,
		<meta name="theme-color" content="#ffffff" />,
		<meta property="og:type" content="website" />,
		<meta name="author" content="LaloGold y Mati GF" />,
		<meta name="copyright" content="Diseñamela" />,
		<meta name="robots" content="index, follow" />,
		<meta name="keywords" content="" />,
	]


	const description = {
		ES: 'Contamos con la experiencia de dos generaciones brindando servicio, calidad y atención a nuestros clientes. Nuestro objetivo es asesorarlo para lograr la mejor presentación de su producto sin descuidar los costos ya que son muchas las variantes que puede conseguir. Para ello podemos ofrecerle diferentes modelos y materiales. Tenemos personal capacitado que lo ayudará en el armado de su diseño para lograr un producto personalizado.',
	};

	const locale = {
		EN: 'en_US',
		ES: 'es_AR',
		PT: 'pt_BR'
	};

	let title = 'TypeScale - Diseñamela';
	// if (pageTitle) {
	// 	title = pageTitle + ' | ' + title;
	// }

	return (
		<>
			<title>{title}</title>
			<meta name="og:title" content={title} />
			<meta name="og:sitename" content="Diseñamela" />
			<meta name="description" content={desc || description[lang]} />
			<meta name="og:description" content={desc || description[lang]} />
			<meta name="lang" content={lang.toLowerCase()} />
			<meta name="og:locale" content={locale[lang]} />
			<meta name="og:url" content={"https://typescale.diseñamela.com" + url} />
			<link rel="image_src" href={image || preview} />
			<meta name="og:image" content={image || preview} />

			{statics}

			<script async src="https://www.googletagmanager.com/gtag/js?id=G-GFJFMLFSHB"></script>

			<script dangerouslySetInnerHTML={
				{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-GFJFMLFSHB');
					`}
			}>
			</script>


		</>
	)
}