import React from "react";

const Tabs = ({ selectedTab, setSelectedTab, children, TabButtonWrap, TabButton }) => {
  const tabs = children.map((c, i) => {
    const handleClick = () => setSelectedTab(i);

    return (
      <TabButton key={i} selected={i === selectedTab} onClick={handleClick}>
        <span>{c.props.title}</span>
      </TabButton>
    );
  });

  return (
    <>
      <TabButtonWrap>{tabs}</TabButtonWrap>
      {children[selectedTab]}
    </>
  );
};

export default Tabs;
