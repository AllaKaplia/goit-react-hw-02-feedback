import React from 'react';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.box}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;