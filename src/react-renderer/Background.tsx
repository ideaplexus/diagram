import * as React from 'react';
import * as styles from './style/Background';
import { BackgroundProps, Action } from '../types';
export const Background: React.SFC<BackgroundProps> = (props) => (
  <div
    ref={(ref) => {
      props.onRef(ref);
    }}
    className={styles.Background}
    onMouseDown={(e) => {
      if (e.button === 0) {
        props.switchAction(Action.Pan);
      }
    }}
    onMouseUp={(e) => {
      if (e.button === 0) {
        props.reset();
      }
    }}
    onMouseEnter={(e) => {
      props.switchAction(Action.Nothing);
    }}
    onMouseLeave={(e) => {
      props.switchAction(Action.Left);
    }}
    style={{
      cursor: 'none'
    }}
  >
    {props.children}
  </div>
);
