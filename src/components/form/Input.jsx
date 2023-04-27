import './input.styles.scss';

export default function Input({ label, ...otherProps }) {
  return (
    <div className='form__group'>
      <input className='form__input' {...otherProps} />

      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form__label`} htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
}
