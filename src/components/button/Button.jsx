import './button.styles.scss';

/*
  default button
  inverted button
  google sign in button
*/

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}
