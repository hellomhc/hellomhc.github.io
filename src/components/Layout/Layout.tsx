import React from 'react';

interface Meta {
  author: string;
  title: string;
  description: string;
  lang: 'en' | 'ko' | 'jp';
}

interface LayoutProps {
  children: React.ReactNode;
  meta: Meta;
}

const Layout: React.FC<LayoutProps> = props => {
  return <div>{props.children}</div>;
};

export default Layout;
