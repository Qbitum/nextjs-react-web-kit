// import React from 'react';
// import { render } from '@testing-library/react';
// import { BasicFilterComponent } from './filter-component.composition';

// it('should render with the correct text', () => {
//   const { getByText } = render(<BasicFilterComponent />);
//   const rendered = getByText('hello world!');
//   expect(rendered).toBeTruthy();
// });

import { render } from "@testing-library/react";
// import { BasicFilterComponent } from './filter-component.composition';
import { FilterComponent, Filters } from "./filter-component";

// it('should render with the correct text', () => {
//   const { getByText } = render(<BasicFilterComponent />);
//   const rendered = getByText('hello world!');
//   expect(rendered).toBeTruthy();
// });

test("should render the component with initial values", () => {
  const { getByLabelText, getByText } = render(
    <FilterComponent
      status={false}
      search={function(values: Filters): void {
        throw new Error("Function not implemented.");
      }}
      loading={false}
      date={""}
      onSelectJobStatus={function(status: string): void {
        throw new Error("Function not implemented.");
      }}
      onSelectDate={function(date: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  getByLabelText("jobNumber");
  getByLabelText("Filter by Status");
  getByText("Filter by added date");
  getByText("Search");
});
