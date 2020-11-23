import React from 'react';
// Styles
import styles from './ColorBtn.module.scss';
// Util
import classnames from 'classnames';

const ColorBtn = ({
  type,
  color,
  myProp,
  onClick,
  david,
}) => {
  david(color);
  return (
    <div
      className={classnames(
        styles.button,
        {
          [styles.type_a]: type === 'a',
          [styles.type_b]: type === 'b',
          [styles.type_c]: type === 'c',
        },
      )}
      style={{ backgroundColor: color }}
      onClick={() => onClick()}
    >
      {myProp.a}
    </div>
  );
};

export default ColorBtn;
