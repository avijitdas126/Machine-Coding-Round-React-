import { useRef, useState } from 'react';
import data from '../assets/details.json';

const Course = () => {
  const [dat, setDat] = useState(data);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedItemIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const draggedItemIndex = e.dataTransfer.getData("draggedItemIndex");
    const newList = [...dat.list];
    const draggedItem = newList.splice(draggedItemIndex, 1)[0];
    newList.splice(dropIndex, 0, draggedItem);
    setDat({ ...dat, list: newList });
  };

  return (
    <>
      <div className='cards'>
        <h1 className='cardsh1'>Manage Bundle</h1>
        <h4 className='cardsh4'>Change orders of the products based on priority</h4>

        <div>
          <table className='lists'>
            {dat.list.map((elem, index) => {
              return (
                <Card
                  key={index}
                  props={elem}
                  index={index}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                />
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

const Card = ({ props, index, handleDragStart, handleDragOver, handleDrop }) => {
  const { id, title, thumb, Price, type } = props;
  const btn1 = useRef(0);
  const btn2 = useRef(0);
  const btn3 = useRef(0);
  const menu = useRef(0);

  const handleMenuToggle = () => {
    menu.current.classList.toggle('dn');
  };

  const handleBtnClick = () => {
    // Handle button click logic here
  };

  return (
    <>
      <tr
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, index)}
        className='card'
      >
        <td className="cardlogo">
          <img src="Vector.png" alt="drag" />
        </td>
        <tr className='content'>
        <td className="cardImage">
          <img src={thumb} alt="course" />
        </td>
        <td className="cardHeading">
          <h3>{title}</h3>
        </td>
        <td className="price">
          <h5>{Price}</h5>
        </td>
        <td className="type">
          {type}
        </td>
        <td>
          <div className="menu" onClick={handleMenuToggle}>
            <img src="Vector_1.png" alt="bar" />
            <div className="menuItem dn" ref={menu}>
              <ul>
                <li ref={btn1} id={id} onClick={handleBtnClick}>
                  <div className="icon">
                    <img src="Vector(0).png" alt="moveUp" width={12} height={12} />
                    <p>Move To Top</p>
                  </div>
                </li>
                <li ref={btn2} id={id} onClick={handleBtnClick}>
                  <div className="icon">
                    <img src="Vector (2).png" alt="moveDown" width={12} height={12} />
                    <p>Move To Bottom</p>
                  </div>
                </li>
                <li ref={btn3} id={id} onClick={handleBtnClick}>
                  <div className="icon">
                    <img src="Vector (1).png" alt="delete" width={12} height={12} />
                    <p className='del'>Remove</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </td>
        </tr>
      </tr>
    </>
  );
};

export default Course;
