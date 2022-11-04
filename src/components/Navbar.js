import logo from '../images/react-icon-small.png';

const Navbar = () => {
  return (
    <header id="navbar">
      <div id="logo">
        <img src={logo} alt="react logo" />
        <h3>ReactFacts</h3>
      </div>
      <div id="extra-title">
        <h4>React Course - Project 1</h4>
      </div>
    </header>
  )
};

export default Navbar;