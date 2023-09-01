import "./Button.scss";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <a
      className="button"
      onClick={handleClick}
    >
      <span>{props.title}</span>
      <div className="icon ">
        <i className="fa fa-remove">{"->"}</i>
      </div>
    </a>
  )
}
export default Button;