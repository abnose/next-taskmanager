import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toggleMenu } from "../redux/menu/slice";

const BaseNavbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div id="nav-bar">
      <input
        onClick={(e) => {
          dispatch(toggleMenu("payload test"));
          console.log("test", e.target);
        }}
        id="nav-toggle"
        type="checkbox"
      />
      <div id="nav-header">
        <label for="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <a id="nav-title" href="https://codepen.io" target="_blank">
          C<i className="fab fa-codepen"></i>DEPEN
        </a>

        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <AppsIcon className="fas fa-palette"></AppsIcon>
          <span>خانه</span>
        </div>
        <div className="nav-button">
          <AppsIcon className="fas fa-images"></AppsIcon>
          <span>Assets</span>
        </div>
        <div className="nav-button">
          <AppsIcon className="fas fa-thumbtack"></AppsIcon>
          <span>Pinned Items</span>
        </div>
        <hr />
        <div className="nav-button">
          <AppsIcon className="fas fa-heart"></AppsIcon>
          <span>Following</span>
        </div>
        <div className="nav-button">
          <AppsIcon className="fas fa-chart-line"></AppsIcon>
          <span>Trending</span>
        </div>
        <div className="nav-button">
          <AppsIcon className="fas fa-fire"></AppsIcon>
          <span>Challenges</span>
        </div>
        <div className="nav-button">
          <AppsIcon className="fas fa-magic"></AppsIcon>
          <span>Spark</span>
        </div>
        <hr />
        <div className="nav-button">
          <AppsIcon className="fas fa-gem"></AppsIcon>
          <span>Codepen Pro</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
            >
              عرفان کریمی
            </a>
            <span id="nav-footer-subtitle">ادمین</span>
          </div>
          <label for="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaseNavbar;
