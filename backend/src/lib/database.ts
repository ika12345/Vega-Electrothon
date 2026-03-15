// In-memory database for demo purposes
// Data persists as long as the server is running

const agents: any[] = [];
const executions: any[] = [];
const payments: any[] = [];

export const db = {
  getAgents: (): any[] => agents,
  getAgent: (id: number): any => agents.find((a) => a.id === id) || null,
  addAgent: (agent: any) => {
    agents.push(agent);
    console.log(`[DB] Agent added: ${agent.name} (ID: ${agent.id}). Total agents: ${agents.length}`);
  },
  getExecutions: (filter?: any): any[] => {
    if (!filter) return executions;
    return executions.filter((e) => {
      if (filter.agentId && e.agentId !== filter.agentId) return false;
      if (filter.userId && e.userId !== filter.userId) return false;
      return true;
    });
  },
  addExecution: (execution: any) => {
    executions.push(execution);
    console.log(`[DB] Execution logged for agent ${execution.agentName}`);
  },
  getPayments: (filter?: any): any[] => {
    if (!filter) return payments;
    return payments.filter((p) => {
      if (filter.agentId && p.agentId !== filter.agentId) return false;
      return true;
    });
  },
  addPayment: (payment: any) => {
    payments.push(payment);
  },
  updateAgentMetrics: (id: number, success: boolean) => {
    const agent = agents.find((a) => a.id === id);
    if (agent) {
      agent.totalExecutions = (agent.totalExecutions || 0) + 1;
      if (success) agent.successfulExecutions = (agent.successfulExecutions || 0) + 1;
    }
  },
};
