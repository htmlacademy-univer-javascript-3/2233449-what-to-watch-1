class MyListButtonProps {
  length: number | undefined;
}

export function MyListButton(props:MyListButtonProps) {
  return (
    <button className='btn btn--list film-card__button' type='button'>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref='#add'/>
      </svg>
      <span>My list</span>
      <span className='film-card__count'>{props.length}</span>
    </button>
  );
}
