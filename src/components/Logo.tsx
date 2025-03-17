import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="https://sgcondonewlaunch.com/wp-content/uploads/2024/09/croped1.png"
        alt="RenoHaven Logo"
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;