import { Menu } from 'antd';
import { DashboardNavList } from '../hooks/paths';
import { useContext } from 'react';
import { Context } from '../context/Context';

const NavbarCarusel = () => {
  const {showNavbar} = useContext(Context)
  return (
    <div style={{ width: "100%" }}>
      <Menu
      className='!text-[20px] !mt-[10px] flex flex-col gap-[3px]'
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={showNavbar}
        items={DashboardNavList}
      />
    </div>
  );
};

export default NavbarCarusel;