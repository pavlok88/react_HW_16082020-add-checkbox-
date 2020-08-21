import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  deleteHandler = () => {
    this.props.deleteUser(this.props.cell);
  };
  checkHandler = () => {
    this.props.checkUser(this.props.cell);
  };

  render() {
    const {
      name,
      location,
      phone,
      email,
      cell,
      picture: { medium: imgSrc },
      isChecked,
    } = this.props;

    return (
      <label>
        <div
          className={`${styles.userItemContainer} ${
            isChecked ? styles.checked : ''
          }`}
        >
          <img className={styles.userAvatar} src={imgSrc} />
          <div>{`${name.first} ${name.last}`}</div>
          <div>{`Telephone number: ${phone}`}</div>
          <div>{`${location.country}, ${location.city}`}</div>
          <input
            type="checkbox"
            name="check"
            checked={isChecked}
            onChange={this.checkHandler}
          />
          <button onClick={this.deleteHandler}>DELETE</button>
        </div>
      </label>
    );
  }
}
