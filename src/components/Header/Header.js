import logo from './../../assets/img/logo.png';
import getCurrentDate from './../../utils/getCurrentDate';
import GetCurrentTime from './../../utils/getCurrentTime';

const Header = () => {
  return (
    <header className="App-header">
      <div className="date-container flex-between">
        <div className="date">{getCurrentDate()}</div>
        <div className="hours">{GetCurrentTime()}</div>
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="text-container">
        <h1 className="app-title">Je gère ma conso électrique facilement</h1>
        <div className="underline"></div>
      </div>
    </header>
  );
};

export default Header;
