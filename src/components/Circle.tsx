import styles from './Circle.module.css';

export default function Circle(props){
  const {x, y, color} = props;
  console.log('X:', x, 'Y:', y);
  const style = {
    top: y + 'px',
    left: x + 'px',  
    backgroundColor: `${color}`,
    width: `40px`,
    height: `40px`,
    positon: 'absolute',
    borderRadius: `50%`
  }
  console.log(style);
  return (
    <div style={style} className={styles.circle}></div>
  )
}