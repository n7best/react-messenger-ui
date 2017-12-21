/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                'doc1.html'
              }>
              Getting Started (or other categories)
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                'doc2.html'
              }>
              Guides (or other categories)
            </a>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                'doc3.html'
              }>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discordapp.com/">Project Chat</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/n7best/react-messenger-ui">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/n7best/react-messenger-ui/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          Copyright &copy; {currentYear} React Messenger UI
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
