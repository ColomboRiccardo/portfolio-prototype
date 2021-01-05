import './App.css';

function App() {
	return (
		<div className='App w-screen h-screen flex '>
			<div className='container'>
				<div className='card h-5/6 w-11/2 border-4 border-gray-200'>
					<div className='image flex'></div>
					<p>Hi, I'm</p>
					<h1>colomboRiccardo</h1>
					<h2>front end developer</h2>
					<p>I make your vision take reality and come to life</p>
				</div>
				<nav className='flex'>
					<button>homepage</button>
					<button>my skills</button>
					<button>contact me</button>
					<button>my projects</button>
					<button>my blog</button>
					<button>language:it</button>
				</nav>
			</div>
		</div>
	);
}

export default App;
