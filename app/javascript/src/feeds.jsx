// feeds.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from './fetchHelper';

const Feeds = () => (
  <>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <span id="user-icon">User</span>
            </a>
            <ul className="dropdown-menu row" role="menu">
              <li>
                <a href="#" className="username">
                  User
                </a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#">Lists</a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Keyboard shortcuts</a>
              </li>
              <li role="presentation" className="divider" />
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a id="log-out" href="#">
                  Log out
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="search-bar col-xs-3 nav navbar-right">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button className="btn btn-default search-btn" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div className="main container">
      <div className="row">
        <div className="col-xs-3 profile-trends">
          <div className="profileCard col-xs-12">
            <div className="profileCard-content">
              <div className="user-field col-xs-12">
                <a className="username" href="#">
                  User
                </a>
                <br />
                <a className="screenName" href="#">
                  @User
                </a>
              </div>
              <div className="user-stats">
                <div className="col-xs-3">
                  <a href="">
                    <span>
                      Tweets
                      <br />
                    </span>
                    <span className="user-stats-tweets">10</span>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a href="">
                    <span>
                      Following
                      <br />
                    </span>
                    <span className="user-stats-following">0</span>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a href="">
                    <span>
                      Followers
                      <br />
                    </span>
                    <span className="user-stats-followers">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="trends col-xs-12">
            <div className="col-xs-12">
              <div className="trends-header">
                <span>Trends</span>
                <span> · </span>
                <small>
                  <a href="">Change</a>
                </small>
              </div>
              <ul className="trends-list">
                <li>
                  <a href="#">#Hongkong</a>
                </li>
                <li>
                  <a href="#">#Ruby</a>
                </li>
                <li>
                  <a href="#">#foobarbaz</a>
                </li>
                <li>
                  <a href="#">#rails</a>
                </li>
                <li>
                  <a href="#">#API</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-6 feed-box">
          <div className="col-xs-12 post-tweet-box">
            <textarea
              type="text"
              className="form-control post-input"
              rows={3}
              placeholder="What's happening?"
              defaultValue={""}
            />
            <div className="pull-right">
              <label id="upload-image-btn" htmlFor="image-select">
                Upload image
              </label>
              <img
                id="image-preview"
                src=""
                alt="image preview"
                style={{ display: "none" }}
              />
              <input
                type="file"
                id="image-select"
                name="image"
                accept="image/*"
              />
              <span className="post-char-counter">140</span>
              <button className="btn btn-primary" disabled="" id="post-tweet-btn">
                Tweet
              </button>
            </div>
          </div>
          <div className="feed">
            <div className="tweet col-xs-12">
              <a className="tweet-username" href="#">
                User
              </a>
              <a className="tweet-screenName" href="#">
                @User
              </a>
              <p>This is an amazing tweet</p>
              <a className="delete-tweet" href="#">
                Delete
              </a>
            </div>
            <div className="tweet col-xs-12">
              <a className="tweet-username" href="#">
                User
              </a>
              <a className="tweet-screenName" href="#">
                @User
              </a>
              <p>This is an amazing tweet</p>
            </div>
            <div className="tweet col-xs-12">
              <a className="tweet-username" href="#">
                User
              </a>
              <a className="tweet-screenName" href="#">
                @User
              </a>
              <p>This is an amazing tweet</p>
            </div>
          </div>
        </div>
        <div className="col-xs-3 follow-suggest"></div>
      </div>
    </div>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})
