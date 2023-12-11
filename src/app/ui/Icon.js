export default function Icon({ id, size = 24, className = "" }) {
  return (
    <svg className={`fill-current ${className}`} width={size} height={size}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
