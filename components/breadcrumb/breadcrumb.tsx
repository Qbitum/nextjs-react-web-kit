import type { ReactNode } from 'react';
export type BreadcrumbProps = {
  children?: ReactNode;
};

export function BreadcrumbWgt({ children }: BreadcrumbProps) {
  return (
    <div>
      <BreadcrumbWgt aria-label="Default breadcrumb example">
      <BreadcrumbWgt >
        Home
        {children}
      </BreadcrumbWgt>
      <BreadcrumbWgt >Projects</BreadcrumbWgt>
      <BreadcrumbWgt>Flowbite React</BreadcrumbWgt>
    </BreadcrumbWgt>
    </div>
  );
}
