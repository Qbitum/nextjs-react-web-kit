import { AddJobRequest, DataItem, Job, Resource } from "@/services";
import {
  createContext,
  FC,
  ReactNode, useMemo,
  useState
} from "react";
import { toast } from "react-toastify";



export interface TrainingContextProps {
  jobRequest: AddJobRequest;
  resources: Resource[];
  job: Job;
  masterData: MSData;
  setJobRequest: (job: AddJobRequest) => void;
  setResources: (r: Resource[]) => void;
  setJob: (j: Job) => void;
  showToast: (message: string, type: string) => void;
}

export interface MSData {
  buyer: DataItem[],
  labelCategory: DataItem[]
}

// export interface MSDataRes {
//   name: string,
//   id: string,
//   icon: string
// }

export const TrainingContext = createContext<TrainingContextProps>(
  {} as TrainingContextProps
);

interface TrainingContextProviderProps {
  children: ReactNode;
}

function getInitialJob() {
  let emptyTraining = (): AddJobRequest => ({
    jobNumber: '',
    resources: [],
    po: '',
    buyer: '',
    customerStyle: '',
    userId: ''
  });
  return emptyTraining;
}

export const TrainingContextProvider: FC<TrainingContextProviderProps> = ({
  children,
}) => {
  const [jobRequest, setJobRequest] = useState(getInitialJob());
  const [resources, setResources] = useState<Resource[]>([]);
  const [job, setJob] = useState<Job>({}); // to use accross the wizard
  const [masterData] = useState({} as MSData);
  // const [job, setJob] = useState<Job>({ jobId: '', jobNumber: 'ertyui', customerStyle: 'GAP-56', buyer: 'NIKE', po: 'TY9006', labelCategory: 'care-label' }); // to use accross the wizard
  const showToast = (msg: string, type: string) => {
    if (type == 'e') {
      toast.error(msg);
    }
    if (type == 's') {
      toast.success(msg);
    }
    if (type == 'w') {
      toast.warn(msg);
    }
  }
  const values: TrainingContextProps = useMemo(
    () => ({
      jobRequest,
      resources,
      job,
      masterData,
      setJobRequest,
      setResources,
      setJob,
      showToast,
    }),
    [jobRequest, resources, job, masterData]
  );

  return (
    <TrainingContext.Provider value={values}>
      {children}
    </TrainingContext.Provider>
  );
};
