import React, { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Button from "./Button";

import "./Project.scss";

type ProjectProps = {
  direction: string; // Should be either "left" or "right"
  title: string;
  problem?: string;
  solution?: string;
  imgPath: string;
  childrenPhotos?: string[];
  childrenDescription?: string[];
  tags?: string[];
};

function Project(props: ProjectProps) {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

  return (
    <>
      {props.direction === "left" &&
        <div className="galleryRowLeft">
          <div className="photoWrapper">
            <div className="photo"><img src={props.imgPath} alt={props.title} /></div>
          </div>
          <div className="descriptionWrapper">
            <div className="description">
              <h1>{props.title}</h1>
              <p className="problem"> <span>Problem: </span> {props.problem} </p>
              <p className="solution"> <span>Solution:</span> {props.solution} </p>
              <Button onClick={toggleDrawer} title="details" />
            </div>
          </div>
        </div>}

      {props.direction === "right" &&
        <div className="galleryRowRight">
          <div className="descriptionWrapper">
            <div className="description">
              <h1>{props.title}</h1>
              <p className="problem"> <span>Problem: </span> {props.problem} </p>
              <p className="solution"> <span>Solution:</span> {props.problem} </p>
              <Button onClick={toggleDrawer} title="details" />
            </div>
          </div>
          <div className="photoWrapper">
            <div className="photo"><img src={props.imgPath} alt={props.title} /></div>
          </div>
        </div>}

      <Drawer
        className='drawer'
        anchor={"right"}
        open={drawerOpened}
        onClose={toggleDrawer}
        transitionDuration={{ enter: 800, exit: 300 }}
      >
        <>
          <div className="drawerHeader">
            <ArrowForwardIcon className='icon' onClick={toggleDrawer} />
            <div className="tags">
              {Array.isArray(props.tags) && props.tags.map((tag, index) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {Array.isArray(props.childrenPhotos) && props.childrenPhotos.map((photo, index) => (
            <React.Fragment>
              <img src={photo} alt={props.title} />
              <p className="description">{props.childrenDescription && props.childrenDescription[index]}</p>
            </React.Fragment>
          ))}
          {props.childrenPhotos?.length === 0 &&
            <>
              <p className="description" >There is nothing to display :(</p>
              <p className="description">Let your imagination be fulfilled. </p>
            </>}
        </>
      </Drawer>
    </>
  )
}


export default Project;