import './App.css';


const App = () => {
  function MyButton(){
    return(
      <button>Creating and nesting components</button>
    )
  }
  const user = {
  name: 'Harikrishna Gautam',
  imageUrl: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?uid=R202646436&ga=GA1.1.1121462713.1748794044&semt=ais_hybrid&w=740',
  imageSize: 100,
}

  return (
<>
<h2>Creating and nesting components</h2>
<p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page</p>

<MyButton />
<h2>Writing markup with JSX</h2>
<p className="border-style">JSX is stricter than HTML. So, we have to close tags like {"<br />"}.</p>
<h3>Adding Styles</h3>
<p>In React, we can specify a CSS class with className. It works the same way as the HTMl class attributes </p>
{"<p className='avatar'> <p/>"}
<h2>Displaying Data</h2>
<img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <h3>Name : {user.name}</h3>

      <h4>Image Size : {user.imageSize}</h4>
</>
  )
}

export default App;