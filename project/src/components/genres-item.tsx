type GenresProps = {
  name: string,
  isActive: boolean
}

function GenresItem(props: GenresProps) {
  return (
    <li className={props.isActive ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a href='#' className='catalog__genres-link'>{props.name}</a>
    </li>
  );
}

export default GenresItem;
