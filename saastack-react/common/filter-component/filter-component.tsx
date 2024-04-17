import { Datepicker, Button, Select, TextInput } from "@qbitum/react-flat-ui";
import React, { useState } from "react";
import { Spinner } from "flowbite-react";
import { useFormik } from "formik";
import { SearchRequestJobStatusEnum } from "@/services";

export type FilterComponentProps = {
  status: boolean;
  search: (values: Filters) => void;
  loading: boolean;
  date: string;
  onSelectJobStatus: (status: string) => void;
  onSelectDate: (date: number) => void;
};

export interface Filters {
  jobNumber: string;
  jobStatus: SearchRequestJobStatusEnum;
  addedDate: number;
}

export function FilterComponent({
  status,
  search,
  loading,
  onSelectJobStatus,
  onSelectDate,
}: FilterComponentProps) {
  const formik = useFormik({
    initialValues: {
      jobNumber: "",
      jobStatus: SearchRequestJobStatusEnum.All,
      addedDate: 0,
    },
    onSubmit: (values) => {},
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
    }
  };

  const handleDateChange = (date: Date) => {
    const offset = date.getTimezoneOffset();

    const correctedDate = new Date(date.getTime() - offset * 60 * 1000); //time display in date picker

    const formattedDate = correctedDate.toISOString().slice(0, 10);
    setSelectedDate(correctedDate.toString());
    formik.setFieldValue("addedDate", formattedDate);

    onSelectDate(correctedDate.getTime()); // Pass the selected date in milliseconds
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [showClearSearchButton, setShowClearSearchButton] = useState(false);
  // const [noResults, setNoResults] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-6 sm:grid-cols-1 gap-4 lg:h-14 md:h-auto sm:h-auto p-2 mb-4 sm:bg-sky-100 md:bg-sky-100 lg:bg-sky-100 rounded-lg">
        <TextInput
          id="jobNumber"
          data-test-id="jl_jn_filter"
          value={formik.values.jobNumber}
          onChange={formik.handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Search by artwork reference"
        ></TextInput>

        {status && (
          <Select
            data-test-id="jl_status_filter"
            id="jobStatus"
            value={formik.values.jobStatus}
            onChange={(e) => {
              formik.handleChange(e);
              onSelectJobStatus(e.target.value as SearchRequestJobStatusEnum);
            }}
            color="gray"
          >
            <option value={SearchRequestJobStatusEnum.All}>
              Filter by Status
            </option>
            <option value={SearchRequestJobStatusEnum.PendingApproval}>
              Pending Approval
            </option>
            <option value={SearchRequestJobStatusEnum.Processing}>
              Processing
            </option>
            <option value={SearchRequestJobStatusEnum.ProcessFailed}>
              Process Failed
            </option>
            <option value={SearchRequestJobStatusEnum.ReadyToProcess}>
              Ready to Process
            </option>
          </Select>
        )}

        <Datepicker
          data-test-id="jl_dr_filter"
          id="dateRange"
          onChange={formik.handleChange}
          onSelectedDateChanged={handleDateChange}
          value={
            formik.values.addedDate === 0
              ? "Filter by added date"
              : formik.values.addedDate
          }
        ></Datepicker>

        <div className="flex items-center">
          <div className="basis-1/5 m-1 mr-8">
            <Button
              size="sm"
              outline
              clear
              color="secondary"
              onClick={() => {
                search(formik.values);
                setShowClearSearchButton(true);
              }}
            >
              Search
            </Button>
          </div>

          {showClearSearchButton && (
            <Button
              size="sm"
              clear
              outline
              color="secondary"
              className="m-1 ms-px"
              onClick={() => {
                formik.resetForm();
                search(formik.initialValues);
                setShowClearSearchButton(false);
              }}
            >
              Clear
            </Button>
          )}

          {loading ? (
            <div className="m-1">
              <Spinner />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
