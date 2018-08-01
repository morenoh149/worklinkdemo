interface IMeWorker {
  name: string;
  email: string;
  registered: string;
  phone: string;
  cell: string;
  title: string;
}
interface IClient {
  name: string;
  netId: string;
  phoneNumber: string;
  email: string;
}

interface IHistory {
  event: IEvent;
}

interface IEvent {
  time: string;
  description: string;
}
export interface IWorkOrder {
  status: string;
  id: string;
  serviceLocation: string;
  assignedTo: string;
  shop: string;
  workCode: string;
  clientSchedule: string;
  workDescription: string;
  clientDescription: string;
  notes: string;
  client: IClient;
  history: IHistory;
}

type AWorkOrder = Array<IWorkOrder>;

export const meWorker: IMeWorker = {
  name: 'Jennie Johnson',
  email: 'jj@nyu.edu',
  registered: '2010-08-09 13:37:38',
  phone: '(589)-070-0928',
  cell: '(110)-065-6280',
  title: 'super'
};

export const workOrders: AWorkOrder = [
  {
    status: 'unassigned',
    id: '18-000-0987',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0988',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0989',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0990',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0991',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0992',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'assigned',
    id: '18-000-0993',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'assigned',
    id: '18-000-0994',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  },
  {
    status: 'unassigned',
    id: '18-000-0995',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: '',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: {
      event: {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    }
  }
];
