import LogoImage from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div>
      <a href="/">
				<img className="h-9" src={LogoImage} alt="Weather App" />
			</a>
    </div>
  );
};

export default Logo;