export const db = {
  getAgents: (): any[] => [],
  getAgent: (id: number): any => null,
  addAgent: (agent: any) => {},
  getExecutions: (filter?: any): any[] => [],
  addExecution: (execution: any) => {},
  getPayments: (filter?: any): any[] => [],
  addPayment: (payment: any) => {},
  updateAgentMetrics: (id: number, success: boolean) => {},
};
