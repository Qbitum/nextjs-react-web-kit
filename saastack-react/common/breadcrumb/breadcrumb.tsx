import type { ReactNode } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@qbitum/react-flat-ui';
export type BreadcrumbProps = {
  children?: ReactNode;
};

export function BreadcrumbWgt({ children }: BreadcrumbProps) {
  return (
    <div>
      <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="#">
        Home
        {children}
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite React</BreadcrumbItem>
    </Breadcrumb>
    </div>
  );
}
