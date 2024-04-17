import { AiOutlineHome } from 'react-icons/ai';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => {
  const sampleMenu = {
    testMenu: {
      id: 'dashboard',
      text: 'Dashboard',
      path: '/dashboard',
      icon: AiOutlineHome
    }
  }
  return (
    <Sidebar menu={sampleMenu} id='test-menu'></Sidebar>
  );
}
