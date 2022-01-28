function Navbar({ navigateToPage }) {
  return (
    <nav>
      <button onClick={() => navigateToPage('planet')}>Planet</button>
      <button onClick={() => navigateToPage('people')}>People</button>
    </nav>
  )
}

export default Navbar;
