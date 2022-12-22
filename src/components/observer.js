import React, {useRef, useState, useEffect} from "react";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";
import OverflowMenu from "./overflow-menu";

const useIntersectionStyles = makeStyles(() => ({
    visible: {
      order: 0,
      visibility: "visible",
      opacity: 1
    },
    inVisible: {
      order: 100,
      visibility: "hidden",
      pointerEvents: "none"
    },
    toolbarWrapper: {
      display: "flex",
      overflow: "hidden",
      padding: "0 20px",
      width: "75%"
    },
    overflowStyle: {
      order: 99,
      position: "sticky",
      right: "0",
      backgroundColor: "white"
    }
}));

export default function IntersectionObserverWrap({children}) {

const classes = useIntersectionStyles();
const [visibilityMap, setVisibilityMap] = useState({});
const navRef = useRef(null);
const handleIntersection = (entries) => {
const updateEntries ={};
    entries.forEach((entry) => {
        const targetid = entry.target.dataset.targetid;
        console.log(entry, targetid);
        if (entry.isIntersecting) {
            updateEntries[targetid] =true;
        } else {
            updateEntries[targetid] = false;
        }
    });

    setVisibilityMap((prev) => ({
        ...prev,
        ...updateEntries
    }));
}

useEffect(() => {
    const observer = new IntersectionObserver(
        handleIntersection, 
        {
            root: navRef.current,
            threshold: 1
        }
    );
    Array.from(navRef.current.children).forEach((item) => {
        if (item.dataset.targetid) {
            observer.observe(item)
        }
    });
    return () => observer.disconnect();
}, []);



return(
    <div className={classes.toolbarWrapper} ref={navRef}>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        className: classnames(child.props.className, {
          [classes.visible]: !!visibilityMap[child.props["data-targetid"]],
          [classes.inVisible]: !visibilityMap[child.props["data-targetid"]]
        })
      });
    })}
    <OverflowMenu
      visibilityMap={visibilityMap}
      className={classes.overflowStyle}
    >
      {children}
    </OverflowMenu>
  </div>
);

}