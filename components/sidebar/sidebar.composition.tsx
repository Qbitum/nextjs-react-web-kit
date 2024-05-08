import { AiOutlineHome } from 'react-icons/ai';
import { SidebarComponent } from './sidebar';

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
    <SidebarComponent menu={sampleMenu} id='test-menu'></SidebarComponent>

  );
}
