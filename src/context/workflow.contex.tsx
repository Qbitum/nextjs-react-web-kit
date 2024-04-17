import { FC, ReactNode, createContext, useState, useMemo } from "react";

export interface WorkflowTabProps {
  config: Partial<TabConfig[]>
}
export interface TabStateObj {
  pages: number;
  pageSize: number;
  currentPage: number;
}

export interface TabConfig {
  // name: string;
  jobProgressStatus: string;
  displayText: string;
  headers: THeadConfig[];
  actions: string[];
}

export interface THeadConfig {
  header: string,
  accessor: string
}

export const WorkflowContext = createContext<WorkflowTabProps>({} as WorkflowTabProps);

interface WfContextProviderProps {
  children: ReactNode;
}

/* todo: get this confiiguration from masterdata API, this should be change accordng to the client */
const getConfigs = () => {

  return [
    {
    //in mock api accesor of jobProgressStatus is status & PO is PO
    jobProgressStatus: 'IN-PROGRESS', displayText: 'IN PROGRESS', headers: [{ header: "ADDED DATE", accessor: "addedDate" },
    { header: "ARTWORK REFERENCE", accessor: "jobNumber" }, { header: "PO", accessor: "po" },
    { header: "BUYER", accessor: "buyer" },
    { header: "STYLE", accessor: "style" },
    { header: "CATEGORY", accessor: "labelCategory" },
    { header: "STATUS", accessor: "jobStatus" },
    ],
    actions: []
  }, 
  {
    jobProgressStatus: 'APPROVED', displayText: 'APPROVED', headers: [{ header: "ADDED DATE", accessor: "addedDate" },
    { header: "ARTWORK REFERENCE", accessor: "jobNumber" }, { header: "PO", accessor: "po" },
    { header: "BUYER", accessor: "buyer" },
    { header: "STYLE", accessor: "style" },
    { header: "CATEGORY", accessor: "labelCategory" }
    ],
    actions: []
  }, 
  {
    jobProgressStatus: 'REJECTED', displayText: 'REJECTED', headers: [{ header: "ADDED DATE", accessor: "addedDate" },
    { header: "ARTWORK REFERENCE", accessor: "jobNumber" }, { header: "PO", accessor: "po" },
    { header: "BUYER", accessor: "buyer" },
    { header: "STYLE", accessor: "style" },
    { header: "CATEGORY", accessor: "labelCategory" }
    ],
    actions: []
  }
];
}

export const WorkflowContextProvider: FC<WfContextProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<Partial<TabConfig[]>>(getConfigs);


  const value = useMemo(
    () => ({
      config
    }),
    [config],
  );
  return <WorkflowContext.Provider value={value}>{children}</WorkflowContext.Provider>;
};

export default WorkflowContext;


const searchCriteria = [{ id: 0, text: "Philosopher’s Path", dateRange: true }];
