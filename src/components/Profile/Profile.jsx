// import css from "./Profile.module.css";
import PropTypes from "prop-types";

 export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<div className={CSS.profile}>
    <div className={CSS.description}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className={CSS.avatar}
      />
      <p className={CSS.name}>{username}</p>
      <p className={CSS.tag}>@{tag}</p>
      <p className={CSS.location}>{location}</p>
    </div>
  
    <ul className={CSS.stats}>
      <li>
        <span className={CSS.label}>Followers{stats.Followers}</span>
        <span className={CSS.quantity}>1000</span>
      </li>
      <li>
        <span className={CSS.label}>Views{stats.Views}</span>
        <span className={CSS.quantity}>2000</span>
      </li>
      <li>
        <span className={CSS.label}>Likes{stats.Likes}</span>
        <span className={CSS.quantity}>3000</span>
      </li>
    </ul>
  </div>);
};

    Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.objectOf(PropTypes.number).isRequired, 
    };
