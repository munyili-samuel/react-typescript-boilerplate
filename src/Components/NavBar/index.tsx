// react
import * as React from 'react';
import { connect } from 'react-redux';

// third party
import { Breadcrumb, Header, Item, Menu } from 'semantic-ui-react';

// others
import { NavBarProps, NavBarState } from './interfaces';
import './NavBar.scss';

export class NavBar extends React.PureComponent<NavBarProps, NavBarState> {
  state = {
    activeItem: 'menu',
  };

  render() {
    const { activeItem } = this.state;
    const { title } = this.props.title;

    let navTitle = undefined;
    if (typeof(title) === 'string') {
      navTitle = <Breadcrumb inverted as="h5">{title}</Breadcrumb>;
    } else {
      const breadCrumbs = [];

      title.map((item, index) => {
        if (title.indexOf(item) > 0) {
          breadCrumbs.push(<Breadcrumb.Divider key={index} inverted icon="right chevron"/>);
        }
        breadCrumbs.push(<Breadcrumb.Section key={index} inverted as="h5" size="medium">{item}</Breadcrumb.Section>);
      });
      navTitle = [];
      navTitle.push(<Breadcrumb>{breadCrumbs}</Breadcrumb>);
    }
    return (
      <Menu inverted>
        <Header inverted as="h5" attached="top" textAlign="center" size="huge">{navTitle}</Header>
        <Menu.Menu position="right">
          <Menu.Item
            className="logout-btn"
            name="logout"
            active={activeItem === 'logout'}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
});

export default connect(mapStateToProps)(NavBar);
